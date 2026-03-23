import { IonButton, IonIcon, IonBadge, IonText } from "@ionic/react";
import { star, cartOutline, heartOutline } from "ionicons/icons";
import { Card } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import "./ShopProductCard.css";

interface ShopProductCardProps {
  id: string;
  name: string;
  images: string[];
  price: number;
  offerPrice?: number;
  brandName: string;
  onAddToCart: (id: string) => void;
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
  const history = useHistory();

  // Calculate Discount Percentage
  const discount = offerPrice
    ? Math.round(((offerPrice - price) / offerPrice) * 100)
    : 0;

  const goToDetail = () => history.push(`/detail/${id}`);

  return (
    <Card className="product-card-premium border-0" key={id}>
      <div className="image-container">
        {discount > 0 && (
          <IonBadge className="discount-tag">-{discount}%</IonBadge>
        )}
        <div className="wishlist-btn">
          <IonIcon icon={heartOutline} />
        </div>
        <Card.Img
          variant="top"
          src={images[0]}
          onClick={goToDetail}
          className="product-img-zoom"
        />
        <div className="hover-actions ion-hide-sm-down">
          <IonButton fill="solid" color="light" onClick={() => onAddToCart(id)}>
            <IonIcon icon={cartOutline} slot="start" />
            Quick Add
          </IonButton>
        </div>
      </div>

      <Card.Body
        className="px-2 pt-3 pb-0"
        onClick={goToDetail}
        style={{ cursor: "pointer" }}
      >
        <div className="d-flex justify-content-between align-items-center mb-1">
          <span className="brand-label text-uppercase">{brandName}</span>
          <div className="rating-pill">
            <IonIcon icon={star} />
            <span>{parseFloat(rating).toFixed(1)}</span>
          </div>
        </div>

        <Card.Title className="product-name text-truncate">{name}</Card.Title>

        <div className="price-section mt-2">
          <span className="current-price">
            ₹{price.toLocaleString("en-IN")}
          </span>
          {offerPrice && offerPrice > price && (
            <span className="original-price ms-2">
              ₹{offerPrice.toLocaleString("en-IN")}
            </span>
          )}
        </div>
      </Card.Body>

      <Card.Footer className="bg-transparent border-0 p-2 ion-hide-md-up">
        {/* Only visible on mobile for quick access */}
        <IonButton
          mode="ios"
          color="dark"
          expand="block"
          size="small"
          onClick={(e) => {
            e.stopPropagation();
            onAddToCart(id);
          }}
        >
          Add to Cart
        </IonButton>
      </Card.Footer>
    </Card>
  );
};

export default ShopProductCard;
