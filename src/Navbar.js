import React, { useState } from "react";
import "./home-page.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo" style={{ color: "white" }}>
        ISTA
      </Link>
      <div className="hamburger" onClick={toggleMenu}>
        <div className={isOpen ? "bar open" : "bar"}></div>
        <div className={isOpen ? "bar open" : "bar"}></div>
        <div className={isOpen ? "bar open" : "bar"}></div>
      </div>
      <ul className={isOpen ? "navbar-links open" : "navbar-links close-test"}>
        <li>
          <a href="/experiences" aria-label="Placement Experiences">
            Placement Experiences
          </a>
        </li>
        <li>
          <a
            href="https://publications.istaceg.in/?tab=publications"
            target="_blank"
            aria-label="Tech Trek"
          >
            Publications
          </a>
        </li>
        <li>
          <a href="/history" aria-label="Placement Experiences">
            Timeline
          </a>
        </li>
        <li>
          <a href="/resource" aria-label="Resources">
            Resources
          </a>
        </li>
        <li>
          <a href="/#events" aria-label="Events">
            Fests
          </a>
        </li>
        <li>
          <a href="/techtrek" aria-label="Tech Trek">
            Tech Trek
          </a>
        </li>
        {/* <li>
          <a href="/portal/feed" aria-label="Grievances portal">
            Query Corner
          </a>
        </li> */}
        <li>
          <a href="/#team" aria-label="Our Team">
            Our Team
          </a>
        </li>

        {/* <li><a href="/#contact" aria-label="Contact">Contact</a></li> */}
      </ul>
    </nav>
  );
};

export default Navbar;
