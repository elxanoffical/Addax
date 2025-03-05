import React, { useState, useEffect } from "react";
import "./header.scss";
import { navlinks } from "../../data/navlinks";

const Header = () => {

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    // Aşağı scroll edilirsə gizlət, yuxarı scroll edilirsə göstər
    if (currentScrollPos > prevScrollPos) {
      setVisible(false);
    } else {
      setVisible(true);
    }
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  const toggleModal = () => setIsModalOpen((prev) => !prev);

  return (
    <header className={!visible ? "header-hidden" : ""}>
      <div className="container" id="header">
        <h2>
          <span>a</span>ddax
        </h2>
        <nav className="navBar">
          {navlinks.map((link, index) => (
            <a key={index} href={link.href}>
              {link.title}
            </a>
          ))}
        </nav>
        <button className="menu-btn" onClick={toggleModal}>
          Menu
        </button>
      </div>
      {/* Modal menyu */}
      {isModalOpen && (
        <div className="menu-modal">
          <div className="modal-content">
            <button className="close-btn" onClick={toggleModal}>
              X
            </button>
            <nav className="modal-nav">
              {navlinks.map((link, index) => (
                <a key={index} href={link.href} onClick={toggleModal}>
                  {link.title}
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
