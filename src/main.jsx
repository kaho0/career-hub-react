import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import Root from "./Components/Root.jsx";
import Home from "./Components/Home.jsx";
import AppliedJobs from "./AppliedJobs.jsx";
import ErrorPage from "./ErrorPage.jsx";
import JobDetails from "./JobDetails.jsx";
import Statistics from "./Statistics.jsx";
import Blogs from "./Blogs.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/applied",
        element: <AppliedJobs />,
        loader: async () => {
          const response = await fetch("./jobs.json");
          return response.json();
        },
      },
      {
        path: "/job/:id",
        element: <JobDetails />,
        loader: async () => {
          const response = await fetch("../jobs.json");
          return response.json();
        },
      },
      {
        path: "/statistics",
        element: <Statistics />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
    ],
  },
]);

const root = createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
