import { IonButton, IonPage, IonContent } from "@ionic/react";
import axios from "axios";
import { v4 } from "uuid";
import { raiseErrorAlert } from "../../utils";

const PhonePePayment: React.FC = () => {
  const handlePayment = async () => {
    const response = await axios.post(
      "http://localhost:4000/api/phonepe/createPaymentURL",
      {
        amount: 100,
        merchantOrderId: v4(),
      }
    );
    const tokenUrl = response?.data?.redirectUrl;
    // 👆 Replace with actual token URL received from your backend

    const paymentCallback = (response: string) => {
      if (response === "USER_CANCEL") {
        alert("Payment was cancelled by the user.");
      } else if (response === "CONCLUDED") {
        alert("Payment process has concluded.");
        window.location.reload();
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
      raiseErrorAlert("PhonePeCheckout is not available.");
    }
  };

  return (
    <IonPage>
      <IonContent className="ion-padding">
        <IonButton expand="block" onClick={handlePayment}>
          Pay ₹100 via PhonePe
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default PhonePePayment;
