import React, { useEffect, useState } from "react";
import { Accordion, Button, Form } from "react-bootstrap";
import {
  useGetCategoriesQuery,
  useGetMyBrandsQuery,
} from "../../graphql/generated";
import { IonButton } from "@ionic/react";
import { FashionColorEnum, SizesEnum } from "../../config";

const Filters: React.FC = () => {
  const { data: brands } = useGetMyBrandsQuery();

  const { data: categories } = useGetCategoriesQuery({
    variables: {
      parentMenu: "all",
    },
  });

  const [selectedCategories, setSelectedCategories] = useState<number[]>([]);

  const handleCheckboxChange = (categoryId: number) => {
    setSelectedCategories((prev) =>
      prev.includes(categoryId)
        ? prev.filter((id) => id !== categoryId)
        : [...prev, categoryId]
    );
  };
  const [parentCategories, setParentCategories] = useState<any[]>([]);
  useEffect(() => {
    if (categories?.getCategories) {
      const parents = categories.getCategories.filter(
        (cat) => cat.parentCategory === 0
      );
      setParentCategories(parents);
    }
  }, [categories]);
  const childCategories = categories?.getCategories.filter(
    (cat) => cat.parentCategory !== 0
  );

  const getChildren = (parentId: number) =>
    childCategories?.filter((cat) => cat.parentCategory === parentId);

  return (
    <div className="p-3">
      <h6>Filters</h6>
      <Accordion defaultActiveKey="0" alwaysOpen>
        {/* Gender Filter */}
        <Accordion.Item eventKey="0">
          <Accordion.Header>Gender</Accordion.Header>
          <Accordion.Body>
            <Form.Check type="checkbox" label="Men" id="gender-men" />
            <Form.Check type="checkbox" label="Women" id="gender-women" />
          </Accordion.Body>
        </Accordion.Item>

        {/* Brands Filter */}
        <Accordion.Item eventKey="1">
          <Accordion.Header>Brands</Accordion.Header>
          <Accordion.Body>
            {brands?.getMyBrands.map((item) => (
              <>
                <Form.Check
                  key={item?.id}
                  type="checkbox"
                  label={item?.brandName}
                  id={`brand-${item?.brandName}`}
                />
              </>
            ))}
          </Accordion.Body>
        </Accordion.Item>

        {/* Category Filter with Subcategories */}
        <Accordion.Item eventKey="2">
          <Accordion.Header>Category</Accordion.Header>
          <Accordion.Body>
            {parentCategories
              ?.filter((parent) => (getChildren(parent.id) || []).length > 0)
              .map((parent) => (
                <div key={parent.id} className="mb-2">
                  <strong>{parent.categoryName}</strong>
                  <div className="ms-3">
                    {(getChildren(parent.id) || []).map((child: any) => (
                      <Form.Check
                        key={child.id}
                        type="checkbox"
                        id={`child-${child.id}`}
                        label={child.categoryName}
                        checked={selectedCategories.includes(child.id)}
                        onChange={() => handleCheckboxChange(child.id)}
                      />
                    ))}
                  </div>
                </div>
              ))}
          </Accordion.Body>
        </Accordion.Item>

        {/* Color Filter */}
        <Accordion.Item eventKey="3">
          <Accordion.Header>Color</Accordion.Header>
          <Accordion.Body>
            {Object.values(FashionColorEnum)?.map((item) => (
              <Form.Check type="checkbox" label={item} id={`color-${item}`} />
            ))}
          </Accordion.Body>
        </Accordion.Item>

        {/* Size Filter */}
        <Accordion.Item eventKey="4">
          <Accordion.Header>Size</Accordion.Header>
          <Accordion.Body>
            <div className="d-flex flex-wrap gap-2">
              {Object.values(SizesEnum)?.map((item) => (
                <Form.Check
                  key={item}
                  type="checkbox"
                  label={item}
                  id={`size-${item}`}
                  className="me-3"
                />
              ))}
            </div>
          </Accordion.Body>
        </Accordion.Item>

        {/* Material Filter */}
        <Accordion.Item eventKey="5">
          <Accordion.Header>Material</Accordion.Header>
          <Accordion.Body>
            <Form.Check type="checkbox" label="Cotton" />
            <Form.Check type="checkbox" label="Silk" />
            <Form.Check type="checkbox" label="Linen" />
          </Accordion.Body>
        </Accordion.Item>

        {/* Pattern Filter */}
        <Accordion.Item eventKey="6">
          <Accordion.Header>Pattern</Accordion.Header>
          <Accordion.Body>
            <Form.Check type="checkbox" label="Printed" />
            <Form.Check type="checkbox" label="Embroidered" />
            <Form.Check type="checkbox" label="Plain" />
          </Accordion.Body>
        </Accordion.Item>

        {/* Offers Filter */}
        <Accordion.Item eventKey="7">
          <Accordion.Header>Offers</Accordion.Header>
          <Accordion.Body>
            <Form.Check type="checkbox" label="10% Off" />
            <Form.Check type="checkbox" label="Buy 1 Get 1" />
            <Form.Check type="checkbox" label="Clearance Sale" />
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <IonButton color={"dark"} expand="full" className="mt-3">
        Apply Filters
      </IonButton>
    </div>
  );
};

export default Filters;
