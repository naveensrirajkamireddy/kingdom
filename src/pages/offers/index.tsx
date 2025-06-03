import React from "react";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonCardContent,
  IonImg,
  IonText,
  IonBadge,
} from "@ionic/react";
import "./offers.css";
import { Container } from "react-bootstrap";

const sampleOffers = [
  {
    id: 1,
    title: "Flat 50% Off on Women's Sarees",
    image: "",
    badge: "Limited Time",
  },
  {
    id: 2,
    title: "Buy 1 Get 1 Free – Men's T-Shirts",
    image: "",
    badge: "BOGO",
  },
  {
    id: 3,
    title: "Upto 40% Off – Wedding Collection",
    image: "",
    badge: "Hot Deal",
  },
  {
    id: 4,
    title: "Summer Sale – 30% Off on Kurtis",
    image: "",
    badge: "Trending",
  },
];

const OffersPage: React.FC = () => {
  return (
    <>
      <Container fluid className="py-3">
        <h3>Exclusive Offers</h3>

        <IonGrid>
          <IonRow>
            {sampleOffers.map((offer) => (
              <IonCol size="12" size-md="6" size-lg="4" key={offer.id}>
                <IonCard className="offer-card">
                  <IonImg
                    src={offer.image || "./no-image.png"}
                    alt={offer.title}
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = "/no-image.png";
                    }}
                  />
                  <IonBadge color="warning" className="offer-badge">
                    {offer.badge}
                  </IonBadge>
                  <IonCardContent>
                    <IonText>
                      <h6>{offer.title}</h6>
                    </IonText>
                  </IonCardContent>
                </IonCard>
              </IonCol>
            ))}
          </IonRow>
        </IonGrid>
      </Container>
    </>
  );
};

export default OffersPage;
