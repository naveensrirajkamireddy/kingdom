import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTimeISO: { input: any; output: any; }
};

export type AddToCartInput = {
  discType?: InputMaybe<Scalars['String']['input']>;
  discValue?: InputMaybe<Scalars['Float']['input']>;
  price: Scalars['Float']['input'];
  quantity: Scalars['Int']['input'];
  variantId: Scalars['String']['input'];
};

export type BrandInput = {
  brandName: Scalars['String']['input'];
  id?: InputMaybe<Scalars['Float']['input']>;
  status?: Scalars['Boolean']['input'];
};

export type Brands = {
  __typename?: 'Brands';
  brandName: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  createdBy?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  status: Scalars['Boolean']['output'];
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  updatedBy?: Maybe<Scalars['String']['output']>;
};

export type Cart = {
  __typename?: 'Cart';
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  createdBy?: Maybe<Scalars['String']['output']>;
  customer: Scalars['String']['output'];
  discType: Scalars['String']['output'];
  discValue: Scalars['Float']['output'];
  finalPrice: Scalars['Float']['output'];
  id: Scalars['ID']['output'];
  price: Scalars['Float']['output'];
  quantity: Scalars['Int']['output'];
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  updatedBy?: Maybe<Scalars['String']['output']>;
  variantId: Scalars['String']['output'];
};

export type CartOutput = {
  __typename?: 'CartOutput';
  discType?: Maybe<Scalars['String']['output']>;
  discValue?: Maybe<Scalars['Float']['output']>;
  finalPrice?: Maybe<Scalars['Float']['output']>;
  id: Scalars['String']['output'];
  image: Scalars['String']['output'];
  price: Scalars['Float']['output'];
  productId: Scalars['String']['output'];
  productName: Scalars['String']['output'];
  quantity: Scalars['Int']['output'];
  variantId: Scalars['String']['output'];
};

export type Categories = {
  __typename?: 'Categories';
  categoryName: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  image: Scalars['String']['output'];
  parentCategory: Scalars['Int']['output'];
  status: Scalars['Boolean']['output'];
};

export type CategoryInput = {
  categoryName: Scalars['String']['input'];
  id?: InputMaybe<Scalars['Float']['input']>;
  image: Scalars['String']['input'];
  parentCategory: Scalars['Float']['input'];
  status?: Scalars['Boolean']['input'];
};

export type CategryOutput = {
  __typename?: 'CategryOutput';
  categoryName: Scalars['String']['output'];
  id?: Maybe<Scalars['Float']['output']>;
  image: Scalars['String']['output'];
  parentCategory: Scalars['Float']['output'];
  parentCategoryName: Scalars['String']['output'];
  status: Scalars['Boolean']['output'];
};

export type CustomerAddress = {
  __typename?: 'CustomerAddress';
  addressLine1: Scalars['String']['output'];
  addressLine2?: Maybe<Scalars['String']['output']>;
  city: Scalars['String']['output'];
  country: Scalars['String']['output'];
  customerId: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  isDefault: Scalars['Boolean']['output'];
  postalCode: Scalars['String']['output'];
  state: Scalars['String']['output'];
};

export type CustomerInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  customerName: Scalars['String']['input'];
  email: Scalars['String']['input'];
  mobile: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type CustomerOutput = {
  __typename?: 'CustomerOutput';
  address?: Maybe<Scalars['String']['output']>;
  authToken: Scalars['String']['output'];
  customerId: Scalars['String']['output'];
  customerName: Scalars['String']['output'];
  email: Scalars['String']['output'];
  mobile: Scalars['String']['output'];
  status: Scalars['Boolean']['output'];
};

export type CustomersListOutput = {
  __typename?: 'CustomersListOutput';
  address?: Maybe<Scalars['String']['output']>;
  cart?: Maybe<Cart>;
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  createdBy?: Maybe<Scalars['String']['output']>;
  customerId: Scalars['String']['output'];
  customerName: Scalars['String']['output'];
  email: Scalars['String']['output'];
  id: Scalars['Float']['output'];
  mobile: Scalars['String']['output'];
  password: Scalars['String']['output'];
  status: Scalars['Boolean']['output'];
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  updatedBy?: Maybe<Scalars['String']['output']>;
};

export type DashboardLowStock = {
  __typename?: 'DashboardLowStock';
  img?: Maybe<Scalars['String']['output']>;
  left: Scalars['Int']['output'];
  name: Scalars['String']['output'];
};

export type DashboardMetrics = {
  __typename?: 'DashboardMetrics';
  newSignups: Scalars['Int']['output'];
  totalOrders: Scalars['Int']['output'];
  totalProfit: Scalars['Float']['output'];
  totalSales: Scalars['Float']['output'];
};

export type DashboardOutput = {
  __typename?: 'DashboardOutput';
  lowStock: Array<DashboardLowStock>;
  metrics: DashboardMetrics;
  recentOrders: Array<DashboardRecentOrder>;
};

export type DashboardRecentOrder = {
  __typename?: 'DashboardRecentOrder';
  amount: Scalars['Float']['output'];
  customerName: Scalars['String']['output'];
  id: Scalars['String']['output'];
  status: Scalars['String']['output'];
};

export type DeliveryCodeItem = {
  __typename?: 'DeliveryCodeItem';
  postal_code: PostalCodeDetails;
};

