import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  IonButtons,
  IonButton,
  IonIcon,
  IonContent,
  IonPopover,
  IonItem,
  IonLabel,
  IonRow,
  IonCol,
  IonModal,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
} from "@ionic/react";
import {
  filterOutline,
  optionsOutline,
  chevronDownOutline,
  closeOutline,
} from "ionicons/icons";
import { Container, Row, Col } from "react-bootstrap";

import Filters from "../../components/filters";
import StorefrontLayout from "../layout";
import Products from "../../components/products";
import { useProductsListQuery } from "../../graphql/generated";
import "./Shop.css";

const Shop: React.FC = () => {
  // 1. Extract categoryId from the URL path
  const { categoryId } = useParams<{ categoryId?: string }>();
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 992);
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState<string>("latest");

  // --- NEW: Pagination States ---
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  // 2. Safely parse the ID. If it's undefined or NaN, it falls back to undefined
  const parsedCategoryId =
    categoryId && !isNaN(Number(categoryId)) ? Number(categoryId) : undefined;

  // --- NEW: Reset pagination when category changes ---
  useEffect(() => {
    setPage(1);
    setHasMore(true);
  }, [parsedCategoryId]);

  // 3. Fetch products with cache-and-network policy and extract fetchMore
  const {
    data: productsData,
    error,
    loading,
    fetchMore,
  } = useProductsListQuery({
    variables: {
      categoryId: parsedCategoryId,
      limit: 40, // Increased to 40 per batch
      page: 1,
    },
    fetchPolicy: "cache-and-network",
  });

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 992);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // --- NEW: The Infinite Scroll Handler ---
  const loadMoreProducts = async (event: any) => {
    // If we've reached the end, stop trying to fetch
    if (!hasMore) {
      event.target.complete();
      return;
    }

    const nextPage = page + 1;

    try {
      await fetchMore({
        variables: {
          page: nextPage,
        },
        updateQuery: (prev, { fetchMoreResult }) => {
          // If the backend returns nothing, we've hit the end of the catalog
          if (!fetchMoreResult || fetchMoreResult.productsList.length === 0) {
            setHasMore(false);
            return prev;
          }

          // If the backend returns fewer than 40 items, we know it's the last page
          if (fetchMoreResult.productsList.length < 40) {
            setHasMore(false);
          }

          // Merge the newly fetched products with the existing ones in Apollo's cache
          return {
            ...prev,
            productsList: [
              ...prev.productsList,
              ...fetchMoreResult.productsList,
            ],
          };
        },
      });

      // Update the current page state only after a successful fetch
      setPage(nextPage);
    } catch (err) {
      console.error("Error loading more products:", err);
    } finally {
      // Tell Ionic the loading spinner can be hidden
      event.target.complete();
    }
  };

  const sortOptions = [
    { label: "Newest First", value: "latest" },
    { label: "Price: Low to High", value: "price_asc" },
    { label: "Price: High to Low", value: "price_desc" },
    { label: "Top Rated", value: "rating" },
  ];

  return (
    <StorefrontLayout>
      {/* 1. Category Header / Breadcrumb */}
      <div className="shop-header-banner">
        <Container fluid className="px-lg-5">
          <span className="breadcrumb-text">Home / Shop</span>
          <h1 className="category-display-title">Shop Our Collections</h1>
        </Container>
      </div>

      <Container fluid className="shop-main-layout px-lg-5">
        <Row>
          {/* 4. Product Listing Area */}
          <Col lg={12} xl={12}>
            {/* Desktop Toolbar */}
            {!isMobile && (
              <div className="desktop-toolbar">
                <p className="item-count">
                  Showing <span>{productsData?.productsList?.length || 0}</span>{" "}
                  individual pieces
                </p>
                <div className="desktop-sort">
                  <span className="sort-label">Sort By</span>
                  <div className="premium-select">
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                    >
                      {sortOptions.map((o) => (
                        <option key={o.value} value={o.value}>
                          {o.label}
                        </option>
                      ))}
                    </select>
                    <IonIcon icon={chevronDownOutline} />
                  </div>
                </div>
              </div>
            )}

            {/* Product Grid */}
            {loading && page === 1 ? (
              <div className="py-5 text-center">Loading collection...</div>
            ) : (
              <Products list={productsData?.productsList || []} />
            )}
          </Col>
        </Row>
      </Container>

      {/* --- NEW: Infinite Scroll Component --- */}
      <IonInfiniteScroll
        onIonInfinite={loadMoreProducts}
        threshold="15%" // Triggers when the user is 15% away from the bottom of the screen
        disabled={!hasMore} // Disables the trigger when all products are loaded
      >
        <IonInfiniteScrollContent
          loadingSpinner="bubbles"
          loadingText="Loading more products..."
        />
      </IonInfiniteScroll>

      {/* 5. Mobile Filter Modal */}
      <IonModal
        isOpen={showFilters}
        onDidDismiss={() => setShowFilters(false)}
        className="premium-modal"
      >
        <IonHeader className="ion-no-border">
          <IonToolbar className="px-3">
            <IonTitle>Filters</IonTitle>
            <IonButtons slot="end">
              <IonButton onClick={() => setShowFilters(false)}>
                <IonIcon icon={closeOutline} color="dark" />
              </IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <Filters />
          <div className="modal-footer-actions">
            <button className="apply-btn" onClick={() => setShowFilters(false)}>
              Apply Filters
            </button>
          </div>
        </IonContent>
      </IonModal>
    </StorefrontLayout>
  );
};

export default Shop;
