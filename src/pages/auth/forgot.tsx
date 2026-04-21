import React, { useState } from "react";
import { IonSpinner } from "@ionic/react";
import { Link } from "react-router-dom";
import styles from "./AuthCard.module.css";
import StorefrontLayout from "../layout";
import { useToast } from "../../context/toastContext";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const { showSuccess, showError } = useToast();

  const handleReset = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showError("Please enter a valid email address.");
      return;
    }

    setLoading(true);

    try {
      // TODO: Replace this timeout with your actual GraphQL Mutation
      // await forgotPasswordMutation({ variables: { email } });

      await new Promise((resolve) => setTimeout(resolve, 1500)); // Mock API delay

      showSuccess("If an account exists, a reset link has been sent.");
      setEmail(""); // Clear the input after success
    } catch (error) {
      console.error("Reset error:", error);
      showError("Failed to initiate password reset.");
    } finally {
      setLoading(false);
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
              alt="Kingdom Logo"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = "/logo-dark.png"; // fallback
              }}
            />
          </div>
          <h2 className={styles.title}>Password Recovery</h2>
          <p className={styles.subtitle}>
            Enter your email to receive a secure reset link.
          </p>

          <form onSubmit={handleReset} className={styles.formContainer}>
            <div className={styles.inputGroup}>
              <label className={styles.label}>Registered Email</label>
              <input
                type="email"
                className={styles.inputField}
                placeholder="e.g. alex@example.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className={styles.primaryButton}
              disabled={loading || !email}
            >
              {loading ? <IonSpinner name="crescent" /> : "Send Reset Link"}
            </button>
          </form>

          <div className={styles.divider}>
            <span>Remember your password?</span>
          </div>

          <Link to="/login" className={styles.secondaryButton}>
            Back to Sign In
          </Link>
        </div>
      </div>
    </StorefrontLayout>
  );
};

export default ForgotPassword;
