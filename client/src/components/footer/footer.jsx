import React from "react";
import "./footer.scss";
import { footerlinks } from "../../data/footer";

const Footer = () => {
  return (
    <div className="footer">
      <h2>
        <span>a</span>DDAX
      </h2>
      <div className="footer-links">
        {footerlinks.map((link, index) => (
          <div key={index} className="socialMediaBox">
            <link.img />
          </div>
        ))}
      </div>
      <p>
        Copyright Addax All Rights Reserved by <span>EnvyTheme</span>
      </p>
    </div>
  );
};

export default Footer;
