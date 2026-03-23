import {
  IonContent,
  IonPage,
  IonTitle,
  IonCard,
  IonCardContent,
} from "@ionic/react";
import "./cms.css";
import Footer from "../footer";
import StorefrontLayout from "../layout";
import { Container } from "react-bootstrap";

export const RefundPolicy: React.FC = () => {
  return (
    <StorefrontLayout>
      <div className="cms-page-wrapper">
        <Container>
          <header className="cms-header">
            <span className="cms-subtitle">Easy Returns</span>
            <h1 className="cms-title">Refund Policy</h1>
          </header>
          <div className="cms-card">
            <p>
              We take great care in packaging, but we understand things
              happen...
            </p>
            <h2>Eligibility for Refunds</h2>
            <p>
              <strong>Incorrect Product:</strong> We will arrange a hassle-free
              pickup...
            </p>
            <p>
              <strong>Damaged Item:</strong> Please share an unboxing video
              within 2 days.
            </p>
          </div>
        </Container>
      </div>
    </StorefrontLayout>
  );
};
