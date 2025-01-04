import React, { useState, useEffect } from "react";
import "./Allgrievance.css";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../constants";
import { useCookies } from "react-cookie";
import toast from "react-hot-toast";
import { BiUpvote } from "react-icons/bi";
import { BiDownvote } from "react-icons/bi";
import { BiSolidUpvote } from "react-icons/bi";
import { BiSolidDownvote } from "react-icons/bi";
import { FaAlignJustify } from "react-icons/fa";

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
  const [cookies, setCookie, removeCookie] = useCookies(["token"]);
  const [votes, setVotes] = useState([{ up: 0, down: 0 }]);
  const [userVotes, setUserVotes] = useState([null, null]);
  const [loading, setLoading] = useState(true); // For loading state
  const [error, setError] = useState(null); // For error handling
  const token = cookies.token;

  const handleVote = (postId, index, type) => {
    const url = `${BASE_URL}/post/toggle_${type}/${postId}`;
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
        console.log(error);
        toast.error(error.response.data.message);
      });
  };

  useEffect(() => {
    // Fetch data from the backend
    setLoading(true); // Set loading to true at the start
    setError(null); // Reset any previous errors
    axios
      .get(BASE_URL + "/post/all_approved", {
        headers: {
          token: `${token}`,
        },
      })
      .then((response) => {
        if (response.data.posts && response.data.posts.length > 0) {
          setVotes(response.data.posts);
        } else {
          setVotes([]); // Set empty array if no posts are found
        }
        setLoading(false); // Set loading to false after the request is complete
      })
      .catch((error) => {
        setLoading(false); // Set loading to false in case of error
        setError(error.message); // Store the error message
        toast.error(error.message);
      });
  }, [token]);

  if (loading) {
    return (
      <h2 style={{ color: "white", textAlign: "center" }}>
        Fetching latest from server....
      </h2>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <p>Error: {error}</p>
      </div>
    );
  }

  if (votes.length === 0) {
    return (
      <div className="empty-data-container">
        <p>No grievances found.</p>{" "}
        {/* Display message when no data is available */}
      </div>
    );
  }

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
        <div className="GrievanceForm-button-container">
          <Link to="/portal/profile" className="GrievanceForm-button">
            PROFILE
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
              <div className="brutalist-card__message">
                <TruncateText text={vote.content} wordLimit={46} />
              </div>
            </div>
            <div className="brutalist-card__actions">
              <button
                className={`upvote-${vote.upvoted} brutalist-card__button brutalist-card__button--mark`}
                onClick={() => handleVote(vote._id, index, "upvote")}
                style={{
                  display: "inline-flex", // Align items inline (horizontally)
                  alignItems: "center", // Vertically center the items
                }}
              >
                <BiUpvote
                  style={{
                    margin: "5px", // Space between icon and text
                  }}
                />
                {vote.upvoteCount} Up Votes
              </button>

              <button
                className={`downvote-${vote.downvoted} brutalist-card__button brutalist-card__button--read`}
                onClick={() => handleVote(vote._id, index, "downvote")}
                style={{
                  display: "inline-flex", // Align items inline (horizontally)
                  alignItems: "center", // Vertically center the items
                }}
              >
                <BiDownvote
                  style={{
                    margin: "5px", // Space between icon and text
                  }}
                />
                {vote.downvoteCount} Down Votes
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllGrievance;