export type GenericResponse = {
  __typename?: 'GenericResponse';
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

export type LogisticsCenter = {
  __typename?: 'LogisticsCenter';
  cn: Scalars['String']['output'];
  code: Scalars['String']['output'];
  e: Scalars['String']['output'];
  s: Scalars['String']['output'];
  sort_code?: Maybe<Scalars['String']['output']>;
};

export type LogisticsResponse = {
  __typename?: 'LogisticsResponse';
  delivery_codes: Array<DeliveryCodeItem>;
};

export type Material = {
  __typename?: 'Material';
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  createdBy?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  materialName: Scalars['String']['output'];
  status: Scalars['Boolean']['output'];
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  updatedBy?: Maybe<Scalars['String']['output']>;
};

export type MaterialInput = {
  id?: InputMaybe<Scalars['Float']['input']>;
  materialName: Scalars['String']['input'];
  status?: Scalars['Boolean']['input'];
};

export type MenuInput = {
  id?: InputMaybe<Scalars['Float']['input']>;
  menuName: Scalars['String']['input'];
  parentMenuId: Scalars['Float']['input'];
  priority: Scalars['Float']['input'];
  status?: Scalars['Boolean']['input'];
  url?: InputMaybe<Scalars['String']['input']>;
};

export type MenuOutput = {
  __typename?: 'MenuOutput';
  id?: Maybe<Scalars['Float']['output']>;
  menuName: Scalars['String']['output'];
  parentMenuId: Scalars['Float']['output'];
  parentMenuName: Scalars['String']['output'];
  priority: Scalars['Float']['output'];
  status: Scalars['Boolean']['output'];
  url?: Maybe<Scalars['String']['output']>;
};

export type Menus = {
  __typename?: 'Menus';
  id: Scalars['Int']['output'];
  menuName: Scalars['String']['output'];
  parentMenuId: Scalars['Int']['output'];
  priority: Scalars['Int']['output'];
  status: Scalars['Boolean']['output'];
  url?: Maybe<Scalars['String']['output']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addAddress: CustomerAddress;
  addToCart: Cart;
  assignRoleAccess: Array<RoleAccess>;
  createCustomer: GenericResponse;
  createOrUpdateBrand: Brands;
  createOrUpdateCategory: Categories;
  createOrUpdateMaterial: Material;
  createOrUpdateMenu: Menus;
  createOrUpdatePatterns: Patterns;
  createOrUpdateRole: Roles;
  createOrUpdateUser: UserOutput;
  createOrUpdateVendor: Vendors;
  createSlider: Sliders;
  createSuperUser: User;
  deactivateRole: Scalars['Boolean']['output'];
  deactivateUser: Scalars['Boolean']['output'];
  deleteAddress: Scalars['Boolean']['output'];
  deleteBrand: Scalars['Boolean']['output'];
  deleteCategory: Scalars['Boolean']['output'];
  deleteMaterial: Scalars['Boolean']['output'];
  deleteMenu: Scalars['Boolean']['output'];
  deletePatterns: Scalars['Boolean']['output'];
  deleteProduct: Scalars['Boolean']['output'];
  deleteRole: Scalars['Boolean']['output'];
  deleteSlider: Scalars['Boolean']['output'];
  deleteUser: Scalars['Boolean']['output'];
  deleteVendor: Scalars['Boolean']['output'];
  generateMissingSKUs: Scalars['String']['output'];
  login: LoginOutput;
  loginCustomer: CustomerOutput;
  placeOrder: PlaceOrderResponse;
  removeFromCart: Scalars['Boolean']['output'];
  saveProduct: Products;
  updateAddress: CustomerAddress;
};


export type MutationAddAddressArgs = {
  addressLine1: Scalars['String']['input'];
  addressLine2?: InputMaybe<Scalars['String']['input']>;
  city: Scalars['String']['input'];
  country: Scalars['String']['input'];
  customerId: Scalars['String']['input'];
  isDefault?: Scalars['Boolean']['input'];
  postalCode: Scalars['String']['input'];
  state: Scalars['String']['input'];
};


export type MutationAddToCartArgs = {
  input: AddToCartInput;
};


export type MutationAssignRoleAccessArgs = {
  input: RoleAccessBulkInput;
};


export type MutationCreateCustomerArgs = {
  input: CustomerInput;
};


export type MutationCreateOrUpdateBrandArgs = {
  input: BrandInput;
};


export type MutationCreateOrUpdateCategoryArgs = {
  input: CategoryInput;
};


export type MutationCreateOrUpdateMaterialArgs = {
  input: MaterialInput;
};


export type MutationCreateOrUpdateMenuArgs = {
  input: MenuInput;
};


export type MutationCreateOrUpdatePatternsArgs = {
  input: PatternsInput;
};


export type MutationCreateOrUpdateRoleArgs = {
  input: RolesInput;
};


export type MutationCreateOrUpdateUserArgs = {
  input: UserInput;
};


export type MutationCreateOrUpdateVendorArgs = {
  input: VendorsInput;
};


export type MutationCreateSliderArgs = {
  input: SlidersInput;
};


export type MutationDeactivateRoleArgs = {
  role_id: Scalars['Float']['input'];
};


export type MutationDeactivateUserArgs = {
  userId: Scalars['String']['input'];
};


export type MutationDeleteAddressArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteBrandArgs = {
  brandId: Scalars['Float']['input'];
};


export type MutationDeleteCategoryArgs = {
  categoryId: Scalars['Float']['input'];
};


export type MutationDeleteMaterialArgs = {
  materialId: Scalars['Float']['input'];
};


export type MutationDeleteMenuArgs = {
  menuId: Scalars['Float']['input'];
};


export type MutationDeletePatternsArgs = {
  patternsId: Scalars['Float']['input'];
};


export type MutationDeleteProductArgs = {
  productId: Scalars['String']['input'];
};


export type MutationDeleteRoleArgs = {
  role_id: Scalars['Float']['input'];
};


export type MutationDeleteSliderArgs = {
  sliderId: Scalars['Float']['input'];
};


export type MutationDeleteUserArgs = {
  userId: Scalars['String']['input'];
};


export type MutationDeleteVendorArgs = {
  vendorId: Scalars['String']['input'];
};


export type MutationLoginArgs = {
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};


export type MutationLoginCustomerArgs = {
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};


export type MutationPlaceOrderArgs = {
  addressId: Scalars['String']['input'];
  input: Array<OrderInput>;
  paymentMode: Scalars['String']['input'];
};


export type MutationRemoveFromCartArgs = {
  variantId: Scalars['String']['input'];
};


export type MutationSaveProductArgs = {
  data: ProductInput;
};


export type MutationUpdateAddressArgs = {
  addressLine1?: InputMaybe<Scalars['String']['input']>;
  addressLine2?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  isDefault?: InputMaybe<Scalars['Boolean']['input']>;
  postalCode?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
};

export type OrderInput = {
  discType?: InputMaybe<Scalars['String']['input']>;
  discValue?: InputMaybe<Scalars['Float']['input']>;
  finalPrice: Scalars['Float']['input'];
  price: Scalars['Float']['input'];
  productId: Scalars['String']['input'];
  quantity: Scalars['Int']['input'];
  variantId: Scalars['String']['input'];
};

export type OrderItemList = {
  __typename?: 'OrderItemList';
  discType?: Maybe<Scalars['String']['output']>;
  discValue: Scalars['Float']['output'];
  finalPrice: Scalars['Float']['output'];
  id: Scalars['ID']['output'];
  orderId: Scalars['String']['output'];
  price: Scalars['Float']['output'];
  productId: Scalars['String']['output'];
  productName: Scalars['String']['output'];
  quantity: Scalars['Float']['output'];
  size: Scalars['String']['output'];
  variantId: Scalars['String']['output'];
};

export type OrderItemOutput = {
  __typename?: 'OrderItemOutput';
  addressData: CustomerAddress;
  customerName: Scalars['String']['output'];
  orderItems: Array<OrderItemList>;
  ordersData: Orders;
};

export type OrderOutput = {
  __typename?: 'OrderOutput';
  addressData: CustomerAddress;
  addressId: Scalars['String']['output'];
  createdAt: Scalars['DateTimeISO']['output'];
  customerName: Scalars['String']['output'];
  id: Scalars['String']['output'];
  invoiceNo: Scalars['String']['output'];
  orderId: Scalars['String']['output'];
  paymentMode: Scalars['String']['output'];
  status: Scalars['String']['output'];
  totalAmount: Scalars['Float']['output'];
  transactionId?: Maybe<Scalars['String']['output']>;
  transactionType?: Maybe<Scalars['String']['output']>;
};

export type Orders = {
  __typename?: 'Orders';
  addressId: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  createdBy?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  invoiceNo: Scalars['String']['output'];
  orderId: Scalars['String']['output'];
  paymentMode: Scalars['String']['output'];
  status: Scalars['String']['output'];
  totalAmount: Scalars['Float']['output'];
  transactionId?: Maybe<Scalars['String']['output']>;
  transactionType?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  updatedBy?: Maybe<Scalars['String']['output']>;
};

export type PaginatedOrdersResponse = {
  __typename?: 'PaginatedOrdersResponse';
  currentPage: Scalars['Int']['output'];
  data: Array<OrderOutput>;
  totalCount: Scalars['Int']['output'];
  totalPages: Scalars['Int']['output'];
};

export type PaginationInput = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
};

export type Patterns = {
  __typename?: 'Patterns';
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  createdBy?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  patternName: Scalars['String']['output'];
  status: Scalars['Boolean']['output'];
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  updatedBy?: Maybe<Scalars['String']['output']>;
};

export type PatternsInput = {
  id?: InputMaybe<Scalars['Float']['input']>;
  patternName: Scalars['String']['input'];
  status?: Scalars['Boolean']['input'];
};

