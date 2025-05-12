import React from "react";
import "./ProductCard.css";
import { IonRouterLink } from "@ionic/react";

interface ProductCardProps {
  id: any;
  name: string;
  images: string[];
  price: number;
  offerPrice?: number;
  onAddToCart: (id: number) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  images,
  price,
  offerPrice,
  onAddToCart,
}) => {
  return (
    <IonRouterLink routerLink={`/detail/${id}`}>
      <div className="product-card">
        <img
          src={images[0]}
          alt={name}
          className="product-image"
          onError={(e) =>
            (e.currentTarget.src =
              "https://via.placeholder.com/300x400?text=Image+Not+Found")
          }
        />
        <div className="product-overlay">
          <div className="product-info">
            <h5 className="product-title">{name}</h5>
            <div className="product-price">
              {offerPrice ? (
                <>
                  <span className="offer-price">₹{offerPrice}</span>
                  <span className="original-price">₹{price}</span>
                </>
              ) : (
                <span className="offer-price">₹{price}</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </IonRouterLink>
  );
};

export default ProductCard;
