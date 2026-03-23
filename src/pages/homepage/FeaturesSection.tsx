import React from "react";
import { IonCol, IonRow } from "@ionic/react";
import { Container } from "react-bootstrap";

const FeaturesSection: React.FC = () => {
  return (
    <section className="features-section">
      <Container>
        <IonRow className="ion-justify-content-center">
          <IonCol size="6" sizeMd="3" className="feature-col">
            <div className="feature-card">
              <i className="bi bi-truck feature-icon"></i>
              <div className="feature-text">
                <h5>Free Shipping</h5>
                <p>On All Orders Over ₹999</p>
              </div>
            </div>
          </IonCol>
          <IonCol size="6" sizeMd="3" className="feature-col">
            <div className="feature-card">
              <i className="bi bi-credit-card feature-icon"></i>
              <div className="feature-text">
                <h5>Secure Payment</h5>
                <p>We ensure secure payment</p>
              </div>
            </div>
          </IonCol>
          <IonCol size="6" sizeMd="3" className="feature-col">
            <div className="feature-card">
              <i className="bi bi-arrow-counterclockwise feature-icon"></i>
              <div className="feature-text">
                <h5>100% Money Back</h5>
                <p>30 Days Return Policy</p>
              </div>
            </div>
          </IonCol>
          <IonCol size="6" sizeMd="3" className="feature-col">
            <div className="feature-card">
              <i className="bi bi-chat-dots feature-icon"></i>
              <div className="feature-text">
                <h5>Online Support</h5>
                <p>24/7 Dedicated Support</p>
              </div>
            </div>
          </IonCol>
        </IonRow>
      </Container>
    </section>
  );
};

export default React.memo(FeaturesSection);
