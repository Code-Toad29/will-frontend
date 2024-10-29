// test

// import React from "react";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";

// import Home from "./pages/Home";
// import Marketplace from "./pages/Marketplace";
// import Sell from "./pages/Sell";
// import Contact from "./pages/Contact";
// import Profile from "./pages/Profile";
// import SignIn from "./pages/SignIn";
// import SignUp from "./pages/SignUp";
// import About from "./pages/About";
// import RootLayout from "./components/RootLayout";
// import PropertyDetails from "./components/PropertyDetails";

// export default function App() {
//   const router = createBrowserRouter([
//     {
//       path: "/",
//       element: <RootLayout />,
//       children: [
//         { path: "/", element: <Home /> },
//         { path: "/marketplace", element: <Marketplace /> },
//         { path: "/sell", element: <Sell /> },
//         { path: "/about", element: <About /> },
//         { path: "/contact", element: <Contact /> },
//         { path: "/profile", element: <Profile /> }, // Added Profile route
//         { path: "/sign-in", element: <SignIn /> }, // Added SignIn route
//         { path: "/sign-up", element: <SignUp /> }, // Added SignUp route
//         { path: "/listing/:listingId", element: <PropertyDetails /> }, // Route for property details
//       ],
//     },
//   ]);

//   return <RouterProvider router={router} />;

import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import Marketplace from "./pages/Marketplace";
import Sell from "./pages/Sell";
import Contact from "./pages/Contact";
import Profile from "./pages/Profile";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import About from "./pages/About";
import RootLayout from "./components/RootLayout";
import PropertyDetails from "./components/PropertyDetails";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/marketplace", element: <Marketplace /> },
        { path: "/sell", element: <Sell /> },
        { path: "/about", element: <About /> },
        { path: "/contact", element: <Contact /> },
        { path: "/profile", element: <Profile /> },
        { path: "/sign-in", element: <SignIn /> },
        { path: "/sign-up", element: <SignUp /> },
        { path: "/listing/:listingId", element: <PropertyDetails /> }, // Route for property details
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
