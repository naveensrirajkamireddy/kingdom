import React from "react";
import { IonFooter, IonGrid, IonRow, IonCol, IonText } from "@ionic/react";
import "./footer.css";
import { Container } from "react-bootstrap";

const Footer: React.FC = () => {
  return (
    <IonFooter className="footer-wrapper ion-no-border">
      <Container fluid>
        <div className="footer-container">
          <IonGrid>
            <IonRow>
              <IonCol size="12" size-md="3">
                <h5>
                  The<b>Kingdom</b>Fashion
                </h5>
                <p>Your one-stop fashion destination.</p>
              </IonCol>

              <IonCol size="12" size-md="3">
                <h6>Shop</h6>
                <ul>
                  <li>Men's Wear</li>
                  <li>Women's Wear</li>
                  <li>Accessories</li>
                  <li>New Arrivals</li>
                </ul>
              </IonCol>

              <IonCol size="12" size-md="3">
                <h6>Customer Care</h6>
                <ul>
                  <li>Help & Support</li>
                  <li>Returns</li>
                  <li>Track Order</li>
                  <li>FAQs</li>
                </ul>
              </IonCol>

              <IonCol size="12" size-md="3">
                <h6>Connect</h6>
                <ul className="socials">
                  <li>Instagram</li>
                  <li>Facebook</li>
                  <li>Twitter</li>
                  <li>YouTube</li>
                </ul>
              </IonCol>
            </IonRow>
          </IonGrid>
        </div>
      </Container>
    </IonFooter>
  );
};

export default Footer;
