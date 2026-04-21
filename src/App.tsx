import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { ellipse, square, triangle } from "ionicons/icons";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */
// import '@ionic/react/css/palettes/dark.system.css';

/* Theme variables */
import "./theme/variables.css";
import HomePage from "./pages/homepage";
import StorefrontLayout from "./pages/layout";
import Home from "./pages/homepage";
import ProductDetail from "./pages/product-detail";
import Shop from "./pages/shop";
import AuthenticationRoute from "./AuthenticatedRoute";
import Account from "./pages/myaccount/account";
import CartPage from "./pages/cart";
import Footer from "./pages/footer";
import Checkout from "./pages/checkout";
import OffersPage from "./pages/offers";
import { PrivacyPolicy } from "./pages/cms-pages/privacy-policy";
import TermsAndConditions from "./pages/cms-pages/terms-conditions";
import AccountLayout from "./pages/myaccount/account";
import { AboutPage } from "./pages/cms-pages/about";
import { useLoader } from "./context/loaderContext";
import { useEffect } from "react";
import { setLoaderControl } from "./apolloClient";
import { RefundPolicy } from "./pages/cms-pages/refund-policy";
import ShippingPolicy from "./pages/cms-pages/shipping-policy";
import ForgotPassword from "./pages/auth/forgot";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";
import PhonePePayment from "./pages/sample";
import { useUser } from "./context/userContext";

setupIonicReact();

const App: React.FC = () => {
  const loader = useLoader();

  const { isLoading } = useUser();

  useEffect(() => {
    setLoaderControl(loader);
  }, [loader]);

  if (isLoading) {
    return null; // Or a splash screen
  }

  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          <Route path="/" exact component={Home} />
          <Route path="/home" exact component={Home} />
          <Route path="/shop" exact component={Shop} />
          {/* The '?' makes the categoryId optional, so base '/shop' still works */}
          <Route path="/shop/:categoryId?" component={Shop} exact />
          <Route path="/offers" exact component={OffersPage} />
          <Route path="/privacy-policy" exact component={PrivacyPolicy} />
          <Route path="/refund-policy" exact component={RefundPolicy} />
          <Route path="/shipping-policy" exact component={ShippingPolicy} />
          <Route path="/about" exact component={AboutPage} />

          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/forgot" component={ForgotPassword} />
          <Route exact path="/testPhonepe" component={PhonePePayment} />
          <Route
            path="/terms-and-conditions"
            exact
            component={TermsAndConditions}
          />
          <Route path="/detail/:productId" exact component={ProductDetail} />

          <Route path="/account" component={AccountLayout} />

          <Route path="/cart" component={CartPage} />
          <Route path="/checkout" component={Checkout} />
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
