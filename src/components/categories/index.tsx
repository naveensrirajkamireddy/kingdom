import { IonRow, IonCol } from "@ionic/react";
import CategoryCard from "../category-card";

interface CategoriesProps {
  list: any[];
}

const Categories: React.FC<CategoriesProps> = ({ list }) => {
  return (
    <IonRow className="justify-content-center">
      {list.map((item, index) => (
        <>
          <IonCol
            key={index}
            size="2"
            sizeLg="2"
            sizeMd="2"
            sizeXl="2"
            sizeSm="6"
            sizeXs="6"
          >
            <CategoryCard
              id={item?.id}
              name={item?.categoryName}
              image={item?.image}
            />
          </IonCol>
        </>
      ))}
    </IonRow>
  );
};

export default Categories;
