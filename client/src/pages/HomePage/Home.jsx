import React from "react";
import "./Home.scss";
import { footerlinks } from "../../data/footer";

import { FaCheck } from "react-icons/fa6";
import video from "../../assets/image/about.jpg";
import stragety from "../../assets/image/stragety.jpg";
import Header from "../../components/header/header";
import Hero from "../../components/hero/hero";
import Welcome from "../../components/welcome-addax/welcome";

const Home = () => {
  return (
    <div className="section">
       
       <Header/>
       
       <Hero/>
     
      <Welcome/>
      

      <div className="about-addax">
        <div className="container">
          <div className="section-title">
            <div className="liner">
              <div id="line1"></div>
              <div id="line2"></div>
            </div>
            <div className="txt">
              <h1>
                About <span>Addax</span>
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>

          <div className="marketing-video">
            <div className="marketing-wrapper">
              <div className="top-txt">
                <h2>
                  We Are Digital <span>Marketing & Branding</span>
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>

              <div className="bottom-wrapper">
                <div className="txt-wrapper">
                  <div className="txt">
                    <FaCheck className="icon" />
                    <p>Creative Design</p>
                  </div>
                  <div className="txt">
                    <FaCheck className="icon" />
                    <p>Retina Ready</p>
                  </div>
                  <div className="txt">
                    <FaCheck className="icon" />
                    <p>Responsive Design</p>
                  </div>
                </div>
                <div className="txt-wrapper">
                  <div className="txt">
                    <FaCheck className="icon" />
                    <p>Modern Design</p>
                  </div>
                  <div className="txt">
                    <FaCheck className="icon" />
                    <p>Awesome Design</p>
                  </div>
                  <div className="txt">
                    <FaCheck className="icon" />
                    <p>Digital Marketing & Branding</p>
                  </div>
                </div>
              </div>
              <button>Read More</button>
            </div>
            <div className="video">
              <img src={video} alt="" />
            </div>
          </div>
        </div>
      </div>

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
