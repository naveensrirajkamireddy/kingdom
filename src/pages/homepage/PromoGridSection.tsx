import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

interface PromoGridProps {
  categories: any[];
  loading: boolean;
}

const PromoGridSection: React.FC<PromoGridProps> = ({
  categories,
  loading,
}) => {
  return (
    <section className="promo-grid-section">
      <Container>
        <div className="promo-grid">
          {categories.slice(0, 4).map((category, index) => {
            let layoutClass = "";
            let linkNode = null;

            // Adjust these based on your GraphQL schema
            const catName =
              category.categoryName || category.name || "Category";
            const catImage =
              category.imageUrl || category.image || "/no-image.png";
            const catId = category.id;

            if (index === 0) {
              layoutClass = "promo-large";
              linkNode = (
                <Link to={`/shop/${catId}`} className="btn-outline-light">
                  Shop Now
                </Link>
              );
            } else if (index === 1) {
              layoutClass = "promo-small";
              linkNode = (
                <Link to={`/shop/${catId}`} className="btn-outline-light">
                  Shop Now
                </Link>
              );
            } else if (index === 2) {
              layoutClass = "promo-small";
              linkNode = (
                <Link to={`/shop/${catId}`} className="btn-outline-light">
                  Shop Now
                </Link>
              );
            } else if (index === 3) {
              layoutClass = "promo-wide";
              linkNode = (
                <Link to={`/shop/${catId}`} className="btn-outline-light">
                  Shop Now
                </Link>
              );
            }

            return (
              <div key={catId} className={`promo-item ${layoutClass}`}>
                {/* 1. The Image Background */}
                <img
                  src={catImage}
                  alt={catName}
                  className="promo-bg-image"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = "/no-image.png";
                  }}
                />

                {/* 2. The Dark Overlay */}
                <div className="promo-overlay"></div>

                {/* 3. The Text Content */}
                <div className="promo-content">
                  {index === 0 || index === 3 ? (
                    <h3 className="promo-title">{catName}</h3>
                  ) : (
                    <h4 className="promo-title">{catName}</h4>
                  )}
                  {linkNode}
                </div>
              </div>
            );
          })}

          {categories.length === 0 && !loading && (
            <div className="ion-text-center w-100 py-5">
              <p>No promotional categories found.</p>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
};

export default PromoGridSection;
