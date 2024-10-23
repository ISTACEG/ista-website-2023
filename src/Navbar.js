import React, { useState } from "react";
import "./home-page.scss"

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    }
  
    return (
      <nav className="navbar">
        <div className="navbar-logo">ISTA</div>
        <div className="hamburger" onClick={toggleMenu}>
          <div className={isOpen ? "bar open" : "bar"}></div>
          <div className={isOpen ? "bar open" : "bar"}></div>
          <div className={isOpen ? "bar open" : "bar"}></div>
        </div>
        <ul className={isOpen ? "navbar-links open" : "navbar-links close-test"}>
          <li><a href="/" aria-label="Home" aria-current="page">Home</a></li>
          <li><a href="/exp_view" aria-label="Placement Experiences">Placement Experiences</a></li>
          <li><a href="/history" aria-label="Placement Experiences">Timeline</a></li>
          <li><a href="/resource" aria-label="Resources">Resources</a></li>
          <li><a href="/#events" aria-label="Events">Fests</a></li>
          <li><a href="/#team" aria-label="Our Team">Our Team</a></li>
          <li><a href="/techtrek" aria-label="Tech Trek">Tech Trek</a></li>
          <li><a href="/#contact" aria-label="Contact">Contact</a></li>
        </ul>
      </nav>
    );
  };

  export default Navbar