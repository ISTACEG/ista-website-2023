import "./Welcome.scss";
import Ipp23 from "../components/ippupdate23/ipp23";

function Welcome() {
  var svgbgcolor = "#0DBBFC";

  return (
    <div className="Welcome">
      <div className="welcome-wrapper">
        <h1>Welcome</h1>
        {/* <Ipp23 /> */}
        ISTA 
        {/* ISTA is the brand it should be Boom Bastic with minimal animations and intro */}
        <div className="intro">
          We at Information Science and Technology Association, are a
          staff-student run body striving to work hard for the betterment of The
          Department of Information Science and Technology, College of
          Engineering Guindy.
        </div>

        <div className="social-div">
          <div className="social-handles">
            <a href="https://www.instagram.com/ista__ceg/" target="_blank">
              <img src="../Instagram-icon.svg" alt="" />
            </a>
            <a href="mailto:ista@auist.net" target="_blank">
              <img src="../email-icon.svg" class="email-logo" alt="" />
            </a>
            <a
              href="https://www.linkedin.com/company/ista-ceg/mycompany/"
              target="_blank"
            >
              <img src="../linkedin-icon.svg" alt="" />
            </a>
          </div>
        </div>

        <button className="explore">Explore</button>
      </div>

      <div className="bg">
        <div className="bg-end" />

      </div>
    </div>
  );
}

export default Welcome;
