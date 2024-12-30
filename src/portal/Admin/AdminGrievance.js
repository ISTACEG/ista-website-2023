import React, { useEffect, useState } from "react";
import "./AdminGrievance.css";
import { CgProfile } from "react-icons/cg";
import axios from "axios";

function AdminGrievance() {
  const [cards, setCards] = useState([
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
  ]);

  const [isApproved, setIsApproved] = useState([false, false]);
  const [showIdentityClicked, setShowIdentityClicked] = useState([false, false]);
  const [rejectionReasons, setRejectionReasons] = useState(["", ""]);
  const [isRejecting, setIsRejecting] = useState([false, false]);

  const token = document.cookie.split("=")[1].split(";")[0];
  
  useEffect(() => {
    // Fetch data from the backend
    axios.get('http://localhost:4000/admin/all_pending', {
      headers: {
        token: `${token}`
      }
    })
    .then(response => {
      console.log(response.data.posts);
      setCards(response.data.posts);
    })
    .catch(error => {
      console.error(error);
      alert(error.message);
    });
  }, []);

  const handleApproveClick = async (_id, index) => {
    const response = await axios.post("http://localhost:4000/admin/approve/"+_id,{}, {
      headers:{
        token
      }
    })

    alert(response.data.message);
    // referesh the page here
  };

  const handleShowIdentityClick = (index) => {
    const updatedState = [...showIdentityClicked];
    updatedState[index] = true;
    setShowIdentityClicked(updatedState);
  };

  const handleRejectClick = async (_id, index) => {
    if (rejectionReasons[index].trim() === "") {
      alert("Please provide a reason for rejection");
    } else {
      const response = await axios.post("http://localhost:4000/admin/reject/"+_id,{message:rejectionReasons[index]}, {
        headers:{
          token
        }
      })
  
      alert(response.data.message);
    }
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
              <div className="brutalist-card__alert">{card.postedBy}</div>
            </div>
            <div>
              <div className="brutalist-card__subject">{card.head}</div>
              <div className="brutalist-card__message">{card.content}</div>
            </div>
            <div className="brutalist-card__actions">
              <button
                className="brutalist-card__button brutalist-card__button--mark"
                onClick={() => handleApproveClick(card._id, index)} // Pass the index for each card
              >
                {isApproved[index] ? "Approved" : "Approve"}
              </button>
              <button
                className="brutalist-card__button brutalist-card__button--read"
                onClick={() => {
                  const updatedRejecting = [...isRejecting];
                  updatedRejecting[index] = true;
                  setIsRejecting(updatedRejecting);
                }}
              >
                Reject
              </button>

              {isRejecting[index] && (
                <div className="rejection-input">
                  <textarea
                    placeholder="Enter reason for rejection"
                    value={rejectionReasons[index]}
                    onChange={(e) => {
                      const updatedReasons = [...rejectionReasons];
                      updatedReasons[index] = e.target.value;
                      setRejectionReasons(updatedReasons);
                    }}
                    className="Reject-textarea"
                  />
                  <button
                    className="brutalist-card__button brutalist-card__button--reject"
                    onClick={() => handleRejectClick(card._id, index)}
                    disabled={rejectionReasons[index].trim() === ""}
                  >
                    Confirm Reject
                  </button>
                </div>
              )}

              <button
                className={`brutalist-card__button brutalist-card__button--mark ${
                  showIdentityClicked[index] ? "show-identity-clicked" : ""
                }`}
                onClick={() => handleShowIdentityClick(index)} 
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