export type PaymentData = {
  __typename?: 'PaymentData';
  expireAt?: Maybe<Scalars['Float']['output']>;
  orderId?: Maybe<Scalars['String']['output']>;
  redirectUrl?: Maybe<Scalars['String']['output']>;
  state?: Maybe<Scalars['String']['output']>;
};

export type PlaceOrderResponse = {
  __typename?: 'PlaceOrderResponse';
  ordersData: Orders;
  paymentData?: Maybe<PaymentData>;
};

export type PostalCodeDetails = {
  __typename?: 'PostalCodeDetails';
  center: Array<LogisticsCenter>;
  city: Scalars['String']['output'];
  cod: Scalars['String']['output'];
  country_code: Scalars['String']['output'];
  district: Scalars['String']['output'];
  is_oda: Scalars['String']['output'];
  max_weight: Scalars['Float']['output'];
  pickup: Scalars['String']['output'];
  pin: Scalars['Float']['output'];
  pre_paid: Scalars['String']['output'];
  state_code: Scalars['String']['output'];
};

export type ProductImages = {
  __typename?: 'ProductImages';
  id: Scalars['Int']['output'];
  imageUrl: Scalars['String']['output'];
  product?: Maybe<Products>;
};

export type ProductInput = {
  additionalImages?: InputMaybe<Array<Scalars['String']['input']>>;
  brand: Scalars['Int']['input'];
  category: Scalars['Int']['input'];
  createdBy: Scalars['String']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  featured?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  material: Scalars['Int']['input'];
  newArrival?: InputMaybe<Scalars['Boolean']['input']>;
  pattern: Scalars['Int']['input'];
  primaryImage: Scalars['String']['input'];
  productName: Scalars['String']['input'];
  purchasePrice: Scalars['Float']['input'];
  skuCode: Scalars['String']['input'];
  status: Scalars['Boolean']['input'];
  subCategory?: InputMaybe<Scalars['Int']['input']>;
  updatedBy?: InputMaybe<Scalars['String']['input']>;
  variants: Array<ProductVariantInput>;
  vendor: Scalars['String']['input'];
};

export type ProductOutput = {
  __typename?: 'ProductOutput';
  brandId: Scalars['Float']['output'];
  brandName: Scalars['String']['output'];
  categoryId: Scalars['Float']['output'];
  categoryName: Scalars['String']['output'];
  description?: Maybe<Scalars['String']['output']>;
  featured?: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['String']['output'];
  images?: Maybe<Array<ProductImages>>;
  materialId: Scalars['Float']['output'];
  materialName: Scalars['String']['output'];
  newArrival?: Maybe<Scalars['Boolean']['output']>;
  patternId: Scalars['Float']['output'];
  patternName: Scalars['String']['output'];
  primaryImage: Scalars['String']['output'];
  productName: Scalars['String']['output'];
  purchasePrice: Scalars['Float']['output'];
  salePrice: Scalars['Float']['output'];
  skuCode: Scalars['String']['output'];
  status: Scalars['Boolean']['output'];
  subCategoryId: Scalars['Float']['output'];
  variants?: Maybe<Array<ProductVariants>>;
  vendorId: Scalars['String']['output'];
};

export type ProductVariantInput = {
  color: Scalars['String']['input'];
  discType?: InputMaybe<Scalars['String']['input']>;
  discValue?: InputMaybe<Scalars['Float']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  imageURLs?: InputMaybe<Array<Scalars['String']['input']>>;
  price: Scalars['Float']['input'];
  quantity: Scalars['Int']['input'];
  size: Scalars['String']['input'];
};

export type ProductVariants = {
  __typename?: 'ProductVariants';
  color: Scalars['String']['output'];
  discType: Scalars['String']['output'];
  discValue: Scalars['Float']['output'];
  id: Scalars['String']['output'];
  price: Scalars['Float']['output'];
  product?: Maybe<Products>;
  size: Scalars['String']['output'];
  status: Scalars['Boolean']['output'];
  stockQuantity: Scalars['Int']['output'];
  variantName: Scalars['String']['output'];
};

export type Products = {
  __typename?: 'Products';
  brandId: Scalars['Int']['output'];
  categoryId: Scalars['Int']['output'];
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  createdBy?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  featured?: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['String']['output'];
  images?: Maybe<Array<ProductImages>>;
  materialId: Scalars['Int']['output'];
  newArrival?: Maybe<Scalars['Boolean']['output']>;
  patternId: Scalars['Int']['output'];
  primaryImage: Scalars['String']['output'];
  productName: Scalars['String']['output'];
  purchasePrice?: Maybe<Scalars['Float']['output']>;
  salePrice?: Maybe<Scalars['Float']['output']>;
  skuCode: Scalars['String']['output'];
  status: Scalars['Boolean']['output'];
  subCategoryId: Scalars['Int']['output'];
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  updatedBy?: Maybe<Scalars['String']['output']>;
  variants?: Maybe<Array<ProductVariants>>;
  vendorId: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  checkPincodeAvailability?: Maybe<LogisticsResponse>;
  getAllAddresses: Array<CustomerAddress>;
  getAllCategories: Array<CategryOutput>;
  getAllMenus: Array<MenuOutput>;
  getAllOrders: PaginatedOrdersResponse;
  getBrands: Array<Brands>;
  getCartCount: Scalars['Int']['output'];
  getCartItems: Array<CartOutput>;
  getCategories: Array<CategryOutput>;
  getCustomers: Array<CustomersListOutput>;
  getDashboardData: DashboardOutput;
  getMaterials: Array<Material>;
  getMyBrands: Array<Brands>;
  getMyOrders: PaginatedOrdersResponse;
  getOrderByID: OrderItemOutput;
  getOrderStatus: Scalars['String']['output'];
  getPatterns: Array<Patterns>;
  getProductByID: Products;
  getProductsList: Array<ProductOutput>;
  getRoleAccess: Array<RoleAccess>;
  getRoleName: Scalars['String']['output'];
  getRoles: Array<Roles>;
  getSliders: Array<Sliders>;
  getUserByID: User;
  getUsersByRole: Array<UserOutput>;
  getVendorByID: Vendors;
  getVendors: Array<Vendors>;
  productsList: Array<ProductOutput>;
  singleProduct?: Maybe<ProductOutput>;
};


export type QueryCheckPincodeAvailabilityArgs = {
  pincode: Scalars['Float']['input'];
};


export type QueryGetAllAddressesArgs = {
  customerId: Scalars['String']['input'];
};


export type QueryGetAllOrdersArgs = {
  pagination?: InputMaybe<PaginationInput>;
};


export type QueryGetCategoriesArgs = {
  parentMenu: Scalars['String']['input'];
};


export type QueryGetMyOrdersArgs = {
  pagination: PaginationInput;
};


export type QueryGetOrderByIdArgs = {
  orderId: Scalars['String']['input'];
};


export type QueryGetOrderStatusArgs = {
  orderId: Scalars['String']['input'];
};


export type QueryGetProductByIdArgs = {
  productId: Scalars['String']['input'];
};


export type QueryGetRoleAccessArgs = {
  roleId: Scalars['Float']['input'];
};


export type QueryGetRoleNameArgs = {
  roleId: Scalars['Float']['input'];
};


export type QueryGetUserByIdArgs = {
  user_id: Scalars['String']['input'];
};


export type QueryGetUsersByRoleArgs = {
  role: Scalars['Float']['input'];
};


export type QueryGetVendorByIdArgs = {
  vendorId: Scalars['String']['input'];
};


