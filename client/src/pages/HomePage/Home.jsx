import React from "react";
import "./Home.scss";

import Header from "../../components/header/header";
import Hero from "../../components/hero/hero";
import Welcome from "../../components/welcome-addax/welcome";
import About from "../../components/about-addax/about";
import Footer from "../../components/footer/footer";
import Team from "../../components/team/team";
import Pricing from "../../components/pricing/pricing";
import Contact from "../../components/contact/contact";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Welcome />
      <Team />
      <Pricing />
      <About />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
