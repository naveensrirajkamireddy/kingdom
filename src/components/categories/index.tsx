import { IonRow, IonCol } from "@ionic/react";
import CategoryCard from "../category-card";
import "./Categories.css";

interface CategoriesProps {
  list: any[];
}

const Categories: React.FC<CategoriesProps> = ({ list }) => {
  return (
    <div className="categories-container">
      <IonRow className="category-grid">
        {list.map((item) => (
          <IonCol
            key={item.id}
            size="6" /* 2 items per row on very small screens */
            sizeSm="4" /* 3 items on small phones */
            sizeMd="3" /* 4 items on tablets */
            sizeLg="2" /* 6 items on desktops */
            className="category-col"
          >
            <CategoryCard
              id={item?.id}
              name={item?.categoryName}
              image={item?.image}
            />
          </IonCol>
        ))}
      </IonRow>
    </div>
  );
};

export default Categories;
