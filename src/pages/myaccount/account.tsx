import React from "react";
import { IonIcon, IonButton } from "@ionic/react";
import { Route, Switch, useRouteMatch, NavLink } from "react-router-dom";
import { logOutOutline, arrowForwardOutline } from "ionicons/icons";
import { Container, Row, Col } from "react-bootstrap";
import StorefrontLayout from "../layout";
import { useUser } from "../../context/userContext";

// Import your sub-pages
import AddressPage from "./address";
import ProfilePage from "./profile";
import OrdersPage from "./orders";
import "./Account.css";
import OrderDetailsPage from "./OrderDetailsPage";

const AccountLayout: React.FC = () => {
  const { path, url } = useRouteMatch();
  const { user, logout } = useUser();

  const menuItems = [
    { label: "Dashboard", path: `${url}`, exact: true },
    { label: "Order History", path: `${url}/orders`, exact: false },
    // { label: "Saved Addresses", path: `${url}/address`, exact: false },
    { label: "Account Details", path: `${url}/profile`, exact: false },
  ];

  return (
    <StorefrontLayout>
      <div className="account-page-wrapper">
        <Container className="px-lg-5">
          {/* Elegant Page Header */}
          <div className="account-page-header">
            <h1 className="account-main-title">My Account</h1>
            <p className="account-greeting">
              Welcome back, {user?.customerName || "Guest"}
            </p>
          </div>

          <Row className="gx-lg-5">
            {/* LEFT: Minimalist Sidebar Navigation */}
            <Col lg={3}>
              <aside className="account-sidebar">
                <nav className="account-nav-menu">
                  {menuItems.map((item) => (
                    <NavLink
                      key={item.label}
                      to={item.path}
                      exact={item.exact}
                      className="account-nav-link"
                      activeClassName="active-nav-link"
                    >
                      {item.label}
                    </NavLink>
                  ))}
                  <button
                    onClick={logout}
                    className="account-nav-link logout-btn"
                  >
                    Sign Out <IonIcon icon={logOutOutline} className="ms-2" />
                  </button>
                </nav>
              </aside>
            </Col>

            {/* RIGHT: Dynamic Content Pane */}
            <Col lg={9}>
              <main className="account-content-pane">
                <Switch>
                  {/* 1. MOST SPECIFIC ROUTE MUST GO FIRST */}
                  <Route
                    path={`${path}/orders/:id`}
                    component={OrderDetailsPage}
                  />

                  {/* 2. GENERAL ROUTE GOES SECOND, WITH 'exact' */}
                  <Route exact path={`${path}/orders`} component={OrdersPage} />

                  {/* 3. OTHER ROUTES */}
                  {/* <Route path={`${path}/address`} component={AddressPage} /> */}
                  <Route path={`${path}/profile`} component={ProfilePage} />

                  {/* 4. Default Account Dashboard View */}
                  <Route exact path={path}>
                    <div className="dashboard-overview">
                      <h2 className="pane-title">Dashboard</h2>
                      <p className="pane-subtitle">
                        From your account dashboard, you can view your recent
                        orders, manage your shipping addresses, and edit your
                        password and account details.
                      </p>

                      <div className="dashboard-quick-links">
                        <div className="quick-link-card">
                          <h3>Recent Orders</h3>
                          <p>Check the status of your recent purchases.</p>
                          <NavLink to={`${url}/orders`} className="text-link">
                            View Orders <IonIcon icon={arrowForwardOutline} />
                          </NavLink>
                        </div>
                        <div className="quick-link-card">
                          <h3>Account Details</h3>
                          <p>Update your personal information and password.</p>
                          <NavLink to={`${url}/profile`} className="text-link">
                            Edit Profile <IonIcon icon={arrowForwardOutline} />
                          </NavLink>
                        </div>
                      </div>
                    </div>
                  </Route>
                </Switch>
              </main>
            </Col>
          </Row>
        </Container>
      </div>
    </StorefrontLayout>
  );
};

export default AccountLayout;
