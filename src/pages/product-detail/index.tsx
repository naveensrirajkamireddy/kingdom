import React, { useEffect, useState, useMemo } from "react";
import { useHistory, useParams } from "react-router";
import { Container, Row, Col, Spinner, Alert } from "react-bootstrap";
import { IonIcon } from "@ionic/react";
import {
  cartOutline,
  heartOutline,
  shareSocialOutline,
  shieldCheckmarkOutline,
  repeatOutline,
  checkmarkCircleOutline,
  addOutline,
  removeOutline,
  heart,
  locationOutline,
  alertCircleOutline,
  cubeOutline,
  pricetagOutline,
} from "ionicons/icons";
import {
  useProductsListQuery,
  useSingleProductQuery,
  useCheckPincodeAvailabilityLazyQuery,
} from "../../graphql/generated";
import { useCart } from "../../context/cartContext";
import Products from "../../components/products";
import StorefrontLayout from "../layout";
import { useUser } from "../../context/userContext";
import "./ProductDetail.css";

const ProductDetail: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const history = useHistory();
  const { user } = useUser();
  const { addToCart } = useCart();

  // --- States ---
  const [selectedImage, setSelectedImage] = useState<string>("");
  const [selectedVariantId, setSelectedVariantId] = useState<string | null>(
    null,
  );
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [pincode, setPincode] = useState<string>("");
  const [pincodeStatus, setPincodeStatus] = useState<{
    loading: boolean;
    data: any;
    error: boolean;
  }>({ loading: false, data: null, error: false });

  // --- Queries ---
  const { data, loading, error } = useSingleProductQuery({
    variables: { singleProductId: productId },
    fetchPolicy: "cache-and-network",
  });

  const product = data?.singleProduct;

  const { data: relatedData } = useProductsListQuery({
    variables: {
      page: 1,
      limit: 5,
      categoryId: product?.categoryId ?? undefined,
    },
    skip: !product?.categoryId,
  });

  const [checkPincode] = useCheckPincodeAvailabilityLazyQuery();

  // --- Computed Logic ---
  const selectedVariant = useMemo(() => {
    return product?.variants?.find((v: any) => v.id === selectedVariantId) || null;
  }, [selectedVariantId, product?.variants]);

  const currentPrice = useMemo(() => {
    if (!selectedVariant)
      return product?.salePrice || product?.purchasePrice || 0;
    const { price, discType, discValue } = selectedVariant;
    if (discType === "flat") return price - discValue;
    if (discType === "percentage" || discType === "percent") {
      return price - (price * discValue) / 100;
    }
    return price;
  }, [selectedVariant, product]);

  const basePrice = selectedVariant?.price || product?.purchasePrice || 0;
  const hasDiscount = currentPrice < basePrice;

  const isOutOfStock = selectedVariant
    ? selectedVariant.stockQuantity <= 0 || selectedVariant.status === false
    : product?.status === false;

  const galleryImages = useMemo(() => {
    if (!product) return [];
    const images = [];
    if (product.primaryImage) images.push(product.primaryImage);
    if (product.images?.length) {
      product.images.forEach((img: any) => {
        if (img.imageUrl && img.imageUrl !== product.primaryImage) {
          images.push(img.imageUrl);
        }
      });
    }
    return images.length > 0 ? images : ["/no-image.png"];
  }, [product]);

  // --- Effects ---
  useEffect(() => {
    if (product?.variants?.length && !selectedVariantId) {
      setSelectedVariantId(product.variants[0].id);
    }
    if (galleryImages.length > 0 && !selectedImage) {
      setSelectedImage(galleryImages[0]);
    }
  }, [product, selectedVariantId, galleryImages, selectedImage]);

  // --- Handlers ---
  const handlePincodeCheck = async () => {
    if (pincode.length !== 6) return;
    setPincodeStatus({ loading: true, data: null, error: false });
    try {
      const { data } = await checkPincode({
        variables: { pincode: parseFloat(pincode) },
      });
      if (data?.checkPincodeAvailability) {
        setPincodeStatus({ loading: false, data: data.checkPincodeAvailability, error: false });
      } else {
        setPincodeStatus({ loading: false, data: null, error: true });
      }
    } catch (err) {
      setPincodeStatus({ loading: false, data: null, error: true });
    }
  };

  const handleAddToCart = () => {
    if (!user) {
      history.push("/login");
      return;
    }
    if (product && !isOutOfStock) {
      addToCart({
        ...selectedVariant,
        id: selectedVariant?.id || product.id,
        productName: product.productName,
        brandName: product.brandName,
        quantity: quantity,
        price: currentPrice,
        displayImage: product.primaryImage || galleryImages[0],
      });
    }
  };

  if (loading) return <div className="loader-full"><Spinner animation="border" variant="dark" /></div>;
  if (error || !product) return <Alert variant="danger" className="m-5 text-center">Product could not be loaded. Please try again later.</Alert>;

  return (
    <StorefrontLayout>
      <div className="product-page-wrapper">
        <Container className="px-lg-5">
          <div className="pm-breadcrumb">
            <span onClick={() => history.push("/")}>Home</span> /{" "}
            <span onClick={() => history.push("/shop")}>Shop</span> /{" "}
            {product.categoryName && (
              <><span onClick={() => history.push(`/shop/${product.categoryId}`)}>{product.categoryName}</span> / </>
            )}
            <span className="current">{product.productName}</span>
          </div>

          <Row className="gx-lg-5 mt-4">
            <Col lg={6} xl={7}>
              <div className="sticky-gallery-section">
                <div className="main-image-container">
                  <img src={selectedImage || galleryImages[0]} alt={product.productName} className="main-display-image" />
                  <div className="pm-badges-group">
                    {product.newArrival && <span className="pm-badge badge-blue">NEW</span>}
                    {product.featured && <span className="pm-badge badge-dark">FEATURED</span>}
                    {hasDiscount && <span className="pm-badge badge-orange">SALE</span>}
                  </div>
                </div>
                {galleryImages.length > 1 && (
                  <div className="thumbnail-strip">
                    {galleryImages.map((img: string, i: number) => (
                      <div key={i} className={`thumb-box ${selectedImage === img ? "active" : ""}`} onClick={() => setSelectedImage(img)}>
                        <img src={img} alt={`view-${i}`} />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </Col>

            <Col lg={6} xl={5}>
              <div className="product-details-panel">
                <div className="title-header-group">
                  <span className="brand-tag">{product.brandName || "Premium"}</span>
                  <div className="title-row">
                    <h1 className="product-title-big">{product.productName}</h1>
                    <button className="icon-btn-minimal" title="Share"><IonIcon icon={shareSocialOutline} /></button>
                  </div>
                  {product.skuCode && <span className="sku-text">SKU: {product.skuCode}</span>}
                </div>

                <div className="price-tag-row">
                  <span className="new-price">₹{currentPrice.toFixed(2)}</span>
                  {hasDiscount && (
                    <><span className="old-price">₹{basePrice.toFixed(2)}</span>
                      {selectedVariant?.discValue && (
                        <span className="discount-tag">
                          {selectedVariant.discType === "percent" || selectedVariant.discType === "percentage"
                            ? `${selectedVariant.discValue}% OFF` : `₹${selectedVariant.discValue} OFF`}
                        </span>
                      )}
                    </>
                  )}
                </div>

                <hr className="pm-divider" />

                {product.variants && product.variants.length > 0 && (
                  <div className="variant-picker-section">
                    <label className="section-label">Select Option
                      {selectedVariant && selectedVariant.stockQuantity > 0 && selectedVariant.stockQuantity <= 5 && (
                        <span className="stock-warning ml-2">(Only {selectedVariant.stockQuantity} left!)</span>
                      )}
                    </label>
                    <div className="variant-chips">
                      {product.variants.map((v: any) => {
                        const outOfStock = v.stockQuantity <= 0 || v.status === "Inactive";
                        const displayName = v.variantName || [v.color, v.size].filter(Boolean).join(" - ") || `Variant ${v.id}`;
                        return (
                          <button key={v.id} disabled={outOfStock} className={`variant-chip ${selectedVariantId === v.id ? "active" : ""} ${outOfStock ? "out-of-stock" : ""}`} onClick={() => setSelectedVariantId(v.id)}>
                            {v.size}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}

                <div className="attribute-grid mt-3">
                  {product.categoryName && <div className="attr-item"><IonIcon icon={pricetagOutline} /><span><strong>Category:</strong> {product.categoryName}</span></div>}
                  {product.materialName && <div className="attr-item"><IonIcon icon={cubeOutline} /><span><strong>Material:</strong> {product.materialName}</span></div>}
                  {product.patternName && <div className="attr-item"><IonIcon icon={cubeOutline} /><span><strong>Pattern:</strong> {product.patternName}</span></div>}
                  {product.variants && product?.variants[0].color && <div className="attr-item"><IonIcon icon={cubeOutline} /><span><strong>Color:</strong> {product.variants[0].color}</span></div>}
                </div>

                <div className="purchase-actions-container">
                  <div className="qty-selector">
                    <button onClick={() => setQuantity(Math.max(1, quantity - 1))} disabled={isOutOfStock}><IonIcon icon={removeOutline} /></button>
                    <span>{quantity}</span>
                    <button onClick={() => { if (selectedVariant && quantity >= selectedVariant.stockQuantity) return; setQuantity(quantity + 1); }} disabled={isOutOfStock || (selectedVariant ? quantity >= selectedVariant.stockQuantity : false)}><IonIcon icon={addOutline} /></button>
                  </div>
                  <button className={`add-to-cart-btn-premium ${isOutOfStock ? "disabled-btn" : ""}`} onClick={handleAddToCart} disabled={isOutOfStock}><IonIcon icon={cartOutline} /> {isOutOfStock ? "Out of Stock" : "Add to Cart"}</button>
                  <button className={`wishlist-icon-btn ${isWishlisted ? "active" : ""}`} onClick={() => setIsWishlisted(!isWishlisted)}><IonIcon icon={isWishlisted ? heart : heartOutline} /></button>
                </div>

                <hr className="pm-divider" />

                <div className="pincode-checker-box">
                  <div className="pincode-header"><IonIcon icon={locationOutline} /><span>Check Delivery Eligibility</span></div>
                  <div className="pincode-input-wrapper">
                    <input type="tel" maxLength={6} placeholder="Enter 6-digit Pincode" value={pincode} onChange={(e) => setPincode(e.target.value.replace(/\D/g, ""))} />
                    <button disabled={pincode.length !== 6 || pincodeStatus.loading} onClick={handlePincodeCheck}>{pincodeStatus.loading ? "..." : "Check"}</button>
                  </div>
                  {pincodeStatus.data && <div className="pincode-result success"><IonIcon icon={checkmarkCircleOutline} /><strong>Delivery available to {pincodeStatus.data.delivery_codes[0]?.postal_code?.city || pincode}</strong></div>}
                  {pincodeStatus.error && <div className="pincode-result error"><IonIcon icon={alertCircleOutline} /><span>Not serviceable for this location.</span></div>}
                </div>

                <div className="trust-signals">
                  <div className="signal"><IonIcon icon={shieldCheckmarkOutline} /><span>100% Secure Checkout</span></div>
                  <div className="signal"><IonIcon icon={repeatOutline} /><span>7 Days Easy Return</span></div>
                </div>

                {product.description && (
                  <div className="product-description-area">
                    <h6 className="section-label">Product Details</h6>
                    <p>{product.description}</p>
                  </div>
                )}
              </div>
            </Col>
          </Row>

          <section className="related-products-section">
            <div className="section-title-wrapper"><h2 className="main-title">You May Also Like</h2></div>
            {relatedData?.productsList && <Products list={relatedData.productsList} />}
          </section>
        </Container>
      </div>
    </StorefrontLayout>
  );
};

export default ProductDetail;
