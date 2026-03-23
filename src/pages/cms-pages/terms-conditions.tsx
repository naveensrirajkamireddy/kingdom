import React from "react";
import { Container } from "react-bootstrap";
import StorefrontLayout from "../layout";
import "./cms.css";

const TermsAndConditions: React.FC = () => {
  return (
    <StorefrontLayout>
      <div className="cms-page-wrapper">
        <Container>
          <header className="cms-header">
            <span className="cms-subtitle">Legal Agreement</span>
            <h1 className="cms-title">Terms & Conditions</h1>
          </header>

          <div className="cms-card">
            <p>
              Welcome to <strong>Kingdom Fashion</strong>. These Terms and
              Conditions govern your access to and use of our website, products,
              and services. By using our site, you agree to comply with these
              terms.
            </p>

            <h2>1. Use of the Website</h2>
            <p>
              You agree to use the website only for lawful purposes. You must
              not violate any laws, infringe on third-party rights, or transmit
              harmful content.
            </p>

            <h2>2. Product Accuracy</h2>
            <p>
              We strive for accuracy in prices and images. However, we do not
              guarantee that all information is error-free. We reserve the right
              to modify product details at any time.
            </p>

            <h2>3. Intellectual Property</h2>
            <p>
              All content on this site—including logos, designs, images, and
              text—is the intellectual property of{" "}
              <strong>Kingdom Fashion</strong>. Unauthorized use is strictly
              prohibited.
            </p>

            <h2>4. Limitation of Liability</h2>
            <p>
              We are not liable for any direct, indirect, or incidental damages
              arising from the use or inability to use our products or website.
            </p>

            <div className="contact-info-box">
              <h5>Governing Law</h5>
              <p>
                These Terms are governed by the laws of India. Any disputes
                shall be subject to the jurisdiction of the courts located in{" "}
                <strong>Hyderabad, Telangana</strong>.
              </p>
              <p>
                📧 <strong>Support:</strong> support@thekingdomfashion.in <br />
                📍 <strong>Address:</strong> Moula Ali, Hyderabad, PIN 500040
              </p>
            </div>
          </div>
        </Container>
      </div>
    </StorefrontLayout>
  );
};

export default TermsAndConditions;
