// context/cartContext.tsx
import React, { createContext, useState } from "react";

interface CartItem {
  productId: string;
  productName: string;
  price: number;
  quantity: number;
}

interface CartContextType {
  cartItems: CartItem[];
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, qty: number) => void;
  getTotal: () => number;
}

export const CartContext = createContext<CartContextType>({
  cartItems: [],
  removeFromCart: () => {},
  updateQuantity: () => {},
  getTotal: () => 0,
});

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const removeFromCart = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.productId !== id));
  };

  const updateQuantity = (id: string, qty: number) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.productId === id ? { ...item, quantity: qty } : item
      )
    );
  };

  const getTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <CartContext.Provider value={{ cartItems, removeFromCart, updateQuantity, getTotal }}>
      {children}
    </CartContext.Provider>
  );
};
