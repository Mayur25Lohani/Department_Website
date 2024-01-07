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
        <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''} >
          About
        </a>
        <a href="#professors" onClick={() => setActiveNav('#professors')} className={activeNav === '#about' ? 'active' : ''}>
          Professors
        </a>
        <a href="#resources" onClick={() => setActiveNav('#resources')} className={activeNav === '#experience' ? 'active' : ''}>
          Resources
        </a>
        <a href="#sme" onClick={() => setActiveNav('#sme')} className={activeNav === '#services' ? 'active' : ''}>
          SME
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
