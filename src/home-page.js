import React from 'react';
import './home-page.scss';
import magazineImage from "./February-2022-Edition.png";
import magImage2 from "./December-Edition-2021.png";

import IPPImage from "./5.jpg";
import ItrixImage from "./6.jpg";

import Team from "./team"

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">ISTA</div>
      <ul className="navbar-links">
        <li><a href="#" aria-label="Home" aria-current="page">Home</a></li>
        <li><a href="#" aria-label="About">About</a></li>
        <li><a href="#" aria-label="Events">Events</a></li>
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
        <div className="stack" style={{ "--stacks": 3 }}>
          <span style={{ "--index": 0 }}>ISTA</span>
          <span style={{ "--index": 1 }}>ISTA</span>
          <span style={{ "--index": 2 }}>ISTA</span>
        </div>
        <span className="right">Information Science and Technology Association</span>
      </div>
      
      <h1 className='title-head'>What We Do</h1>
      
      <div className='magazine-box'>
        <h2>Magazines</h2>
        <p>ISTA publishes a bi-annual magazine, 'The Technocrat,' which is a compilation of articles, poems, stories, and much more. It serves as a platform for students to showcase their talents and creativity.</p>
        <div className="magazine-images">
          <img src={magazineImage} alt='Cover of the February 2022 Edition of ISTA Magazine' loading="lazy" />
          <img src={magImage2} alt='Cover of the December 2021 Edition of ISTA Magazine' loading="lazy" />
        </div>
      </div>

      <div className='events-box'>
        <h2>Events</h2>
        <div className="event-item">
          <img src={IPPImage} alt='IPP Event Image' loading="lazy" />
          <div className="event-description">
            <h3>I++</h3>
            <p>The IPP is an annual event where students present their innovative projects in front of a panel of judges. It aims to encourage creativity and provide a platform for students to showcase their technical and problem-solving skills.</p>
          </div>
        </div>

        <div className="event-item">
          <img src={ItrixImage} alt='Itrix Event Image' loading="lazy" />
          <div className="event-description">
            <h3>Itrix</h3>
            <p>Itrix is a national-level technical symposium organized by ISTA. It features coding competitions, hackathons, and workshops, aimed at fostering technical excellence among participants from across the country.</p>
          </div>
        </div>
      </div>
      {/* <Team /> */}
    </div>
  );
};

export default App;
