import { IonButton, IonIcon, IonRouterLink } from "@ionic/react";
import { star } from "ionicons/icons";
import { Card } from "react-bootstrap";

interface ShopProductCardProps {
  id: string;
  name: string;
  images: string[];
  price: number;
  offerPrice?: number;
  brandName: string;
  onAddToCart: (id: number) => void;
  rating: any;
}

const ShopProductCard: React.FC<ShopProductCardProps> = ({
  id,
  name,
  images,
  price,
  offerPrice,
  brandName,
  rating,
  onAddToCart,
}) => {
  return (
    <IonRouterLink routerLink={`/detail/${id}`}>
      <Card className="h-100" key={id}>
        <Card.Img src={images[0]} />
        <Card.Body className="pb-0">
          <p>
            <small className="bg-warning p-1 rounded-2">{brandName}</small>
          </p>
          <Card.Subtitle>{name}</Card.Subtitle>
          <p className="mt-2 text-danger">
            ₹{price.toFixed(2)}
            {offerPrice && (
              <small
                className="text-muted ms-2"
                style={{ textDecoration: "line-through" }}
              >
                ₹{offerPrice.toFixed(2)}
              </small>
            )}
            <small className="bg-success text-white float-end p-1 rounded-2">
              <IonIcon ios={star} md={star} />
              {parseFloat(rating).toFixed(1)}
            </small>
          </p>
        </Card.Body>
        <Card.Footer className="bg-transparent border-0 pt-0 px-2">
          <IonButton color={"dark"} expand="full" className="bottom">
            Add to cart
          </IonButton>
        </Card.Footer>
      </Card>
    </IonRouterLink>
  );
};

export default ShopProductCard;
