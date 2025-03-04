import React, { useState, useEffect } from "react";
import './header.scss';
import { navlinks } from "../../data/navlinks";

const Header = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;

    // Əgər aşağıya scroll edilirsə, header-i gizlət, əks halda göstər
    if (currentScrollPos > prevScrollPos) {
      setVisible(false);
    } else {
      setVisible(true);
    }

    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

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
      </div>
    </header>
  );
};

export default Header;
