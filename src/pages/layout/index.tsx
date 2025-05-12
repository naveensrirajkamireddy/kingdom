import {
  IonApp,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonFooter,
  IonMenu,
  IonList,
  IonItem,
  IonMenuButton,
  IonButtons,
  IonPage,
  IonIcon,
  IonLabel,
} from "@ionic/react";
import { menuOutline, cartOutline, personCircleOutline } from "ionicons/icons";
import { ReactNode, useEffect, useState } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./StoreFrontLayout.css";

interface StorefrontLayoutProps {
  children: ReactNode;
}

const StorefrontLayout: React.FC<StorefrontLayoutProps> = ({ children }) => {
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 992);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 992);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <IonApp>
      {/* Mobile Menu */}
      {isMobile && (
        <IonMenu side="start" menuId="main-menu" contentId="main-content">
          <IonContent>
            <img
              src="/kingdom-logo.png"
              className="w-75 p-4"
              alt="Kingdom Fashion"
            />
            <IonList>
              <IonItem routerLink="/">Home</IonItem>
              <IonItem routerLink="/shop">Shop</IonItem>
              <IonItem routerLink="/offers">Offers</IonItem>
              <IonItem routerLink="/about">About Us</IonItem>
              <IonItem routerLink="/contact">Contact</IonItem>
            </IonList>
          </IonContent>
        </IonMenu>
      )}

      {/* Main Page */}
      <IonPage id="main-content">
        <IonHeader>
          {/* Header section */}
          <div className="bg-dark text-white text-center p-2">
            <IonLabel>Hello! Kingdom Fashion</IonLabel>
          </div>
          <IonToolbar className="storefront-header">
            <Container fluid>
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  {isMobile && (
                    <IonButtons slot="start">
                      <IonMenuButton autoHide={false}>
                        <IonIcon icon={menuOutline} size="large" />
                      </IonMenuButton>
                    </IonButtons>
                  )}
                  <IonTitle className="ms-2 mb-0 h4">
                    The<b>Kingdom</b>Fashion
                  </IonTitle>
                </div>
                {/* Desktop Navbar */}
                {!isMobile && (
                  <Navbar expand="lg" className="justify-content-center">
                    <Nav className="gap-3">
                      <Nav.Link as={Link} to="/">
                        Home
                      </Nav.Link>
                      <Nav.Link as={Link} to="/shop">
                        Shop
                      </Nav.Link>
                      <Nav.Link as={Link} to="/offers">
                        Offers
                      </Nav.Link>
                      <Nav.Link as={Link} to="/about">
                        About Us
                      </Nav.Link>
                      <Nav.Link as={Link} to="/contact">
                        Contact
                      </Nav.Link>
                    </Nav>
                  </Navbar>
                )}
                {/* Cart and User Icons */}
                <div className="d-flex gap-3 align-items-center">
                  <IonIcon icon={cartOutline} size="large" />
                  <IonIcon icon={personCircleOutline} size="large" />
                </div>
              </div>
            </Container>
          </IonToolbar>
        </IonHeader>

        {/* Content Section */}
        <IonContent className="storefront-content">{children}</IonContent>

        {/* Footer */}
        {/* <IonFooter>
          <div className="text-center p-2 bg-dark text-white">
            <IonLabel>
              &copy; 2025 Kingdom Fashion. All rights reserved.
            </IonLabel>
          </div>
        </IonFooter> */}
      </IonPage>
    </IonApp>
  );
};

export default StorefrontLayout;
