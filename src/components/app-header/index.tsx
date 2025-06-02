import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButton,
  IonButtons,
} from "@ionic/react";
import { Navbar, Nav, Offcanvas, Container } from "react-bootstrap";
import { useState } from "react";
import "./AppHeader.css";

const AppHeader: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <IonHeader className="fixed-top">
      <IonToolbar>
        {/* <Container> */}
        <Navbar expand="md" className="w-100" bg="light" variant="light">
          <Navbar.Toggle
            aria-controls="offcanvasNavbar"
            onClick={() => setShowMenu(true)}
          />
          <Navbar.Brand href="#">
            <img
              src="./kingdom-logo.png"
              alt="logo"
              style={{ width: "15%", padding: "5px" }}
            />
          </Navbar.Brand>

          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="start"
            show={showMenu}
            onHide={() => setShowMenu(false)}
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">
                Kingdom Fashion
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="#">Home</Nav.Link>
                <Nav.Link href="#">Shop</Nav.Link>
                <Nav.Link href="#">Men's Wear</Nav.Link>
                <Nav.Link href="#">Women's Wear</Nav.Link>
                <Nav.Link href="#">Kid's Wear</Nav.Link>
                <Nav.Link href="#">Accessories</Nav.Link>
                <Nav.Link href="#">Login / Register</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Navbar>
        {/* </Container> */}
      </IonToolbar>
    </IonHeader>
  );
};

export default AppHeader;
