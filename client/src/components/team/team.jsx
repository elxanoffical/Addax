import React from "react";
import "./team.scss";
import team1 from "../../assets/image/team-1.jpg";
import team2 from "../../assets/image/team-2.jpg";
import team3 from "../../assets/image/team-3.jpg";
import { FaFacebookF } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const Team = () => {
  return (
    <section id="team-section">
      <div className="container">
        <div id="section-header">
          <div className="liner">
            <div id="line1"></div>
            <div id="line2"></div>
          </div>
          <div className="txt">
            <span>Mid Addax</span>
            <h1>
              Out Creative <span>Team</span>
            </h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          </div>
        </div>

        <div className="team-cards-wrapper">

          <div className="team-card">
            <img src={team1} alt="Team Member" />
            <div className="text-wrapper">
              <h2>Joohen Doe</h2>
              <span>Web Developer</span>
            </div>
            <div className="socials-media-links">
              <FaFacebookF />
              <FiGithub />
              <FaInstagram />
              <FaLinkedinIn />
            </div>
          </div>
          
          <div className="team-card">
            <img src={team2} alt="Team Member" />
            <div className="text-wrapper">
              <h2>Joohen Doe</h2>
              <span>Web Developer</span>
            </div>
            <div className="socials-media-links">
              <FaFacebookF />
              <FiGithub />
              <FaInstagram />
              <FaLinkedinIn />
            </div>
          </div>
          <div className="team-card">
            <img src={team3} alt="Team Member" />
            <div className="text-wrapper">
              <h2>Joohen Doe</h2>
              <span>Web Developer</span>
            </div>
            <div className="socials-media-links">
              <FaFacebookF />
              <FiGithub />
              <FaInstagram />
              <FaLinkedinIn />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
