import { IonContent, IonicSlides, IonPage } from "@ionic/react";
import AppHeader from "../../components/app-header";
import Slides from "../../components/slides";

const HomePage: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <AppHeader />
        <Slides />
      </IonContent>
    </IonPage>
  );
};

export default HomePage;
