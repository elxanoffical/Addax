import React from "react";
import "./pricing.scss";

const Pricing = () => (
  <section id="pricing-section">
    <div className="container">
      <div id="section-header">
        <div className="liner">
          <div id="line1" className="line1"></div>
          <div id="line2" className="line2"></div>
        </div>
        <div className="txt">
          <h2>
            Our Products <span>Pricing</span>
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
      <div className="price-cards-wrapper">
        {[
          { title: "Basic", price: "39.00" },
          { title: "STANDARD", price: "49.00" },
          { title: "PREMIUM", price: "59.00" },
        ].map(({ title, price }) => (
          <div className="price-card" key={title}>
            <div className="header-wrapper">
              <h2>{title}</h2>
              <div className="italic-box" />
            </div>
            <div className="price-wrapper">
              <div className="price-main-wrapper">
                <h2>
                  <sup>$</sup>
                  {price}
                </h2>
                <p>/Per Month</p>
              </div>
            </div>
            <ul>
              {[
                "Unlimited Access",
                "50 GB Storage",
                "5 Unique Users",
                "Free Domain",
                "24/7 Support",
                "Daily Backups",
              ].map((item, idx) => (
                <li key={idx}>
                  <i className="bx bx-check"></i>
                  {item}
                </li>
              ))}
            </ul>

            <button>Order Now</button>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Pricing;
