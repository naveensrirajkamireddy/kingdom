import React, { useEffect, useState } from "react";
import {
  IonButton,
  IonIcon,
  IonBadge,
  IonRow,
  IonCol,
  IonText,
} from "@ionic/react";
import {
  cubeOutline,
  chevronForwardOutline,
  timeOutline,
  checkmarkCircleOutline,
  closeCircleOutline,
} from "ionicons/icons";
import { Link } from "react-router-dom";
import { useGetMyOrdersQuery } from "../../graphql/generated";
import { useUser } from "../../context/userContext";

const OrdersPage: React.FC = () => {
  const { user } = useUser();

  const { data, loading } = useGetMyOrdersQuery({
    // 1. You must provide the required pagination variables
    variables: {
      pagination: {
        page: 1,
        limit: 10,
      },
    },
    // 2. Best Practice: Skip the query if user or token isn't available yet
    skip: !user?.authToken,

    // 3. Your custom headers
    context: {
      headers: {
        Authorization: `Bearer ${user?.authToken}`,
      },
    },
  });
  // 1. Update the type definition (Check your generated.ts for the exact name)
  const [orders, setOrders] = useState<any[]>([]);

  useEffect(() => {
    if (data?.getMyOrders?.data) {
      setOrders(data.getMyOrders.data); // Access the .data array
    }
  }, [data]); // Added [data] dependency to avoid infinite loops

  console.log(orders);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Delivered":
        return "success";
      case "Processing":
        return "warning";
      case "Cancelled":
        return "danger";
      default:
        return "medium";
    }
  };

  return (
    <div className="orders-wrapper">
      <div className="section-header-flex">
        <h4 className="fw-bold">Order History</h4>
        <span className="text-muted small">{orders.length} orders placed</span>
      </div>

      {orders.length > 0 ? (
        <div className="orders-list">
          {orders.map((order) => (
            <div key={order.id} className="order-main-card">
              <div className="order-card-header">
                <div>
                  <span className="order-id">ID: {order.orderId}</span>
                </div>
                <IonBadge
                  color={getStatusColor(order.status)}
                  className="status-pill"
                >
                  {order.status}
                </IonBadge>
              </div>

              <div className="order-card-body">
                <div className="product-preview-box">
                  <img src={order.previewImg} alt="product" />
                  {order.itemCount > 1 && (
                    <div className="extra-count">+{order.itemCount - 1}</div>
                  )}
                </div>

                <div className="order-summary">
                  <IonText color="dark">
                    <h6>{/* Total: <b>₹{order.total.toFixed(2)}</b> */}</h6>
                  </IonText>
                  <p className="small text-muted">{order.itemCount} Items</p>
                </div>

                <div className="order-actions">
                  <IonButton
                    fill="outline"
                    color="dark"
                    size="small"
                    routerLink={`/account/orders/${order.id}`}
                  >
                    View Details
                  </IonButton>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <IonIcon icon={cubeOutline} />
          <h5>No orders yet</h5>
          <p>When you place an order, it will appear here.</p>
          <IonButton fill="solid" color="dark" routerLink="/shop">
            Start Shopping
          </IonButton>
        </div>
      )}
    </div>
  );
};

export default OrdersPage;
