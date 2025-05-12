import { IonRouterOutlet } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Route } from "react-router-dom";
import Home from "./pages/homepage";
import Shop from "./pages/shop";
import ProductDetail from "./pages/product-detail";

const AppRoutes: React.FC = () => {
  return (
    <IonReactRouter>
      <IonRouterOutlet>
        <Route path="/" component={Home} exact />
        <Route path="/home" component={Home} exact />
        <Route path="/shop" component={Shop} exact />
        <Route path="/detail/:productId" component={ProductDetail} exact />
      </IonRouterOutlet>
    </IonReactRouter>
  );
};

export default AppRoutes;
