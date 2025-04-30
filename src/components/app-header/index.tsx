import {
  IonButton,
  IonButtons,
  IonHeader,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

const AppHeader: React.FC = () => {
  return (
    <IonHeader>
      <IonToolbar>
        <IonTitle>
          {/* The<b>Kingdom</b>Fashion */}
          <img
            src="./kingdom-logo.png"
            className="p-4"
            style={{ width: "18%" }}
          />
        </IonTitle>
        <IonButtons slot="end">
          <IonButton>Home</IonButton>
          <IonButton>Shop</IonButton>
          <IonButton>Mens Wear</IonButton>
          <IonButton>Womens Wear</IonButton>
          <IonButton>Kids Wear</IonButton>
          <IonButton>Accessories</IonButton>
          <IonButton color={"danger"} fill="solid">
            Login/Signup
          </IonButton>
        </IonButtons>
      </IonToolbar>
    </IonHeader>
  );
};

export default AppHeader;
