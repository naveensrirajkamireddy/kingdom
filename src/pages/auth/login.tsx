import React, { useState } from "react";
import { IonIcon, IonSpinner } from "@ionic/react";
import { eyeOutline, eyeOffOutline } from "ionicons/icons";
import { Link, useHistory } from "react-router-dom";
import styles from "./AuthCard.module.css";
import StorefrontLayout from "../layout";
import { useLoginCustomerMutation } from "../../graphql/generated";
import { useUser } from "../../context/userContext";
import { useToast } from "../../context/toastContext";

const Login = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const history = useHistory();
  const { setUser } = useUser();
  const { showError, showSuccess } = useToast();
  const [loginMutation, { loading }] = useLoginCustomerMutation();

  const validateForm = () => {
    if (formData.username.trim().length < 3) {
      showError("Please enter a valid email or mobile number.");
      return false;
    }
    if (formData.password.length < 6) {
      showError("Password must be at least 6 characters.");
      return false;
    }
    return true;
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const result = await loginMutation({
        variables: formData,
      });
      const user = result.data?.loginCustomer;
      if (user) {
        setUser(user);
        showSuccess("Welcome back!");
        history.push("/home"); // or /account
      }
    } catch (error: any) {
      let cleanMessage = "Something went wrong. Please try again.";

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
              alt="Kingdom Logo"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = "/logo-dark.png"; // fallback
              }}
            />
          </div>
          <h2 className={styles.title}>Sign In</h2>
          <p className={styles.subtitle}>
            Access your Kingdom account and saved collections.
          </p>

          <form onSubmit={handleLogin} className={styles.formContainer}>
            <div className={styles.inputGroup}>
              <label className={styles.label}>Email or Mobile</label>
              <input
                type="text"
                className={styles.inputField}
                placeholder="Enter your email or phone"
                required
                value={formData.username}
                onChange={(e) =>
                  setFormData({ ...formData, username: e.target.value })
                }
              />
            </div>

            <div className={styles.inputGroup}>
              <div className={styles.labelRow}>
                <label className={styles.label}>Password</label>
                <Link to="/forgot" className={styles.forgotLink}>
                  Forgot?
                </Link>
              </div>
              <div className={styles.passwordWrapper}>
                <input
                  type={showPassword ? "text" : "password"}
                  className={styles.inputField}
                  placeholder="Enter your password"
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
              {loading ? <IonSpinner name="crescent" /> : "Sign In"}
            </button>
          </form>

          <div className={styles.divider}>
            <span>New to Kingdom?</span>
          </div>

          <Link to="/register" className={styles.secondaryButton}>
            Create an Account
          </Link>
        </div>
      </div>
    </StorefrontLayout>
  );
};

export default Login;
