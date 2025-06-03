import React, { useState } from "react";
import { useCart } from "../../context/cartContext";
import { useUser } from "../../context/userContext";
import { useLayout } from "../layout";
import {
  useAddAddressMutation,
  useGetAllAddressesQuery,
  usePlaceOrderMutation,
} from "../../graphql/generated";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  ListGroup,
  Alert,
} from "react-bootstrap";
import { raiseErrorAlert, raiseSuccessAlert } from "../../utils";
import { useHistory } from "react-router";

const Checkout: React.FC = () => {
  const { cart, clearCart } = useCart();
  const { user } = useUser();
  const { setShowLogin } = useLayout();

  const [selectedAddressId, setSelectedAddressId] = useState<string>("");
  const [newAddressLine1, setNewAddressLine1] = useState<string>("");
  const [newAddressLine2, setNewAddressLine2] = useState<string>("");
  const [newCity, setNewCity] = useState<string>("");
  const [newState, setNewState] = useState<string>("");
  const [newPostalCode, setNewPostalCode] = useState<string>("");
  const [newCountry, setNewCountry] = useState<string>("");
  const [paymentMethod, setPaymentMethod] = useState<string>("");

  const { data: addressData, refetch } = useGetAllAddressesQuery({
    variables: { customerId: user?.customerId || "" },
    skip: !user?.customerId,
  });

  const [addAddressMutation] = useAddAddressMutation();

  const handleAddNewAddress = async () => {
    if (
      !newAddressLine1 ||
      !newCity ||
      !newState ||
      !newPostalCode ||
      !newCountry
    ) {
      raiseErrorAlert(
        "Please fill in all required fields for the new address."
      );
      return;
    }

    try {
      await addAddressMutation({
        variables: {
          customerId: user?.customerId as string,
          addressLine1: newAddressLine1,
          addressLine2: newAddressLine2,
          city: newCity,
          state: newState,
          postalCode: newPostalCode,
          country: newCountry,
          isDefault: false,
        },
      });
      refetch();
      raiseSuccessAlert("New address saved!");
      setNewAddressLine1("");
      setNewAddressLine2("");
      setNewCity("");
      setNewState("");
      setNewPostalCode("");
      setNewCountry("");
    } catch (error: any) {
      raiseErrorAlert(error?.message || "Failed to save address.");
    }
  };

  const [placeOrderMutation] = usePlaceOrderMutation();
  const navigate = useHistory();

  const handleCheckout = async () => {
    if (!user) {
      setShowLogin(true);
      return;
    }

    if (!selectedAddressId) {
      raiseErrorAlert("Please select a delivery address.");
      return;
    }

    if (!paymentMethod) {
      raiseErrorAlert("Please select a payment method.");
      return;
    }

    if (cart.length === 0) {
      raiseErrorAlert("Your cart is empty.");
      return;
    }

    // TODO: Implement placeOrderMutation here
    // Example:
    await placeOrderMutation({
      variables: {
        customerId: user.customerId,
        addressId: selectedAddressId,
        items: cart.map((item) => ({
          productId: item.productId,
          quantity: item.quantity,
          price: item.price,
        })) as [],
        totalAmount: cart.reduce(
          (sum, item) => sum + item.price * item.quantity,
          0
        ),
        paymentMethod,
      },
    })
      .then((res) => {
        console.log(res);
        raiseSuccessAlert("Order placed!");
        clearCart();
        navigate.push("/cart");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  if (!user) {
    return (
      <Container className="py-4">
        <Alert variant="warning">
          You need to log in to proceed to checkout.
        </Alert>
        <Button variant="primary" onClick={() => setShowLogin(true)}>
          Login to Continue
        </Button>
      </Container>
    );
  }

  return (
    <Container fluid className="py-4">
      <h2>Checkout</h2>
      <Row>
        <Col md={8}>
          <h4>Delivery Address</h4>
          <Form>
            {addressData?.getAllAddresses?.length ? (
              addressData.getAllAddresses.map((addr) => (
                <Form.Check
                  key={addr.id}
                  type="radio"
                  label={
                    <>
                      <div>{addr.addressLine1}</div>
                      {addr.addressLine2 && <div>{addr.addressLine2}</div>}
                      <div>
                        {addr.city}, {addr.state}, {addr.country} -{" "}
                        {addr.postalCode}
                      </div>
                      {addr.isDefault && (
                        <span className="badge bg-success">Default</span>
                      )}
                    </>
                  }
                  name="address"
                  value={addr.id}
                  checked={selectedAddressId === addr.id}
                  onChange={(e) => {
                    setSelectedAddressId(e.target.value);
                    setNewAddressLine1(""); // Clear new address fields if existing selected
                  }}
                />
              ))
            ) : (
              <Alert variant="info">
                No saved addresses found. Please add one below.
              </Alert>
            )}

            <h5 className="mt-4">Add New Address</h5>
            <Form.Control
              placeholder="Address Line 1 *"
              value={newAddressLine1}
              onChange={(e) => {
                setNewAddressLine1(e.target.value);
                setSelectedAddressId(""); // Clear selected if typing new address
              }}
              className="mb-2"
            />
            <Form.Control
              placeholder="Address Line 2"
              value={newAddressLine2}
              onChange={(e) => setNewAddressLine2(e.target.value)}
              className="mb-2"
            />
            <Form.Control
              placeholder="City *"
              value={newCity}
              onChange={(e) => setNewCity(e.target.value)}
              className="mb-2"
            />
            <Form.Control
              placeholder="State *"
              value={newState}
              onChange={(e) => setNewState(e.target.value)}
              className="mb-2"
            />
            <Form.Control
              placeholder="Postal Code *"
              value={newPostalCode}
              onChange={(e) => setNewPostalCode(e.target.value)}
              className="mb-2"
            />
            <Form.Control
              placeholder="Country *"
              value={newCountry}
              onChange={(e) => setNewCountry(e.target.value)}
              className="mb-3"
            />
            <Button variant="outline-primary" onClick={handleAddNewAddress}>
              Save New Address
            </Button>
          </Form>

          <h4 className="mt-4">Payment Method</h4>
          <Form>
            <Form.Check
              type="radio"
              label="Cash on Delivery"
              name="payment"
              value="cod"
              checked={paymentMethod === "cod"}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            <Form.Check
              type="radio"
              label="Online Payment"
              name="payment"
              value="online"
              checked={paymentMethod === "online"}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
          </Form>
        </Col>

        <Col md={4}>
          <h4>Order Summary</h4>
          {cart.length === 0 ? (
            <Alert variant="info">Your cart is empty.</Alert>
          ) : (
            <>
              <ListGroup>
                {cart.map((item) => (
                  <ListGroup.Item key={item.productId}>
                    <strong>{item.productName}</strong> x {item.quantity}
                    <span className="float-end">
                      ₹{(item.price * item.quantity).toFixed(2)}
                    </span>
                  </ListGroup.Item>
                ))}
              </ListGroup>
              <h5 className="mt-3">
                Total: ₹
                {cart
                  .reduce((sum, item) => sum + item.price * item.quantity, 0)
                  .toFixed(2)}
              </h5>
              <Button
                variant="success"
                className="mt-3 w-100"
                onClick={handleCheckout}
                disabled={!selectedAddressId || !paymentMethod} // Disable button if selections incomplete
              >
                Place Order
              </Button>
            </>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Checkout;
