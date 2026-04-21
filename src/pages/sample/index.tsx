import { IonButton, IonPage, IonContent, IonHeader, IonToolbar, IonTitle, IonBackButton, IonButtons } from "@ionic/react";
import axios from "axios";
import { v4 } from "uuid";
import { useToast } from "../../context/toastContext";
import StorefrontLayout from "../layout";

const PhonePePayment: React.FC = () => {
  const { showSuccess, showError, showWarning } = useToast();

  const handlePayment = async () => {
    try {
      const response = await axios.post(
        "http://localhost:4000/api/phonepe/createPaymentURL",
        {
          amount: 100,
          merchantOrderId: v4(),
        }
      );
      const tokenUrl = response?.data?.redirectUrl;

      if (!tokenUrl) {
        showError("Unable to retrieve payment URL. Please try again.");
        return;
      }

      const paymentCallback = (response: string) => {
        if (response === "USER_CANCEL") {
          showWarning("Payment was cancelled by the user.");
        } else if (response === "CONCLUDED") {
          showSuccess("Payment process has concluded.");
          // You might want to navigate to a success page or refresh state
          // window.location.reload();
        }
      };

      // Check if PhonePeCheckout is available globally
      if ((window as any).PhonePeCheckout?.transact) {
        (window as any).PhonePeCheckout.transact({
          tokenUrl,
          callback: paymentCallback,
          type: "IFRAME",
        });
      } else {
        showError("PhonePe Checkout is not available on this device.");
      }
    } catch (error: any) {
      console.error("Payment error:", error);
      showError("An error occurred during payment processing.");
    }
  };

  return (
    <StorefrontLayout>
        <IonContent className="ion-padding">
          <div className="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: "60vh" }}>
            <h2 className="serif-title mb-4">Secure Checkout</h2>
            <p className="text-secondary mb-5 text-center">Experience premium, fast, and secure payments via PhonePe.</p>
            <IonButton expand="block" onClick={handlePayment} className="premium-action-btn" style={{ maxWidth: "300px", width: "100%" }}>
              Pay ₹100 via PhonePe
            </IonButton>
          </div>
        </IonContent>
    </StorefrontLayout>
  );
};

export default PhonePePayment;
