import { IonRow, IonCol } from "@ionic/react";
import ProductCard from "../product-card";
import "./ProductsGrid.css"; // We'll add a tiny CSS file for the 5-col logic

interface ProductProps {
  list: any[];
  tab?: "new" | "featured"; // Optional prop to indicate which tab's products are being displayed
}

const Products: React.FC<ProductProps> = ({ list, tab }) => {
  return (
    <IonRow className="ion-no-padding pressmart-grid">
      {list.map((item) => (
        <IonCol
          key={item.id}
          size="6" // 2 per row on mobile
          sizeMd="3" // 3 per row on tablet
          className="ion-no-padding grid-col-5" // Custom 5-col on desktop
        >
          <ProductCard
            onAddToCart={(id) => {
              console.log(`Add to cart clicked for: ${id}`);
              // Implement your cart logic here
            }}
            {...item}
            tabMode={tab} // Pass the tab mode to the product card
          />
        </IonCol>
      ))}
    </IonRow>
  );
};

export default Products;