export type QueryProductsListArgs = {
  brandId?: InputMaybe<Scalars['Int']['input']>;
  categoryId?: InputMaybe<Scalars['Int']['input']>;
  limit?: Scalars['Int']['input'];
  page?: Scalars['Int']['input'];
  relatedToId?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};


export type QuerySingleProductArgs = {
  id: Scalars['String']['input'];
};

export type RoleAccess = {
  __typename?: 'RoleAccess';
  canAdd: Scalars['Boolean']['output'];
  canDelete: Scalars['Boolean']['output'];
  canEdit: Scalars['Boolean']['output'];
  canView: Scalars['Boolean']['output'];
  id: Scalars['String']['output'];
  menuId: Scalars['Int']['output'];
  roleId: Scalars['Int']['output'];
};

export type RoleAccessBulkInput = {
  accessInput: Array<RoleAccessInput>;
  roleId: Scalars['Int']['input'];
};

export type RoleAccessInput = {
  canAdd: Scalars['Boolean']['input'];
  canDelete: Scalars['Boolean']['input'];
  canEdit: Scalars['Boolean']['input'];
  canView: Scalars['Boolean']['input'];
  menuId: Scalars['Int']['input'];
};

export type Roles = {
  __typename?: 'Roles';
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  createdBy?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  roleName: Scalars['String']['output'];
  status: Scalars['Boolean']['output'];
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  updatedBy?: Maybe<Scalars['String']['output']>;
};

export type RolesInput = {
  id?: InputMaybe<Scalars['Float']['input']>;
  roleName: Scalars['String']['input'];
  status?: Scalars['Boolean']['input'];
};

export type Sliders = {
  __typename?: 'Sliders';
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  createdBy?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  imageUrl: Scalars['String']['output'];
  status: Scalars['Boolean']['output'];
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  updatedBy?: Maybe<Scalars['String']['output']>;
};

export type SlidersInput = {
  imageUrl: Scalars['String']['input'];
  status: Scalars['Boolean']['input'];
};

export type User = {
  __typename?: 'User';
  address: Scalars['String']['output'];
  city: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  createdBy?: Maybe<Scalars['String']['output']>;
  email: Scalars['String']['output'];
  id: Scalars['String']['output'];
  mobile: Scalars['String']['output'];
  name: Scalars['String']['output'];
  password: Scalars['String']['output'];
  pincode?: Maybe<Scalars['Float']['output']>;
  role: Scalars['Float']['output'];
  state: Scalars['String']['output'];
  status: Scalars['Boolean']['output'];
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  updatedBy?: Maybe<Scalars['String']['output']>;
  username: Scalars['String']['output'];
};

export type UserInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  mobile: Scalars['String']['input'];
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
  pincode?: InputMaybe<Scalars['Float']['input']>;
  role: Scalars['Float']['input'];
  state?: InputMaybe<Scalars['String']['input']>;
  status: Scalars['Boolean']['input'];
  username: Scalars['String']['input'];
};

export type UserOutput = {
  __typename?: 'UserOutput';
  address?: Maybe<Scalars['String']['output']>;
  city?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  mobile?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  pincode?: Maybe<Scalars['Float']['output']>;
  role?: Maybe<Scalars['Float']['output']>;
  state?: Maybe<Scalars['String']['output']>;
  status: Scalars['Boolean']['output'];
  username?: Maybe<Scalars['String']['output']>;
};

export type Vendors = {
  __typename?: 'Vendors';
  address: Scalars['String']['output'];
  contactPerson: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  createdBy?: Maybe<Scalars['String']['output']>;
  email: Scalars['String']['output'];
  id: Scalars['String']['output'];
  mobile: Scalars['String']['output'];
  status: Scalars['Boolean']['output'];
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  updatedBy?: Maybe<Scalars['String']['output']>;
  vendorName: Scalars['String']['output'];
};

export type VendorsInput = {
  address: Scalars['String']['input'];
  contactPerson: Scalars['String']['input'];
  email: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  mobile: Scalars['String']['input'];
  status: Scalars['Boolean']['input'];
  updatedBy?: InputMaybe<Scalars['String']['input']>;
  vendorName: Scalars['String']['input'];
};

export type LoginOutput = {
  __typename?: 'loginOutput';
  authToken: Scalars['String']['output'];
  key: Scalars['String']['output'];
  menus: Array<MenuOutput>;
  roleName: Scalars['String']['output'];
  username: Scalars['String']['output'];
};

export type AddAddressMutationVariables = Exact<{
  country: Scalars['String']['input'];
  postalCode: Scalars['String']['input'];
  state: Scalars['String']['input'];
  city: Scalars['String']['input'];
  addressLine1: Scalars['String']['input'];
  customerId: Scalars['String']['input'];
  addressLine2?: InputMaybe<Scalars['String']['input']>;
  isDefault: Scalars['Boolean']['input'];
}>;


export type AddAddressMutation = { __typename?: 'Mutation', addAddress: { __typename?: 'CustomerAddress', id: string, customerId: string, addressLine1: string, addressLine2?: string | null, city: string, state: string, postalCode: string, country: string, isDefault: boolean } };

export type AddToCartMutationVariables = Exact<{
  input: AddToCartInput;
}>;


export type AddToCartMutation = { __typename?: 'Mutation', addToCart: { __typename?: 'Cart', id: string, customer: string, variantId: string, quantity: number, price: number, discType: string, discValue: number } };

export type CreateCustomerMutationVariables = Exact<{
  input: CustomerInput;
}>;


export type CreateCustomerMutation = { __typename?: 'Mutation', createCustomer: { __typename?: 'GenericResponse', success: boolean, message: string } };

export type LoginCustomerMutationVariables = Exact<{
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
}>;


export type LoginCustomerMutation = { __typename?: 'Mutation', loginCustomer: { __typename?: 'CustomerOutput', customerId: string, customerName: string, email: string, mobile: string, address?: string | null, authToken: string, status: boolean } };

export type PlaceOrderMutationVariables = Exact<{
  input: Array<OrderInput> | OrderInput;
  addressId: Scalars['String']['input'];
  paymentMode: Scalars['String']['input'];
}>;


export type PlaceOrderMutation = { __typename?: 'Mutation', placeOrder: { __typename?: 'PlaceOrderResponse', ordersData: { __typename?: 'Orders', id: string, orderId: string, invoiceNo: string, addressId: string, transactionId?: string | null, paymentMode: string, totalAmount: number, status: string }, paymentData?: { __typename?: 'PaymentData', orderId?: string | null, state?: string | null, expireAt?: number | null, redirectUrl?: string | null } | null } };

export type RemoveFromCartMutationVariables = Exact<{
  variantId: Scalars['String']['input'];
}>;


export type RemoveFromCartMutation = { __typename?: 'Mutation', removeFromCart: boolean };

export type GetAllAddressesQueryVariables = Exact<{
  customerId: Scalars['String']['input'];
}>;


export type GetAllAddressesQuery = { __typename?: 'Query', getAllAddresses: Array<{ __typename?: 'CustomerAddress', id: string, customerId: string, addressLine1: string, addressLine2?: string | null, city: string, state: string, postalCode: string, country: string, isDefault: boolean }> };

export type GetCartCountQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCartCountQuery = { __typename?: 'Query', getCartCount: number };

export type GetCartQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCartQuery = { __typename?: 'Query', getCartItems: Array<{ __typename?: 'CartOutput', id: string, productId: string, productName: string, variantId: string, quantity: number, price: number, discType?: string | null, discValue?: number | null, image: string, finalPrice?: number | null }> };

export type GetCategoriesQueryVariables = Exact<{
  parentMenu: Scalars['String']['input'];
}>;


