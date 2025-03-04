import React from "react";
import "./Home.scss";
import { footerlinks } from "../../data/footer";

import stragety from "../../assets/image/stragety.jpg";
import Header from "../../components/header/header";
import Hero from "../../components/hero/hero";
import Welcome from "../../components/welcome-addax/welcome";
import About from "../../components/about-addax/about";

const Home = () => {
  return (
    <div className="section">
      <Header />

      <Hero />

      <Welcome />
      <About />

      <div className="strategy-addax">
        <div className="container">
          <div className="image">
            <img src={stragety} alt="" />
          </div>
        </div>
      </div>

      {/* 
      <div className="contact">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3040.092428882906!2d49.83300227490445!3d40.36247485894136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307dcb2d2fde63%3A0x588756574097ef4f!2sAzneft%20Meydan%C4%B1!5e0!3m2!1saz!2saz!4v1716033589786!5m2!1saz!2saz" ></iframe>
      </div> */}

      <div className="footer">
        <h2>
          <span>a</span>DDAX
        </h2>
        <div className="footer-links">
          {footerlinks.map((link, index) => {
            return (
              <div key={index} className="socialMediaBox">
                <link.img />
              </div>
            );
          })}
        </div>
        <p>
          Copyright Addax All Rights Reserved by <span>EnvyTheme</span>
        </p>
      </div>
    </div>
  );
};

export default Home;
