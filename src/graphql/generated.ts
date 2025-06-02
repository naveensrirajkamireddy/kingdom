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

export type ImageOutput = {
  __typename?: 'ImageOutput';
  id: Scalars['Int']['output'];
  isPrimary: Scalars['Boolean']['output'];
  url: Scalars['String']['output'];
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
  login: LoginOutput;
  loginCustomer: CustomerOutput;
  saveProduct: Products;
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


export type MutationSaveProductArgs = {
  data: ProductInput;
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
  brand: Scalars['String']['output'];
  brandId: Scalars['Int']['output'];
  category: Scalars['String']['output'];
  categoryId: Scalars['Int']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  images?: Maybe<Array<ImageOutput>>;
  material: Scalars['String']['output'];
  materialId: Scalars['Int']['output'];
  pattern: Scalars['String']['output'];
  patternId: Scalars['Int']['output'];
  productName: Scalars['String']['output'];
  status: Scalars['Boolean']['output'];
  variants?: Maybe<Array<VariantOutput>>;
  vendorId: Scalars['String']['output'];
  vendorName: Scalars['String']['output'];
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
  getAllCategories: Array<CategryOutput>;
  getAllMenus: Array<MenuOutput>;
  getAllProducts: Array<ProductOutput>;
  getBrands: Array<Brands>;
  getCategories: Array<CategryOutput>;
  getMaterials: Array<Material>;
  getMyBrands: Array<Brands>;
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
};


export type QueryGetAllProductsArgs = {
  limit?: InputMaybe<Scalars['Float']['input']>;
  page?: InputMaybe<Scalars['Float']['input']>;
};


export type QueryGetCategoriesArgs = {
  parentMenu: Scalars['String']['input'];
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

export type VariantOutput = {
  __typename?: 'VariantOutput';
  id: Scalars['Int']['output'];
  price: Scalars['Float']['output'];
  size: Scalars['String']['output'];
  stock: Scalars['Int']['output'];
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

export type CreateCustomerMutationVariables = Exact<{
  input: CustomerInput;
}>;


export type CreateCustomerMutation = { __typename?: 'Mutation', createCustomer: { __typename?: 'CustomerOutput', customerId: string, customerName: string, email: string, mobile: string, address?: string | null, status: boolean } };

export type GetCategoriesQueryVariables = Exact<{
  parentMenu: Scalars['String']['input'];
}>;


export type GetCategoriesQuery = { __typename?: 'Query', getCategories: Array<{ __typename?: 'CategryOutput', id?: number | null, categoryName: string, parentCategory: number, image: string, parentCategoryName: string, status: boolean }> };

export type GetMyBrandsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMyBrandsQuery = { __typename?: 'Query', getMyBrands: Array<{ __typename?: 'Brands', id: number, brandName: string, status: boolean }> };

export type GetSlidersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSlidersQuery = { __typename?: 'Query', getSliders: Array<{ __typename?: 'Sliders', id: number, imageUrl: string, status: boolean }> };

export type LoginCustomerMutationVariables = Exact<{
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
}>;


export type LoginCustomerMutation = { __typename?: 'Mutation', loginCustomer: { __typename?: 'CustomerOutput', customerId: string, customerName: string, email: string, mobile: string, address?: string | null, status: boolean } };


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