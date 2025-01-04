import React, { useState, useEffect } from "react";
import "./Allgrievance.css";
import { CgProfile } from "react-icons/cg";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { Link } from "react-router-dom";
<<<<<<< Updated upstream
import axios from "axios";
import { BASE_URL } from "../../constants";
=======
import { FaAlignJustify } from "react-icons/fa";
>>>>>>> Stashed changes

const isEven = (number) => number % 2 === 0;
const isOdd = (number) => number % 2 === 1;

const TruncateText = ({ text, wordLimit }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const words = text.split(" ");
  const isLongText = words.length > wordLimit;

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      {isExpanded || !isLongText
        ? text
        : words.slice(0, wordLimit).join(" ") + "..."}
      {isLongText && (
        <button
          className="read-more-button"
          onClick={handleToggle}
          style={{
            marginLeft: "8px",
            cursor: "pointer",
            background: "none",
            border: "none",
            color: "#007bff",
          }}
        >
          {isExpanded ? "Read Less" : "Read More"}
        </button>
      )}
    </div>
  );
};

function AllGrievance() {
<<<<<<< Updated upstream
  const [votes, setVotes] = useState([{ up: 0, down: 0 }]);
=======
  const [votes, setVotes] = useState([
    { up: 0, down: 0 },
    { up: 0, down: 0 },
  ]);
>>>>>>> Stashed changes

  const [userVotes, setUserVotes] = useState([null, null]);
  const token = document.cookie.split("=")[1].split(";")[0];

<<<<<<< Updated upstream
  const handleVote = (postId, index, type) => {
    const url = `{BASE_URL}/post/toggle_${type}/${postId}`;
    axios
      .post(
        url,
        {},
        {
          headers: {
            token: `${token}`,
          },
=======
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
>>>>>>> Stashed changes
        }
      )
      .then((response) => {
        const newVotes = [...votes];
        newVotes[index].upvoteCount = response.data.upvoteCount;
        newVotes[index].downvoteCount = response.data.downvoteCount;
        newVotes[index].upvoted = response.data.upvoted;
        newVotes[index].downvoted = response.data.downvoted;
        setVotes(newVotes);
      })
<<<<<<< Updated upstream
      .catch((error) => {
        console.error(error);
        alert(error.message);
      });
=======
    );

    setUserVotes((prevUserVotes) =>
      prevUserVotes.map((vote, i) => (i === index ? type : vote))
    );
>>>>>>> Stashed changes
  };

  useEffect(() => {
    // Fetch data from the backend
    axios
      .get(BASE_URL + "/post/all_approved", {
        headers: {
          token: `${token}`,
        },
      })
      .then((response) => {
        console.log(response.data.posts);
        setVotes(response.data.posts);
      })
      .catch((error) => {
        console.error(error);
        alert(error.message);
      });
  }, []);

  return (
    <div className="grievance-display-container">
      <div className="grievance-portal-nav">
        <div className="AllGrivance-button-container">
<<<<<<< Updated upstream
          <Link to="/portal/feed" className="AllGrivance-button">
            {" "}
            FEED{" "}
          </Link>
        </div>
        <div className="GrievanceForm-button-container">
          <Link to="/portal/addGrievance" className="GrievanceForm-button">
            POST NEW
=======
          <Link to="/portal/Allgrievance/Allgrievance" className="AllGrivance-button">
            All Grievance
          </Link>
        </div>
        <div className="GrievanceForm-button-container">
          <Link to="/portal/GrievanceForm/GrievanceForm" className="GrievanceForm-button">
            Grievance Form
>>>>>>> Stashed changes
          </Link>
        </div>
      </div>
      <div className="grievance-display">
        {votes.map((vote, index) => (
          <div className="brutalist-card" key={index}>
            <div className="brutalist-card__header">
              <div className="brutalist-card__icon">
                <CgProfile style={{ color: "white" }} />
              </div>
              {vote.postedBy ? (
                <div className="brutalist-card__alert">{vote.postedBy}</div>
              ) : (
                <div className="brutalist-card__alert">Anonymous</div>
              )}
            </div>
            <div>
              <div className="brutalist-card__subject">
<<<<<<< Updated upstream
                Subject : {vote.head}
=======
                Subject : What is Handball?
              </div>
              <div className="brutalist-card__message">
                <TruncateText
                  text="At the Handball Arena, we strive to create an exceptional experience for all users. Whether you're a player, coach, or fan, we are dedicated to providing a platform where you can stay updated with all the latest match information, results, and live streams.At the Handball Arena, we strive to create an exceptional experience for all users. Whether you're a player, coach, or fan, we are dedicated to providing a platform where you can stay updated with all the latest match information, results, and live streams."
                  wordLimit={46}
                />
>>>>>>> Stashed changes
              </div>
              <div className="brutalist-card__message">{vote.content}</div>
            </div>
            <div className="brutalist-card__actions">
              <button
                className="brutalist-card__button brutalist-card__button--mark"
                onClick={() => handleVote(vote._id, index, "upvote")}
              >
                <div className="VoteIcon">
                  <div><AiOutlineLike style={{ marginRight: "5px" }} /></div>
<<<<<<< Updated upstream
                  <div>Up Vote ({vote.upvoteCount})</div>
=======
                  <div>Up Vote ({vote.up})</div>
>>>>>>> Stashed changes
                </div>
              </button>
              <button
                className="brutalist-card__button brutalist-card__button--read"
                onClick={() => handleVote(vote._id, index, "downvote")}
              >
                <div className="VoteIcon">
                  <div><AiOutlineDislike style={{ marginRight: "5px" }} /></div>
<<<<<<< Updated upstream
                  <div>Down Vote ({vote.downvoteCount})</div>
                </div>

              </button>
              <button
                className="brutalist-card__button brutalist-card__button--read"
                onClick={() => handleVote(vote._id, index, "downvote")}
              >
=======
                  <div>Down Vote ({vote.down})</div>
                </div>
              </button>
              <button className="brutalist-card__button brutalist-card__button--read">
>>>>>>> Stashed changes
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllGrievance;
