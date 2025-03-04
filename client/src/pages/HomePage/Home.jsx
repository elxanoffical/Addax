import React from "react";
import "./Home.scss";
import { footerlinks } from "../../data/footer";
import { MdDesignServices } from "react-icons/md";
import { LiaLaptopCodeSolid } from "react-icons/lia";
import { HiOutlineSupport } from "react-icons/hi";
import { FaArrowRight } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa6";
import video from "../../assets/image/about.jpg";
import stragety from "../../assets/image/stragety.jpg";
import Header from "../../components/header/header";

const Home = () => {
  return (
    <div className="section">
       
       <Header/>

      <div className="hero-wrapper">
        <div className="blur">
          <span>We Are Creative</span>
          <h1>
            The Best <span id="digital">Digital</span> Experience
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="btn">
            <button id="btn">Get started</button>
            <button id="btnn">wiew work</button>
          </div>
        </div>
      </div>

      <div className="welcome-addax">
        <div className="container">
          <div className="section-title">
            <div className="liner">
              <div id="line1"></div>
              <div id="line2"></div>
            </div>
            <div className="txt">
              <span>We Are Creative</span>
              <h1>
                Welcome to <span>Addax</span>
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="single-box">
              <MdDesignServices className="icon" />
              <h3>Creative Design</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor.
              </p>
              <button>
                <FaArrowRight className="icons" />
              </button>
            </div>
            <div className="single-box">
              <LiaLaptopCodeSolid className="icon" />
              <h3>Friendly Codes</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor.
              </p>
              <button>
                <FaArrowRight className="icons" />
              </button>
            </div>
            <div className="single-box">
              <HiOutlineSupport className="icon" />
              <h3>Fast Support</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor.
              </p>
              <button>
                <FaArrowRight className="icons" />
              </button>
            </div>
          </div>
        </div>
      </div>

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
