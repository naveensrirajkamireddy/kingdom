import React from "react";
import { IonPage, IonContent } from "@ionic/react";
import "./cms.css"; // Reuse same styling as Privacy Policy & Terms
import Footer from "../footer";
import StorefrontLayout from "../layout";
import { Container } from "react-bootstrap";

export const AboutPage: React.FC = () => {
  return (
    <StorefrontLayout>
      <div className="cms-page-wrapper">
        <Container>
          <header className="cms-header">
            <span className="cms-subtitle">Our Story</span>
            <h1 className="cms-title">Kingdom Fashion</h1>
          </header>
          <div className="cms-card">
            <p>
              <strong>Kingdom Fashion</strong> is your premium destination for
              trendsetting fashion...
            </p>
            <h2>Our Vision</h2>
            <p>
              To redefine fashion accessibility by blending tradition with
              innovation...
            </p>
            <h3>Why Choose Us?</h3>
            <ul>
              <li>Quality products from trusted suppliers</li>
              <li>Fast & reliable shipping</li>
              <li>Hassle-free returns</li>
            </ul>
          </div>
        </Container>
      </div>
    </StorefrontLayout>
  );
};
