import "./team.scss";
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

var staffList = [
  {
    img: "ISTA OB/swaminathan.jpg",
    name: "DR.S.Swamynathan",
    position: "President",
  },
  {
    img: "ISTA OB/selviravindran.jpg",
    name: "DR.Selvi Ravindran",
    position: "Staff Treasurer",
  },
];

var teamList = [
  {
    img: "ISTA OB/Aravind.jpg",
    name: "Aravind S",
    position: "Chairman",
  },
  {
    img: "ISTA OB/Jovina.jpg",
    name: "Jovina Virgin",
    position: "Treasurer",
  },
  {
    img: "ISTA OB/Srishti.jpg",
    name: "Srishti Gulecha R",
    position: "Events Head",
  },
  {
    img: "ISTA OB/Charanya.jpg",
    name: "Charanya M",
    position: "Events Head",
  },
  {
    img: "ISTA OB/Saisathish.jpg",
    name: "Saisathish K",
    position: "Design Head",
  },
  {
    img: "ISTA OB/ramya.jpg",
    name: "Ramya R",
    position: "Newsletter Head",
  },
  {
    img: "ISTA OB/MuthuReshmi.jpg",
    name: "Muthu Reshmi K",
    position: "Newsletter Head",
  },
  {
    img: "ISTA OB/Muthu.jpg",
    name: "Muthu Palaniyappan OL",
    position: "Web Development Head",
  },
  {
    img: "ISTA OB/Raju.jpg",
    name: "Edumba Vannia Raja T",
    position: "Web Development Head",
  },
  {
    img: "ISTA OB/Swastika.jpeg",
    name: "Swastika K",
    position: "Marketing Head",
  },
  {
    img: "ISTA OB/Rohith.jpg",
    name: "Rohith S",
    position: "Marketing Head",
  },
  {
    img: "ISTA OB/Harinee.jpg",
    name: "Harinee M",
    position: "Industry Relations Head",
  },
  {
    img: "ISTA OB/Rishitha.jpg",
    name: "Rishitha N",
    position: "Industry Relations Head",
  },
  {
    img: "ISTA OB/Abieshri.JPG",
    name: "Abieshri S",
    position: " Internship-Coordinator",
  },
  {
    img: "ISTA OB/Mithulesh.jpg",
    name: "Mithulesh P",
    position: "Placement-Training Coordinator",
  },
  {
    img: "ISTA OB/Agilan.jpg",
    name: "Agilan B",
    position: "Courses Head",
  },
  {
    img: "ISTA OB/Srirambabu.jpg",
    name: "Srirambabu RK",
    position: "Courses Head",
  },
];

function Team(props) {
  const elemRef = useRef();

  let location = useLocation();
  var aboutSectionRef = useRef();

  useEffect(() => {
    if (location.hash == "#about") {
      aboutSectionRef.current.scrollIntoView();
    } else {
      // window.scrollTo(0,0)
    }
  }, [location]);

  const mousenterfunc = (e) => {
    elemRef.current.style.animationPlayState = "paused";
  };

  const mouseleavefunc = (e) => {
    elemRef.current.style.animationPlayState = "running";
  };

  return (
    <div className="Team" ref={aboutSectionRef}>
      <h1>Our Team</h1>

      <div className="team-wrapper">
        <div className="staff-sec">
          <div className="avatar-container">
            <img src={staffList[0].img} alt="" className="avatart-img" />
            <div className="nm-pos-div">
              <span className="name">{staffList[0].name}</span>
              <span className="position">{staffList[0].position}</span>
            </div>
          </div>

          <div className="avatar-container">
            <img src={staffList[1].img} alt="" className="avatart-img" />
            <div className="nm-pos-div">
              <span className="name">{staffList[1].name}</span>
              <span className="position">{staffList[1].position}</span>
            </div>
          </div>
        </div>

        <div
          className="itrix-sec"
          ref={elemRef}
          onMouseEnter={mousenterfunc}
          onMouseLeave={mouseleavefunc}
        >
          <div className="avatar-caraosal-slider">
            {teamList.map((itm, ind) => (
              <div className="avatar-container">
                <img src={itm.img} alt="" className="avatart-img" />
                <div className="nm-pos-div">
                  <span className="name">{itm.name}</span>
                  <span className="position">{itm.position}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="avatar-caraosal-slider">
            {teamList.map((itm, ind) => (
              <div className="avatar-container">
                <img src={itm.img} alt="" className="avatart-img" />
                <div className="nm-pos-div">
                  <span className="name">{itm.name}</span>
                  <span className="position">{itm.position}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
