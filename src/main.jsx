import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Layout from "./Layout/Layout.jsx";
import routes from "./Routes/Routes.jsx";
import { RouterProvider } from "react-router-dom";
import AuthProvider from "./Providers/AuthProviders.jsx";

//52-3 Project Overview And Project Setup
//52-4 React Project Folder Structure And Router Setup
//52-5 Custom Tailwind Class And Font Setup

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={routes} />
    </AuthProvider>
  </React.StrictMode>
);
