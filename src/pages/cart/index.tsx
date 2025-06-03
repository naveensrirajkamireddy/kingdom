import React from "react";
import { useCart } from "../../context/cartContext";
import {
  Container,
  Row,
  Col,
  Image,
  Button,
  ListGroup,
  Badge,
} from "react-bootstrap";
import { useHistory } from "react-router";

const CartPage: React.FC = () => {
  const { cart, removeFromCart, clearCart } = useCart();
  const history = useHistory();

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <Container className="py-4">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ListGroup variant="flush">
            {cart.map((item) => (
              <ListGroup.Item
                key={item.productId}
                className="d-flex align-items-center justify-content-between"
              >
                <div className="d-flex align-items-center p-2">
                  <Image
                    src={item.imageUrl}
                    rounded
                    style={{
                      width: 80,
                      height: 80,
                      objectFit: "cover",
                      marginRight: 10,
                    }}
                  />
                  <div>
                    <h5>{item.productName}</h5>
                    <p className="mb-0">Price: ₹{item.price.toFixed(2)}</p>
                    <p className="mb-0">Quantity: {item.quantity}</p>
                  </div>
                </div>
                <Button
                  variant="outline-danger"
                  size="sm"
                  onClick={() => removeFromCart(item.productId)}
                >
                  Remove
                </Button>
              </ListGroup.Item>
            ))}
          </ListGroup>

          <div className="mt-4">
            <Row>
              <Col>
                <h4 className="text-bold float-end">
                  Total: ₹{totalPrice.toFixed(2)}
                </h4>
              </Col>
            </Row>
            <div className="d-flex gap-2 float-end">
              <Button variant="outline-secondary" onClick={clearCart}>
                Clear Cart
              </Button>
              <Button onClick={() => history.push("/checkout")} variant="dark">
                Proceed to Checkout
              </Button>
            </div>
          </div>
        </>
      )}
    </Container>
  );
};

export default CartPage;
