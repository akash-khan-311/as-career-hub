import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ThemeProvider } from "@material-tailwind/react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout/Layout.jsx";
import Home from "./components/Home/Home.jsx";
import AppliedJobs from "./components/AppliedJobs/AppliedJobs.jsx";
import Jobs from "./components/Jobs/Jobs.jsx";
import Statics from "./components/Statics/Statics.jsx";
import Blogs from "./components/Blogs/Blogs.jsx";
import ErrorPage from "./components/ErrorPage/ErrorPage.jsx";
import JobDetails from "./components/JobDetails/JobDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "*", element: <ErrorPage /> },
      { path: "/", element: <Home /> },
      { path: "/jobs", element: <Jobs /> },
      {
        path: "/applied",
        element: <AppliedJobs />,
        loader: () => fetch("jobs.json"),
      },
      { path: "/statics", element: <Statics /> },
      { path: "/blogs", element: <Blogs /> },
      {
        path: "/job/:id",
        element: <JobDetails />,
        loader: () => fetch("jobs.json"),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router}></RouterProvider>
    </ThemeProvider>
  </React.StrictMode>
);
