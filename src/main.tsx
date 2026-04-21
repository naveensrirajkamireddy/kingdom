import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { ApolloProvider } from "@apollo/client";
import client from "./apolloClient";
import { UserProvider } from "./context/userContext";
import { CartProvider } from "./context/cartContext";
import { LoaderProvider } from "./context/loaderContext";
import { ToastProvider } from "./context/toastContext";

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <LoaderProvider>
      <ToastProvider>
        <ApolloProvider client={client}>
          <UserProvider>
            <CartProvider>
              <App />
            </CartProvider>
          </UserProvider>
        </ApolloProvider>
      </ToastProvider>
    </LoaderProvider>
  </React.StrictMode>
);
