import React from "react";
import './welcome.scss'
import { MdDesignServices } from "react-icons/md";
import { LiaLaptopCodeSolid } from "react-icons/lia";
import { HiOutlineSupport } from "react-icons/hi";
import { FaArrowRight } from "react-icons/fa6";

const Welcome = () => {
  return (
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
  );
};

export default Welcome;
