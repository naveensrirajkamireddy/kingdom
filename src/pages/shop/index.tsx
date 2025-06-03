import {
  IonPage,
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonButton,
  IonIcon,
  IonModal,
  IonAccordion,
  IonAccordionGroup,
  IonItem,
  IonLabel,
  IonCol,
  IonRow,
  IonPopover,
} from "@ionic/react";
import {
  add,
  addCircle,
  addOutline,
  caretDownCircle,
  filterOutline,
  list,
  removeOutline,
} from "ionicons/icons";
import { useState, useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Products from "../../components/products";
import { sampleProducts } from "../homepage";
import Filters from "../../components/filters";
import ProductCard from "../../components/product-card";
import ShopProductCard from "../../components/shop-product-card";

const Shop: React.FC = () => {
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 992);
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 992);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [sortBy, setSortBy] = useState<string>("latest");

  const sortOptions = [
    { label: "Latest", value: "latest" },
    { label: "Price: Low to High", value: "price_asc" },
    { label: "Price: High to Low", value: "price_desc" },
    { label: "Name: A to Z", value: "name_asc" },
    { label: "Name: Z to A", value: "name_desc" },
  ];
  const handleSortChange = (value: string) => {
    setSortBy(value);
  };

  return (
    <>
      {isMobile && (
        <>
          <IonButtons slot="end" className="p-3">
            <IonButton
              onClick={() => setShowFilters(true)}
              fill="solid"
              expand="block"
              color={"dark"}
            >
              <IonIcon icon={filterOutline} /> &nbsp;Apply Filters
            </IonButton>
            <IonButton
              fill="outline"
              expand="block"
              color="dark"
              id="sortTrigger"
            >
              <IonIcon icon={list} /> &nbsp;Sort
            </IonButton>
          </IonButtons>
          <IonPopover trigger="sortTrigger" triggerAction="click">
            <IonContent className="ion-padding">
              {sortOptions.map((option) => (
                <IonItem
                  button
                  key={option.value}
                  onClick={() => {
                    handleSortChange(option.value);
                  }}
                >
                  <IonLabel>{option.label}</IonLabel>
                </IonItem>
              ))}
            </IonContent>
          </IonPopover>
        </>
      )}

      <Container fluid className="py-3">
        {!isMobile ? (
          <Row className="p-3">
            <Col md={3}>
              <Filters />
            </Col>
            <Col md={9}>
              <div className="d-flex justify-content-end mb-3">
                <label className="pt-2 pe-3">Sort By:</label>
                <select
                  className="form-select w-auto"
                  value={sortBy}
                  onChange={(e) => handleSortChange(e.target.value)}
                >
                  {sortOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              <IonRow>
                {sampleProducts.map((item) => (
                  <>
                    <IonCol
                      size="3"
                      sizeLg="3"
                      sizeMd="3"
                      sizeXl="3"
                      sizeSm="6"
                      sizeXs="6"
                    >
                      <ShopProductCard
                        onAddToCart={function (id: number): void {
                          throw new Error("Function not implemented.");
                        }}
                        {...item}
                      />
                    </IonCol>
                  </>
                ))}
              </IonRow>
            </Col>
          </Row>
        ) : (
          <>
            <Products list={sampleProducts} />
            <IonModal
              isOpen={showFilters}
              onDidDismiss={() => setShowFilters(false)}
            >
              <IonHeader>
                <IonToolbar>
                  <IonTitle>Filters</IonTitle>
                  <IonButtons slot="end">
                    <IonButton onClick={() => setShowFilters(false)}>
                      Close
                    </IonButton>
                  </IonButtons>
                </IonToolbar>
              </IonHeader>
              <IonContent>
                <Filters />
              </IonContent>
            </IonModal>
          </>
        )}
      </Container>
    </>
  );
};

export default Shop;
