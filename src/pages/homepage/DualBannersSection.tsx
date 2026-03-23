import React from "react";
import { IonCol, IonRow } from "@ionic/react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const DualBannersSection: React.FC = () => {
  return (
    <section className="dual-banners-section">
      <Container>
        <IonRow>
          <IonCol size="12" sizeMd="6">
            <div className="dual-banner bg-light-grey">
              <div className="banner-content">
                <span className="banner-subtitle">Weekend Sale</span>
                <h2>Men's Fashion</h2>
                <p className="text-blue font-weight-bold">Flat 70% Off</p>
                <Link to="/shop?category=mens" className="text-link text-dark">
                  Shop Now &gt;
                </Link>
              </div>
              <img
                src="/assets/banner-men.png"
                alt="Men's Fashion"
                className="dual-banner-img"
              />
            </div>
          </IonCol>
          <IonCol size="12" sizeMd="6">
            <div className="dual-banner bg-warm-grey">
              <div className="banner-content">
                <span className="banner-subtitle">Fashion Style</span>
                <h2>Women's Wear</h2>
                <p className="text-blue font-weight-bold">Min. 35-70% Off</p>
                <Link
                  to="/shop?category=womens"
                  className="text-link text-dark"
                >
                  Shop Now &gt;
                </Link>
              </div>
              <img
                src="/assets/banner-women.png"
                alt="Women's Wear"
                className="dual-banner-img"
              />
            </div>
          </IonCol>
        </IonRow>
      </Container>
    </section>
  );
};

export default React.memo(DualBannersSection);
