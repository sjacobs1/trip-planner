import React from "react";
import ReactDOM from "react-dom/client";
// import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import LandingPage from "./components/LandingPage.tsx";
import DiscoverPlaces from "./components/DiscoverPlacesPage.tsx";
import PlanTripPage from "./components/PlanTripPage.tsx";
import MyTripsPage from "./components/MyTripsPage.tsx";
import NotFoundPage from "./components/NotFoundErrorPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "discoverPlacesPage",
        element: <DiscoverPlaces />,
      },
      { path: "planTripPage", element: <PlanTripPage /> },
      { path: "myTripsPage", element: <MyTripsPage /> },
    ],
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