export type GetCategoriesQuery = { __typename?: 'Query', getCategories: Array<{ __typename?: 'CategryOutput', id?: number | null, categoryName: string, parentCategory: number, image: string, parentCategoryName: string, status: boolean }> };

export type GetMyBrandsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMyBrandsQuery = { __typename?: 'Query', getMyBrands: Array<{ __typename?: 'Brands', id: number, brandName: string, status: boolean }> };

export type GetMyOrdersQueryVariables = Exact<{
  pagination: PaginationInput;
}>;


export type GetMyOrdersQuery = { __typename?: 'Query', getMyOrders: { __typename?: 'PaginatedOrdersResponse', totalCount: number, currentPage: number, totalPages: number, data: Array<{ __typename?: 'OrderOutput', customerName: string, createdAt: any, id: string, orderId: string, invoiceNo: string, addressId: string, transactionId?: string | null, paymentMode: string, totalAmount: number, status: string, transactionType?: string | null, addressData: { __typename?: 'CustomerAddress', id: string, customerId: string, addressLine1: string, addressLine2?: string | null, city: string, state: string, postalCode: string, country: string, isDefault: boolean } }> } };

export type GetOrderStatusQueryVariables = Exact<{
  orderId: Scalars['String']['input'];
}>;


export type GetOrderStatusQuery = { __typename?: 'Query', getOrderStatus: string };

export type GetSlidersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSlidersQuery = { __typename?: 'Query', getSliders: Array<{ __typename?: 'Sliders', id: number, imageUrl: string, status: boolean }> };

export type CheckPincodeAvailabilityQueryVariables = Exact<{
  pincode: Scalars['Float']['input'];
}>;


export type CheckPincodeAvailabilityQuery = { __typename?: 'Query', checkPincodeAvailability?: { __typename?: 'LogisticsResponse', delivery_codes: Array<{ __typename?: 'DeliveryCodeItem', postal_code: { __typename?: 'PostalCodeDetails', pin: number, city: string, district: string } }> } | null };

export type ProductsListQueryVariables = Exact<{
  relatedToId?: InputMaybe<Scalars['String']['input']>;
  brandId?: InputMaybe<Scalars['Int']['input']>;
  categoryId?: InputMaybe<Scalars['Int']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  limit: Scalars['Int']['input'];
  page: Scalars['Int']['input'];
}>;


export type ProductsListQuery = { __typename?: 'Query', productsList: Array<{ __typename?: 'ProductOutput', id: string, productName: string, skuCode: string, description?: string | null, status: boolean, brandId: number, categoryId: number, subCategoryId: number, materialId: number, patternId: number, vendorId: string, purchasePrice: number, salePrice: number, primaryImage: string, brandName: string, categoryName: string, materialName: string, patternName: string, newArrival?: boolean | null, featured?: boolean | null, images?: Array<{ __typename?: 'ProductImages', id: number, imageUrl: string, product?: { __typename?: 'Products', id: string } | null }> | null, variants?: Array<{ __typename?: 'ProductVariants', id: string, variantName: string, color: string, size: string, price: number, discType: string, discValue: number, stockQuantity: number, status: boolean, product?: { __typename?: 'Products', id: string } | null }> | null }> };

export type SingleProductQueryVariables = Exact<{
  singleProductId: Scalars['String']['input'];
}>;


export type SingleProductQuery = { __typename?: 'Query', singleProduct?: { __typename?: 'ProductOutput', id: string, productName: string, skuCode: string, description?: string | null, status: boolean, brandId: number, categoryId: number, subCategoryId: number, materialId: number, patternId: number, vendorId: string, purchasePrice: number, salePrice: number, primaryImage: string, brandName: string, categoryName: string, materialName: string, patternName: string, newArrival?: boolean | null, featured?: boolean | null, images?: Array<{ __typename?: 'ProductImages', id: number, imageUrl: string, product?: { __typename?: 'Products', id: string } | null }> | null, variants?: Array<{ __typename?: 'ProductVariants', id: string, variantName: string, color: string, size: string, price: number, discType: string, discValue: number, stockQuantity: number, status: boolean, product?: { __typename?: 'Products', id: string } | null }> | null } | null };


export const AddAddressDocument = gql`
    mutation AddAddress($country: String!, $postalCode: String!, $state: String!, $city: String!, $addressLine1: String!, $customerId: String!, $addressLine2: String, $isDefault: Boolean!) {
  addAddress(
    country: $country
    postalCode: $postalCode
    state: $state
    city: $city
    addressLine1: $addressLine1
    customerId: $customerId
    addressLine2: $addressLine2
    isDefault: $isDefault
  ) {
    id
    customerId
    addressLine1
    addressLine2
    city
    state
    postalCode
    country
    isDefault
  }
}
    `;
export type AddAddressMutationFn = Apollo.MutationFunction<AddAddressMutation, AddAddressMutationVariables>;

/**
 * __useAddAddressMutation__
 *
 * To run a mutation, you first call `useAddAddressMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddAddressMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addAddressMutation, { data, loading, error }] = useAddAddressMutation({
 *   variables: {
 *      country: // value for 'country'
 *      postalCode: // value for 'postalCode'
 *      state: // value for 'state'
 *      city: // value for 'city'
 *      addressLine1: // value for 'addressLine1'
 *      customerId: // value for 'customerId'
 *      addressLine2: // value for 'addressLine2'
 *      isDefault: // value for 'isDefault'
 *   },
 * });
 */
export function useAddAddressMutation(baseOptions?: Apollo.MutationHookOptions<AddAddressMutation, AddAddressMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddAddressMutation, AddAddressMutationVariables>(AddAddressDocument, options);
      }
export type AddAddressMutationHookResult = ReturnType<typeof useAddAddressMutation>;
export type AddAddressMutationResult = Apollo.MutationResult<AddAddressMutation>;
export type AddAddressMutationOptions = Apollo.BaseMutationOptions<AddAddressMutation, AddAddressMutationVariables>;
export const AddToCartDocument = gql`
    mutation AddToCart($input: AddToCartInput!) {
  addToCart(input: $input) {
    id
    customer
    variantId
    quantity
    price
    discType
    discValue
  }
}
    `;
export type AddToCartMutationFn = Apollo.MutationFunction<AddToCartMutation, AddToCartMutationVariables>;

/**
 * __useAddToCartMutation__
 *
 * To run a mutation, you first call `useAddToCartMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddToCartMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addToCartMutation, { data, loading, error }] = useAddToCartMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAddToCartMutation(baseOptions?: Apollo.MutationHookOptions<AddToCartMutation, AddToCartMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddToCartMutation, AddToCartMutationVariables>(AddToCartDocument, options);
      }
export type AddToCartMutationHookResult = ReturnType<typeof useAddToCartMutation>;
export type AddToCartMutationResult = Apollo.MutationResult<AddToCartMutation>;
export type AddToCartMutationOptions = Apollo.BaseMutationOptions<AddToCartMutation, AddToCartMutationVariables>;
export const CreateCustomerDocument = gql`
    mutation CreateCustomer($input: CustomerInput!) {
  createCustomer(input: $input) {
    success
    message
  }
}
    `;
export type CreateCustomerMutationFn = Apollo.MutationFunction<CreateCustomerMutation, CreateCustomerMutationVariables>;

/**
 * __useCreateCustomerMutation__
 *
 * To run a mutation, you first call `useCreateCustomerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCustomerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCustomerMutation, { data, loading, error }] = useCreateCustomerMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateCustomerMutation(baseOptions?: Apollo.MutationHookOptions<CreateCustomerMutation, CreateCustomerMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateCustomerMutation, CreateCustomerMutationVariables>(CreateCustomerDocument, options);
      }
export type CreateCustomerMutationHookResult = ReturnType<typeof useCreateCustomerMutation>;
export type CreateCustomerMutationResult = Apollo.MutationResult<CreateCustomerMutation>;
export type CreateCustomerMutationOptions = Apollo.BaseMutationOptions<CreateCustomerMutation, CreateCustomerMutationVariables>;
export const LoginCustomerDocument = gql`
    mutation LoginCustomer($password: String!, $username: String!) {
  loginCustomer(password: $password, username: $username) {
    customerId
    customerName
    email
    mobile
    address
    authToken
    status
  }
}
    `;
export type LoginCustomerMutationFn = Apollo.MutationFunction<LoginCustomerMutation, LoginCustomerMutationVariables>;

/**
 * __useLoginCustomerMutation__
 *
 * To run a mutation, you first call `useLoginCustomerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginCustomerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginCustomerMutation, { data, loading, error }] = useLoginCustomerMutation({
 *   variables: {
 *      password: // value for 'password'
 *      username: // value for 'username'
 *   },
 * });
 */
