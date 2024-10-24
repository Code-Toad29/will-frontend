import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Companies from "../components/Companies";
import Footer from "../components/Footer";
import Properties from "../components/Properties";

const Home = () => {
  return (
    <>
      {/* <Navbar/> */}
      {/* <header>hello</header> */}
      <Hero />
      <Companies />
      {/* <Residencies ResidenciesList={ResidenciesList} /> */}
      <Properties />
    </>
  );
};

export default Home;
