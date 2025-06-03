import React from "react";
import { Table, Card, Badge, Spinner, Alert } from "react-bootstrap";
import { useGetOrdersQuery } from "../../graphql/generated";
import { useHistory } from "react-router-dom";
import { useUser } from "../../context/userContext";

const OrdersPage: React.FC = () => {
  const { user } = useUser();
  const history = useHistory();

  const { data, loading, error } = useGetOrdersQuery({
    variables: { customerId: user?.customerId || "" },
    skip: !user?.customerId,
  });

  if (loading)
    return <Spinner animation="border" className="d-block mx-auto mt-5" />;
  if (error) return <Alert variant="danger">Error loading orders.</Alert>;

  return (
    <div className="p-4">
      {data?.getOrders.length === 0 ? (
        <Alert variant="info">You have no orders.</Alert>
      ) : (
        <Card>
          <Card.Body>
            <Table responsive hover className="align-middle text-center">
              <thead className="table-dark">
                <tr>
                  <th>Order ID</th>
                  <th>Customer</th>
                  <th>Total</th>
                  <th>Status</th>
                  <th>Details</th>
                </tr>
              </thead>
              <tbody>
                {data?.getOrders.map((order) => (
                  <tr key={order.id}>
                    <td>{order.id}</td>
                    <td>{user?.customerName}</td>
                    <td className="fw-bold text-success">
                      ₹{order.totalAmount.toFixed(2)}
                    </td>
                    <td>
                      <Badge
                        bg={order.status === "pending" ? "warning" : "success"}
                      >
                        {order.status}
                      </Badge>
                    </td>
                    <td>
                      <button
                        className="btn btn-outline-primary btn-sm"
                        onClick={() => history.push(`/order/${order.id}`)}
                      >
                        View Details
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Card.Body>
        </Card>
      )}
    </div>
  );
};

export default OrdersPage;
