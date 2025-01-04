import React, { useState, useEffect } from "react";
import "./Allgrievance.css";
import { CgProfile } from "react-icons/cg";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { Link } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../constants";

const isEven = (number) => number % 2 === 0;
const isOdd = (number) => number % 2 === 1;

function AllGrievance() {
  const [votes, setVotes] = useState([{ up: 0, down: 0 }]);

  const [userVotes, setUserVotes] = useState([null, null]);
  const token = document.cookie.split("=")[1].split(";")[0];

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
      .catch((error) => {
        console.error(error);
        alert(error.message);
      });
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
          <Link to="/portal/feed" className="AllGrivance-button">
            {" "}
            FEED{" "}
          </Link>
        </div>
        <div className="GrievanceForm-button-container">
          <Link to="/portal/addGrievance" className="GrievanceForm-button">
            POST NEW
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
                Subject : {vote.head}
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
                  <div>Up Vote ({vote.upvoteCount})</div>
                </div>
              </button>
              <button
                className="brutalist-card__button brutalist-card__button--read"
                onClick={() => handleVote(vote._id, index, "downvote")}
              >
                <div className="VoteIcon">
                  <div><AiOutlineDislike style={{ marginRight: "5px" }} /></div>
                  <div>Down Vote ({vote.downvoteCount})</div>
                </div>

              </button>
              <button
                className="brutalist-card__button brutalist-card__button--read"
                onClick={() => handleVote(vote._id, index, "downvote")}
              >
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
