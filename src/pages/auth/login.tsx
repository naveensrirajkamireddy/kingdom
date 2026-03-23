import React, { useState } from "react";
import { IonButton, IonInput } from "@ionic/react";
import { Link, useHistory } from "react-router-dom";
import styles from "./AuthCard.module.css";
import StorefrontLayout from "../layout";
import { useLoginCustomerMutation } from "../../graphql/generated";
import { useUser } from "../../context/userContext";
import { raiseErrorAlert } from "../../utils";

const Login = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const history = useHistory();
  const { setUser } = useUser();
  const [loginMutation, { loading }] = useLoginCustomerMutation();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const result = await loginMutation({
        variables: formData,
      });
      const user = result.data?.loginCustomer;
      if (user) {
        setUser(user);
        sessionStorage.setItem("customerData", JSON.stringify(user));
        history.push("/home");
      }
    } catch (error) {
      raiseErrorAlert(error);
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
            />
          </div>
          <h2 className={styles.title}>Welcome Back</h2>
          <p className={styles.subtitle}>
            Enter your credentials to access the Kingdom
          </p>

          <form onSubmit={handleLogin}>
            <IonInput
              className={styles.inputField}
              label="Email or Mobile"
              labelPlacement="stacked"
              fill="outline"
              value={formData.username}
              onIonInput={(e) =>
                setFormData({ ...formData, username: e.detail.value! })
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
              expand="block"
              type="submit"
              className={styles.primaryButton}
              disabled={loading}
            >
              {loading ? "Authenticating..." : "Sign In"}
            </IonButton>
          </form>

          <div className={styles.linkText}>
            <p>
              <Link to="/forgot">Forgot Password?</Link>
            </p>
            <div className={styles.divider}>
              <span>OR</span>
            </div>
            <p>
              New to Kingdom? <Link to="/register">Create Account</Link>
            </p>
          </div>
        </div>
      </div>
    </StorefrontLayout>
  );
};

export default Login;
