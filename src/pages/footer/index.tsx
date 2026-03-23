import React from "react";
import { IonGrid, IonRow, IonCol, IonIcon, IonText } from "@ionic/react";
import { Container } from "react-bootstrap";
import {
  logoFacebook,
  logoInstagram,
  logoTwitter,
  logoYoutube,
  mailOutline,
  locationOutline,
  callOutline,
} from "ionicons/icons";
import { Link } from "react-router-dom";
import "./footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="kingdom-footer mt-5">
      <Container>
        <IonGrid className="ion-no-padding">
          <IonRow className="footer-main-row">
            {/* Brand Story */}
            <IonCol size="12" sizeLg="4" className="footer-brand-section">
              <div className="footer-logo">
                <img
                  src="/logo-light.png"
                  alt="Kingdom"
                  className="footer-img-logo"
                />
              </div>
              <p className="brand-desc">
                Elevating your everyday style with curated collections that
                blend timeless elegance with modern trends. Join the Kingdom and
                redefine your fashion.
              </p>
              <div className="social-links-row">
                <a href="#" className="social-circle">
                  <IonIcon icon={logoInstagram} />
                </a>
                <a href="#" className="social-circle">
                  <IonIcon icon={logoFacebook} />
                </a>
                <a href="#" className="social-circle">
                  <IonIcon icon={logoTwitter} />
                </a>
                <a href="#" className="social-circle">
                  <IonIcon icon={logoYoutube} />
                </a>
              </div>
            </IonCol>

            {/* Quick Shop */}
            <IonCol size="6" sizeLg="2" className="footer-links-col">
              <h6 className="footer-title">Collections</h6>
              <ul>
                <li>
                  <Link to="/shop?cat=men">Men's Apparel</Link>
                </li>
                <li>
                  <Link to="/shop?cat=women">Women's Fashion</Link>
                </li>
                <li>
                  <Link to="/shop?cat=acc">Accessories</Link>
                </li>
                <li>
                  <Link to="/shop?cat=new">New Arrivals</Link>
                </li>
              </ul>
            </IonCol>

            {/* Support */}
            <IonCol size="6" sizeLg="3" className="footer-links-col">
              <h6 className="footer-title">Customer Care</h6>
              <ul>
                <li>
                  <Link to="/track-order">Track Your Order</Link>
                </li>
                <li>
                  <Link to="/terms-and-conditions">Terms of Service</Link>
                </li>
                <li>
                  <Link to="/privacy-policy">Privacy & Security</Link>
                </li>
                <li>
                  <Link to="/refund-policy">Returns & Refunds</Link>
                </li>
                <li>
                  <Link to="/shipping-policy">Shipping Info</Link>
                </li>
              </ul>
            </IonCol>

            {/* Contact Info */}
            <IonCol size="12" sizeLg="3" className="footer-contact-col">
              <h6 className="footer-title">Get in Touch</h6>
              <div className="contact-item">
                <IonIcon icon={locationOutline} />
                <span>123 Fashion Street, Design District, India</span>
              </div>
              <div className="contact-item">
                <IonIcon icon={callOutline} />
                <span>+91 98765 43210</span>
              </div>
              <div className="contact-item">
                <IonIcon icon={mailOutline} />
                <span>support@kingdomfashion.com</span>
              </div>
            </IonCol>
          </IonRow>
        </IonGrid>
      </Container>

      {/* Bottom Bar */}
      <div className="footer-bottom-bar">
        <Container>
          <div className="bottom-flex">
            <p>
              © {new Date().getFullYear()} Kingdom Fashion. Crafted for
              Excellence.
            </p>
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
