import React, { useState } from 'react';
import './nav.css';
import Logo from '../../assests/iitkgplogo.png';
import { GiHamburgerMenu } from 'react-icons/gi';

const Nav = () => {
  const [showLinks, setShowLinks] = useState(false);
  const [activeNav, setActiveNav] = useState('#');

  return (
    <nav>
      <div className="logo">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="name">
        <h2> Metallurgical and Materials Engineering Department </h2>
      </div>
      <div className={showLinks ? "links active" : "links"}>
        <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}>
          Home
        </a>
        <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}>
          About
        </a>
        <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}>
          Professors
        </a>
        <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}>
          Opportunities
        </a>
        <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}>
          Contact
        </a>
      </div>
      <div className="hamburger-menu">
        <a href="#" onClick={() => setShowLinks(!showLinks)}>
          <GiHamburgerMenu />
        </a>
      </div>
    </nav>
  );
};

export default Nav;
