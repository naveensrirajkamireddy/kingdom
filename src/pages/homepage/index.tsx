import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

// Components
import StorefrontLayout from "../layout";
import Slides from "../../components/slides";
import Categories from "../../components/categories";
import Products from "../../components/products";

// GraphQL & Hooks
import {
  useGetCategoriesQuery,
  useProductsListQuery,
} from "../../graphql/generated";
import "./Home.css";
import FeaturesSection from "./FeaturesSection";
import PromoGridSection from "./PromoGridSection";
import DualBannersSection from "./DualBannersSection";
import CategoryProductRow from "./CategoryProductRow";

const Home: React.FC = () => {
  const [categories, setCategories] = useState<any[]>([]);
  const [activeTab, setActiveTab] = useState<"new" | "featured">("new");

  const { data: catData, loading: catLoading } = useGetCategoriesQuery({
    variables: { parentMenu: "" },
  });

  const { data: tabData, loading: tabLoading } = useProductsListQuery({
    variables: { page: 1, limit: 20, type: activeTab },
  });

  const { data: spotlightData, loading: spotlightLoading } =
    useProductsListQuery({
      variables: { page: 1, limit: 5, categoryId: 5 },
    });

  useEffect(() => {
    if (catData?.getCategories) {
      setCategories(catData.getCategories);
    }
  }, [catData]);

  return (
    <StorefrontLayout>
      <header className="hero-section">
        <div className="hero-wrapper">
          <Slides />
        </div>
      </header>

      <main className="main-content">
        {/* Extracted static section */}
        <FeaturesSection />

        {/* Extracted dynamic section passing categories as props */}
        <PromoGridSection categories={categories} loading={catLoading} />

        {/* Tabbed Products (State stays here since it dictates data fetching) */}
        <section className="featured-products-section">
          <Container>
            <div className="ghost-title-wrapper">
              <h2 className="ghost-main-title mb-5">Featured Products</h2>
              <div className="product-tabs">
                <button
                  className={`tab-btn ${activeTab === "new" ? "active" : ""}`}
                  onClick={() => setActiveTab("new")}
                >
                  New Arrival
                </button>
                <button
                  className={`tab-btn ${activeTab === "featured" ? "active" : ""}`}
                  onClick={() => setActiveTab("featured")}
                >
                  Featured
                </button>
              </div>
            </div>

            {tabLoading ? (
              <div className="ion-text-center py-5">Loading Products...</div>
            ) : (
              <Products list={tabData?.productsList || []} tab={activeTab} />
            )}
          </Container>
        </section>

        {/* Extracted static section */}
        {/* <DualBannersSection /> */}

        {/* Category Spotlight */}
        {/* DYNAMIC CATEGORY SPOTLIGHT ROWS */}
        {catLoading ? (
          <div className="ion-text-center py-5">Loading Categories...</div>
        ) : (
          /* Using slice(0, 3) to only show the first 3 categories.
             You can adjust this number, or filter by a 'featured' flag if your category data has one. 
           */
          categories
            .slice(0, 10)
            .map((category) => (
              <CategoryProductRow
                key={category.id}
                categoryId={Number(category.id)}
                categoryName={
                  category.categoryName || category.name || "Trending"
                }
              />
            ))
        )}
      </main>
    </StorefrontLayout>
  );
};

export default Home;
