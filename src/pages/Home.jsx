import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero';
import Companies from '../components/Companies';
import Footer from '../components/Footer';


const Home = () => {
  return (
    <>
    
    {/* <Navbar/> */}
    <header>
    <Navbar/>
    </header>
    <Hero/>
    <Companies/>



    <h2>Home</h2>
    <Footer/>
    </>
  );
}

export default Home;