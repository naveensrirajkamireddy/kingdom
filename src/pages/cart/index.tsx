import React, { useContext } from "react";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonButton,
  IonText,
} from "@ionic/react";
import { CartContext } from "../../context/cartContext";
import { Container } from "react-bootstrap";

// Mock Context or useContext
// Replace this with your actual cart context


const CartPage: React.FC = () => {
  const { cartItems, removeFromCart, updateQuantity, getTotal } = useContext(CartContext);

  return (
    <IonPage>

      <IonContent className="ion-padding">
        <Container fluid>
            <h4>Cart</h4>
            {cartItems.length === 0 ? (
          <IonText color="medium">Your cart is empty.</IonText>
        ) : (
          <>
            <IonList>
              {cartItems.map((item) => (
                <IonItem key={item.productId}>
                  <IonLabel>
                    <h2>{item.productName}</h2>
                    <p>Price: ₹{item.price}</p>
                    <p>Subtotal: ₹{item.price * item.quantity}</p>
                  </IonLabel>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <IonButton
                      size="small"
                      onClick={() => updateQuantity(item.productId, item.quantity - 1)}
                      disabled={item.quantity <= 1}
                    >
                      -
                    </IonButton>
                    <IonText className="ion-margin-horizontal">{item.quantity}</IonText>
                    <IonButton
                      size="small"
                      onClick={() => updateQuantity(item.productId, item.quantity + 1)}
                    >
                      +
                    </IonButton>
                    <IonButton
                      size="small"
                      fill="clear"
                      color="danger"
                      onClick={() => removeFromCart(item.productId)}
                    >
                      Remove
                    </IonButton>
                  </div>
                </IonItem>
              ))}
            </IonList>

            {/* Cart Summary */}
            <div style={{ marginTop: "20px", textAlign: "right" }}>
              <h3>Total: ₹{getTotal()}</h3>
              <IonButton color="primary" expand="block">
                Proceed to Checkout
              </IonButton>
            </div>
          </>
        )}
        </Container>
      </IonContent>
    </IonPage>
  );
};

export default CartPage;
