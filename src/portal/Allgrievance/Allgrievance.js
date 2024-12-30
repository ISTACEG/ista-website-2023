import React, { useState, useEffect } from "react";
import "./Allgrievance.css";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";
import axios from 'axios'

const isEven = (number) => number % 2 === 0;
const isOdd = (number) => number % 2 === 1;

function AllGrievance() {
 
  const [votes, setVotes] = useState([
    { up: 0, down: 0 },
    { up: 0, down: 0 },
  ]);

  
  const [userVotes, setUserVotes] = useState([null, null]);
  const token = document.cookie.split("=")[1].split(";")[0];
  
  
  const handleVote = (index, type) => {
    setVotes((prevVotes) =>
      prevVotes.map((vote, i) => {
        if (i === index) {
          const updatedVote = { ...vote };

          
          if (userVotes[index] === "up") {
            updatedVote.up -= 1;
          } else if (userVotes[index] === "down") {
            updatedVote.down -= 1;
          }

          
          updatedVote[type] += 1;

          return updatedVote;
        }
        return vote;
      })
    );

    
    setUserVotes((prevUserVotes) =>
      prevUserVotes.map((vote, i) => (i === index ? type : vote))
    );
  };

  useEffect(() => {
    // Fetch data from the backend
    axios.get('http://localhost:4000/post/all_approved', {
      headers: {
        token: `${token}`
      }
    })
    .then(response => {
      console.log(response.data.posts);
      setVotes(response.data.posts);
    })
    .catch(error => {
      console.error(error);
      alert(error.message);
    });
  }, []);

  return (
    <div className="grievance-display-container">
        <div className="grievance-portal-nav">
            <div className="AllGrivance-button-container">
                <Link to = "/portal/Allgrievance/Allgrievance" className="AllGrivance-button"> All Grievance </Link>
            </div>
            <div className="GrievanceForm-button-container">
                <Link  to = "/portal/GrievanceForm/GrievanceForm" className="GrievanceForm-button">Grievance Form</Link>
            </div>
        </div>
      <div className="grievance-display">
        {votes.map((vote, index) => (
          <div className="brutalist-card" key={index}>
            <div className="brutalist-card__header">
              <div className="brutalist-card__icon">
                <CgProfile style={{ color: "white" }} />
              </div>
              {isEven(index) && <div className="brutalist-card__alert">Username</div>}
              {isOdd(index) && <div className="brutalist-card__alert">Hidden</div>}
            </div>
            <div>
              <div className="brutalist-card__subject">
                Subject : {vote.head}
              </div>
              <div className="brutalist-card__message">
                {vote.content}
              </div>
            </div>
            <div className="brutalist-card__actions">
              <button
                className="brutalist-card__button brutalist-card__button--mark"
                onClick={() => handleVote(index, "up")}
              >
                Up Vote ({vote.up})
              </button>
              <button
                className="brutalist-card__button brutalist-card__button--read"
                onClick={() => handleVote(index, "down")}
              >
                Down Vote ({vote.down})
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllGrievance;