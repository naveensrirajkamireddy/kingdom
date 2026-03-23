import {
  ApolloClient,
  InMemoryCache,
  ApolloLink,
  HttpLink,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";

// 1. Create the HTTP Link
const httpLink = new HttpLink({
  uri: import.meta.env.VITE_API_URL, // Use environment variable for the endpoint
});

// 2. Auth Link: Add Authorization Header
const authLink = new ApolloLink((operation, forward) => {
  const token = JSON.parse(
    sessionStorage.getItem("customerData") as string,
  )?.authToken; // or sessionStorage if you're storing it there

  if (token) {
    operation.setContext(({ headers = {} }) => ({
      headers: {
        ...headers,
        Authorization: `Bearer ${token}`,
      },
    }));
  }

  return forward(operation);
});

// 3. Loader Control Setup
let loaderControl: { showLoader: () => void; hideLoader: () => void } | null =
  null;

export const setLoaderControl = (loader: typeof loaderControl) => {
  loaderControl = loader;
};

// 4. Loader Link
const loaderLink = new ApolloLink((operation, forward) => {
  loaderControl?.showLoader();

  return forward(operation).map((result) => {
    loaderControl?.hideLoader();
    return result;
  });
});

// 5. Error Link
const errorLink = onError(({ graphQLErrors, networkError }) => {
  loaderControl?.hideLoader();
});

// 6. Compose All Links
const client = new ApolloClient({
  link: ApolloLink.from([
    errorLink,
    loaderLink,
    authLink, // Important: authLink should come before httpLink
    httpLink,
  ]),
  cache: new InMemoryCache(),
});

export default client;
