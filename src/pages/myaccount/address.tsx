import React, { useState } from "react";
import { IonIcon, IonModal, IonButtons, IonButton } from "@ionic/react";
import {
  addOutline,
  locationOutline,
  homeOutline,
  businessOutline,
  trashOutline,
  createOutline,
  closeOutline,
} from "ionicons/icons";
import { Row, Col } from "react-bootstrap"; // Using Bootstrap grid to match your AccountLayout

const AddressPage: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  // Example data structure
  const savedAddresses = [
    {
      id: 1,
      type: "Home",
      name: "Alex Johnson",
      address: "H.No. 42-33/2, Gayathri Nagar, Moula Ali",
      city: "Hyderabad",
      state: "Telangana",
      zip: "500040",
      isDefault: true,
    },
  ];

  return (
    <div className="address-book-wrapper">
      <div className="pane-header-flex">
        <div>
          <h2 className="pane-title">Saved Addresses</h2>
          <p className="pane-subtitle">
            Manage where your orders are delivered.
          </p>
        </div>
        <button
          className="premium-action-btn"
          onClick={() => setShowModal(true)}
        >
          <IonIcon icon={addOutline} />
          Add New
        </button>
      </div>

      <Row className="mt-4 gx-4 gy-4">
        {savedAddresses.length > 0 ? (
          savedAddresses.map((addr) => (
            <Col md={6} key={addr.id}>
              <div
                className={`premium-address-card ${
                  addr.isDefault ? "is-default" : ""
                }`}
              >
                <div className="card-top-bar">
                  <span className="addr-type">
                    <IonIcon
                      icon={
                        addr.type === "Home" ? homeOutline : businessOutline
                      }
                    />
                    {addr.type}
                  </span>
                  {addr.isDefault && (
                    <span className="default-badge">Default</span>
                  )}
                </div>

                <div className="card-body-content">
                  <h4 className="customer-name">{addr.name}</h4>
                  <p className="full-address">
                    {addr.address} <br />
                    {addr.city}, {addr.state} {addr.zip}
                  </p>
                </div>

                <div className="card-action-bar">
                  <button className="text-action-btn">
                    <IonIcon icon={createOutline} /> Edit
                  </button>
                  <button className="text-action-btn text-danger">
                    <IonIcon icon={trashOutline} /> Remove
                  </button>
                </div>
              </div>
            </Col>
          ))
        ) : (
          <div className="premium-empty-state">
            <div className="empty-icon-circle">
              <IonIcon icon={locationOutline} />
            </div>
            <h3>No addresses saved</h3>
            <p>Add a default address to checkout faster next time.</p>
          </div>
        )}
      </Row>

      {/* --- Add Address Modal --- */}
      <IonModal
        isOpen={showModal}
        onDidDismiss={() => setShowModal(false)}
        className="premium-modal"
      >
        <div className="modal-inner-content">
          <div className="modal-custom-header">
            <h3>Add New Address</h3>
            <button
              className="close-modal-btn"
              onClick={() => setShowModal(false)}
            >
              <IonIcon icon={closeOutline} />
            </button>
          </div>

          <form className="premium-form-grid">
            <div className="input-group">
              <label>Full Name</label>
              <input
                type="text"
                className="custom-input"
                placeholder="Enter recipient name"
              />
            </div>

            <div className="input-group">
              <label>Flat / Building / Street</label>
              <input
                type="text"
                className="custom-input"
                placeholder="Street details"
              />
            </div>

            <Row>
              <Col xs={6}>
                <div className="input-group">
                  <label>City</label>
                  <input
                    type="text"
                    className="custom-input"
                    placeholder="City"
                  />
                </div>
              </Col>
              <Col xs={6}>
                <div className="input-group">
                  <label>Pincode</label>
                  <input
                    type="text"
                    className="custom-input"
                    placeholder="6-digit code"
                  />
                </div>
              </Col>
            </Row>

            <div className="input-group">
              <label>Phone Number</label>
              <input
                type="tel"
                className="custom-input"
                placeholder="Mobile for delivery"
              />
            </div>

            <button type="button" className="premium-submit-btn mt-3">
              Save Address
            </button>
          </form>
        </div>
      </IonModal>
    </div>
  );
};

export default AddressPage;
