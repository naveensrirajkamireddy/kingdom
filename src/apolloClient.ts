// src/lib/apolloClient.ts
import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://ecommerce-backend-production-4862.up.railway.app/kingdom-gateway", // Replace with your backend GraphQL endpoint
  cache: new InMemoryCache(),
});

export default client;
