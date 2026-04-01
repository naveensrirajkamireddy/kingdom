import React from "react";
import { Container } from "react-bootstrap";
import { useProductsListQuery } from "../../graphql/generated";
import Products from "../../components/products";

interface CategoryProductRowProps {
  categoryId: number;
  categoryName: string;
}

const CategoryProductRow: React.FC<CategoryProductRowProps> = ({
  categoryId,
  categoryName,
}) => {
  // Fetch products ONLY for this specific category
  const { data, loading } = useProductsListQuery({
    variables: {
      categoryId: categoryId,
      limit: 12, // Just get the top 5 for the homepage row
      page: 1,
    },
    fetchPolicy: "cache-first",
  });

  const products = data?.productsList || [];

  // If loading, show a nice skeleton/spinner
  if (loading) {
    return (
      <section className="category-spotlight-section py-5">
        <Container>
          <div className="ion-text-center py-5">Loading {categoryName}...</div>
        </Container>
      </section>
    );
  }

  // If the API returns no products for this category, don't render an empty section
  if (products.length === 0) {
    return null;
  }

  return (
    <section className="category-spotlight-section py-5">
      <Container>
        <div className="ghost-title-wrapper" data-title={categoryName}>
          <h2 className="ghost-main-title">{categoryName}</h2>
        </div>
        <Products list={products} />
      </Container>
    </section>
  );
};

export default CategoryProductRow;
