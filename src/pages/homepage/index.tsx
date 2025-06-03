import { IonCol, IonContent, IonicSlides, IonPage, IonRow } from "@ionic/react";
import AppHeader from "../../components/app-header";
import Slides from "../../components/slides";
import ProductCard from "../../components/product-card";
import {
  useGetCategoriesQuery,
  useProductsListLazyQuery,
  useProductsListQuery,
} from "../../graphql/generated";
import { useEffect, useState } from "react";
import CategoryCard from "../../components/category-card";
import Categories from "../../components/categories";
import Products from "../../components/products";
import { Container } from "react-bootstrap";

export const sampleProducts = [
  {
    id: "a7c59b2d-5f35-45ec-a1c3-82b27e221001",
    name: "Levi's Men's 511 Slim Fit Jeans",
    brandName: "Levi's",
    description:
      "Classic slim fit jeans with a modern cut and stretchy comfort.",
    images: [
      // changed to images array
      "https://assets.ajio.com/medias/sys_master/root/20240301/n3KD/65e15d8e05ac7d77bb8bf6cf/-473Wx593H-410409779-1ku-MODEL.jpg",
      "https://assets.ajio.com/medias/sys_master/root/20230213/eGUO/63ea5018f997dde6f4a20f73/-473Wx593H-410354719-5oo-MODEL5.jpg",
      "https://assets.ajio.com/medias/sys_master/root/20241112/P0Tk/67335f30260f9c41e8d307e0/-473Wx593H-410500819-02a-MODEL2.jpg",
    ],
    price: 1311,
    offerPrice: 1311,
    sizes: ["30", "32", "34", "36"],
    colors: ["Blue", "Black"],
    stock: 25,
    rating: 4.5,
    reviewsCount: 145,
    material: "Denim",
    category: "Jeans",
    isAvailable: true,
    vendor: "Denim World",
  },
  {
    id: "b2fa7239-1b91-42d3-9e3f-3fa9b7d1f002",
    name: "INVICTUS Men's Easy Care Formal Shirt",
    brandName: "INVICTUS",
    description: "Easy-care formal shirt with a tailored slim fit.",
    images: [
      // changed to images array
      "https://assets.ajio.com/medias/sys_master/root/20230213/eGUO/63ea5018f997dde6f4a20f73/-473Wx593H-410354719-5oo-MODEL5.jpg",
    ],
    price: 679,
    offerPrice: 679,
    sizes: ["M", "L", "XL"],
    colors: ["White", "Sky Blue"],
    stock: 14,
    rating: 4.2,
    reviewsCount: 78,
    material: "Cotton Blend",
    category: "Shirts",
    isAvailable: true,
    vendor: "Invictus Apparel",
  },
  {
    id: "d4e21d50-210f-4a2f-bb87-c59c17bcb003",
    name: "Snitch Light Grey Linen Shirt",
    brandName: "Snitch",
    description: "Lightweight linen shirt perfect for warm weather.",
    images: [
      // changed to images array
      "https://assets.ajio.com/medias/sys_master/root/20241112/P0Tk/67335f30260f9c41e8d307e0/-473Wx593H-410500819-02a-MODEL2.jpg",
    ],
    price: 2699,
    offerPrice: 2699,
    sizes: ["M", "L"],
    colors: ["Grey"],
    stock: 10,
    rating: 4.7,
    reviewsCount: 89,
    material: "Linen",
    category: "Shirts",
    isAvailable: true,
    vendor: "Snitch India",
  },
  {
    id: "ecb7c88e-4297-4de0-8c0c-1f1c0dcd0004",
    name: "Roadster Men's Printed Chino Shorts",
    brandName: "Roadster",
    description: "Comfortable chino shorts with trendy prints for casual wear.",
    images: [
      // changed to images array
      "https://assets.ajio.com/medias/sys_master/root/20240712/kFSO/669151a71d763220fa72d230/superdry_optic_white_studios_knitted_relaxed_fit_shirt.jpg",
    ],
    price: 719,
    offerPrice: 719,
    sizes: ["M", "L", "XL"],
    colors: ["Olive", "Beige"],
    stock: 40,
    rating: 4.0,
    reviewsCount: 63,
    material: "Cotton",
    category: "Shorts",
    isAvailable: true,
    vendor: "Roadster Clothing",
  },
  {
    id: "0f973f85-df87-4f02-ae42-73122d250005",
    name: "Arrow Men's Regular Fit Blazer",
    brandName: "Arrow",
    description:
      "Regular fit blazer ideal for formal occasions and office wear.",
    images: [
      // changed to images array
      "https://assets.ajio.com/medias/sys_master/root/20241003/cHmg/66fe2c54260f9c41e84dca54/superdry_olive_green_short_sleeve_classic_pique_polo_t-shirt.jpg",
    ],
    price: 3429,
    offerPrice: 3429,
    sizes: ["40", "42", "44"],
    colors: ["Navy", "Charcoal"],
    stock: 7,
    rating: 4.4,
    reviewsCount: 58,
    material: "Polyester Viscose Blend",
    category: "Blazers",
    isAvailable: true,
    vendor: "Arrow Corporate",
  },
  {
    id: "50f993e6-e479-4f3c-b0d1-7e03312f0006",
    name: "HERE&NOW Men's Chikankari Kurta",
    brandName: "HERE&NOW",
    description: "Elegant Chikankari kurta with traditional embroidery.",
    images: [
      // changed to images array
      "https://assets.ajio.com/medias/sys_master/root/20240301/n3KD/65e15d8e05ac7d77bb8bf6cf/superdry_brown_trailsman_cord_shirt.jpg",
    ],
    price: 999,
    offerPrice: 999,
    sizes: ["M", "L", "XL"],
    colors: ["White", "Blue"],
    stock: 18,
    rating: 4.6,
    reviewsCount: 95,
    material: "Cotton",
    category: "Ethnic Wear",
    isAvailable: true,
    vendor: "Ethnic Bazaar",
  },
  {
    id: "8f2b3c1f-9c76-48c1-b2de-44f4f18a0007",
    name: "URBAN FOREST Oliver Leather Wallet",
    brandName: "URBAN FOREST",
    description:
      "Genuine leather wallet with multiple card and cash compartments.",
    images: [
      // changed to images array
      "https://assets.ajio.com/medias/sys_master/root/20240905/CDUD/66d9cc9f6f60443f315a8b12/superdry_black_men_regular_fit_cotton_polo_t-shirt_with_brand_print.jpg",
    ],
    price: 449,
    offerPrice: 449,
    sizes: [],
    colors: ["Black", "Brown"],
    stock: 100,
    rating: 4.8,
    reviewsCount: 212,
    material: "Leather",
    category: "Accessories",
    isAvailable: true,
    vendor: "Urban Forest Gear",
  },
  {
    id: "3e1a4458-54e6-4e44-9d8b-90b215f80008",
    name: "AJIO Men's Checked Patch Pocket Shirt",
    brandName: "AJIO",
    description: "Trendy checked shirt with patch pocket design.",
    images: [
      // changed to images array
      "https://assets.ajio.com/medias/sys_master/root/20241112/FVLq/67335ec2260f9c41e8d30739/-473Wx593H-410500819-02a-MODEL3.jpg",
    ],
    price: 1639,
    offerPrice: 1639,
    sizes: ["M", "L", "XL"],
    colors: ["Green", "Grey"],
    stock: 23,
    rating: 4.3,
    reviewsCount: 112,
    material: "Cotton",
    category: "Shirts",
    isAvailable: true,
    vendor: "AJIO Trends",
  },
  {
    id: "6db77a3f-8428-47ef-9a5d-2b5a3d360009",
    name: "Jompers Men's Embroidered Kurta",
    brandName: "Jompers",
    description:
      "Stylish embroidered kurta for festive and traditional occasions.",
    images: [
      // changed to images array
      "https://assets.ajio.com/medias/sys_master/root/20231111/wSMS/654f95a5afa4cf41f5840409/superdry_wine_core_logo_classic_t-shirt.jpg",
    ],
    price: 902,
    offerPrice: 902,
    sizes: ["M", "L", "XL", "XXL"],
    colors: ["Maroon", "Black"],
    stock: 16,
    rating: 4.4,
    reviewsCount: 48,
    material: "Cotton Silk",
    category: "Ethnic Wear",
    isAvailable: true,
    vendor: "Jompers India",
  },
  {
    id: "86a49c41-76c3-43c3-84f7-0cfcd931000a",
    name: "Technosport Men's Slim Fit Shirt",
    brandName: "Technosport",
    description: "Stretchable slim-fit shirt suitable for daily casual use.",
    images: [
      // changed to images array
      "https://assets.ajio.com/medias/sys_master/root/20240813/lKoa/66baf6eb1d763220fa74c8c9/superdry_taupe_grey_vintage_blackout_relaxed_fit_crew-neck_t-shirt.jpg",
    ],
    price: 949,
    offerPrice: 949,
    sizes: ["M", "L", "XL"],
    colors: ["Olive", "Navy"],
    stock: 30,
    rating: 4.3,
    reviewsCount: 36,
    material: "Cotton",
    category: "Shirts",
    isAvailable: true,
    vendor: "TechWear Co.",
  },
];

const Home: React.FC = () => {
  const { data, loading } = useGetCategoriesQuery({
    variables: {
      parentMenu: "0",
    },
  });

  const [productsList, setProductsList] = useState<any[]>([]);
  const { data: productsData, loading: productsLoading } = useProductsListQuery(
    {
      variables: {
        page: 1,
        limit: 20,
      },
    }
  );

  const [categories, setCategories] = useState<any[]>([]);

  useEffect(() => {
    if (data?.getCategories) {
      setCategories(data?.getCategories);
    }
    if (productsData?.productsList) {
      setProductsList(productsData?.productsList);
    }
  }, [data, productsData]);
  return (
    <>
      <Slides />
      <Container fluid className="mb-3">
        <div className="container-fluid">
          <h1 className="section-title">Categories</h1>
          <Categories list={categories} />
          <h1 className="section-title">New Arrivals</h1>
          <Products list={productsList} />
          <h1 className="section-title">Trending Products</h1>
          <Products list={productsList} />
        </div>
      </Container>
    </>
  );
};

export default Home;
