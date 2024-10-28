// import React from 'react'
// import Hero  from  './components/Hero';
// import Navbar from './components/Navbar';
// import Companies from './components/Companies';
// import { BrowserRouter,Routes,createBrowserRouter,RouterProvider } from 'react-router-dom';
// import RootLayout from './components/RootLayout';

// function App() {
// return( <div className='overflow-x-hidden'>
//       <div>
//       <Navbar/>
//       <Hero/>
//       </div>
//       <Companies/>
//       </div>);

// };
// export default App;
// import{BrowserRouter,Routes,Route} from 'react-router-dom';
// import React from 'react'
// import Home from './pages/Home';
// import Buy from './pages/Buy';
// import Rent from './pages/Rent';
// import Sell from './pages/Sell';
// import Contact from './pages/Contact';
// import Profile from './pages/Profile';
// import SignIn from './pages/SignIn';
// import SignUp from './pages/SignUp';
// import Hero  from  './components/Hero';
// import Navbar from './components/Navbar';
// import Companies from './components/Companies';

// function App() {
// return( <div className='overflow-x-hidden'>
//       <div>
//       <Navbar/>
//       <Hero/>
//       </div>
//       <Companies/>
//       </div>);
// };
// export default App;
// export default function App(){
//       return<BrowserRouter>
//       <Navbar />
//       <Routes>
//         <Route path='/' element={<Home />} />
//         <Route path='/buy' element={<Buy />} />
//         <Route path='/rent' element={<Rent />} />
//         <Route path='/sell' element={<Sell />} />
//         <Route path='/contact' element={<Contact />} />
//         <Route path='/profile' element={<Profile />} />
//         <Route path='/sign-in' element={<SignIn />} />
//         <Route path='/sign-up' element={<SignUp />} />

//       </Routes>

//       </BrowserRouter>
// }

// 2
// import React from "react";
// import {
//   BrowserRouter,
//   Routes,
//   Route,
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";

// import Home from "./pages/Home";
// import Marketplace from "./pages/Marketplace";
// import Sell from "./pages/Sell";
// import Contact from "./pages/Contact";
// import Profile from "./pages/Profile";
// import SignIn from "./pages/SignIn";
// import SignUp from "./pages/SignUp";
// import About from "./pages/About";
// import Navbar from "./components/Navbar";
// import Companies from "./components/Companies";
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
//       ],
//     },
//   ]);

//   // <Route path='/buy' element={<Buy />} />
//   // <Route path='/rent' element={<Rent />} />
//   // <Route path='/sell' element={<Sell />} />
//   // <Route path='/contact' element={<Contact />} />
//   // <Route path='/profile' element={<Profile />} />
//   // <Route path='/sign-in' element={<SignIn />} />
//   // <Route path='/sign-up' element={<SignUp />} />

//   return <RouterProvider router={router} />;
// }

// {
//   /* <Navbar />
// <Hero />
// <Companies />
// {/* <Routes>

// </Routes> */
// }

// import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import Companies from "./components/Companies";
// import Home from "./pages/Home";
// import Buy from "./pages/Buy";
// import Rent from "./pages/Rent";
// import Sell from "./pages/Sell";
// import Contact from "./pages/Contact";
// import Profile from "./pages/Profile";
// import SignIn from "./pages/SignIn";
// import SignUp from "./pages/SignUp";

// function App() {
//   return (
//     <BrowserRouter>
//       <div className="overflow-x-hidden">
//         <Navbar />
//         <Hero />
//         <Companies />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/buy" element={<Buy />} />
//           <Route path="/rent" element={<Rent />} />
//           <Route path="/sell" element={<Sell />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/profile" element={<Profile />} />
//           <Route path="/sign-in" element={<SignIn />} />
//           <Route path="/sign-up" element={<SignUp />} />
//         </Routes>
//       </div>
//     </BrowserRouter>
//   );
// }

// export default App;

// test

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
        { path: "/profile", element: <Profile /> }, // Added Profile route
        { path: "/sign-in", element: <SignIn /> }, // Added SignIn route
        { path: "/sign-up", element: <SignUp /> }, // Added SignUp route
        { path: "/listing/:listingId", element: <PropertyDetails /> }, // Route for property details
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
