import React from "react";
import { IonContent, IonPage } from "@ionic/react";
import "./cms.css";
import Footer from "../footer";
import StorefrontLayout from "../layout";
import { Container } from "react-bootstrap";

export const PrivacyPolicy: React.FC = () => {
  return (
    <StorefrontLayout>
      <div className="cms-page-wrapper">
        <Container>
          <header className="cms-header">
            <span className="cms-subtitle">Data Security</span>
            <h1 className="cms-title">Privacy Policy</h1>
          </header>
          <div className="cms-card">
            <p>
              At <strong>Kingdom Fashion</strong>, we are committed to
              protecting your privacy...
            </p>
            <h2>1. Information We Collect</h2>
            <ul>
              <li>Personal Information: Name, Email, Phone, Address.</li>
              <li>Account Info: Credentials and order history.</li>
            </ul>
            <div className="contact-info-box">
              <p>
                Questions? Reach us at{" "}
                <strong>support@thekingdomfashion.in</strong>
              </p>
            </div>
          </div>
        </Container>
      </div>
    </StorefrontLayout>
  );
};
