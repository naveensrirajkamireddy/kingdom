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
  IonButton,
  IonModal,
} from "@ionic/react";
import {
  menuOutline,
  cartOutline,
  personCircleOutline,
  powerOutline,
} from "ionicons/icons";
import { ReactNode, useEffect, useState } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import "./StoreFrontLayout.css";
import LoginModal from "../loginModal/loginModal";
import { logout, useUser } from "../../context/userContext";

interface StorefrontLayoutProps {
  children: ReactNode;
}

const StorefrontLayout: React.FC<StorefrontLayoutProps> = ({ children }) => {
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 992);
  const { user, setUser } = useUser();
  const navigate = useHistory();
  const handleLogout = () => {
    logout(setUser);
    navigate.push("/home");
  };

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 992);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  const [showLogin, setShowLogin] = useState(false);
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
                      <IonButton
                        fill="clear"
                        onClick={() => navigate.push("/cart")}
                        color={"dark"}
                      >
                        <IonIcon icon={cartOutline} /> Cart
                      </IonButton>
                      {/* Cart and User Icons */}
                      {user ? (
                        <>
                          <IonButton
                            fill="clear"
                            onClick={() => navigate.push("/account")}
                            color={"dark"}
                          >
                            <IonIcon icon={personCircleOutline} size="small" />
                            &nbsp;{user.customerName}
                          </IonButton>
                          <IonButton
                            fill="clear"
                            onClick={handleLogout}
                            color={"dark"}
                          >
                            <IonIcon icon={powerOutline} />
                          </IonButton>
                        </>
                      ) : (
                        <IonButton
                          fill="clear"
                          onClick={() => setShowLogin(true)}
                          color={"dark"}
                        >
                          <IonIcon icon={personCircleOutline} size="small" />
                          &nbsp;Signin/Signup
                        </IonButton>
                      )}
                    </Nav>
                  </Navbar>
                )}
              </div>
            </Container>
          </IonToolbar>
        </IonHeader>

        {/* Content Section */}
        <IonContent className="storefront-content">{children}</IonContent>

        {/* Modal Starts  */}
        <LoginModal isOpen={showLogin} onClose={() => setShowLogin(false)} />

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
