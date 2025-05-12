import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import {
  Container,
  Row,
  Col,
  Button,
  Badge,
  Image,
  Form,
} from "react-bootstrap";
import { sampleProducts } from "../homepage";

const ProductDetail: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const [product, setProduct] = useState<any | null>(null);
  const [selectedImage, setSelectedImage] = useState<string>("");

  useEffect(() => {
    if (productId) {
      const selectedProduct = sampleProducts.find((p) => p.id === productId);
      setProduct(selectedProduct);
      if (selectedProduct) {
        setSelectedImage(selectedProduct.images[0]); // Set the first image as default
      }
    }
  }, [productId]);

  if (!product) {
    return <div>Product not found!</div>;
  }

  const {
    name,
    brandName,
    images,
    price,
    offerPrice,
    description,
    sizes,
    color,
    material,
  } = product;

  const displayPrice = offerPrice < price;

  const handleImageClick = (image: string) => {
    setSelectedImage(image); // Update the selected image on thumbnail click
  };

  return (
    <Container className="py-4">
      <Row>
        {/* Product Images */}
        <Col md={6} className="text-center">
          <Image src={selectedImage} fluid rounded />
          <div className="d-flex justify-content-center gap-2 mt-3">
            {images.map((img: string, i: number) => (
              <Image
                key={i}
                src={img}
                thumbnail
                style={{ width: 80, height: 80 }}
                onClick={() => handleImageClick(img)} // Add onClick handler
              />
            ))}
          </div>
        </Col>

        {/* Product Info */}
        <Col md={6}>
          <h4 className="text-muted">{brandName}</h4>
          <h2 className="fw-bold">{name}</h2>

          <div className="my-3">
            <span className="fs-4 fw-bold text-success">
              ₹{offerPrice.toFixed(2)}
            </span>
            {displayPrice && (
              <small
                className="text-muted ms-2"
                style={{ textDecoration: "line-through" }}
              >
                ₹{price.toFixed(2)}
              </small>
            )}
            {displayPrice && (
              <Badge bg="danger" className="ms-2">
                {Math.round(((price - offerPrice) / price) * 100)}% OFF
              </Badge>
            )}
          </div>

          <div className="mb-3">
            <strong>Color:</strong> {color}
          </div>

          <div className="mb-3">
            <strong>Material:</strong> {material}
          </div>

          <div className="mb-3">
            <Form.Label>
              <strong>Size</strong>
            </Form.Label>
            <div className="d-flex flex-wrap gap-2">
              {sizes.map((size: string) => (
                <Form.Check
                  key={size}
                  inline
                  label={size}
                  type="radio"
                  name="size"
                  id={`size-${size}`}
                />
              ))}
            </div>
          </div>

          <div className="d-grid gap-2 mt-4">
            <Button variant="dark" size="lg">
              Add to Cart
            </Button>
            <Button variant="outline-secondary" size="lg">
              Add to Wishlist
            </Button>
          </div>
        </Col>
      </Row>

      {/* Description Section */}
      <Row className="mt-5">
        <Col>
          <h5>Product Description</h5>
          <p>{description}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
