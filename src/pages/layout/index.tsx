import React, {
  ReactNode,
  useEffect,
  useState,
  createContext,
  useContext,
} from "react";
import {
  IonApp,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonMenu,
  IonList,
  IonItem,
  IonMenuButton,
  IonButtons,
  IonPage,
  IonIcon,
  IonLabel,
  IonButton,
} from "@ionic/react";
import {
  menuOutline,
  cartOutline,
  personCircleOutline,
  powerOutline,
} from "ionicons/icons";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import "./StoreFrontLayout.css";
import LoginModal from "../loginModal/loginModal";
import { logout, useUser } from "../../context/userContext";
import Footer from "../footer";

// Context to share showLogin control
interface LayoutContextType {
  setShowLogin: React.Dispatch<React.SetStateAction<boolean>>;
}
const LayoutContext = createContext<LayoutContextType | undefined>(undefined);
export const useLayout = () => {
  const context = useContext(LayoutContext);
  if (!context) throw new Error("useLayout must be used within LayoutProvider");
  return context;
};

interface StorefrontLayoutProps {
  children: ReactNode;
}

const StorefrontLayout: React.FC<StorefrontLayoutProps> = ({ children }) => {
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 992);
  const { user, setUser } = useUser();
  const navigate = useHistory();

  const [showLogin, setShowLogin] = useState(false);

  const handleLogout = () => {
    logout();
    navigate.push("/home");
  };

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 992);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <IonApp>
      <LayoutContext.Provider value={{ setShowLogin }}>
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
                        <Nav.Link as={Link} to="/cart">
                          Cart
                        </Nav.Link>
                        {user ? (
                          <>
                            <IonButton
                              fill="clear"
                              onClick={() => navigate.push("/account")}
                              color={"dark"}
                            >
                              <IonIcon
                                icon={personCircleOutline}
                                size="small"
                              />
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

          <IonContent fullscreen className="storefront-content">
            <div className="storefront-content">{children}</div>
            <Footer />
          </IonContent>

          {/* Login Modal */}
          <LoginModal isOpen={showLogin} onClose={() => setShowLogin(false)} />
        </IonPage>
      </LayoutContext.Provider>
    </IonApp>
  );
};

export default StorefrontLayout;
