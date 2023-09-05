import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { AppProvider } from "./contextApi_store/ProductContext";
import { FilterContextProvider } from "./FilterContext/Filter_Context";
import { CartProvider } from "./CartContext/Cart_Context";
import { Auth0Provider } from "@auth0/auth0-react";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
    <Auth0Provider
    domain="dev-cp6s4yrb0mit2x7e.jp.auth0.com"
    clientId="g4H0BRR0K6eZCkKO8E58OxS96VeUesUd"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <AppProvider>
      <FilterContextProvider>
        <CartProvider>
      <BrowserRouter>
        <App />
        <ToastContainer />
      </BrowserRouter>
      </CartProvider>
      </FilterContextProvider>
    </AppProvider>
    </Auth0Provider>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
