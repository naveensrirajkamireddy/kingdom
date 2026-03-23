import React from "react";
import { Link } from "react-router-dom";
import "../categories/Categories.css";

interface CategoryCardProps {
  id: string;
  name: string;
  image: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ id, name, image }) => (
  <a href={`/shop/${id}`} className="category-card-wrapper">
    <div className="category-image-container">
      <img
        src={image || "/assets/placeholder-cat.png"}
        alt={name}
        className="category-img"
        loading="lazy"
        onError={(e) => {
          (e.target as HTMLImageElement).src =
            "https://via.placeholder.com/300x300?text=Fashion";
        }}
      />
    </div>
    <span className="category-name">{name}</span>
  </a>
);

export default CategoryCard;
