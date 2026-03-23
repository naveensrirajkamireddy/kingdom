import React from "react";
import { Container } from "react-bootstrap";
import StorefrontLayout from "../layout";
import "./cms.css";

const ShippingPolicy: React.FC = () => {
  return (
    <StorefrontLayout>
      <div className="cms-page-wrapper">
        <Container>
          <header className="cms-header">
            <span className="cms-subtitle">Logistics & Delivery</span>
            <h1 className="cms-title">Shipping Policy</h1>
          </header>

          <div className="cms-card">
            <p>
              At <b>Kingdom Fashion</b>, we strive to deliver your favorite
              fashion pieces to your doorstep as quickly and safely as possible.
              We take pride in our reliable shipping process.
            </p>

            <h2>Order Processing Time</h2>
            <p>
              All orders are processed within <strong>1–2 business days</strong>{" "}
              after receiving your confirmation email. You will receive another
              notification when your order has been shipped.
            </p>

            <h2>Delivery Timelines</h2>
            <ul>
              <li>Standard Delivery: 4–5 business days across India.</li>
              <li>
                Express Delivery: 2–3 business days (available in select
                metros).
              </li>
              <li>
                Public Holidays: Please note that orders are not shipped or
                delivered on weekends or holidays.
              </li>
            </ul>

            <h2>Shipping Charges</h2>
            <p>
              We offer <strong>Free Shipping</strong> on all prepaid orders
              above ₹999. For orders below ₹999, a standard shipping charge of
              ₹100 will be applied at checkout.
            </p>

            <div className="contact-info-box">
              <h4>Incorrect Address?</h4>
              <p>
                Kingdom Fashion is not responsible for failed deliveries due to
                incorrect addresses. If an order is returned to us, we will
                contact you for reshipment; additional charges may apply.
              </p>
            </div>
          </div>
        </Container>
      </div>
    </StorefrontLayout>
  );
};

export default ShippingPolicy;
