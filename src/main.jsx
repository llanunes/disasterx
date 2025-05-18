import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Home from "./pages/home/index.jsx";
import AlertDashboard from "./pages/dashboard/index.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ContactDashboard from "./components/contact-form.js";
import './index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/dashboard", element: <AlertDashboard /> },
      { path: "/contact", element: <ContactDashboard /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
