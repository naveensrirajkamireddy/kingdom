import React, { useState } from "react";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonModal,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonText,
  IonSegment,
  IonSegmentButton,
  IonSegmentView,
  IonSegmentContent,
} from "@ionic/react";
import { useUser } from "../../context/userContext";
import { Container } from "react-bootstrap";
import OrdersPage from "../orders";

const Account: React.FC = () => {
  const { user, setUser } = useUser();

  const [showEditModal, setShowEditModal] = useState(false);

  // Local state for editing user details
  const [editData, setEditData] = useState({
    customerName: user?.customerName || "",
    email: user?.email || "",
    mobile: user?.mobile || "",
    address: user?.address || "",
  });

  const handleSave = () => {
    // TODO: Add validation or API call if needed

    setUser((prev) =>
      prev
        ? {
            ...prev,
            customerName: editData.customerName,
            email: editData.email,
            mobile: editData.mobile,
            address: editData.address,
          }
        : null
    );
    setShowEditModal(false);
  };

  return (
    <IonPage>
      <IonContent className="ion-padding">
        <Container fluid>
          <IonSegment>
            <IonSegmentButton value="details" content-id="details">
              <IonLabel>Details</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="orders" content-id="orders">
              <IonLabel>Orders</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="address" content-id="address">
              <IonLabel>Address</IonLabel>
            </IonSegmentButton>
          </IonSegment>
          <IonSegmentView>
            <IonSegmentContent id="details">
              {/* User Details Section */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <h5>Details</h5>
                <IonButton onClick={() => setShowEditModal(true)}>
                  Edit
                </IonButton>
              </div>
              <IonList>
                <IonItem>
                  <IonLabel>Name:</IonLabel>
                  <IonText>{user?.customerName || "-"}</IonText>
                </IonItem>
                <IonItem>
                  <IonLabel>Email:</IonLabel>
                  <IonText>{user?.email || "-"}</IonText>
                </IonItem>
                <IonItem>
                  <IonLabel>Mobile:</IonLabel>
                  <IonText>{user?.mobile || "-"}</IonText>
                </IonItem>
                <IonItem>
                  <IonLabel>Address:</IonLabel>
                  <IonText>{user?.address || "-"}</IonText>
                </IonItem>
              </IonList>
            </IonSegmentContent>
            <IonSegmentContent id="orders">
              <h5>Orders List</h5>
              <OrdersPage />
            </IonSegmentContent>
            <IonSegmentContent id="address">
              <h5>Address List</h5>
              <p>You have no address added yet.</p>
            </IonSegmentContent>
          </IonSegmentView>
        </Container>

        {/* Edit Modal */}
        <IonModal
          isOpen={showEditModal}
          onDidDismiss={() => setShowEditModal(false)}
        >
          <IonContent className="ion-padding">
            <h2>Edit Details</h2>
            <IonItem>
              <IonLabel position="stacked">Name</IonLabel>
              <IonInput
                value={editData.customerName}
                onIonChange={(e) =>
                  setEditData({ ...editData, customerName: e.detail.value! })
                }
              />
            </IonItem>
            <IonItem>
              <IonLabel position="stacked">Email</IonLabel>
              <IonInput
                type="email"
                value={editData.email}
                onIonChange={(e) =>
                  setEditData({ ...editData, email: e.detail.value! })
                }
              />
            </IonItem>
            <IonItem>
              <IonLabel position="stacked">Mobile</IonLabel>
              <IonInput
                type="tel"
                value={editData.mobile}
                onIonChange={(e) =>
                  setEditData({ ...editData, mobile: e.detail.value! })
                }
              />
            </IonItem>
            <IonItem>
              <IonLabel position="stacked">Address</IonLabel>
              <IonInput
                value={editData.address}
                onIonChange={(e) =>
                  setEditData({ ...editData, address: e.detail.value! })
                }
              />
            </IonItem>

            <IonButton
              expand="block"
              onClick={handleSave}
              className="ion-margin-top"
            >
              Save
            </IonButton>
            <IonButton
              expand="block"
              fill="clear"
              color="medium"
              onClick={() => setShowEditModal(false)}
            >
              Cancel
            </IonButton>
          </IonContent>
        </IonModal>
      </IonContent>
    </IonPage>
  );
};

export default Account;
