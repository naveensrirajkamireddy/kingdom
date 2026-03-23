import React, { createContext, useState, useContext, ReactNode } from "react";
import {
  useAddToCartMutation,
  useGetCartCountQuery,
  useRemoveFromCartMutation,
} from "../graphql/generated";
import { useUser } from "./userContext";
import { useHistory } from "react-router";
import { raiseSuccessAlert } from "../utils";

// Define the shape of items coming from/going to the backend
interface CartItem {
  id?: string;
  variantId: string;
  productName: string;
  brandName?: string;
  displayImage: string;
  quantity: number;
  price: number;
  discType?: string;
  discValue?: number;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (productData: any) => Promise<void>;
  removeFromCart: (cartItem: any) => Promise<void>;
  updateQuantity: (cartItem: any, newQty: number) => Promise<void>;
  clearCart: () => void;
  cartCount: number;
  getCartCount: () => Promise<void>;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const { user } = useUser();
  const customerId = user?.customerId ?? "";
  const history = useHistory();

  // GraphQL Hooks
  const [addToCartMutation] = useAddToCartMutation();
  const [removeCartItemMutation] = useRemoveFromCartMutation();
  const { data: cartCountData, refetch: refetchCartCount } =
    useGetCartCountQuery();

  const getCartCount = async () => {
    await refetchCartCount();
  };

  /**
   * ADDS OR UPDATES PRODUCT IN BAG
   */
  const addToCart = async (productData: any) => {
    if (customerId) {
      try {
        await addToCartMutation({
          variables: {
            input: {
              variantId: productData.id || productData.variantId,
              quantity: productData.quantity || 1,
              price: productData.price,
              discType: productData.discType,
              discValue: productData.discValue,
            },
          },
        });
        await getCartCount();
        raiseSuccessAlert("Added to bag successfully!");
      } catch (error: any) {
        console.error("Add to cart error:", error.message);
      }
    } else {
      history.push("/login");
    }
  };

  /**
   * UPDATES QUANTITY (Increments/Decrements)
   */
  const updateQuantity = async (cartItem: any, newQty: number) => {
    if (!customerId) {
      history.push("/login");
      return;
    }

    // If quantity is reduced to 0, remove the item
    if (newQty < 1) {
      await removeFromCart(cartItem);
      return;
    }

    try {
      await addToCartMutation({
        variables: {
          input: {
            variantId: cartItem.variantId,
            quantity: newQty,
            price: cartItem.price,
            discType: cartItem.discType,
            discValue: cartItem.discValue,
          },
        },
      });
      await getCartCount();
    } catch (error: any) {
      console.error("Update quantity error:", error.message);
    }
  };

  /**
   * REMOVES ENTIRE ITEM FROM BAG
   */
  const removeFromCart = async (cartItem: any) => {
    const variantId = cartItem.variantId || cartItem.id;

    if (customerId && variantId) {
      try {
        await removeCartItemMutation({
          variables: { variantId: variantId },
        });
        await getCartCount();
      } catch (error: any) {
        console.error("Remove from cart error:", error.message);
      }
    } else if (!customerId) {
      history.push("/login");
    }
  };

  /**
   * CLEARS LOCAL STATE
   */
  const clearCart = () => {
    if (customerId) {
      setCart([]);
      getCartCount();
      // Logic for clearCart backend mutation can be added here if needed
    } else {
      history.push("/login");
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartCount: cartCountData?.getCartCount ?? 0,
        getCartCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
