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
import Tab1 from "./pages/Tab1";
import Tab2 from "./pages/Tab2";
import Tab3 from "./pages/Tab3";

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
import AppRoutes from "./AppRoutes";
import Home from "./pages/homepage";
import ProductDetail from "./pages/product-detail";
import Shop from "./pages/shop";
import AuthenticationRoute from "./AuthenticatedRoute";
import Account from "./pages/myaccount/account";
import CartPage from "./pages/cart";
import Footer from "./pages/footer";
import Checkout from "./pages/checkout";
import OrderDetailPage from "./pages/orders/orderDetail";
import OffersPage from "./pages/offers";

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <StorefrontLayout>
          <Route path="/" component={Home} exact />
          <Route path="/home" component={Home} exact />
          <Route path="/shop" component={Shop} exact />
          <Route path="/cart" component={CartPage} exact />
          <Route path="/checkout" component={Checkout} exact />
          <Route path="/offers" component={OffersPage} exact />
          <Route path="/order/:orderId" component={OrderDetailPage} />
          {/* Protected ROutes  */}
          <AuthenticationRoute path="/account" component={Account} exact />

          <Route path="/detail/:productId" component={ProductDetail} exact />
        </StorefrontLayout>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
