import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import About from "./pages/About";
import Login from "./pages/login";
import UserProfile from "./pages/UserProfile";
const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/about",
      element: <About />
    },
    {
      path: "/login",
      element: <Login />
    },
    {
      path: "/profile/:id",
      element: <UserProfile />
    }
  ]);
  

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render (<RouterProvider router={router} />);