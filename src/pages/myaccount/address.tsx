import React, { useState } from "react";
import {
  IonContent,
  IonButton,
  IonIcon,
  IonRow,
  IonCol,
  IonBadge,
  IonModal,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonInput,
  IonText,
} from "@ionic/react";
import {
  addOutline,
  locationOutline,
  homeOutline,
  businessOutline,
  trashOutline,
  createOutline,
} from "ionicons/icons";

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
      <div className="section-header-flex">
        <h4 className="fw-bold">My Addresses</h4>
        <IonButton
          fill="solid"
          color="dark"
          size="small"
          onClick={() => setShowModal(true)}
        >
          <IonIcon slot="start" icon={addOutline} />
          Add New
        </IonButton>
      </div>

      <IonRow className="ion-margin-top">
        {savedAddresses.length > 0 ? (
          savedAddresses.map((addr) => (
            <IonCol size="12" sizeMd="6" key={addr.id}>
              <div
                className={`address-card ${
                  addr.isDefault ? "default-border" : ""
                }`}
              >
                <div className="card-top">
                  <span className="addr-type">
                    <IonIcon
                      icon={
                        addr.type === "Home" ? homeOutline : businessOutline
                      }
                    />
                    {addr.type}
                  </span>
                  {addr.isDefault && (
                    <IonBadge color="success">DEFAULT</IonBadge>
                  )}
                </div>

                <h6 className="customer-name">{addr.name}</h6>
                <p className="full-address">
                  {addr.address}, <br />
                  {addr.city}, {addr.state} - {addr.zip}
                </p>

                <div className="card-actions">
                  <button className="edit-btn">
                    <IonIcon icon={createOutline} /> Edit
                  </button>
                  <button className="delete-btn">
                    <IonIcon icon={trashOutline} /> Remove
                  </button>
                </div>
              </div>
            </IonCol>
          ))
        ) : (
          <div className="empty-state">
            <IonIcon icon={locationOutline} />
            <p>You haven't saved any addresses yet.</p>
          </div>
        )}
      </IonRow>

      {/* --- Add Address Modal --- */}
      <IonModal
        isOpen={showModal}
        onDidDismiss={() => setShowModal(false)}
        className="address-modal"
      >
        <IonHeader className="ion-no-border">
          <IonToolbar>
            <IonTitle>Add New Address</IonTitle>
            <IonButtons slot="end">
              <IonButton onClick={() => setShowModal(false)}>Cancel</IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <form className="address-form">
            <IonRow>
              <IonCol size="12">
                <IonInput
                  label="Full Name"
                  labelPlacement="stacked"
                  fill="outline"
                  placeholder="Enter recipient name"
                  className="form-input"
                />
              </IonCol>
              <IonCol size="12">
                <IonInput
                  label="Flat/Building/Street"
                  labelPlacement="stacked"
                  fill="outline"
                  placeholder="Street details"
                  className="form-input"
                />
              </IonCol>
              <IonCol size="6">
                <IonInput
                  label="City"
                  labelPlacement="stacked"
                  fill="outline"
                  placeholder="City"
                  className="form-input"
                />
              </IonCol>
              <IonCol size="6">
                <IonInput
                  label="Pincode"
                  labelPlacement="stacked"
                  fill="outline"
                  placeholder="6-digit code"
                  className="form-input"
                />
              </IonCol>
              <IonCol size="12">
                <IonInput
                  label="Phone Number"
                  labelPlacement="stacked"
                  fill="outline"
                  type="tel"
                  placeholder="Mobile for delivery"
                  className="form-input"
                />
              </IonCol>
            </IonRow>
            <div className="ion-padding-top">
              <IonButton
                expand="block"
                color="dark"
                className="main-submit-btn"
              >
                Save Address
              </IonButton>
            </div>
          </form>
        </IonContent>
      </IonModal>
    </div>
  );
};

export default AddressPage;
