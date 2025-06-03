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
  Spinner,
  Alert,
} from "react-bootstrap";
import {
  useProductsListQuery,
  useSingleProductQuery,
} from "../../graphql/generated";
import { useCart } from "../../context/cartContext";
import { IonText } from "@ionic/react";
import Products from "../../components/products";
import { raiseSuccessAlert } from "../../utils";
import Footer from "../footer";

const ProductDetail: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const { data, loading, error } = useSingleProductQuery({
    variables: { singleProductId: productId },
  });

  const [selectedImage, setSelectedImage] = useState<string>("");
  const [selectedVariantId, setSelectedVariantId] = useState<string | null>(
    null
  );

  const product = data?.singleProduct;
  const [relatedProducts, setRelatedProducts] = useState<any[]>([]);

  const { data: relatedData } = useProductsListQuery({
    variables: {
      page: 1,
      limit: 10,
      categoryId: product?.categoryId ?? undefined,
    },
    skip: !product?.categoryId,
  });

  useEffect(() => {
    if (relatedData) {
      setRelatedProducts(relatedData.productsList);
    }
  }, [relatedData]);

  const { addToCart } = useCart();

  const handleAddToCart = () => {
    if (!selectedVariantId) {
      alert("Please select a variant before adding to cart.");
      return;
    }

    addToCart({
      productId: selectedVariantId,
      productName: product?.productName as string,
      imageUrl: product?.primaryImage as string,
      quantity: 1,
      price: Number(product?.salePrice),
    });

    raiseSuccessAlert("Product added to cart!");
  };

  if (loading) return <Spinner animation="border" variant="primary" />;
  if (error) return <Alert variant="danger">Error: {error.message}</Alert>;
  if (!product) return <Alert variant="warning">Product not found!</Alert>;

  const {
    productName,
    brandName,
    primaryImage,
    salePrice,
    purchasePrice,
    description,
    materialName,
    patternName,
    variants,
  } = product;

  const images = variants?.[0]?.images?.length
    ? variants[0].images.map((img) => img.imageUrl)
    : [primaryImage];

  const displayPrice = salePrice < purchasePrice;

  const handleImageClick = (image: string) => {
    setSelectedImage(image);
  };

  return (
    <>
      <Container className="py-4">
        <Row>
          <Col md={6} className="text-center">
            <Image
              src={selectedImage || images[0]}
              fluid
              rounded
              onError={(e) =>
                (e.currentTarget.src =
                  "https://via.placeholder.com/300x400?text=Image+Not+Found")
              }
            />
            <div className="d-flex justify-content-center gap-2 mt-3">
              {images.map((img, i) => (
                <Image
                  key={i}
                  src={img}
                  thumbnail
                  style={{ width: 80, height: 80 }}
                  onClick={() => handleImageClick(img)}
                />
              ))}
            </div>
          </Col>

          <Col md={6}>
            <h4 className="text-muted">{brandName}</h4>
            <h2 className="fw-bold">{productName}</h2>

            <div className="my-3">
              <span className="fs-4 fw-bold text-success">
                ₹{salePrice.toFixed(2)}
              </span>
              {displayPrice && (
                <>
                  <small
                    className="text-muted ms-2"
                    style={{ textDecoration: "line-through" }}
                  >
                    ₹{purchasePrice.toFixed(2)}
                  </small>
                  <Badge bg="danger" className="ms-2">
                    {Math.round(
                      ((purchasePrice - salePrice) / purchasePrice) * 100
                    )}
                    % OFF
                  </Badge>
                </>
              )}
            </div>

            <div className="mb-2">
              <p>Cloth Type: {materialName}</p>
              <p>Pattern: {patternName}</p>
            </div>
            <Row className="my-2">
              <Col>
                <h5>Product Description</h5>
                <p>{description}</p>
              </Col>
            </Row>

            <div className="mb-3">
              <Form.Label>
                <strong>Select Variant</strong>
              </Form.Label>
              {variants?.length ? (
                <div>
                  {variants.map((variant) => (
                    <Form.Check
                      inline
                      type="radio"
                      key={variant.id}
                      id={`variant-${variant.id}`}
                      label={variant.variantName}
                      name="variantOptions"
                      value={variant.id}
                      checked={selectedVariantId === variant.id}
                      onChange={(e) => setSelectedVariantId(e.target.value)}
                    />
                  ))}
                </div>
              ) : (
                <p>No variants available</p>
              )}
            </div>

            <div className="d-grid gap-2 mt-4">
              <Button
                variant="dark"
                size="lg"
                onClick={handleAddToCart}
                disabled={!selectedVariantId} // Disable if no variant selected
              >
                Add to Cart
              </Button>
              <Button variant="outline-secondary" size="lg">
                Add to Wishlist
              </Button>
            </div>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col>
            <h3>Related Products</h3>
            <Products list={relatedProducts} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ProductDetail;
