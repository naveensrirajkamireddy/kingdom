import React, { useState } from "react";
import { IonIcon, IonSpinner } from "@ionic/react";
import {
  personOutline,
  lockClosedOutline,
  shieldCheckmarkOutline,
} from "ionicons/icons";
import { Row, Col } from "react-bootstrap";
import { useUser } from "../../context/userContext";
import { useChangePasswordMutation } from "../../graphql/generated";
import { raiseErrorAlert, raiseSuccessAlert } from "../../utils";

const ProfilePage: React.FC = () => {
  const { user } = useUser();
  const [passwords, setPasswords] = useState({ old: "", new: "", confirm: "" });

  const [changePasswordMutation, { loading }] = useChangePasswordMutation();

  const handlePasswordUpdate = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent accidental page refreshes

    console.log("Attempting password update...");
    console.log("Current User Email:", user?.email);
    console.log("Password Data:", passwords);

    // 1. Validation with explicit Error Alerts
    if (!user?.email) {
      raiseErrorAlert("Error: Email is missing from your account profile.");
      return;
    }
    if (!passwords.old || !passwords.new || !passwords.confirm) {
      raiseErrorAlert("Please fill out all password fields.");
      return;
    }
    if (passwords.new !== passwords.confirm) {
      raiseErrorAlert("New passwords do not match!");
      return;
    }
    if (passwords.new.length < 6) {
      raiseErrorAlert("New password must be at least 6 characters.");
      return;
    }

    // 2. Execute Mutation
    try {
      const response = await changePasswordMutation({
        variables: {
          email: user.email,
          oldPassword: passwords.old,
          newPassword: passwords.new,
        },
      });

      console.log("Mutation Response:", response);

      // 3. Handle Success
      if (response.data?.changePassword) {
        raiseSuccessAlert("Your password has been securely updated.");
        // Clear the form fields after success
        setPasswords({ old: "", new: "", confirm: "" });
      }
    } catch (error: any) {
      // 4. Clean Apollo Error Handling
      console.error("Mutation Error:", error);

      let cleanMessage = "Failed to update password. Please try again.";
      if (error.message) {
        cleanMessage = error.message
          .replace("Error: ", "")
          .replace("GraphQL error: ", "")
          .trim();
      }
      raiseErrorAlert(cleanMessage);
    }
  };

  return (
    <div className="profile-settings-wrapper">
      <div className="pane-header-flex">
        <div>
          <h2 className="pane-title">Account Details</h2>
          <p className="pane-subtitle">
            View your personal information and update your security settings.
          </p>
        </div>
        <span className="premium-verified-badge">
          <IonIcon icon={shieldCheckmarkOutline} /> Verified
        </span>
      </div>

      {/* --- Personal Information Card --- */}
      <div className="premium-settings-card mb-4">
        <div className="settings-card-header">
          <IonIcon icon={personOutline} />
          <h3>Personal Information</h3>
        </div>

        <div className="premium-form-grid">
          <Row className="gy-4">
            <Col md={6}>
              <div className="input-group">
                <label>Full Name</label>
                <input
                  type="text"
                  className="custom-input"
                  value={user?.customerName || ""}
                  disabled
                />
              </div>
            </Col>

            <Col md={6}>
              <div className="input-group">
                <label>Contact Number</label>
                <input
                  type="text"
                  className="custom-input"
                  value={user?.mobile || ""}
                  disabled
                />
              </div>
            </Col>

            <Col md={12}>
              <div className="input-group">
                <label>Email Address</label>
                <input
                  type="email"
                  className="custom-input"
                  value={user?.email || ""}
                  disabled
                />
              </div>
            </Col>
          </Row>

          <p className="settings-help-text">
            To change your registered email or phone number, please contact our
            client support team.
          </p>
        </div>
      </div>

      {/* --- Security & Password Card --- */}
      <div className="premium-settings-card">
        <div className="settings-card-header">
          <IonIcon icon={lockClosedOutline} />
          <h3>Security & Password</h3>
        </div>

        {/* Removed onSubmit from the form to rely strictly on the button onClick */}
        <form className="premium-form-grid">
          <Row className="gy-4">
            <Col md={12}>
              <div className="input-group">
                <label>Current Password</label>
                <input
                  type="password"
                  className="custom-input"
                  placeholder="Enter current password"
                  required
                  value={passwords.old}
                  onChange={(e) =>
                    setPasswords({ ...passwords, old: e.target.value })
                  }
                />
              </div>
            </Col>

            <Col md={6}>
              <div className="input-group">
                <label>New Password</label>
                <input
                  type="password"
                  className="custom-input"
                  placeholder="••••••••"
                  required
                  value={passwords.new}
                  onChange={(e) =>
                    setPasswords({ ...passwords, new: e.target.value })
                  }
                />
              </div>
            </Col>

            <Col md={6}>
              <div className="input-group">
                <label>Confirm New Password</label>
                <input
                  type="password"
                  className="custom-input"
                  placeholder="••••••••"
                  required
                  value={passwords.confirm}
                  onChange={(e) =>
                    setPasswords({ ...passwords, confirm: e.target.value })
                  }
                />
              </div>
            </Col>
          </Row>

          <div className="mt-4">
            {/* Changed from type="submit" to type="button" with an explicit onClick */}
            <button
              type="button"
              className="premium-action-btn"
              onClick={handlePasswordUpdate}
              disabled={loading}
            >
              {loading ? <IonSpinner name="crescent" /> : "Update Password"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfilePage;
