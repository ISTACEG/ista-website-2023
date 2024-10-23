import React, { useState } from "react";


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleMenu = () => {
      console.log("toggled")
      setIsOpen(!isOpen);
    };
  
    return (
      <nav className="navbar">
        <div className="navbar-logo">ISTA</div>
        <div className="hamburger" onClick={toggleMenu}>
          <div className={isOpen ? "bar open" : "bar"}></div>
          <div className={isOpen ? "bar open" : "bar"}></div>
          <div className={isOpen ? "bar open" : "bar"}></div>
        </div>
        <ul className={isOpen ? "navbar-links open" : "navbar-links"}>
          <li><a href="/" aria-label="Home" aria-current="page">Home</a></li>
          <li><a href="/exp_view" aria-label="Placement Experiences">Placement Experiences</a></li>
          <li><a href="/resource" aria-label="Resources">Resources</a></li>
          <li><a href="#events" aria-label="Events">Events</a></li>
          <li><a href="#team" aria-label="Our Team">Our Team</a></li>
          <li><a href="/techtrek" aria-label="Tech Trek">Tech Trek</a></li>
          <li><a href="#" aria-label="Contact">Contact</a></li>
        </ul>
      </nav>
    );
  };

  export default Navbar