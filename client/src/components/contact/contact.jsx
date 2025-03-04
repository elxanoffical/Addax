import React from "react";
import "./contact.scss";
import emailjs from '@emailjs/browser'

const Contact = () => {


  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await emailjs.sendForm(
      "service_58nxouj", // service ID
      "template_e1wxfpd", // template ID
      e.target,
      "Kba6m4BVFNbdasMZC" //public ID
    );
    if (res.status === 200) {
      alert("Email sent succesfully!");
    } else {
      alert("Email failed to send");
    }
  };

  return (
    <section id="contact">
      <div className="container">
        <div className="location-box">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3040.057126364135!2d49.832355475791566!3d40.3632576588925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307dcb2b76ec4d%3A0x7557acda1ccb1db9!2sFour%20Seasons%20Hotel%20Baku!5e0!3m2!1sen!2saz!4v1716108137399!5m2!1sen!2saz"
            width="100%"
            height="360"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

          <div className="map-info-box-wrapper">
            <div className="map-info-box">
              <img src="./assets/email_icon.png" alt="" />
              <p>info@wegroup.az</p>
            </div>

            <div className="map-info-box">
              <img src="./assets/location_icon.png" alt="" />
              <p>Baki, Azneft meydani Four Seasons Hotel</p>
            </div>

            <div className="map-info-box">
              <img src="./assets/phone.png" alt="" />
              <p>(+994) 50-210 00 10</p>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="contact-form-box">
          <h2>Stay Connected</h2>
          <div className="inpt-box">
            <label htmlFor="name">FullName</label>
            <input required id="name" name="fullName" type="text" />
          </div>
          <div className="inpt-box">
            <label htmlFor="email">Email</label>
            <input required id="email" name="email" type="email" />
          </div>
          <div className="inpt-box">
            <label htmlFor="phone">Phone Number</label>
            <input required id="phone" name="phone" type="number" />
          </div>
          <div className="inpt-box">
            <label htmlFor="message">Message</label>
            <textarea required rows="5" name="message" id="message"></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
