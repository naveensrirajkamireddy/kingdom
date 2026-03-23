import React from "react";
import "./ProductCard.css";
import { IonRouterLink, IonIcon } from "@ionic/react";
import { star, starHalf } from "ionicons/icons"; // Using Ionic icons for ratings

interface ProductCardProps {
  id: string;
  productName: string;
  primaryImage: string;
  brandName?: string; // Using this as the "Category" (e.g., Backpacks, Jackets)
  variants?: {
    id: string;
    price: number;
    discType: string;
    discValue: number;
    images: {
      id: number;
      imageUrl: string;
    }[];
  }[];
  onAddToCart?: (id: string) => void;
  tabMode?: "new" | "featured"; // Optional prop to indicate which tab's products are being displayed
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  productName,
  primaryImage,
  brandName = "Category",
  variants,
  onAddToCart,
  tabMode,
}) => {
  const handleAddToCartClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onAddToCart && onAddToCart(id);
  };

  const renderPricingAndBadges = () => {
    if (!variants || variants.length === 0) return null;

    const variant = variants[0];
    const basePrice = variant.price;
    let finalPrice = basePrice;
    let discountLabel = "";

    if (variant.discType === "flat") {
      finalPrice = basePrice - variant.discValue;
    } else if (variant.discType === "percentage") {
      finalPrice = basePrice - (basePrice * variant.discValue) / 100;
      discountLabel = `${variant.discValue}% OFF`;
    }

    const hasDiscount = finalPrice < basePrice;
    console.log(tabMode, "Tab Mode in ProductCard");
    return (
      <>
        {/* --- Image & Badges --- */}
        <div className="pm-image-container">
          <div className="pm-badges">
            {hasDiscount && (
              <span className="pm-badge badge-green">{discountLabel}</span>
            )}
            {/* Hardcoded Featured badge to match mockup - make dynamic as needed */}
            {tabMode && tabMode === "featured" ? (
              <span className="pm-badge badge-green">Featured</span>
            ) : tabMode === "new" ? (
              <span className="pm-badge badge-orange">New Arrival</span>
            ) : null}
          </div>
          <img
            src={primaryImage || "/no-image.png"}
            alt={productName}
            className="pm-product-image"
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = "/no-image.png";
            }}
          />
          {/* Add to Cart overlay button */}
          <div className="pm-action-overlay">
            <button className="pm-add-cart-btn" onClick={handleAddToCartClick}>
              Add to Cart
            </button>
          </div>
        </div>

        {/* --- Product Info --- */}
        <div className="pm-info-area">
          <span className="pm-category">{brandName}</span>
          <h5 className="pm-title">{productName}</h5>

          {/* Star Rating (Static placeholder to match mockup) */}
          <div className="pm-rating">
            <IonIcon icon={star} />
            <IonIcon icon={star} />
            <IonIcon icon={star} />
            <IonIcon icon={star} />
            <IonIcon icon={starHalf} />
            <span className="pm-rating-count">(1)</span>
          </div>

          {/* Pricing */}
          <div className="pm-price-row">
            <span className="pm-current-price">₹{finalPrice.toFixed(2)}</span>
            {hasDiscount && (
              <span className="pm-old-price">₹{basePrice.toFixed(2)}</span>
            )}
          </div>
        </div>
      </>
    );
  };

  return (
    <IonRouterLink routerLink={`/detail/${id}`} className="pm-card-link">
      <div className="pm-product-card">{renderPricingAndBadges()}</div>
    </IonRouterLink>
  );
};

export default ProductCard;
