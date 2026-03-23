import React, { useEffect } from "react";
import { useCart } from "../../context/cartContext";
import {
  IonButton,
  IonIcon,
  IonText,
  IonSpinner,
  useIonLoading,
} from "@ionic/react";
import {
  trashOutline,
  addOutline,
  removeOutline,
  arrowForwardOutline,
  bagHandleOutline,
  shieldCheckmarkOutline,
  arrowBackOutline,
} from "ionicons/icons";
import StorefrontLayout from "../layout";
import { useHistory } from "react-router";
import { Container, Row, Col } from "react-bootstrap";
import { useGetCartQuery } from "../../graphql/generated";
import "./CartPage.css";

const CartPage: React.FC = () => {
  const { removeFromCart, updateQuantity, clearCart } = useCart();
  const history = useHistory();
  const [present, dismiss] = useIonLoading();

  const { data, refetch, loading } = useGetCartQuery({
    fetchPolicy: "network-only",
  });

  const cartList = data?.getCartItems || [];

  const calculatePrice = (item: any) => {
    const { price, discType, discValue } = item;
    if (discType === "flat" && discValue > 0) return price - discValue;
    if (discType === "percent" && discValue > 0)
      return price - (price * discValue) / 100;
    return price;
  };

  const totalMrp = cartList.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const totalAmount = cartList.reduce(
    (sum, item) => sum + calculatePrice(item) * item.quantity,
    0,
  );
  const totalSavings = totalMrp - totalAmount;

  const handleUpdateQty = async (item: any, newQty: number) => {
    if (newQty < 1) return;
    await updateQuantity(item, newQty);
    await refetch();
  };

  const handleRemoveItem = async (item: any) => {
    await present({ message: "Refining bag...", duration: 500 });
    await removeFromCart(item);
    await refetch();
    dismiss();
  };

  if (loading && cartList.length === 0) {
    return (
      <StorefrontLayout>
        <div className="cart-loader-container">
          <IonSpinner name="lines-sharp" color="dark" />
          <p>Curating your selection...</p>
        </div>
      </StorefrontLayout>
    );
  }

  return (
    <StorefrontLayout>
      <div className="cart-page-wrapper">
        <Container>
          {/* Progress Stepper */}
          <div className="checkout-stepper d-none d-md-flex">
            <div className="step active">
              <span>01</span> Bag
            </div>
            <div className="step-line"></div>
            <div className="step">
              <span>02</span> Details
            </div>
            <div className="step-line"></div>
            <div className="step">
              <span>03</span> Payment
            </div>
          </div>

          {cartList.length === 0 ? (
            <div className="empty-cart-view">
              <div className="empty-icon-box">
                <IonIcon icon={bagHandleOutline} />
              </div>
              <h2>Your bag is currently empty</h2>
              <p>
                Explore our latest collections to find your next signature
                piece.
              </p>
              <button
                className="premium-outline-btn"
                onClick={() => history.push("/shop")}
              >
                Return to Shop
              </button>
            </div>
          ) : (
            <>
              <div className="cart-main-header">
                <h1 className="serif-title">Shopping Bag</h1>
                <p className="item-count-label">
                  {cartList.length} Selected Pieces
                </p>
              </div>

              <Row className="gx-lg-5">
                <Col lg={8}>
                  <div className="cart-items-list">
                    {cartList.map((item: any) => (
                      <div key={item.id} className="cart-item-card">
                        <div className="item-image-box">
                          <img src={item.image} alt={item.productName} />
                        </div>

                        <div className="item-info-box">
                          <div className="d-flex justify-content-between align-items-start">
                            <div>
                              <span className="brand-micro-tag">
                                Collection Piece
                              </span>
                              <h4 className="item-name">{item.productName}</h4>
                              <p className="item-meta">
                                Size: Default | Color: Standard
                              </p>
                            </div>
                            <button
                              className="btn-icon-only"
                              onClick={() => handleRemoveItem(item)}
                            >
                              <IonIcon icon={trashOutline} />
                            </button>
                          </div>

                          <div className="item-controls-row">
                            <div className="premium-qty-selector">
                              <button
                                onClick={() =>
                                  handleUpdateQty(item, item.quantity - 1)
                                }
                                disabled={item.quantity <= 1}
                              >
                                <IonIcon icon={removeOutline} />
                              </button>
                              <span className="qty-val">{item.quantity}</span>
                              <button
                                onClick={() =>
                                  handleUpdateQty(item, item.quantity + 1)
                                }
                              >
                                <IonIcon icon={addOutline} />
                              </button>
                            </div>

                            <div className="item-pricing">
                              {item.discValue > 0 && (
                                <span className="mrp-strikethrough">
                                  ₹{item.price.toLocaleString()}
                                </span>
                              )}
                              <span className="final-price">
                                ₹{calculatePrice(item).toLocaleString()}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}

                    <div className="cart-actions-footer">
                      <button
                        className="continue-shopping-link"
                        onClick={() => history.push("/shop")}
                      >
                        <IonIcon icon={arrowBackOutline} className="me-2" />
                        Continue Browsing
                      </button>

                      <button className="clear-bag-minimal" onClick={clearCart}>
                        Clear All Items
                      </button>
                    </div>
                  </div>
                </Col>

                <Col lg={4}>
                  <aside className="summary-sidebar-sticky">
                    <div className="summary-card-premium">
                      <h4 className="summary-title">Summary</h4>

                      <div className="summary-entry">
                        <span>Subtotal (MRP)</span>
                        <span>₹{totalMrp.toLocaleString()}</span>
                      </div>

                      {totalSavings > 0 && (
                        <div className="summary-entry discount">
                          <span>Seasonal Benefit</span>
                          <span>- ₹{totalSavings.toLocaleString()}</span>
                        </div>
                      )}

                      <div className="summary-entry">
                        <span>Shipping</span>
                        <span className="free-tag">Complimentary</span>
                      </div>

                      <div className="summary-total-row">
                        <span>Estimated Total</span>
                        <span className="total-val">
                          ₹{totalAmount.toLocaleString()}
                        </span>
                      </div>

                      <button
                        className="premium-checkout-btn"
                        onClick={() => history.push("/checkout")}
                      >
                        Proceed to Checkout{" "}
                        <IonIcon icon={arrowForwardOutline} />
                      </button>

                      <div className="secure-badge-row">
                        <IonIcon icon={shieldCheckmarkOutline} />
                        <span>Secure Checkout | 256-bit Encryption</span>
                      </div>
                    </div>
                  </aside>
                </Col>
              </Row>
            </>
          )}
        </Container>
      </div>
    </StorefrontLayout>
  );
};

export default CartPage;
