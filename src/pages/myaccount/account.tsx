import React from "react";
import {
  IonRow,
  IonCol,
  IonList,
  IonItem,
  IonLabel,
  IonIcon,
  IonText,
  IonButton,
} from "@ionic/react";
import { Route, Switch, useRouteMatch, useLocation } from "react-router-dom";
import {
  cubeOutline,
  locationOutline,
  personOutline,
  heartOutline,
  logOutOutline,
  chevronForwardOutline,
} from "ionicons/icons";
import { Container } from "react-bootstrap";
import StorefrontLayout from "../layout";
import { useUser } from "../../context/userContext";

// Import your sub-pages
import AddressPage from "./address";
import ProfilePage from "./profile";
import OrdersPage from "./orders"; // Make sure to create/import this
import "./Account.css";

const AccountLayout: React.FC = () => {
  const { path, url } = useRouteMatch();
  const { pathname } = useLocation();
  const { user, logout } = useUser();

  const menuItems = [
    { label: "My Orders", path: `${url}/orders`, icon: cubeOutline },
    { label: "Saved Addresses", path: `${url}/address`, icon: locationOutline },
    { label: "Profile Settings", path: `${url}/profile`, icon: personOutline },
  ];

  return (
    <StorefrontLayout>
      <div className="account-page-bg">
        <Container>
          {/* Profile Header */}
          <div className="account-header-card">
            <div className="profile-info-block">
              <div className="profile-avatar">
                {user?.customerName?.charAt(0) || "U"}
              </div>
              <div className="profile-text">
                <IonText color="dark">
                  <h2>Hello, {user?.customerName}!</h2>
                </IonText>
                <p>{user?.email || "Welcome to Kingdom Fashion"}</p>
              </div>
            </div>

            <div className="quick-stats-row">
              <div className="stat-box">
                <span className="stat-value">12</span>
                <span className="stat-label">Orders</span>
              </div>
              <div className="stat-box">
                <span className="stat-value">04</span>
                <span className="stat-label">Wishlist</span>
              </div>
            </div>
          </div>

          <IonRow className="ion-margin-top">
            {/* Sidebar Navigation */}
            <IonCol size="12" sizeLg="3">
              <div className="account-nav-card">
                <IonList lines="none" className="account-nav-list">
                  {menuItems.map((item) => (
                    <IonItem
                      key={item.label}
                      routerLink={item.path}
                      /* Use startsWith to keep parent highlighted for sub-routes */
                      className={`account-nav-item ${
                        pathname.startsWith(item.path) ? "is-active" : ""
                      }`}
                      detail={false}
                    >
                      <IonIcon icon={item.icon} slot="start" />
                      <IonLabel>{item.label}</IonLabel>
                      <IonIcon
                        icon={chevronForwardOutline}
                        slot="end"
                        className="arrow"
                      />
                    </IonItem>
                  ))}

                  <div className="nav-divider"></div>

                  <IonItem
                    button
                    onClick={logout}
                    className="account-nav-item logout-item"
                  >
                    <IonIcon icon={logOutOutline} slot="start" />
                    <IonLabel>Sign Out</IonLabel>
                  </IonItem>
                </IonList>
              </div>
            </IonCol>

            {/* Nested Content Area */}
            <IonCol size="12" sizeLg="9">
              <div className="account-main-content">
                <Switch>
                  {/* Order of Routes matters: place specific ones first */}
                  <Route path={`${path}/orders`} component={OrdersPage} />
                  <Route path={`${path}/address`} component={AddressPage} />
                  <Route path={`${path}/profile`} component={ProfilePage} />

                  {/* Default Account Dashboard */}
                  <Route exact path={path}>
                    <div className="welcome-placeholder">
                      <IonIcon icon={personOutline} />
                      <h3>Account Dashboard</h3>
                      <p>
                        Manage your profile, orders, and addresses from here.
                      </p>
                      <IonButton fill="outline" color="dark" routerLink="/shop">
                        Continue Shopping
                      </IonButton>
                    </div>
                  </Route>
                </Switch>
              </div>
            </IonCol>
          </IonRow>
        </Container>
      </div>
    </StorefrontLayout>
  );
};

export default AccountLayout;
