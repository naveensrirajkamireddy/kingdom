// LoginModal.tsx
import {
  IonModal,
  IonButton,
  IonContent,
  IonInput,
  IonLabel,
  IonItem,
  IonRow,
  IonCol,
} from "@ionic/react";
import { useState } from "react";
import "./LoginModal.css";
import {
  useCreateCustomerMutation,
  useLoginCustomerMutation,
} from "../../graphql/generated";
import { ApolloError } from "@apollo/client";
import { raiseErrorAlert } from "../../utils";
import { useHistory } from "react-router";
import { useUser } from "../../context/userContext";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
  const [isLogin, setIsLogin] = useState(true); // Toggle state

  const [loginFormData, setLoginFormData] = useState({
    username: "",
    password: "",
  });

  const [registerData, setRegisterData] = useState({
    email: "",
    password: "",
    name: "",
    mobile: "",
  });

  const [confirmPassword, setConfirmPassword] = useState("");

  const [customerRegistration] = useCreateCustomerMutation();
  const [loginMutation] = useLoginCustomerMutation();

  const history = useHistory();
    const { setUser } = useUser();

  const handleSubmit = async () => {
    try {
      if (isLogin) {
        console.log("Logging in with", loginFormData);
        await loginMutation({
          variables: {
            username: loginFormData.username,
            password: loginFormData.password,
          },
        })
          .then((res) => {
            const customer = res?.data?.loginCustomer;
              sessionStorage.setItem("isLoggedIn", "true");
              sessionStorage.setItem("customerData", JSON.stringify(customer));
              if(customer)
                setUser(customer); 
              onClose();
            history.push("/account");
          })
          .catch((error) => {
            raiseErrorAlert(error?.message);
          });
      } else {
        if (registerData.password !== confirmPassword) {
          alert("Passwords do not match!");
          return;
        }
        console.log("Registering with", registerData);
        await customerRegistration({
          variables: {
            input: {
              customerName: registerData.name,
              email: registerData.email,
              mobile: registerData.mobile,
              password: registerData.password,
            },
          },
        });
      }
    } catch (error: any) {
      const errorMessage = error.message;
      if (error instanceof ApolloError) {
        if (errorMessage.includes("ER_DUP_ENTRY")) {
          raiseErrorAlert("Email/Mobile Number already Registered.");
        } else {
          raiseErrorAlert(errorMessage);
        }
      }
    }
  };

  return (
    <IonModal isOpen={isOpen} onDidDismiss={onClose} className="login-modal">
      <IonContent className="ion-padding">
        <IonRow className="h-100">
          <IonCol>
            <div className="login-wrapper">
              <div className="login-form">
                <p className="text-center">
                  <img src="/kingdom-logo.png" className="w-50 my-2" />
                </p>

                {!isLogin && (
                  <IonItem>
                    <IonLabel position="stacked">Name</IonLabel>
                    <IonInput
                      value={registerData.name}
                      onIonChange={(e) =>
                        setRegisterData({
                          ...registerData,
                          name: e.detail.value!,
                        })
                      }
                    />
                  </IonItem>
                )}

                {isLogin ? (
                  <IonItem>
                    <IonLabel position="stacked">
                      Username (Email/Mobile)
                    </IonLabel>
                    <IonInput
                      value={loginFormData.username}
                      onIonChange={(e) =>
                        setLoginFormData({
                          ...loginFormData,
                          username: e.detail.value!,
                        })
                      }
                    />
                  </IonItem>
                ) : (
                  <>
                    <IonItem>
                      <IonLabel position="stacked">Email</IonLabel>
                      <IonInput
                        type="email"
                        value={registerData.email}
                        onIonChange={(e) =>
                          setRegisterData({
                            ...registerData,
                            email: e.detail.value!,
                          })
                        }
                      />
                    </IonItem>
                    <IonItem>
                      <IonLabel position="stacked">Mobile</IonLabel>
                      <IonInput
                        type="number"
                        value={registerData.mobile}
                        className="no-spinner"
                        onIonChange={(e) =>
                          setRegisterData({
                            ...registerData,
                            mobile: e.detail.value!,
                          })
                        }
                      />
                    </IonItem>
                  </>
                )}

                <IonItem>
                  <IonLabel position="stacked">Password</IonLabel>
                  <IonInput
                    type="password"
                    value={
                      isLogin ? loginFormData.password : registerData.password
                    }
                    onIonChange={(e) =>
                      isLogin
                        ? setLoginFormData({
                            ...loginFormData,
                            password: e.detail.value!,
                          })
                        : setRegisterData({
                            ...registerData,
                            password: e.detail.value!,
                          })
                    }
                  />
                </IonItem>

                {!isLogin && (
                  <IonItem>
                    <IonLabel position="stacked">Confirm Password</IonLabel>
                    <IonInput
                      type="password"
                      value={confirmPassword}
                      onIonChange={(e) => setConfirmPassword(e.detail.value!)}
                    />
                  </IonItem>
                )}

                <IonButton
                  expand="full"
                  className="ion-margin-top mx-3"
                  onClick={handleSubmit}
                >
                  {isLogin ? "Login" : "Register"}
                </IonButton>

                <IonButton
                  fill="clear"
                  onClick={() => setIsLogin(!isLogin)}
                  className="text-center"
                >
                  {isLogin
                    ? "Don't have an account? Register"
                    : "Already have an account? Login"}
                </IonButton>

                <IonButton
                  fill="clear"
                  className="close-button"
                  color={"danger"}
                  onClick={onClose}
                >
                  Cancel
                </IonButton>
              </div>
            </div>
          </IonCol>
        </IonRow>
      </IonContent>
    </IonModal>
  );
};

export default LoginModal;
