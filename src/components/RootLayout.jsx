import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import Hero from './Hero'
import Companies from './Companies'

function RootLayout() {
  return (
    <div>
        <Navbar />
        <Hero/>
        <Companies/>
        
        
        {/* All other pages will replace outlet */}
        

        <Outlet />
        <Footer/>
        {/* Add footer */}
    </div>
  )
}

export default RootLayout