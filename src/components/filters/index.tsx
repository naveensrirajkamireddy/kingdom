import React, { useState, useMemo } from "react";
import { Accordion, Form } from "react-bootstrap";
import {
  useGetCategoriesQuery,
  useGetMyBrandsQuery,
} from "../../graphql/generated";
import { IonIcon } from "@ionic/react";
import {
  optionsOutline,
  reloadOutline,
  chevronForwardOutline,
} from "ionicons/icons";
import { FashionColorEnum, SizesEnum } from "../../config";
import "./Filters.css";

const Filters: React.FC = () => {
  const [selectedFilters, setSelectedFilters] = useState<any>({
    categories: [],
    brands: [],
    colors: [],
    sizes: [],
    priceRange: 5000,
  });

  const { data: brandsData } = useGetMyBrandsQuery();
  const { data: categoriesData } = useGetCategoriesQuery({
    variables: { parentMenu: "all" },
  });

  // Optimized Category Tree Logic
  const categoryTree = useMemo(() => {
    if (!categoriesData?.getCategories) return [];
    const all = categoriesData.getCategories;
    return all
      .filter((cat) => cat.parentCategory === 0)
      .map((parent) => ({
        ...parent,
        children: all.filter((child) => child.parentCategory === parent.id),
      }))
      .filter((p) => p.children.length > 0 || p.parentCategory === 0);
  }, [categoriesData]);

  const handleToggle = (key: string, value: any) => {
    setSelectedFilters((prev: any) => {
      const list = prev[key];
      const newList = list.includes(value)
        ? list.filter((i: any) => i !== value)
        : [...list, value];
      return { ...prev, [key]: newList };
    });
  };

  const clearFilters = () => {
    setSelectedFilters({
      categories: [],
      brands: [],
      colors: [],
      sizes: [],
      priceRange: 5000,
    });
  };

  return (
    <div className="premium-filter-wrapper">
      {/* --- Filter Header --- */}
      <div className="filter-header-main">
        <div className="d-flex align-items-center gap-2">
          <IonIcon icon={optionsOutline} className="header-icon" />
          <span className="header-title">Refine Selection</span>
        </div>
        <button className="reset-action" onClick={clearFilters}>
          <IonIcon icon={reloadOutline} /> Reset
        </button>
      </div>

      <Accordion
        defaultActiveKey={["0", "1"]}
        alwaysOpen
        className="premium-accordion-system"
      >
        {/* 1. Category Tree Section */}
        <Accordion.Item eventKey="0" className="filter-item">
          <Accordion.Header>Collections</Accordion.Header>
          <Accordion.Body>
            <div className="category-tree-container">
              {categoryTree.map((parent) => (
                <div key={parent.id} className="category-branch">
                  <div className="parent-node">
                    <div className="premium-checkbox">
                      <input
                        type="checkbox"
                        id={`p-${parent.id}`}
                        checked={selectedFilters.categories.includes(parent.id)}
                        onChange={() => handleToggle("categories", parent.id)}
                      />
                      <label htmlFor={`p-${parent.id}`}>
                        {parent.categoryName}
                      </label>
                    </div>
                  </div>

                  {parent.children.length > 0 && (
                    <div className="child-nodes">
                      {parent.children.map((child) => (
                        <div
                          key={child.id}
                          className="premium-checkbox child-item"
                        >
                          <input
                            type="checkbox"
                            id={`c-${child.id}`}
                            checked={selectedFilters.categories.includes(
                              child.id,
                            )}
                            onChange={() =>
                              handleToggle("categories", child.id)
                            }
                          />
                          <label htmlFor={`c-${child.id}`}>
                            {child.categoryName}
                          </label>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </Accordion.Body>
        </Accordion.Item>

        {/* 2. Price Range Section */}
        <Accordion.Item eventKey="1" className="filter-item">
          <Accordion.Header>Price Range</Accordion.Header>
          <Accordion.Body>
            <div className="price-info-display">
              Investment:{" "}
              <span>Up to ₹{selectedFilters.priceRange.toLocaleString()}</span>
            </div>
            <Form.Range
              min={500}
              max={15000}
              step={100}
              className="premium-range"
              value={selectedFilters.priceRange}
              onChange={(e) =>
                setSelectedFilters({
                  ...selectedFilters,
                  priceRange: parseInt(e.target.value),
                })
              }
            />
            <div className="range-labels-premium">
              <span>₹500</span>
              <span>₹15k+</span>
            </div>
          </Accordion.Body>
        </Accordion.Item>

        {/* 3. Brands Section (Scrollable) */}
        <Accordion.Item eventKey="2" className="filter-item">
          <Accordion.Header>Designers</Accordion.Header>
          <Accordion.Body>
            <div className="premium-scroll-list">
              {brandsData?.getMyBrands.map((brand) => (
                <div key={brand.id} className="premium-checkbox mb-2">
                  <input
                    type="checkbox"
                    id={`br-${brand.id}`}
                    checked={selectedFilters.brands.includes(brand.id)}
                    onChange={() => handleToggle("brands", brand.id)}
                  />
                  <label htmlFor={`br-${brand.id}`}>{brand.brandName}</label>
                </div>
              ))}
            </div>
          </Accordion.Body>
        </Accordion.Item>

        {/* 4. Color Swatches */}
        <Accordion.Item eventKey="3" className="filter-item">
          <Accordion.Header>Color Palette</Accordion.Header>
          <Accordion.Body>
            <div className="color-swatch-grid">
              {Object.values(FashionColorEnum).map((color) => (
                <div
                  key={color}
                  className={`swatch-box ${selectedFilters.colors.includes(color) ? "active" : ""}`}
                  onClick={() => handleToggle("colors", color)}
                >
                  <div
                    className="swatch-indicator"
                    style={{ backgroundColor: color.toLowerCase() }}
                  />
                  <span className="swatch-text">{color}</span>
                </div>
              ))}
            </div>
          </Accordion.Body>
        </Accordion.Item>

        {/* 5. Size Chips */}
        <Accordion.Item eventKey="4" className="filter-item">
          <Accordion.Header>Size Guide</Accordion.Header>
          <Accordion.Body>
            <div className="premium-size-grid">
              {Object.values(SizesEnum).map((size) => (
                <div
                  key={size}
                  className={`size-tag ${selectedFilters.sizes.includes(size) ? "active" : ""}`}
                  onClick={() => handleToggle("sizes", size)}
                >
                  {size}
                </div>
              ))}
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      {/* --- Sticky CTA Area --- */}
      <div className="sticky-filter-cta">
        <button className="apply-btn-premium">Apply Filters</button>
      </div>
    </div>
  );
};

export default Filters;
