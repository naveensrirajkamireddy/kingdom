import React from "react";
import "./ProductCard.css";
import { IonIcon } from "@ionic/react";
import { star, starHalf } from "ionicons/icons";
import { useHistory } from "react-router-dom"; // Imported useHistory

interface ProductCardProps {
  id: string;
  productName: string;
  primaryImage: string;
  brandName?: string;
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
  tabMode?: "new" | "featured";
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
  const history = useHistory(); // Initialize history for programmatic routing

  // --- Handlers ---
  const handleCardClick = () => {
    history.push(`/detail/${id}`);
  };

  const handleAddToCartClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation(); // Now this will successfully stop the card click!
    if (onAddToCart) {
      onAddToCart(id);
    }
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

    return (
      <>
        {/* --- Image & Badges --- */}
        <div className="pm-image-container">
          <div className="pm-badges">
            {hasDiscount && (
              <span className="pm-badge badge-green">{discountLabel}</span>
            )}
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

          {/* Star Rating */}
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
    /* Replaced IonRouterLink with a standard div and onClick handler */
    <div
      className="pm-card-link"
      onClick={handleCardClick}
      style={{ cursor: "pointer" }}
    >
      <div className="pm-product-card">{renderPricingAndBadges()}</div>
    </div>
  );
};

export default ProductCard;
