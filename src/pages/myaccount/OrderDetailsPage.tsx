import React from "react";
import { IonIcon, IonSpinner } from "@ionic/react";
import {
  arrowBackOutline,
  documentTextOutline,
  cubeOutline,
} from "ionicons/icons";
import { useParams, useHistory } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import { useGetOrderByIdQuery } from "../../graphql/generated"; // Adjust path as needed
import { useUser } from "../../context/userContext";

const OrderDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const history = useHistory();
  const { user } = useUser();

  const { data, loading, error } = useGetOrderByIdQuery({
    variables: { orderId: id },
    skip: !id || !user?.authToken,
    context: {
      headers: {
        Authorization: `Bearer ${user?.authToken}`,
      },
    },
  });

  if (loading) {
    return (
      <div className="premium-loading-state mt-5">
        <IonSpinner name="crescent" />
        <p>Retrieving order details...</p>
      </div>
    );
  }

  if (error || !data?.getOrderByID) {
    return (
      <div className="premium-empty-state mt-5">
        <div className="empty-icon-circle">
          <IonIcon icon={cubeOutline} />
        </div>
        <h3>Order Not Found</h3>
        <p>We couldn't locate the details for this order.</p>
        <button
          className="premium-action-btn mt-3"
          onClick={() => history.goBack()}
        >
          Go Back
        </button>
      </div>
    );
  }

  const { ordersData, orderItems, addressData, customerName } =
    data.getOrderByID;

  // Helper to format date
  const formatDate = (dateString?: string) => {
    if (!dateString) return "N/A";
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="order-details-wrapper">
      {/* Top Navigation Bar */}
      <div className="order-nav-bar">
        <button className="back-link-btn" onClick={() => history.goBack()}>
          <IonIcon icon={arrowBackOutline} /> Back to Orders
        </button>
        <button className="text-action-btn">
          <IonIcon icon={documentTextOutline} /> Download Invoice
        </button>
      </div>

      {/* Main Order Header */}
      <div className="order-header-block">
        <div className="header-meta">
          <h1 className="order-title">
            Order #{ordersData?.orderId || ordersData?.id?.substring(0, 8)}
          </h1>
          <p className="order-date">
            Placed on {formatDate(ordersData?.createdAt)}
          </p>
        </div>
        <span
          className={`status-badge status-${ordersData?.status?.toLowerCase() || "processing"}`}
        >
          {ordersData?.status || "Processing"}
        </span>
      </div>

      <Row className="gy-5">
        {/* LEFT COLUMN: Items List */}
        <Col lg={8}>
          <div className="order-section">
            <h3 className="section-title">Purchased Items</h3>
            <div className="order-items-list">
              {orderItems?.map((item) => (
                <div key={item.id} className="order-item-row">
                  <div className="item-image-box">
                    <img
                      src={item.primaryImage || "/no-image.png"} // Fallback since query doesn't fetch image
                      alt={item.productName}
                    />
                  </div>
                  <div className="item-details">
                    <h4 className="item-name">{item.productName}</h4>
                    <p className="item-meta">
                      Size: {item.size || "Standard"} | Qty: {item.quantity}
                    </p>
                    {item.discValue > 0 && (
                      <span className="item-discount-tag">
                        {item.discType === "percent"
                          ? `${item.discValue}% OFF`
                          : `₹${item.discValue} OFF`}
                      </span>
                    )}
                  </div>
                  <div className="item-price-block">
                    <span className="item-final-price">
                      ₹{(item.price * item.quantity).toFixed(2)}
                    </span>
                    {item.price > item.price && (
                      <span className="item-original-price">
                        ₹{(item.price * item.quantity).toFixed(2)}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Col>

        {/* RIGHT COLUMN: Summary & Shipping */}
        <Col lg={4}>
          <div className="order-sidebar">
            {/* Order Summary Card */}
            <div className="summary-card">
              <h3 className="section-title mb-4">Payment Summary</h3>

              <div className="summary-line">
                <span>Payment Mode</span>
                <span className="fw-600">
                  {ordersData?.paymentMode || "Online"}
                </span>
              </div>
              <div className="summary-line">
                <span>Transaction ID</span>
                <span className="text-muted">
                  {ordersData?.transactionId || "N/A"}
                </span>
              </div>

              <div className="nav-divider my-3"></div>

              <div className="summary-line total-line">
                <span>Total Amount</span>
                <span>
                  ₹{ordersData?.totalAmount?.toFixed(2) || "0.00"}
                </span>
              </div>
            </div>

            {/* Shipping Details Card */}
            <div className="shipping-card mt-4">
              <h3 className="section-title mb-3">Delivery Address</h3>
              <div className="shipping-address-block">
                <p className="shipping-name">
                  {customerName || user?.customerName}
                </p>
                {addressData ? (
                  <p className="shipping-text">
                    {addressData.addressLine1}
                    {addressData.addressLine2 && (
                      <>
                        <br />
                        {addressData.addressLine2}
                      </>
                    )}
                    <br />
                    {addressData.city}, {addressData.state}{" "}
                    {addressData.postalCode}
                    <br />
                    {addressData.country}
                  </p>
                ) : (
                  <p className="shipping-text text-muted">
                    No address details available.
                  </p>
                )}
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default OrderDetailsPage;
