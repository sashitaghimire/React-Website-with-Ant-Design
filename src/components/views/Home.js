import React from "react";
import About from "../home/about";
import Contact from "../home/contact";
import Feature from "../home/feature";
import AppHero from "../home/Hero";
import Pricing from "../home/pricing";
import Works from "../home/works";

const Home = () => {
  return (
    <div className="main">
      <AppHero />
      <About />
      <Feature />
      <Works />
      <Pricing />
      <Contact />
    </div>
  );
};

export default Home;
