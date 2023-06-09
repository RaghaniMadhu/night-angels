import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import AuthContextProvider from "./contexts/AuthContext";
import ProductsContextProvider from "./contexts/ProductsContext";
import WishlistContextProvider from "./contexts/WishlistContext";
import CartContextProvider from "./contexts/CartContext";
import AddressContextProvider from "./contexts/AddressContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <ProductsContextProvider>
          <WishlistContextProvider>
            <CartContextProvider>
              <AddressContextProvider>
                <App />
              </AddressContextProvider>
            </CartContextProvider>
          </WishlistContextProvider>
        </ProductsContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
