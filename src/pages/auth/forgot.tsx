import React from "react";
import { IonInput, IonButton } from "@ionic/react";
import { Link } from "react-router-dom";
import styles from "./AuthCard.module.css";
import StorefrontLayout from "../layout";

const ForgotPassword = () => {
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
          <h2 className={styles.title}>Recovery</h2>
          <p className={styles.subtitle}>
            Enter your email to receive a secure reset link
          </p>

          <IonInput
            className={styles.inputField}
            label="Registered Email"
            labelPlacement="stacked"
            type="email"
            placeholder="e.g. alex@example.com"
            fill="outline"
          />

          <IonButton expand="block" className={styles.primaryButton}>
            Send Reset Link
          </IonButton>

          <div className={styles.linkText}>
            <p>
              <Link to="/login">Return to Login</Link>
            </p>
          </div>
        </div>
      </div>
    </StorefrontLayout>
  );
};

export default ForgotPassword;
