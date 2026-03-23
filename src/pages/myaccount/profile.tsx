import React, { useState } from "react";
import {
  IonButton,
  IonIcon,
  IonRow,
  IonCol,
  IonInput,
  IonText,
  IonBadge,
} from "@ionic/react";
import {
  personOutline,
  mailOutline,
  callOutline,
  lockClosedOutline,
  shieldCheckmarkOutline,
} from "ionicons/icons";
import { useUser } from "../../context/userContext";

const ProfilePage: React.FC = () => {
  const { user } = useUser();

  return (
    <div className="profile-settings-container">
      <div className="section-header-flex mb-4">
        <h4 className="fw-bold m-0">Account Security</h4>
        <IonBadge color="primary" className="p-2">
          Verified Account
        </IonBadge>
      </div>

      <div className="profile-form-grid">
        {/* Basic Information Section */}
        <div className="settings-group">
          <div className="group-title">
            <IonIcon icon={personOutline} />
            <span>Personal Information</span>
          </div>

          <IonRow>
            <IonCol size="12" sizeMd="6">
              <IonInput
                label="Full Name"
                labelPlacement="stacked"
                fill="outline"
                value={user?.customerName || ""}
                disabled
                className="profile-input"
              />
            </IonCol>
            <IonCol size="12" sizeMd="6">
              <IonInput
                label="Contact Number"
                labelPlacement="stacked"
                fill="outline"
                value={user?.mobile || ""}
                disabled
                className="profile-input"
              />
            </IonCol>
            <IonCol size="12">
              <IonInput
                label="Email Address"
                labelPlacement="stacked"
                fill="outline"
                value={user?.email || ""}
                disabled
                className="profile-input"
              />
            </IonCol>
          </IonRow>
          <p className="small-note">
            Contact support if you need to change your registered email.
          </p>
        </div>

        <div className="nav-divider my-4"></div>

        {/* Password Section */}
        <div className="settings-group">
          <div className="group-title">
            <IonIcon icon={lockClosedOutline} />
            <span>Change Password</span>
          </div>

          <IonRow>
            <IonCol size="12" sizeMd="6">
              <IonInput
                label="New Password"
                labelPlacement="stacked"
                type="password"
                fill="outline"
                placeholder="••••••••"
                className="profile-input"
              />
            </IonCol>
            <IonCol size="12" sizeMd="6">
              <IonInput
                label="Confirm New Password"
                labelPlacement="stacked"
                type="password"
                fill="outline"
                placeholder="••••••••"
                className="profile-input"
              />
            </IonCol>
          </IonRow>

          <div className="ion-margin-top">
            <IonButton
              color="dark"
              className="main-submit-btn"
              style={{ width: "200px" }}
            >
              Update Password
            </IonButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