export function useLoginCustomerMutation(baseOptions?: Apollo.MutationHookOptions<LoginCustomerMutation, LoginCustomerMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginCustomerMutation, LoginCustomerMutationVariables>(LoginCustomerDocument, options);
      }
export type LoginCustomerMutationHookResult = ReturnType<typeof useLoginCustomerMutation>;
export type LoginCustomerMutationResult = Apollo.MutationResult<LoginCustomerMutation>;
export type LoginCustomerMutationOptions = Apollo.BaseMutationOptions<LoginCustomerMutation, LoginCustomerMutationVariables>;
export const PlaceOrderDocument = gql`
    mutation PlaceOrder($input: [OrderInput!]!, $addressId: String!, $paymentMode: String!) {
  placeOrder(input: $input, addressId: $addressId, paymentMode: $paymentMode) {
    ordersData {
      id
      orderId
      invoiceNo
      addressId
      transactionId
      paymentMode
      totalAmount
      status
    }
    paymentData {
      orderId
      state
      expireAt
      redirectUrl
    }
  }
}
    `;
export type PlaceOrderMutationFn = Apollo.MutationFunction<PlaceOrderMutation, PlaceOrderMutationVariables>;

/**
 * __usePlaceOrderMutation__
 *
 * To run a mutation, you first call `usePlaceOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePlaceOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [placeOrderMutation, { data, loading, error }] = usePlaceOrderMutation({
 *   variables: {
 *      input: // value for 'input'
 *      addressId: // value for 'addressId'
 *      paymentMode: // value for 'paymentMode'
 *   },
 * });
 */
export function usePlaceOrderMutation(baseOptions?: Apollo.MutationHookOptions<PlaceOrderMutation, PlaceOrderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<PlaceOrderMutation, PlaceOrderMutationVariables>(PlaceOrderDocument, options);
      }
export type PlaceOrderMutationHookResult = ReturnType<typeof usePlaceOrderMutation>;
export type PlaceOrderMutationResult = Apollo.MutationResult<PlaceOrderMutation>;
export type PlaceOrderMutationOptions = Apollo.BaseMutationOptions<PlaceOrderMutation, PlaceOrderMutationVariables>;
export const RemoveFromCartDocument = gql`
    mutation RemoveFromCart($variantId: String!) {
  removeFromCart(variantId: $variantId)
}
    `;
export type RemoveFromCartMutationFn = Apollo.MutationFunction<RemoveFromCartMutation, RemoveFromCartMutationVariables>;

/**
 * __useRemoveFromCartMutation__
 *
 * To run a mutation, you first call `useRemoveFromCartMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveFromCartMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeFromCartMutation, { data, loading, error }] = useRemoveFromCartMutation({
 *   variables: {
 *      variantId: // value for 'variantId'
 *   },
 * });
 */
export function useRemoveFromCartMutation(baseOptions?: Apollo.MutationHookOptions<RemoveFromCartMutation, RemoveFromCartMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RemoveFromCartMutation, RemoveFromCartMutationVariables>(RemoveFromCartDocument, options);
      }
export type RemoveFromCartMutationHookResult = ReturnType<typeof useRemoveFromCartMutation>;
export type RemoveFromCartMutationResult = Apollo.MutationResult<RemoveFromCartMutation>;
export type RemoveFromCartMutationOptions = Apollo.BaseMutationOptions<RemoveFromCartMutation, RemoveFromCartMutationVariables>;
export const GetAllAddressesDocument = gql`
    query GetAllAddresses($customerId: String!) {
  getAllAddresses(customerId: $customerId) {
    id
    customerId
    addressLine1
    addressLine2
    city
    state
    postalCode
    country
    isDefault
  }
}
    `;

/**
 * __useGetAllAddressesQuery__
 *
 * To run a query within a React component, call `useGetAllAddressesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllAddressesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllAddressesQuery({
 *   variables: {
 *      customerId: // value for 'customerId'
 *   },
 * });
 */
export function useGetAllAddressesQuery(baseOptions: Apollo.QueryHookOptions<GetAllAddressesQuery, GetAllAddressesQueryVariables> & ({ variables: GetAllAddressesQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllAddressesQuery, GetAllAddressesQueryVariables>(GetAllAddressesDocument, options);
      }
export function useGetAllAddressesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllAddressesQuery, GetAllAddressesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllAddressesQuery, GetAllAddressesQueryVariables>(GetAllAddressesDocument, options);
        }
export function useGetAllAddressesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetAllAddressesQuery, GetAllAddressesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllAddressesQuery, GetAllAddressesQueryVariables>(GetAllAddressesDocument, options);
        }
export type GetAllAddressesQueryHookResult = ReturnType<typeof useGetAllAddressesQuery>;
export type GetAllAddressesLazyQueryHookResult = ReturnType<typeof useGetAllAddressesLazyQuery>;
export type GetAllAddressesSuspenseQueryHookResult = ReturnType<typeof useGetAllAddressesSuspenseQuery>;
export type GetAllAddressesQueryResult = Apollo.QueryResult<GetAllAddressesQuery, GetAllAddressesQueryVariables>;
export const GetCartCountDocument = gql`
    query GetCartCount {
  getCartCount
}
    `;

