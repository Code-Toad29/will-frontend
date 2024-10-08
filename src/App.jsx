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
import React from 'react';
import { BrowserRouter, Routes, Route, createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Buy from './pages/Buy';
import Rent from './pages/Rent';
import Sell from './pages/Sell';
import Contact from './pages/Contact';
import Profile from './pages/Profile';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Companies from './components/Companies';
import RootLayout from './components/RootLayout';

export default function App() {

  const router = createBrowserRouter([
     {
      path: '/',
      element: <RootLayout />,
      children: [
        {path:'/', element:<Home />},
        {path:'/rent', element:<Rent />},
        {path:'/sell', element:<Sell />},
        {path:'/buy', element:<Buy />},
        {path:'/contact', element:<Contact />}
      ]
     },
    ])


        // <Route path='/buy' element={<Buy />} />
        // <Route path='/rent' element={<Rent />} />
        // <Route path='/sell' element={<Sell />} />
        // <Route path='/contact' element={<Contact />} />
        // <Route path='/profile' element={<Profile />} />
        // <Route path='/sign-in' element={<SignIn />} />
        // <Route path='/sign-up' element={<SignUp />} />

  return (
    <RouterProvider router={router}/>

  );
}


{/* <Navbar />
<Hero />
<Companies />
{/* <Routes>
  
</Routes> */} 

