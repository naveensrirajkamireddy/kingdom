import React, { useEffect, useState } from "react";
import { IonIcon, IonSpinner } from "@ionic/react";
import { cubeOutline, arrowForwardOutline } from "ionicons/icons";
import { Link } from "react-router-dom";
import { useGetMyOrdersQuery } from "../../graphql/generated";
import { useUser } from "../../context/userContext";

const OrdersPage: React.FC = () => {
  const { user } = useUser();
  const [orders, setOrders] = useState<any[]>([]);

  const { data, loading } = useGetMyOrdersQuery({
    variables: {
      pagination: {
        page: 1,
        limit: 10,
      },
    },
    skip: !user?.authToken,
    context: {
      headers: {
        Authorization: `Bearer ${user?.authToken}`,
      },
    },
  });

  useEffect(() => {
    if (data?.getMyOrders?.data) {
      setOrders(data.getMyOrders.data);
    }
  }, [data]);

  // Helper to safely format dates if your backend returns them
  const formatDate = (dateString?: string) => {
    if (!dateString) return "Recent";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <div className="orders-book-wrapper">
      <div className="pane-header-flex">
        <div>
          <h2 className="pane-title">Order History</h2>
          <p className="pane-subtitle">
            Track, return, or repurchase items from past orders.
          </p>
        </div>
      </div>

      {loading ? (
        <div className="premium-loading-state">
          <IonSpinner name="crescent" />
          <p>Fetching your orders...</p>
        </div>
      ) : orders.length > 0 ? (
        <div className="premium-orders-list">
          {orders.map((order) => (
            <div key={order.id} className="premium-order-card">
              {/* Card Header (ID, Date, Status) */}
              <div className="order-card-header">
                <div className="order-meta">
                  <span className="order-number">
                    Order #{order.orderId || order.id?.substring(0, 8)}
                  </span>
                  <span className="order-date">
                    Placed on {formatDate(order.createdAt)}
                  </span>
                </div>
                <span
                  className={`status-badge status-${order.status?.toLowerCase() || "processing"}`}
                >
                  {order.status || "Processing"}
                </span>
              </div>

              {/* Card Body (Details & Actions) */}
              <div className="order-card-body">
                <div className="order-preview-info">
                  <div className="order-images-stack">
                    {/* Placeholder for item image - use order.previewImg if available */}
                    <img
                      src={order.previewImg || "/no-image.png"}
                      alt="Order Preview"
                      className="order-thumb"
                      onError={(e) => {
                        e.currentTarget.src = "/no-image.png";
                      }}
                    />
                    {order.itemCount > 1 && (
                      <div className="extra-items-badge">
                        +{order.itemCount - 1}
                      </div>
                    )}
                  </div>

                  <div className="order-summary-text">
                    <p className="item-count-text">
                      {order.itemCount || 1} Items
                    </p>
                    <h5 className="order-total-price">
                      ₹
                      {order.totalAmount?.toLocaleString() ||
                        order.total?.toLocaleString() ||
                        "0.00"}
                    </h5>
                  </div>
                </div>

                <div className="order-actions">
                  <Link
                    to={`/account/orders/${order.id}`}
                    className="premium-outline-btn"
                  >
                    View Details <IonIcon icon={arrowForwardOutline} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="premium-empty-state">
          <div className="empty-icon-circle">
            <IonIcon icon={cubeOutline} />
          </div>
          <h3>No orders yet</h3>
          <p>When you place an order, it will appear here.</p>
          <Link
            to="/shop"
            className="premium-action-btn mt-3"
            style={{ display: "inline-flex" }}
          >
            Start Shopping
          </Link>
        </div>
      )}
    </div>
  );
};

export default OrdersPage;