/**
 * __useGetCartCountQuery__
 *
 * To run a query within a React component, call `useGetCartCountQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCartCountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCartCountQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCartCountQuery(baseOptions?: Apollo.QueryHookOptions<GetCartCountQuery, GetCartCountQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCartCountQuery, GetCartCountQueryVariables>(GetCartCountDocument, options);
      }
export function useGetCartCountLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCartCountQuery, GetCartCountQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCartCountQuery, GetCartCountQueryVariables>(GetCartCountDocument, options);
        }
export function useGetCartCountSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetCartCountQuery, GetCartCountQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetCartCountQuery, GetCartCountQueryVariables>(GetCartCountDocument, options);
        }
export type GetCartCountQueryHookResult = ReturnType<typeof useGetCartCountQuery>;
export type GetCartCountLazyQueryHookResult = ReturnType<typeof useGetCartCountLazyQuery>;
export type GetCartCountSuspenseQueryHookResult = ReturnType<typeof useGetCartCountSuspenseQuery>;
export type GetCartCountQueryResult = Apollo.QueryResult<GetCartCountQuery, GetCartCountQueryVariables>;
export const GetCartDocument = gql`
    query getCart {
  getCartItems {
    id
    productId
    productName
    variantId
    quantity
    price
    discType
    discValue
    image
    finalPrice
  }
}
    `;

/**
 * __useGetCartQuery__
 *
 * To run a query within a React component, call `useGetCartQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCartQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCartQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCartQuery(baseOptions?: Apollo.QueryHookOptions<GetCartQuery, GetCartQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCartQuery, GetCartQueryVariables>(GetCartDocument, options);
      }
export function useGetCartLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCartQuery, GetCartQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCartQuery, GetCartQueryVariables>(GetCartDocument, options);
        }
export function useGetCartSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetCartQuery, GetCartQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetCartQuery, GetCartQueryVariables>(GetCartDocument, options);
        }
export type GetCartQueryHookResult = ReturnType<typeof useGetCartQuery>;
export type GetCartLazyQueryHookResult = ReturnType<typeof useGetCartLazyQuery>;
export type GetCartSuspenseQueryHookResult = ReturnType<typeof useGetCartSuspenseQuery>;
export type GetCartQueryResult = Apollo.QueryResult<GetCartQuery, GetCartQueryVariables>;
export const GetCategoriesDocument = gql`
    query GetCategories($parentMenu: String!) {
  getCategories(parentMenu: $parentMenu) {
    id
    categoryName
    parentCategory
    image
    parentCategoryName
    status
  }
}
    `;

/**
 * __useGetCategoriesQuery__
 *
 * To run a query within a React component, call `useGetCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCategoriesQuery({
 *   variables: {
 *      parentMenu: // value for 'parentMenu'
 *   },
 * });
 */
export function useGetCategoriesQuery(baseOptions: Apollo.QueryHookOptions<GetCategoriesQuery, GetCategoriesQueryVariables> & ({ variables: GetCategoriesQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCategoriesQuery, GetCategoriesQueryVariables>(GetCategoriesDocument, options);
      }
export function useGetCategoriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCategoriesQuery, GetCategoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCategoriesQuery, GetCategoriesQueryVariables>(GetCategoriesDocument, options);
        }
export function useGetCategoriesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetCategoriesQuery, GetCategoriesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetCategoriesQuery, GetCategoriesQueryVariables>(GetCategoriesDocument, options);
        }
export type GetCategoriesQueryHookResult = ReturnType<typeof useGetCategoriesQuery>;
export type GetCategoriesLazyQueryHookResult = ReturnType<typeof useGetCategoriesLazyQuery>;
export type GetCategoriesSuspenseQueryHookResult = ReturnType<typeof useGetCategoriesSuspenseQuery>;
export type GetCategoriesQueryResult = Apollo.QueryResult<GetCategoriesQuery, GetCategoriesQueryVariables>;
export const GetMyBrandsDocument = gql`
    query GetMyBrands {
  getMyBrands {
    id
    brandName
    status
  }
}
    `;

/**
 * __useGetMyBrandsQuery__
 *
 * To run a query within a React component, call `useGetMyBrandsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMyBrandsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMyBrandsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetMyBrandsQuery(baseOptions?: Apollo.QueryHookOptions<GetMyBrandsQuery, GetMyBrandsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMyBrandsQuery, GetMyBrandsQueryVariables>(GetMyBrandsDocument, options);
      }
export function useGetMyBrandsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMyBrandsQuery, GetMyBrandsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMyBrandsQuery, GetMyBrandsQueryVariables>(GetMyBrandsDocument, options);
        }
export function useGetMyBrandsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetMyBrandsQuery, GetMyBrandsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetMyBrandsQuery, GetMyBrandsQueryVariables>(GetMyBrandsDocument, options);
        }
export type GetMyBrandsQueryHookResult = ReturnType<typeof useGetMyBrandsQuery>;
export type GetMyBrandsLazyQueryHookResult = ReturnType<typeof useGetMyBrandsLazyQuery>;
export type GetMyBrandsSuspenseQueryHookResult = ReturnType<typeof useGetMyBrandsSuspenseQuery>;
export type GetMyBrandsQueryResult = Apollo.QueryResult<GetMyBrandsQuery, GetMyBrandsQueryVariables>;
export const GetMyOrdersDocument = gql`
    query GetMyOrders($pagination: PaginationInput!) {
  getMyOrders(pagination: $pagination) {
    data {
      customerName
      createdAt
      id
      orderId
      invoiceNo
      addressId
      transactionId
      paymentMode
      totalAmount
      status
      transactionType
      addressData {
        id
        customerId
        addressLine1
        addressLine2
        city
        state
        postalCode
        country
        isDefault
      }
    }
    totalCount
    currentPage
    totalPages
  }
}
    `;

/**
 * __useGetMyOrdersQuery__
 *
 * To run a query within a React component, call `useGetMyOrdersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMyOrdersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMyOrdersQuery({
 *   variables: {
 *      pagination: // value for 'pagination'
 *   },
 * });
 */
export function useGetMyOrdersQuery(baseOptions: Apollo.QueryHookOptions<GetMyOrdersQuery, GetMyOrdersQueryVariables> & ({ variables: GetMyOrdersQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMyOrdersQuery, GetMyOrdersQueryVariables>(GetMyOrdersDocument, options);
      }
export function useGetMyOrdersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMyOrdersQuery, GetMyOrdersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMyOrdersQuery, GetMyOrdersQueryVariables>(GetMyOrdersDocument, options);
        }
export function useGetMyOrdersSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetMyOrdersQuery, GetMyOrdersQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetMyOrdersQuery, GetMyOrdersQueryVariables>(GetMyOrdersDocument, options);
        }
export type GetMyOrdersQueryHookResult = ReturnType<typeof useGetMyOrdersQuery>;
export type GetMyOrdersLazyQueryHookResult = ReturnType<typeof useGetMyOrdersLazyQuery>;
export type GetMyOrdersSuspenseQueryHookResult = ReturnType<typeof useGetMyOrdersSuspenseQuery>;
export type GetMyOrdersQueryResult = Apollo.QueryResult<GetMyOrdersQuery, GetMyOrdersQueryVariables>;
export const GetOrderStatusDocument = gql`
    query GetOrderStatus($orderId: String!) {
  getOrderStatus(orderId: $orderId)
}
    `;

/**
 * __useGetOrderStatusQuery__
 *
 * To run a query within a React component, call `useGetOrderStatusQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOrderStatusQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOrderStatusQuery({
 *   variables: {
 *      orderId: // value for 'orderId'
 *   },
 * });
 */
export function useGetOrderStatusQuery(baseOptions: Apollo.QueryHookOptions<GetOrderStatusQuery, GetOrderStatusQueryVariables> & ({ variables: GetOrderStatusQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetOrderStatusQuery, GetOrderStatusQueryVariables>(GetOrderStatusDocument, options);
      }
export function useGetOrderStatusLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetOrderStatusQuery, GetOrderStatusQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetOrderStatusQuery, GetOrderStatusQueryVariables>(GetOrderStatusDocument, options);
        }
export function useGetOrderStatusSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetOrderStatusQuery, GetOrderStatusQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetOrderStatusQuery, GetOrderStatusQueryVariables>(GetOrderStatusDocument, options);
        }
export type GetOrderStatusQueryHookResult = ReturnType<typeof useGetOrderStatusQuery>;
export type GetOrderStatusLazyQueryHookResult = ReturnType<typeof useGetOrderStatusLazyQuery>;
export type GetOrderStatusSuspenseQueryHookResult = ReturnType<typeof useGetOrderStatusSuspenseQuery>;
export type GetOrderStatusQueryResult = Apollo.QueryResult<GetOrderStatusQuery, GetOrderStatusQueryVariables>;
export const GetSlidersDocument = gql`
    query GetSliders {
  getSliders {
    id
    imageUrl
    status
  }
}
    `;

