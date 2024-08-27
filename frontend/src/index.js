import React from "react";
import ReactDOM from "react-dom/client";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { AuthProvider } from "./AuthContext/AuthContext";

//!STRIPE CONFIGURATION
const stripePromise = loadStripe(
  "pk_test_51PUsUI03SRy0JQ0t5M8hDpj57Ffa7pIDnq08xVFoNT1YcEo0BcDYhI806DT5rMuttzPJCCRK6j0k0Pts7TEbgfrx00ZGMrZpwr"
);

const options = {
  mode: "payment",
  currency: "aud",
  amount: 1099,
};

const root = ReactDOM.createRoot(document.getElementById("root"));
//react query client
const queryClient = new QueryClient();
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Elements stripe={stripePromise} options={options}>
          <App />
        </Elements>
      </AuthProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
