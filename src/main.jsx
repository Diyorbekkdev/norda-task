import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer, } from "react-toastify";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import "./index.scss";
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
    },
    mutations: {
      retry: false,
    },
  },
});
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ToastContainer />
        <App />
        {import.meta.env.MODE === "development" && (
          <ReactQueryDevtools initialIsOpen={true} />
        )}
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
);