/**
 * __useGetSlidersQuery__
 *
 * To run a query within a React component, call `useGetSlidersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSlidersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSlidersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetSlidersQuery(baseOptions?: Apollo.QueryHookOptions<GetSlidersQuery, GetSlidersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetSlidersQuery, GetSlidersQueryVariables>(GetSlidersDocument, options);
      }
export function useGetSlidersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSlidersQuery, GetSlidersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetSlidersQuery, GetSlidersQueryVariables>(GetSlidersDocument, options);
        }
export function useGetSlidersSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetSlidersQuery, GetSlidersQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetSlidersQuery, GetSlidersQueryVariables>(GetSlidersDocument, options);
        }
export type GetSlidersQueryHookResult = ReturnType<typeof useGetSlidersQuery>;
export type GetSlidersLazyQueryHookResult = ReturnType<typeof useGetSlidersLazyQuery>;
export type GetSlidersSuspenseQueryHookResult = ReturnType<typeof useGetSlidersSuspenseQuery>;
export type GetSlidersQueryResult = Apollo.QueryResult<GetSlidersQuery, GetSlidersQueryVariables>;
export const CheckPincodeAvailabilityDocument = gql`
    query CheckPincodeAvailability($pincode: Float!) {
  checkPincodeAvailability(pincode: $pincode) {
    delivery_codes {
      postal_code {
        pin
        city
        district
      }
    }
  }
}
    `;

/**
 * __useCheckPincodeAvailabilityQuery__
 *
 * To run a query within a React component, call `useCheckPincodeAvailabilityQuery` and pass it any options that fit your needs.
 * When your component renders, `useCheckPincodeAvailabilityQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCheckPincodeAvailabilityQuery({
 *   variables: {
 *      pincode: // value for 'pincode'
 *   },
 * });
 */
export function useCheckPincodeAvailabilityQuery(baseOptions: Apollo.QueryHookOptions<CheckPincodeAvailabilityQuery, CheckPincodeAvailabilityQueryVariables> & ({ variables: CheckPincodeAvailabilityQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CheckPincodeAvailabilityQuery, CheckPincodeAvailabilityQueryVariables>(CheckPincodeAvailabilityDocument, options);
      }
export function useCheckPincodeAvailabilityLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CheckPincodeAvailabilityQuery, CheckPincodeAvailabilityQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CheckPincodeAvailabilityQuery, CheckPincodeAvailabilityQueryVariables>(CheckPincodeAvailabilityDocument, options);
        }
export function useCheckPincodeAvailabilitySuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<CheckPincodeAvailabilityQuery, CheckPincodeAvailabilityQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<CheckPincodeAvailabilityQuery, CheckPincodeAvailabilityQueryVariables>(CheckPincodeAvailabilityDocument, options);
        }
export type CheckPincodeAvailabilityQueryHookResult = ReturnType<typeof useCheckPincodeAvailabilityQuery>;
export type CheckPincodeAvailabilityLazyQueryHookResult = ReturnType<typeof useCheckPincodeAvailabilityLazyQuery>;
export type CheckPincodeAvailabilitySuspenseQueryHookResult = ReturnType<typeof useCheckPincodeAvailabilitySuspenseQuery>;
export type CheckPincodeAvailabilityQueryResult = Apollo.QueryResult<CheckPincodeAvailabilityQuery, CheckPincodeAvailabilityQueryVariables>;
export const ProductsListDocument = gql`
    query ProductsList($relatedToId: String, $brandId: Int, $categoryId: Int, $type: String, $limit: Int!, $page: Int!) {
  productsList(
    relatedToId: $relatedToId
    brandId: $brandId
    categoryId: $categoryId
    type: $type
    limit: $limit
    page: $page
  ) {
    id
    productName
    skuCode
    description
    status
    brandId
    categoryId
    subCategoryId
    materialId
    patternId
    vendorId
    purchasePrice
    salePrice
    primaryImage
    images {
      id
      imageUrl
      product {
        id
      }
    }
    variants {
      id
      variantName
      color
      size
      price
      discType
      discValue
      stockQuantity
      status
      product {
        id
      }
    }
    brandName
    categoryName
    materialName
    patternName
    newArrival
    featured
  }
}
    `;

/**
 * __useProductsListQuery__
 *
 * To run a query within a React component, call `useProductsListQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductsListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductsListQuery({
 *   variables: {
 *      relatedToId: // value for 'relatedToId'
 *      brandId: // value for 'brandId'
 *      categoryId: // value for 'categoryId'
 *      type: // value for 'type'
 *      limit: // value for 'limit'
 *      page: // value for 'page'
 *   },
 * });
 */
export function useProductsListQuery(baseOptions: Apollo.QueryHookOptions<ProductsListQuery, ProductsListQueryVariables> & ({ variables: ProductsListQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProductsListQuery, ProductsListQueryVariables>(ProductsListDocument, options);
      }
export function useProductsListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProductsListQuery, ProductsListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProductsListQuery, ProductsListQueryVariables>(ProductsListDocument, options);
        }
export function useProductsListSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<ProductsListQuery, ProductsListQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ProductsListQuery, ProductsListQueryVariables>(ProductsListDocument, options);
        }
export type ProductsListQueryHookResult = ReturnType<typeof useProductsListQuery>;
export type ProductsListLazyQueryHookResult = ReturnType<typeof useProductsListLazyQuery>;
export type ProductsListSuspenseQueryHookResult = ReturnType<typeof useProductsListSuspenseQuery>;
export type ProductsListQueryResult = Apollo.QueryResult<ProductsListQuery, ProductsListQueryVariables>;
export const SingleProductDocument = gql`
    query SingleProduct($singleProductId: String!) {
  singleProduct(id: $singleProductId) {
    id
    productName
    skuCode
    description
    status
    brandId
    categoryId
    subCategoryId
    materialId
    patternId
    vendorId
    purchasePrice
    salePrice
    primaryImage
    images {
      id
      imageUrl
      product {
        id
      }
    }
    variants {
      id
      variantName
      color
      size
      price
      discType
      discValue
      stockQuantity
      status
      product {
        id
      }
    }
    brandName
    categoryName
    materialName
    patternName
    newArrival
    featured
  }
}
    `;

/**
 * __useSingleProductQuery__
 *
 * To run a query within a React component, call `useSingleProductQuery` and pass it any options that fit your needs.
 * When your component renders, `useSingleProductQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSingleProductQuery({
 *   variables: {
 *      singleProductId: // value for 'singleProductId'
 *   },
 * });
 */
export function useSingleProductQuery(baseOptions: Apollo.QueryHookOptions<SingleProductQuery, SingleProductQueryVariables> & ({ variables: SingleProductQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SingleProductQuery, SingleProductQueryVariables>(SingleProductDocument, options);
      }
export function useSingleProductLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SingleProductQuery, SingleProductQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SingleProductQuery, SingleProductQueryVariables>(SingleProductDocument, options);
        }
export function useSingleProductSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<SingleProductQuery, SingleProductQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<SingleProductQuery, SingleProductQueryVariables>(SingleProductDocument, options);
        }
export type SingleProductQueryHookResult = ReturnType<typeof useSingleProductQuery>;
export type SingleProductLazyQueryHookResult = ReturnType<typeof useSingleProductLazyQuery>;
export type SingleProductSuspenseQueryHookResult = ReturnType<typeof useSingleProductSuspenseQuery>;
export type SingleProductQueryResult = Apollo.QueryResult<SingleProductQuery, SingleProductQueryVariables>;