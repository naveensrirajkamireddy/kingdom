import React from "react";
import {
  IonPage,
  IonHeader,
  IonContent,
  IonToolbar,
  IonButtons,
  IonButton,
  IonIcon,
  IonMenu,
  IonList,
  IonItem,
  IonLabel,
  IonMenuButton,
  IonMenuToggle,
} from "@ionic/react";
import {
  searchOutline,
  personOutline,
  heartOutline,
  cartOutline,
} from "ionicons/icons";
import { Link, useLocation, useHistory } from "react-router-dom"; // Added useHistory
import "./StoreFrontLayout.css";
import { useGetCategoriesQuery } from "../../graphql/generated";

import { useCart } from "../../context/cartContext";
// 1. Import useUser to check authentication status
import { useUser } from "../../context/userContext";

interface LayoutProps {
  children: React.ReactNode;
}

const StorefrontLayout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const history = useHistory();

  const { data } = useGetCategoriesQuery({
    variables: { parentMenu: "" },
  });

  const { cartCount } = useCart();

  // 2. Destructure the user from your context
  const { user } = useUser();

  return (
    <>
      {/* --- 1. MOBILE SIDE MENU DRAWER --- */}
      <IonMenu
        contentId="main-content"
        className="store-mobile-drawer"
        type="overlay"
      >
        <IonHeader className="ion-no-border">
          <IonToolbar className="drawer-top-section">
            <Link to="/" className="store-logo m-0">
              <img
                src="/logo-dark.png"
                alt="Kingdom Logo"
                className="logo-image mt-3"
              />
            </Link>
          </IonToolbar>
        </IonHeader>

        <IonContent className="drawer-content">
          <IonList lines="none" className="mt-3">
            <IonMenuToggle autoHide={false}>
              <IonItem
                routerLink="/"
                className={`premium-drawer-item ${location.pathname === "/" ? "active-drawer-item" : ""}`}
              >
                <IonLabel>Home</IonLabel>
              </IonItem>
            </IonMenuToggle>

            <IonMenuToggle autoHide={false}>
              <IonItem
                routerLink="/shop"
                className={`premium-drawer-item ${location.pathname.includes("/shop") ? "active-drawer-item" : ""}`}
              >
                <IonLabel>Shop</IonLabel>
              </IonItem>
            </IonMenuToggle>

            {data?.getCategories?.map((category) => (
              <IonMenuToggle autoHide={false} key={category.id}>
                <IonItem
                  routerLink={`/shop/${category.id}`}
                  className={`premium-drawer-item ${location.pathname.includes(`/shop/${category.id}`) ? "active-drawer-item" : ""}`}
                >
                  <IonLabel>{category.categoryName}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            ))}
          </IonList>
        </IonContent>

        {/* 3. Updated Mobile Drawer Footer Button */}
        <div className="drawer-footer-premium">
          <IonMenuToggle autoHide={false}>
            <button
              className="nav-login-btn w-100"
              onClick={() => history.push(user ? "/account" : "/login")}
            >
              {user ? "My Account" : "Login / Register"}
            </button>
          </IonMenuToggle>
        </div>
      </IonMenu>

      {/* --- 2. MAIN PAGE CONTENT --- */}
      <IonPage id="main-content">
        {/* Main Navigation Header */}
        <IonHeader className="ion-no-border main-header">
          <IonToolbar className="main-nav-toolbar px-2 px-lg-4">
            {/* Mobile Menu Toggle */}
            <IonButtons slot="start" className="d-lg-none">
              <IonMenuButton className="action-item" />
            </IonButtons>
            {/* Logo */}
            <div className="logo-container" slot="start">
              <Link to="/" className="store-logo">
                <img
                  src="/logo-dark.png"
                  alt="Kingdom Logo"
                  className="logo-image"
                />
              </Link>
            </div>
            {/* Desktop Center Links */}
            <div className="desktop-links-container d-none d-lg-flex w-100">
              <Link to="/" className="nav-link-custom active">
                Home <i className="bi bi-chevron-down"></i>
              </Link>
              <Link to="/shop" className="nav-link-custom">
                Shop <i className="bi bi-chevron-down"></i>
              </Link>
              {data?.getCategories?.map((category) => (
                <Link
                  key={category.id}
                  to={`/shop/${category.id}`}
                  className="nav-link-custom"
                >
                  {category.categoryName} <i className="bi bi-chevron-down"></i>
                </Link>
              ))}
            </div>

            {/* Action Icons (Right) */}
            <IonButtons slot="end" className="action-icons">
              {/* 4. Updated Desktop Profile Icon logic */}
              <IonButton
                className="action-item d-none d-sm-block"
                routerLink={user ? "/account" : "/login"}
              >
                <IonIcon icon={personOutline} />
              </IonButton>

              <IonButton
                className="action-item position-relative"
                routerLink="/cart"
              >
                <IonIcon icon={cartOutline} />
                {cartCount > 0 && (
                  <span className="badge-dot">{cartCount}</span>
                )}
              </IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>

        {/* Dynamic Page Content */}
        <IonContent>{children}</IonContent>
      </IonPage>
    </>
  );
};

export default StorefrontLayout;
