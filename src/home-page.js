import React from 'react';
import './home-page.scss';
import magazineImage from "./February-2022-Edition.png";
import magImage2 from "./December-Edition-2021.png";
import { TypeAnimation } from 'react-type-animation';
import IPPImage from "./5.jpg";
import ItrixImage from "./6.jpg";
import { Slide, Zoom } from "react-awesome-reveal";
import Team from "./team"
import Experiences from './Experiences/Experiences';
import { useState } from 'react';

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

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        {/* <p className="right text-desc">Information Science and Technology Association</p> */}
        <div className="stack" style={{ "--stacks": 3 }}>
          <span style={{ "--index": 0 }}>ISTA</span>
          <span style={{ "--index": 1 }}>ISTA</span>
          <span style={{ "--index": 2 }}>ISTA</span>
        </div>
        {/* <p className='text-desc'>
          Empowering innovation through technology and knowledge
        </p> */}
        <TypeAnimation
          sequence={[
            // Same substring at the start will only be typed out once, initially
            'Information Science and Technology Assosiation',
            1000, // wait 1s before replacing "Mice" with "Hamsters"
            'Empowering innovation through technology and knowledge ',
            200,
            'At ISTA, we help students prepare for interviews.',
            300,
            "At ISTA, we work together to grow together.",
            1000,
            "At ISTA, we host events like I++ and ITRIX."
          ]}
          className='text-desc'
          wrapper="span"
          speed={50}
          style={{ fontSize: '2em', display: 'inline-block', textAlign: "center" }}
          repeat={Infinity}
        />
      </div>

      <h1 className='title-head'>What We Do</h1>
      <Zoom triggerOnce>
        <div className='magazine-box'>
          <h2>Magazines</h2>
          <p className="text-desc" >ISTA publishes a bi-annual magazine, 'The Technocrat,' which is a compilation of articles, poems, stories, and much more. It serves as a platform for students to showcase their talents and creativity.</p>
          <div className="magazine-images">
            <img src={magazineImage} alt='Cover of the February 2022 Edition of ISTA Magazine' loading="lazy" />
            <img src={magImage2} alt='Cover of the December 2021 Edition of ISTA Magazine' loading="lazy" />
          </div>
        </div>
      </Zoom>

      <Zoom triggerOnce>
        <section id='events' className='events-box'>
          <h2>Events</h2>
          <div className="event-item">
            <img src={IPPImage} alt='IPP Event Image' loading="lazy" />
            <div className="event-description">
              <h3>I++</h3>
              <p className="text-desc" >The IPP is an annual event where students present their innovative projects in front of a panel of judges. It aims to encourage creativity and provide a platform for students to showcase their technical and problem-solving skills.</p>
            </div>
          </div>

          <div className="event-item">
            <img src={ItrixImage} alt='Itrix Event Image' loading="lazy" />
            <div className="event-description">
              <h3>Itrix</h3>
              <p className="text-desc" >Itrix is a national-level technical symposium organized by ISTA. It features coding competitions, hackathons, and workshops, aimed at fostering technical excellence among participants from across the country.</p>
            </div>
          </div>
        </section>
      </Zoom>
      <div id='teams'>
        <Team />
      </div>
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section about">
            <h2>About ISTA</h2>
            <p className="text-desc">The Information Science and Technology Association (ISTA) is dedicated to fostering innovation and knowledge in the field of information science and technology. We organize events, publish magazines, and provide resources to help students excel.</p>
          </div>
          <div className="footer-section links">
            <h2>Quick Links</h2>
            <ul>
              <li><a href="/" aria-label="Home">Home</a></li>
              <li><a href="/exp_view" aria-label="Placement Experiences">Placement Experiences</a></li>
              <li><a href="/resource" aria-label="Resources">Resources</a></li>
              <li><a href="#events" aria-label="Events">Events</a></li>
              <li><a href="#team" aria-label="Our Team">Our Team</a></li>
              <li><a href="#" aria-label="Contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-section contact">
            <h2>Contact Us</h2>
            <p className="text-desc">Email: info@ista.com</p>
            <p className="text-desc">Phone: +123 456 7890</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="text-desc">Designed & Developed by ISTA Web Team.</p>
          <br></br>
          <p className="text-desc">&copy; 2023 ISTA. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};
export { Navbar };
export default App;
