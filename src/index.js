import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { SearchProvider } from "./Components/Pages/SearchBar";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

const root = ReactDOM.createRoot(document.getElementById("root"));
const client = "AWbJ5zdw_OhrabzqXnsQCkVUIkel9Gd-9D6T7VASgTsHfdjN0NfV1yr-3MboCoNhbh6-oJLDa3ET93IO"
// const client = "sb-jvxqp27625220_api1.business.example.com"
root.render(
  <React.StrictMode>
    <PayPalScriptProvider options={{"client-id": client, currency: "USD", intent: "capture"}}>
      <SearchProvider>
        <App />
      </SearchProvider>
    </PayPalScriptProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
