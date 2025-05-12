import { IonRow, IonCol } from "@ionic/react";
import ProductCard from "../product-card";

interface ProductProps {
  list: any[];
}

const Products: React.FC<ProductProps> = ({ list }) => {
  return (
    <IonRow>
      {list.map((item, index) => (
        <>
          <IonCol
            size="3"
            sizeLg="3"
            sizeMd="3"
            sizeXl="3"
            sizeSm="6"
            sizeXs="6"
          >
            <ProductCard
              onAddToCart={function (id: any): void {
                throw new Error("Function not implemented.");
              }}
              key={index}
              {...item}
            />
          </IonCol>
        </>
      ))}
    </IonRow>
  );
};

export default Products;
