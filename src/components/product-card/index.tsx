import React from "react";
import "./ProductCard.css";
import { IonRouterLink } from "@ionic/react";

interface ProductCardProps {
  id: string;
  productName: string;
  primaryImage: string;
  salePrice: number;
  purchasePrice: number;
  variants?: {
    id: string;
    images: {
      id: number;
      imageUrl: string;
    }[];
  }[];
  onAddToCart?: (id: string) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  productName,
  primaryImage,
  salePrice,
  purchasePrice,
  variants,
  onAddToCart,
}) => {
  // Determine which image to show (prefer variant images if available)
  const displayImage =
    variants && variants.length > 0 && variants[0].images.length > 0
      ? variants[0].images[0].imageUrl
      : primaryImage;

  const handleAddToCartClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onAddToCart && onAddToCart(id);
  };
  console.log("displayImage", displayImage);

  return (
    <IonRouterLink routerLink={`/detail/${id}`} className="product-card-link">
      <div className="product-card">
        <img
          src={displayImage || "/no-image.png"}
          alt={productName}
          className="product-image"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = "/no-image.png";
          }}
        />
        <div className="product-overlay">
          <div className="product-info">
            <h5 className="product-title">{productName}</h5>
            <div className="product-price">
              {salePrice < purchasePrice ? (
                <>
                  <span className="offer-price">₹{salePrice}</span>
                  <span className="original-price">₹{purchasePrice}</span>
                </>
              ) : (
                <span className="offer-price">₹{purchasePrice}</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </IonRouterLink>
  );
};

export default ProductCard;
