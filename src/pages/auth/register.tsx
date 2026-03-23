import React, { useState } from "react";
import { IonInput, IonButton, useIonLoading } from "@ionic/react";
import { Link, useHistory } from "react-router-dom";
import styles from "./AuthCard.module.css";
import StorefrontLayout from "../layout";
import { useCreateCustomerMutation } from "../../graphql/generated";
import { raiseErrorAlert, raiseSuccessAlert } from "../../utils";

const Register = () => {
  const history = useHistory();
  const [present, dismiss] = useIonLoading();
  const [formData, setFormData] = useState({
    customerName: "",
    mobile: "",
    email: "",
    password: "",
  });
  const [registrationMutation, { loading }] = useCreateCustomerMutation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.password || !formData.customerName) return;

    try {
      await present("Creating Account...");
      const response = await registrationMutation({
        variables: { input: formData },
      });

      if (response.data?.createCustomer) {
        raiseSuccessAlert("Account created! Welcome to the Kingdom.");
        history.push("/login");
      }
    } catch (error) {
      raiseErrorAlert("Registration failed. Please try again.");
    } finally {
      dismiss();
    }
  };

  return (
    <StorefrontLayout>
      <div className={styles.pageWrapper}>
        <div className={styles.authCard}>
          <div className={styles.logoArea}>
            <img
              src="/favicon.png"
              className={styles.logoImage}
              alt="Kingdom"
            />
          </div>
          <h2 className={styles.title}>Join Us</h2>
          <p className={styles.subtitle}>
            Create an account for an exclusive shopping experience
          </p>

          <form onSubmit={handleSubmit}>
            <IonInput
              className={styles.inputField}
              label="Full Name"
              labelPlacement="stacked"
              fill="outline"
              value={formData.customerName}
              onIonInput={(e) =>
                setFormData({ ...formData, customerName: e.detail.value! })
              }
            />

            <IonInput
              className={styles.inputField}
              label="Email Address"
              labelPlacement="stacked"
              type="email"
              fill="outline"
              value={formData.email}
              onIonInput={(e) =>
                setFormData({ ...formData, email: e.detail.value! })
              }
            />

            <IonInput
              className={styles.inputField}
              label="Mobile"
              labelPlacement="stacked"
              type="tel"
              fill="outline"
              value={formData.mobile}
              onIonInput={(e) =>
                setFormData({ ...formData, mobile: e.detail.value! })
              }
            />

            <IonInput
              className={styles.inputField}
              label="Password"
              labelPlacement="stacked"
              type="password"
              fill="outline"
              value={formData.password}
              onIonInput={(e) =>
                setFormData({ ...formData, password: e.detail.value! })
              }
            />

            <IonButton
              type="submit"
              expand="block"
              className={styles.primaryButton}
              disabled={loading}
            >
              {loading ? "Processing..." : "Create Account"}
            </IonButton>
          </form>

          <div className={styles.linkText}>
            <p>
              Already a member? <Link to="/login">Login here</Link>
            </p>
          </div>
        </div>
      </div>
    </StorefrontLayout>
  );
};

export default Register;
