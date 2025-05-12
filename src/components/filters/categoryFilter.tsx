import { Accordion, Form } from "react-bootstrap";
import { useState } from "react";
import { useGetCategoriesQuery } from "../../graphql/generated";

type Category = {
  id: number;
  categoryName: string;
  parentCategory: number;
  image: string;
  parentCategoryName: string;
  status: boolean;
};

const CategoryFilterTree = () => {
  const [selectedCategories, setSelectedCategories] = useState<number[]>([]);

  const handleCheckboxChange = (categoryId: number) => {
    setSelectedCategories((prev) =>
      prev.includes(categoryId)
        ? prev.filter((id) => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  const { data } = useGetCategoriesQuery({
    variables: {
      parentMenu: "all",
    },
  });
  const [parentCategories, setParentCategories] = useState<any[]>([]);
  if (data) {
    setParentCategories(
      data?.getCategories.filter((cat) => cat.parentCategory === 0)
    );
  }
  const childCategories = data?.getCategories.filter(
    (cat) => cat.parentCategory !== 0
  );

  const getChildren = (parentId: number) =>
    childCategories?.filter((cat) => cat.parentCategory === parentId);

  return (
    <Accordion>
      {parentCategories?.map((parent) => (
        <Accordion.Item key={parent.id} eventKey={parent.id.toString()}>
          <Accordion.Header>
            <Form.Check
              type="checkbox"
              label={parent.categoryName}
              checked={selectedCategories.includes(parent.id)}
              onChange={() => handleCheckboxChange(parent.id)}
              onClick={(e) => e.stopPropagation()}
            />
          </Accordion.Header>
          <Accordion.Body>
            {getChildren(parent?.id)?.map((child: any) => (
              <Form.Check
                key={child.id}
                type="checkbox"
                label={child.categoryName}
                checked={selectedCategories.includes(child.id)}
                onChange={() => handleCheckboxChange(child.id)}
              />
            ))}
          </Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  );
};

export default CategoryFilterTree;
