import React, { useEffect, useState } from "react";
import { useCart } from "../../context/cartContext";
import { useUser } from "../../context/userContext";
import StorefrontLayout from "../layout";
import {
  useAddAddressMutation,
  useGetAllAddressesQuery,
  useGetCartQuery,
  usePlaceOrderMutation,
} from "../../graphql/generated";
import {
  IonButton,
  IonIcon,
  IonRadioGroup,
  IonRadio,
  IonRow,
  IonCol,
  IonModal,
  useIonLoading,
} from "@ionic/react";
import { useHistory } from "react-router";
import { raiseErrorAlert, raiseSuccessAlert } from "../../utils";
import { Container } from "react-bootstrap";
import {
  locationOutline,
  cardOutline,
  addOutline,
  closeOutline,
  saveOutline,
  shieldCheckmarkOutline,
  arrowBackOutline,
} from "ionicons/icons";
import "./Checkout.css";

const Checkout: React.FC = () => {
  const { clearCart } = useCart();
  const { user } = useUser();
  const history = useHistory();
  const [present, dismiss] = useIonLoading();

  const [selectedAddressId, setSelectedAddressId] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("COD");
  const [cart, setCart] = useState<any[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [addressForm, setAddressForm] = useState({
    line1: "",
    line2: "",
    city: "",
    state: "",
    zip: "",
    country: "India",
  });

  const { data: cartData } = useGetCartQuery();
  const { data: addressData, refetch } = useGetAllAddressesQuery({
    variables: { customerId: user?.customerId || "" },
    skip: !user?.customerId,
  });

  const [addAddressMutation] = useAddAddressMutation();
  const [placeOrderMutation] = usePlaceOrderMutation();

  useEffect(() => {
    if (cartData?.getCartItems) setCart(cartData.getCartItems);
  }, [cartData]);

  const handleSaveAddress = async () => {
    if (!addressForm.line1 || !addressForm.city || !addressForm.zip)
      return raiseErrorAlert("Required fields missing.");
    try {
      await present("Registering Address...");
      await addAddressMutation({
        variables: {
          customerId: user?.customerId!,
          addressLine1: addressForm.line1,
          addressLine2: addressForm.line2,
          city: addressForm.city,
          state: addressForm.state,
          postalCode: addressForm.zip,
          country: addressForm.country,
          isDefault: false,
        },
      });
      refetch();
      setIsModalOpen(false);
    } catch (err: any) {
      raiseErrorAlert(err.message);
    } finally {
      dismiss();
    }
  };

  const handleCheckout = async () => {
    if (!selectedAddressId)
      return raiseErrorAlert("Please select a delivery address.");
    try {
      await present("Finalizing Order...");
      const response = await placeOrderMutation({
        variables: {
          addressId: selectedAddressId,
          paymentMode: paymentMethod,
          input: cart.map((i) => ({
            productId: i.productId,
            variantId: i.variantId,
            quantity: i.quantity,
            price: i.price,
            finalPrice: i.finalPrice,
            discType: i.discType,
            discValue: i.discValue,
          })),
        },
      });

      if (response.data?.placeOrder) {
        raiseSuccessAlert("Order placed successfully.");
        clearCart();
        history.push("/home");
      }
    } catch (err: any) {
      raiseErrorAlert("Checkout failed.");
    } finally {
      dismiss();
    }
  };

  const totalPrice = cart.reduce(
    (sum, i) => sum + i.finalPrice * i.quantity,
    0,
  );

  return (
    <StorefrontLayout>
      <div className="checkout-page-wrapper">
        <Container>
          {/* Progress Stepper - Synced with Cart */}
          <div className="checkout-stepper">
            <div className="step visited" onClick={() => history.push("/cart")}>
              <span>01</span> Bag
            </div>
            <div className="step-line active"></div>
            <div className="step active">
              <span>02</span> Details
            </div>
            <div className="step-line"></div>
            <div className="step">
              <span>03</span> Payment
            </div>
          </div>

          <div className="checkout-main-header">
            <h1 className="serif-title">Checkout</h1>
            <p className="item-count-label">Finalize your delivery details</p>
          </div>

          <IonRow className="gx-lg-5">
            <IonCol size="12" sizeLg="8">
              {/* ADDRESS SECTION */}
              <section className="checkout-white-card">
                <div className="section-header-flex">
                  <div className="d-flex align-items-center gap-2">
                    <IonIcon icon={locationOutline} className="gold-icon" />
                    <h4 className="card-section-title">Shipping Address</h4>
                  </div>
                  <button
                    className="minimal-text-btn"
                    onClick={() => setIsModalOpen(true)}
                  >
                    <IonIcon icon={addOutline} /> Add New
                  </button>
                </div>

                <IonRadioGroup
                  value={selectedAddressId}
                  onIonChange={(e) => setSelectedAddressId(e.detail.value)}
                >
                  <div className="address-tiles-container">
                    {addressData?.getAllAddresses?.map((addr) => (
                      <div
                        key={addr.id}
                        className={`premium-address-tile ${selectedAddressId === addr.id ? "selected" : ""}`}
                        onClick={() => setSelectedAddressId(addr.id)}
                      >
                        <div className="tile-info">
                          <span className="city-caps">{addr.city}</span>
                          <p className="addr-line">{addr.addressLine1}</p>
                          <p className="addr-sub">
                            {addr.state}, {addr.postalCode}
                          </p>
                        </div>
                        <IonRadio
                          value={addr.id}
                          mode="md"
                          className="custom-radio"
                        />
                      </div>
                    ))}
                  </div>
                </IonRadioGroup>
              </section>

              {/* PAYMENT SECTION */}
              <section className="checkout-white-card">
                <div className="d-flex align-items-center gap-2 mb-4">
                  <IonIcon icon={cardOutline} className="gold-icon" />
                  <h4 className="card-section-title">Payment Method</h4>
                </div>
                <IonRadioGroup
                  value={paymentMethod}
                  onIonChange={(e) => setPaymentMethod(e.detail.value)}
                >
                  <div className="payment-options-row">
                    <div
                      className={`pay-tile ${paymentMethod === "COD" ? "active" : ""}`}
                    >
                      <IonRadio value="COD" labelPlacement="end">
                        Cash on Delivery
                      </IonRadio>
                    </div>
                    <div
                      className={`pay-tile ${paymentMethod === "online" ? "active" : ""}`}
                    >
                      <IonRadio value="online" labelPlacement="end">
                        Online Payment
                      </IonRadio>
                    </div>
                  </div>
                </IonRadioGroup>
              </section>

              <button
                className="back-to-cart-link"
                onClick={() => history.push("/cart")}
              >
                <IonIcon icon={arrowBackOutline} className="me-2" />
                Return to Bag
              </button>
            </IonCol>

            {/* STICKY SUMMARY */}
            <IonCol size="12" sizeLg="4">
              <aside className="checkout-summary-container">
                <div className="summary-card-premium">
                  <h4 className="summary-title">Summary</h4>
                  <div className="summary-scroll-area">
                    {cart.map((item) => (
                      <div key={item.variantId} className="summary-entry">
                        <span className="entry-name">
                          {item.productName} <em>× {item.quantity}</em>
                        </span>
                        <span className="entry-price">
                          ₹{(item.finalPrice * item.quantity).toLocaleString()}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="summary-divider" />

                  <div className="summary-total-row">
                    <span>Total Investment</span>
                    <span className="total-val">
                      ₹{totalPrice.toLocaleString()}
                    </span>
                  </div>

                  <button
                    className="premium-checkout-btn"
                    onClick={handleCheckout}
                    disabled={!selectedAddressId}
                  >
                    Place Your Order
                  </button>

                  <div className="secure-badge-row">
                    <IonIcon icon={shieldCheckmarkOutline} />
                    <span>256-Bit SSL Secured Payment</span>
                  </div>
                </div>
              </aside>
            </IonCol>
          </IonRow>
        </Container>

        {/* ADDRESS MODAL */}
        <IonModal
          isOpen={isModalOpen}
          onDidDismiss={() => setIsModalOpen(false)}
          className="premium-at-modal"
        >
          <div className="modal-inner-padding">
            <div className="modal-header-row">
              <h3 className="serif-subtitle">New Address</h3>
              <button
                className="close-btn"
                onClick={() => setIsModalOpen(false)}
              >
                <IonIcon icon={closeOutline} />
              </button>
            </div>

            <div className="at-input-group">
              <label>Street Address</label>
              <input
                value={addressForm.line1}
                onChange={(e) =>
                  setAddressForm({ ...addressForm, line1: e.target.value })
                }
              />
            </div>

            <div className="at-input-grid">
              <div className="at-input-group">
                <label>City</label>
                <input
                  value={addressForm.city}
                  onChange={(e) =>
                    setAddressForm({ ...addressForm, city: e.target.value })
                  }
                />
              </div>
              <div className="at-input-group">
                <label>Zip Code</label>
                <input
                  value={addressForm.zip}
                  onChange={(e) =>
                    setAddressForm({ ...addressForm, zip: e.target.value })
                  }
                />
              </div>
            </div>

            <button className="at-action-btn" onClick={handleSaveAddress}>
              Save Delivery Details
            </button>
          </div>
        </IonModal>
      </div>
    </StorefrontLayout>
  );
};

export default Checkout;
