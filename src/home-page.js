import React from 'react';
import './home-page.scss';
import magazineImage from "./February-2022-Edition.png";
import magImage2 from "./December-Edition-2021.png";
import { TypeAnimation } from 'react-type-animation';
import { useNavigate } from 'react-router-dom';
import IPPImage from "./5.jpg";
import ItrixImage from "./6.jpg";
import { Slide, Zoom } from "react-awesome-reveal";
import Team from "./team"
import Experiences from './Experiences/Experiences';
import { useState } from 'react';

const App = () => {
  const navigate = useNavigate();
  return (
    <div>h
      <div className="container">
        <div className="stack" style={{ "--stacks": 3 }}>
          <span style={{ "--index": 0 }}>ISTA</span>
          <span style={{ "--index": 1 }}>ISTA</span>
          <span style={{ "--index": 2 }}>ISTA</span>
        </div>

        <TypeAnimation
          sequence={[
            'Information Science and Technology Assosiation',
            1000,
            'Empowering innovation through technology and knowledge ',
            1000,
            "At ISTA, we work together to grow together.",
          ]}
          className='text-desc running-desc'
          wrapper="span"
          speed={50}
          style={{ display: 'inline-block', textAlign: "center", height:"" }}
          repeat={Infinity}
        />

        <p className='announcement'> <div style={{textAlign:"left"}}><strike style={{letterSpacing:"2px", fontSize:"0.825rem"}}>WINTER </strike><p><strong>I++ </strong>is coming.. Check it out <a href='http://ipp.istaceg.in' target='_blank'>here</a></p></div></p>
      </div>

      <h1 className='title-head'>What We Do</h1>
      <Zoom triggerOnce>
        <div className='magazine-box'>
          <h2>Magazines</h2>
          <p className="text-desc" >
          Cache is the magazine created by the Information Science & Technology Association to engage with the IST Department in a creative and collaborative manner. This was initiated with the mindset of providing prodigious opportunities to all the students in the college who have an open interest for Information Technology. From interviews with respected faculty and articles on various achievements of student students, to creative enigmatic puzzles, games, memes and contests, Cache has it all. 
          </p>
          <div className="magazine-images">
            <img src={magazineImage} alt='Cover of the February 2022 Edition of ISTA Magazine' loading="lazy" />
            <img src={magImage2} alt='Cover of the December 2021 Edition of ISTA Magazine' loading="lazy" />
          </div>
        </div>
      </Zoom>

      <Zoom triggerOnce>
        <section id='events' className='events-box'>
          <h2>Fests</h2>
          <div className="event-item">
            <img src={IPPImage} alt='IPP Event Image' loading="lazy" />
            <div className="event-description">
              <h3>I++</h3>
              <p className="text-desc" >
              I++, the flagship intra college symposium which is organized by the industrious Information Science and Technology Association which the entire Anna University looks forward too. I++ is the perfect blend of brain-wracking workshops, technical events and non-technical events.
              <br /><a href="">Visit site..</a>
              </p>
            </div>
          </div>

          <div className="event-item">
            <img src={ItrixImage} alt='Itrix Event Image' loading="lazy" />
            <div className="event-description">
              <h3>Itrix</h3>
              <p className="text-desc" >
              ITRIX every year in the month of March, ITRIX is ISTA’s premium inter-college symposium at the Department of Information Science and Technology, College of Engineering, Guindy. With a footfall of nearly 4000 odd participants every year, we play our part in striving hard to bring all minds, from every nook and corner of the country under one roof to compete and success at a variety of technical and non-technical events.
              </p>
            </div>
          </div>
        </section>
      </Zoom>
      <Zoom triggerOnce>
        <div className="infos-box">
          <h2>Others</h2>
          <div className='infos-box-2' id="ch-2">
          <div className="infos-box-child">
            <p className="text-desc" >Access collection of study materials which includes books, ppts, docs, and question papers.</p>
            <button className="button text-desc" onClick={() => navigate("./resource")}>View Materials</button>
          </div>
          <div className="infos-box-child">
            <p className="text-desc" >View the major historic events which include achievements and memories.</p>
            <button className="button text-desc" onClick={() => navigate("./history")}>View Timeline</button>
          </div>
          </div>
        </div>
      </Zoom>
      <section id='team'>
        <Team />
      </section>
      <footer className="footer" id='contact'>
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
              <li><a href="#contact" aria-label="Contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-section contact">
            <h2>Contact Us</h2>
            <p className="text-desc">Email: ista@auist.com</p>
            {/* <p className="text-desc">Phone: +123 456 7890</p> */}
          </div>
        </div>
        <div className="footer-bottom">
          <p className="text-desc">Design & Developed by <a>ISTA Web Team.</a></p>
        </div>
      </footer>
    </div>
  );
};
export default App;
