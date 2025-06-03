import React from "react";
import { useParams } from "react-router-dom";
import { useGetOrdersQuery } from "../../graphql/generated";
import { Table, Card, Badge, Spinner, Alert, Container } from "react-bootstrap";
import { useUser } from "../../context/userContext";

const OrderDetailPage: React.FC = () => {
  const { orderId } = useParams<{ orderId: string }>();
  const { user } = useUser();

  const { data, loading, error } = useGetOrdersQuery({
    variables: { customerId: user?.customerId || "" },
    skip: !user?.customerId,
  });

  if (loading)
    return <Spinner animation="border" className="d-block mx-auto mt-5" />;
  if (error)
    return <Alert variant="danger">Error loading order details.</Alert>;

  const order = data?.getOrders.find((o) => o.id === orderId);
  if (!order) return <Alert variant="warning">Order not found.</Alert>;

  return (
    <Container fluid>
      <div className="p-4">
        <h2 className="fw-bold text-primary mb-4">Order Details</h2>
        <Card className="shadow-lg mb-4">
          <Card.Body>
            <p>
              <strong>Order ID:</strong> {order.id}
            </p>
            <p>
              <strong>Customer:</strong> {user?.customerName}
            </p>
            <p>
              <strong>Total Amount:</strong>{" "}
              <span className="fw-bold text-success">
                ₹{order.totalAmount.toFixed(2)}
              </span>
            </p>
            <p>
              <strong>Payment Method:</strong>{" "}
              <Badge bg="info">{order.paymentMethod.toUpperCase()}</Badge>
            </p>
            <p>
              <strong>Status:</strong>{" "}
              <Badge bg={order.status === "pending" ? "warning" : "success"}>
                {order.status}
              </Badge>
            </p>
          </Card.Body>
        </Card>

        <h4 className="fw-bold mb-3">Items</h4>
        <Card className="shadow">
          <Card.Body>
            <Table
              responsive
              bordered
              hover
              className="align-middle text-center"
            >
              <thead className="table-dark">
                <tr>
                  <th>Product</th>
                  <th>Product ID</th>
                  <th>Quantity</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {order.items.map((item) => (
                  <tr key={item.id}>
                    <td>{item.productName}</td>
                    <td>{item.productId}</td>
                    <td>{item.quantity}</td>
                    <td>₹{item.price.toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Card.Body>
        </Card>
      </div>
    </Container>
  );
};

export default OrderDetailPage;
