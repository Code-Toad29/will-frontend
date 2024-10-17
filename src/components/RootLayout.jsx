import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import Hero from './Hero'
import Companies from './Companies'
import Home from '../pages/Home'
import About from '../pages/About'
import Marketplace from '../pages/Marketplace'
  
// keep root like this 
function RootLayout() {
  return (
    <div>
        <Navbar />
        {/* <Hero/>
        <Companies/>
        
        
        {/* All other pages will replace outlet *
        <Home/>
        <Marketplace/>
       
        <Sell/>
        <Contact/> 
        <About/>  */}
        
        

        <Outlet/>
        <Footer/>
        {/* Add footer */}
    </div>
  )
}

export default RootLayout;