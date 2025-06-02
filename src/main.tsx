import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { ApolloProvider } from "@apollo/client";
import client from "./apolloClient";
import { UserProvider } from "./context/userContext";
import { CartProvider } from "./context/cartContext";

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <UserProvider>
        <CartProvider>   {/* <-- Wrap here */}
          <App />
        </CartProvider>
      </UserProvider>
    </ApolloProvider>
  </React.StrictMode>
);
