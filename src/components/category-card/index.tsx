import React from "react";
import "../product-card/ProductCard.css";

interface CategoryCardProps {
  id: number;
  name: string;
  image: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ id, name, image }) => {
  return (
    <div className="product-card">
      <img
        src={image}
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
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
