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
};

export type BrandInput = {
  brandName: Scalars['String']['input'];
  id?: InputMaybe<Scalars['Float']['input']>;
  status?: Scalars['Boolean']['input'];
};

export type Brands = {
  __typename?: 'Brands';
  brandName: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  status: Scalars['Boolean']['output'];
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
  customerId: Scalars['String']['output'];
  customerName: Scalars['String']['output'];
  email: Scalars['String']['output'];
  mobile: Scalars['String']['output'];
  status: Scalars['Boolean']['output'];
};

export type Material = {
  __typename?: 'Material';
  id: Scalars['Int']['output'];
  materialName: Scalars['String']['output'];
  status: Scalars['Boolean']['output'];
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
  assignRoleAccess: Array<RoleAccess>;
  createCustomer: CustomerOutput;
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
  deleteOrder: Scalars['Boolean']['output'];
  deletePatterns: Scalars['Boolean']['output'];
  deleteProduct: Scalars['Boolean']['output'];
  deleteRole: Scalars['Boolean']['output'];
  deleteSlider: Scalars['Boolean']['output'];
  deleteUser: Scalars['Boolean']['output'];
  deleteVendor: Scalars['Boolean']['output'];
  login: LoginOutput;
  loginCustomer: CustomerOutput;
  placeOrder: Orders;
  saveProduct: Products;
  updateAddress: CustomerAddress;
  updateOrderStatus: Orders;
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


export type MutationDeleteOrderArgs = {
  id: Scalars['ID']['input'];
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
  customerId: Scalars['String']['input'];
  items: Array<OrderItemInput>;
  paymentMethod: Scalars['String']['input'];
  totalAmount: Scalars['Float']['input'];
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


export type MutationUpdateOrderStatusArgs = {
  id: Scalars['ID']['input'];
  status: Scalars['String']['input'];
};

export type OrderItemInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  price: Scalars['Float']['input'];
  productId: Scalars['String']['input'];
  quantity: Scalars['Int']['input'];
};

export type OrderItems = {
  __typename?: 'OrderItems';
  id: Scalars['ID']['output'];
  price: Scalars['Float']['output'];
  productId: Scalars['String']['output'];
  productName?: Maybe<Scalars['String']['output']>;
  quantity: Scalars['Float']['output'];
};

export type Orders = {
  __typename?: 'Orders';
  addressId: Scalars['String']['output'];
  customerId: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  items: Array<OrderItems>;
  paymentMethod: Scalars['String']['output'];
  status: Scalars['String']['output'];
  totalAmount: Scalars['Float']['output'];
};

export type Patterns = {
  __typename?: 'Patterns';
  id: Scalars['Int']['output'];
  patternName: Scalars['String']['output'];
  status: Scalars['Boolean']['output'];
};

export type PatternsInput = {
  id?: InputMaybe<Scalars['Float']['input']>;
  patternName: Scalars['String']['input'];
  status?: Scalars['Boolean']['input'];
};

export type ProductImages = {
  __typename?: 'ProductImages';
  id: Scalars['Int']['output'];
  imageUrl: Scalars['String']['output'];
  productVariantId?: Maybe<ProductVariants>;
};

export type ProductInput = {
  brand: Scalars['Int']['input'];
  category: Scalars['Int']['input'];
  createdBy: Scalars['String']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  material: Scalars['Int']['input'];
  pattern: Scalars['Int']['input'];
  primaryImage: Scalars['String']['input'];
  productName: Scalars['String']['input'];
  purchasePrice: Scalars['Float']['input'];
  salePrice: Scalars['Float']['input'];
  status: Scalars['Boolean']['input'];
  subCategory: Scalars['Int']['input'];
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
  id: Scalars['String']['output'];
  materialId: Scalars['Float']['output'];
  materialName: Scalars['String']['output'];
  patternId: Scalars['Float']['output'];
  patternName: Scalars['String']['output'];
  primaryImage: Scalars['String']['output'];
  productName: Scalars['String']['output'];
  purchasePrice: Scalars['Float']['output'];
  salePrice: Scalars['Float']['output'];
  status: Scalars['Boolean']['output'];
  subCategoryId: Scalars['Float']['output'];
  variants: Array<ProductVariants>;
  vendorId: Scalars['String']['output'];
};

export type ProductVariantInput = {
  color: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  imageURLs?: InputMaybe<Array<Scalars['String']['input']>>;
  quantity: Scalars['Int']['input'];
  size: Scalars['String']['input'];
};

export type ProductVariants = {
  __typename?: 'ProductVariants';
  id: Scalars['String']['output'];
  images?: Maybe<Array<ProductImages>>;
  price: Scalars['Float']['output'];
  product?: Maybe<Products>;
  status: Scalars['Boolean']['output'];
  stockQuantity: Scalars['Int']['output'];
  variantName: Scalars['String']['output'];
};

export type Products = {
  __typename?: 'Products';
  brandId: Scalars['Int']['output'];
  categoryId: Scalars['Int']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  materialId: Scalars['Int']['output'];
  patternId: Scalars['Int']['output'];
  primaryImage: Scalars['String']['output'];
  productName: Scalars['String']['output'];
  purchasePrice: Scalars['Float']['output'];
  salePrice: Scalars['Float']['output'];
  status: Scalars['Boolean']['output'];
  subCategoryId: Scalars['Int']['output'];
  variants?: Maybe<Array<ProductVariants>>;
  vendorId: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  getAllAddresses: Array<CustomerAddress>;
  getAllCategories: Array<CategryOutput>;
  getAllMenus: Array<MenuOutput>;
  getAllProducts: Array<ProductOutput>;
  getBrands: Array<Brands>;
  getCategories: Array<CategryOutput>;
  getMaterials: Array<Material>;
  getMyBrands: Array<Brands>;
  getOrder?: Maybe<Orders>;
  getOrders: Array<Orders>;
  getPatterns: Array<Patterns>;
  getProductByID: Products;
  getProductsList: Array<Products>;
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


export type QueryGetAllAddressesArgs = {
  customerId: Scalars['String']['input'];
};


export type QueryGetAllProductsArgs = {
  limit?: InputMaybe<Scalars['Float']['input']>;
  page?: InputMaybe<Scalars['Float']['input']>;
};


export type QueryGetCategoriesArgs = {
  parentMenu: Scalars['String']['input'];
};


export type QueryGetOrderArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetOrdersArgs = {
  customerId: Scalars['String']['input'];
};


export type QueryGetProductByIdArgs = {
  productId: Scalars['String']['input'];
};


export type QueryGetProductsListArgs = {
  limit?: InputMaybe<Scalars['Float']['input']>;
  page?: InputMaybe<Scalars['Float']['input']>;
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
  id: Scalars['Int']['output'];
  roleName: Scalars['String']['output'];
  status: Scalars['Boolean']['output'];
};

export type RolesInput = {
  id?: InputMaybe<Scalars['Float']['input']>;
  roleName: Scalars['String']['input'];
  status?: Scalars['Boolean']['input'];
};

export type Sliders = {
  __typename?: 'Sliders';
  id: Scalars['Int']['output'];
  imageUrl: Scalars['String']['output'];
  status: Scalars['Boolean']['output'];
};

export type SlidersInput = {
  imageUrl: Scalars['String']['input'];
  status: Scalars['Boolean']['input'];
};

export type User = {
  __typename?: 'User';
  address: Scalars['String']['output'];
  city: Scalars['String']['output'];
  email: Scalars['String']['output'];
  id: Scalars['String']['output'];
  mobile: Scalars['String']['output'];
  name: Scalars['String']['output'];
  password: Scalars['String']['output'];
  pincode?: Maybe<Scalars['Float']['output']>;
  role: Scalars['Float']['output'];
  state: Scalars['String']['output'];
  status: Scalars['Boolean']['output'];
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
  email: Scalars['String']['output'];
  id: Scalars['String']['output'];
  mobile: Scalars['String']['output'];
  status: Scalars['Boolean']['output'];
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

export type PlaceOrderMutationVariables = Exact<{
  paymentMethod: Scalars['String']['input'];
  totalAmount: Scalars['Float']['input'];
  addressId: Scalars['String']['input'];
  customerId: Scalars['String']['input'];
  items: Array<OrderItemInput> | OrderItemInput;
}>;


export type PlaceOrderMutation = { __typename?: 'Mutation', placeOrder: { __typename?: 'Orders', id: string, customerId: string, addressId: string, totalAmount: number, paymentMethod: string, status: string, items: Array<{ __typename?: 'OrderItems', productId: string, price: number, quantity: number }> } };

export type CreateCustomerMutationVariables = Exact<{
  input: CustomerInput;
}>;


export type CreateCustomerMutation = { __typename?: 'Mutation', createCustomer: { __typename?: 'CustomerOutput', customerId: string, customerName: string, email: string, mobile: string, address?: string | null, status: boolean } };

export type GetAllAddressesQueryVariables = Exact<{
  customerId: Scalars['String']['input'];
}>;


export type GetAllAddressesQuery = { __typename?: 'Query', getAllAddresses: Array<{ __typename?: 'CustomerAddress', id: string, customerId: string, addressLine1: string, addressLine2?: string | null, city: string, state: string, postalCode: string, country: string, isDefault: boolean }> };

export type GetCategoriesQueryVariables = Exact<{
  parentMenu: Scalars['String']['input'];
}>;


export type GetCategoriesQuery = { __typename?: 'Query', getCategories: Array<{ __typename?: 'CategryOutput', id?: number | null, categoryName: string, parentCategory: number, image: string, parentCategoryName: string, status: boolean }> };

export type GetMyBrandsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMyBrandsQuery = { __typename?: 'Query', getMyBrands: Array<{ __typename?: 'Brands', id: number, brandName: string, status: boolean }> };

export type GetOrdersQueryVariables = Exact<{
  customerId: Scalars['String']['input'];
}>;


export type GetOrdersQuery = { __typename?: 'Query', getOrders: Array<{ __typename?: 'Orders', id: string, customerId: string, addressId: string, totalAmount: number, paymentMethod: string, status: string, items: Array<{ __typename?: 'OrderItems', id: string, productId: string, price: number, quantity: number, productName?: string | null }> }> };

export type GetSlidersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSlidersQuery = { __typename?: 'Query', getSliders: Array<{ __typename?: 'Sliders', id: number, imageUrl: string, status: boolean }> };

export type LoginCustomerMutationVariables = Exact<{
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
}>;


export type LoginCustomerMutation = { __typename?: 'Mutation', loginCustomer: { __typename?: 'CustomerOutput', customerId: string, customerName: string, email: string, mobile: string, address?: string | null, status: boolean } };

export type ProductsListQueryVariables = Exact<{
  relatedToId?: InputMaybe<Scalars['String']['input']>;
  brandId?: InputMaybe<Scalars['Int']['input']>;
  categoryId?: InputMaybe<Scalars['Int']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  limit: Scalars['Int']['input'];
  page: Scalars['Int']['input'];
}>;


export type ProductsListQuery = { __typename?: 'Query', productsList: Array<{ __typename?: 'ProductOutput', id: string, productName: string, description?: string | null, status: boolean, brandId: number, categoryId: number, subCategoryId: number, materialId: number, patternId: number, vendorId: string, purchasePrice: number, salePrice: number, primaryImage: string, brandName: string, categoryName: string, materialName: string, patternName: string, variants: Array<{ __typename?: 'ProductVariants', id: string, variantName: string, price: number, stockQuantity: number, status: boolean, images?: Array<{ __typename?: 'ProductImages', id: number, imageUrl: string, productVariantId?: { __typename?: 'ProductVariants', id: string } | null }> | null, product?: { __typename?: 'Products', id: string } | null }> }> };

export type SingleProductQueryVariables = Exact<{
  singleProductId: Scalars['String']['input'];
}>;


export type SingleProductQuery = { __typename?: 'Query', singleProduct?: { __typename?: 'ProductOutput', id: string, productName: string, description?: string | null, status: boolean, brandId: number, categoryId: number, subCategoryId: number, materialId: number, patternId: number, vendorId: string, purchasePrice: number, salePrice: number, primaryImage: string, categoryName: string, brandName: string, materialName: string, patternName: string, variants: Array<{ __typename?: 'ProductVariants', id: string, variantName: string, price: number, stockQuantity: number, status: boolean, images?: Array<{ __typename?: 'ProductImages', id: number, imageUrl: string, productVariantId?: { __typename?: 'ProductVariants', id: string } | null }> | null, product?: { __typename?: 'Products', id: string } | null }> } | null };


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
export const PlaceOrderDocument = gql`
    mutation PlaceOrder($paymentMethod: String!, $totalAmount: Float!, $addressId: String!, $customerId: String!, $items: [OrderItemInput!]!) {
  placeOrder(
    paymentMethod: $paymentMethod
    totalAmount: $totalAmount
    addressId: $addressId
    customerId: $customerId
    items: $items
  ) {
    id
    customerId
    addressId
    totalAmount
    paymentMethod
    status
    items {
      productId
      price
      quantity
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
 *      paymentMethod: // value for 'paymentMethod'
 *      totalAmount: // value for 'totalAmount'
 *      addressId: // value for 'addressId'
 *      customerId: // value for 'customerId'
 *      items: // value for 'items'
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
export const CreateCustomerDocument = gql`
    mutation CreateCustomer($input: CustomerInput!) {
  createCustomer(input: $input) {
    customerId
    customerName
    email
    mobile
    address
    status
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
export const GetOrdersDocument = gql`
    query GetOrders($customerId: String!) {
  getOrders(customerId: $customerId) {
    id
    customerId
    addressId
    totalAmount
    paymentMethod
    status
    items {
      id
      productId
      price
      quantity
      productName
    }
  }
}
    `;

/**
 * __useGetOrdersQuery__
 *
 * To run a query within a React component, call `useGetOrdersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOrdersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOrdersQuery({
 *   variables: {
 *      customerId: // value for 'customerId'
 *   },
 * });
 */
export function useGetOrdersQuery(baseOptions: Apollo.QueryHookOptions<GetOrdersQuery, GetOrdersQueryVariables> & ({ variables: GetOrdersQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetOrdersQuery, GetOrdersQueryVariables>(GetOrdersDocument, options);
      }
export function useGetOrdersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetOrdersQuery, GetOrdersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetOrdersQuery, GetOrdersQueryVariables>(GetOrdersDocument, options);
        }
export function useGetOrdersSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetOrdersQuery, GetOrdersQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetOrdersQuery, GetOrdersQueryVariables>(GetOrdersDocument, options);
        }
export type GetOrdersQueryHookResult = ReturnType<typeof useGetOrdersQuery>;
export type GetOrdersLazyQueryHookResult = ReturnType<typeof useGetOrdersLazyQuery>;
export type GetOrdersSuspenseQueryHookResult = ReturnType<typeof useGetOrdersSuspenseQuery>;
export type GetOrdersQueryResult = Apollo.QueryResult<GetOrdersQuery, GetOrdersQueryVariables>;
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
export const LoginCustomerDocument = gql`
    mutation LoginCustomer($password: String!, $username: String!) {
  loginCustomer(password: $password, username: $username) {
    customerId
    customerName
    email
    mobile
    address
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
    variants {
      id
      variantName
      price
      stockQuantity
      status
      images {
        id
        imageUrl
        productVariantId {
          id
        }
      }
      product {
        id
      }
    }
    brandName
    categoryName
    materialName
    patternName
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
    variants {
      id
      variantName
      price
      stockQuantity
      status
      images {
        id
        imageUrl
        productVariantId {
          id
        }
      }
      product {
        id
      }
    }
    categoryName
    brandName
    materialName
    patternName
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