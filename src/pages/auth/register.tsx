import React, { useState } from "react";
import { IonIcon, IonSpinner } from "@ionic/react";
import { eyeOutline, eyeOffOutline } from "ionicons/icons";
import { Link, useHistory } from "react-router-dom";
import styles from "./AuthCard.module.css";
import StorefrontLayout from "../layout";
import { useCreateCustomerMutation } from "../../graphql/generated";
import { useToast } from "../../context/toastContext";

const Register = () => {
  const history = useHistory();
  const { showSuccess, showError } = useToast();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    customerName: "",
    mobile: "",
    email: "",
    password: "",
  });

  const [registrationMutation, { loading }] = useCreateCustomerMutation();

  const validateForm = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10}$/; // Basic 10 digit check
    
    if (formData.customerName.trim().length < 3) {
      showError("Name must be at least 3 characters long.");
      return false;
    }
    if (!emailRegex.test(formData.email)) {
      showError("Please enter a valid email address.");
      return false;
    }
    if (!phoneRegex.test(formData.mobile)) {
      showError("Please enter a valid 10-digit mobile number.");
      return false;
    }
    if (formData.password.length < 6) {
      showError("Password must be at least 6 characters long.");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const response = await registrationMutation({
        variables: { input: formData },
      });

      if (response.data?.createCustomer) {
        showSuccess("Account created! Welcome to the Kingdom.");
        history.push("/login");
      }
    } catch (error: any) {
      // Clean Apollo Error
      let cleanMessage = "Registration failed. Please try again.";
      if (error.message) {
        cleanMessage = error.message
          .replace("Error: ", "")
          .replace("GraphQL error: ", "")
          .trim();
      }
      showError(cleanMessage);
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
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = "/logo-dark.png"; // fallback
              }}
            />
          </div>
          <h2 className={styles.title}>Create Account</h2>
          <p className={styles.subtitle}>
            Join us for an exclusive, premium shopping experience.
          </p>

          <form onSubmit={handleSubmit} className={styles.formContainer}>
            <div className={styles.inputGroup}>
              <label className={styles.label}>Full Name</label>
              <input
                type="text"
                className={styles.inputField}
                placeholder="Enter your full name"
                required
                value={formData.customerName}
                onChange={(e) =>
                  setFormData({ ...formData, customerName: e.target.value })
                }
              />
            </div>

            <div className={styles.inputGroup}>
              <label className={styles.label}>Email Address</label>
              <input
                type="email"
                className={styles.inputField}
                placeholder="Enter your email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>

            <div className={styles.inputGroup}>
              <label className={styles.label}>Mobile Number</label>
              <input
                type="tel"
                className={styles.inputField}
                placeholder="Enter your mobile number"
                required
                value={formData.mobile}
                onChange={(e) =>
                  setFormData({ ...formData, mobile: e.target.value })
                }
              />
            </div>

            <div className={styles.inputGroup}>
              <div className={styles.labelRow}>
                <label className={styles.label}>Password</label>
              </div>
              <div className={styles.passwordWrapper}>
                <input
                  type={showPassword ? "text" : "password"}
                  className={styles.inputField}
                  placeholder="Create a secure password"
                  required
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                />
                <button
                  type="button"
                  className={styles.eyeButton}
                  onClick={() => setShowPassword(!showPassword)}
                  tabIndex={-1}
                >
                  <IonIcon icon={showPassword ? eyeOffOutline : eyeOutline} />
                </button>
              </div>
            </div>

            <button
              type="submit"
              className={styles.primaryButton}
              disabled={loading}
            >
              {loading ? <IonSpinner name="crescent" /> : "Create Account"}
            </button>
          </form>

          <div className={styles.divider}>
            <span>Already a member?</span>
          </div>

          <Link to="/login" className={styles.secondaryButton}>
            Sign In to your Account
          </Link>
        </div>
      </div>
    </StorefrontLayout>
  );
};

export default Register;
