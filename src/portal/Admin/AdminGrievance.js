import React, { useState } from "react";
import "./AdminGrievance.css";
import { CgProfile } from "react-icons/cg";

function AdminGrievance() {
  const cards = [
    {
      id: 0,
      username: "Username1",
      subject: "What is Handball?",
      message:
        "At the Handball Arena, we strive to create an exceptional experience for all users. Whether you're a player, coach, or fan, we are dedicated to providing a platform where you can stay updated with all the latest match information, results, and live streams.",
    },
    {
      id: 1,
      username: "Username2",
      subject: "What is Handball?",
      message:
        "At the Handball Arena, we strive to create an exceptional experience for all users. Whether you're a player, coach, or fan, we are dedicated to providing a platform where you can stay updated with all the latest match information, results, and live streams.",
    },
  ];

  
  const [isApproved, setIsApproved] = useState([false, false]);

  
  const [showIdentityClicked, setShowIdentityClicked] = useState([false, false]);

  
  const handleApproveClick = (index) => {
    const updatedApproval = [...isApproved];
    updatedApproval[index] = true;
    setIsApproved(updatedApproval);
  };

  
  const handleShowIdentityClick = (index) => {
    const updatedState = [...showIdentityClicked];
    updatedState[index] = true;
    setShowIdentityClicked(updatedState);
  };

  return (
    <div className="grievance-display-container">
      <div className="grievance-display">
        {cards.map((card, index) => (
          <div className="brutalist-card" key={card.id}>
            <div className="brutalist-card__header">
              <div className="brutalist-card__icon">
                <CgProfile style={{ color: "white" }} />
              </div>
              <div className="brutalist-card__alert">{card.username}</div>
            </div>
            <div>
              <div className="brutalist-card__subject">{card.subject}</div>
              <div className="brutalist-card__message">{card.message}</div>
            </div>
            <div className="brutalist-card__actions">
              <button
                className="brutalist-card__button brutalist-card__button--mark"
                onClick={() => handleApproveClick(index)} // Pass the index for each card
              >
                {isApproved[index] ? "Approved" : "Approve"}
              </button>
              <button className="brutalist-card__button brutalist-card__button--read">
                Reject
              </button>
              <button
                className={`brutalist-card__button brutalist-card__button--mark ${
                  showIdentityClicked[index] ? "show-identity-clicked" : ""
                }`}
                onClick={() => handleShowIdentityClick(index)} // Pass the index for each card
              >
                Show Identity Of The User
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminGrievance;
