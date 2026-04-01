import React from "react";
import { IonRow, IonCol } from "@ionic/react";
import ProductCard from "../product-card";
import { useCart } from "../../context/cartContext"; // Import your cart context
import "./ProductsGrid.css";

interface ProductProps {
  list: any[];
  tab?: "new" | "featured"; // Optional prop to indicate which tab's products are being displayed
}

const Products: React.FC<ProductProps> = ({ list, tab }) => {
  // Pull the addToCart function from your context
  const { addToCart } = useCart();

  const handleAddToCart = (id: string) => {
    // 1. Find the specific product from the list that was clicked
    const product = list.find((item) => item.id === id);
    if (!product) return;

    // 2. Identify the default variant (if variants exist)
    const defaultVariant =
      product.variants && product.variants.length > 0
        ? product.variants[0]
        : null;

    // 3. Calculate the correct price to send to the cart
    const basePrice =
      defaultVariant?.price || product.salePrice || product.purchasePrice || 0;
    let finalPrice = basePrice;

    if (defaultVariant && defaultVariant.discValue) {
      if (defaultVariant.discType === "flat") {
        finalPrice = basePrice - defaultVariant.discValue;
      } else if (
        defaultVariant.discType === "percentage" ||
        defaultVariant.discType === "percent"
      ) {
        finalPrice = basePrice - (basePrice * defaultVariant.discValue) / 100;
      }
    }

    // 4. Send the perfectly formatted payload to your CartProvider
    addToCart({
      id: defaultVariant?.id || product.id,
      variantId: defaultVariant?.id || product.id, // Required by your context mutation
      productName: product.productName,
      brandName: product.brandName || product.categoryName || "Premium",
      quantity: 1, // Defaulting to 1 from the grid view
      price: finalPrice,
      discType: defaultVariant?.discType,
      discValue: defaultVariant?.discValue,
      displayImage: product.primaryImage || "/no-image.png",
    });
  };

  return (
    <IonRow className="ion-no-padding pressmart-grid">
      {list.map((item) => (
        <IonCol
          key={item.id}
          size="6" // 2 per row on mobile
          sizeMd="3" // 3 per row on tablet
          className="ion-no-padding grid-col-5" // Custom 5-col on desktop
        >
          <ProductCard
            onAddToCart={handleAddToCart} // Pass the fully wired handler
            {...item}
            tabMode={tab} // Pass the tab mode to the product card
          />
        </IonCol>
      ))}
    </IonRow>
  );
};

export default Products;
