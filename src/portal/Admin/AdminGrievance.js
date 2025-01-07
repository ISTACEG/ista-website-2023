import React, { useEffect, useState } from "react";
import "./AdminGrievance.css";
import { CgProfile } from "react-icons/cg";
import axios from "axios";
import { BASE_URL } from "../../constants";
import { timeAgo } from "../../constants";
import { useCookies } from "react-cookie";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

function AdminGrievance() {
  const [cookies, setCookie, removeCookie] = useCookies(["token"]);
  const [cards, setCards] = useState([]);
  const [isApproved, setIsApproved] = useState([]);
  const [showIdentityClicked, setShowIdentityClicked] = useState([]);
  const [rejectionReasons, setRejectionReasons] = useState([]);
  const [isRejecting, setIsRejecting] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state
  const [noData, setNoData] = useState(false); // To handle empty fetch cases

  const token = cookies.token;

  useEffect(() => {
    // Fetch data from the backend
    axios
      .get(BASE_URL + "/admin/all_pending", {
        headers: {
          token: `${token}`,
        },
      })
      .then((response) => {
        if (response.data.posts.length === 0) {
          setNoData(true); // No grievances
        } else {
          setCards(response.data.posts);
          setIsApproved(new Array(response.data.posts.length).fill(false)); // Initialize approval state
          setShowIdentityClicked(
            new Array(response.data.posts.length).fill(false)
          ); // Initialize show identity state
          setRejectionReasons(new Array(response.data.posts.length).fill("")); // Initialize rejection reasons state
          setIsRejecting(new Array(response.data.posts.length).fill(false)); // Initialize rejecting state
        }
        setLoading(false); // Data fetching is complete
      })
      .catch((error) => {
        console.error(error);
        toast.error(error.message);
        setLoading(false); // Data fetching failed, stop loading
      });
  }, [token]);

  const handleApproveClick = async (_id, index) => {
    const response = await axios.post(
      BASE_URL + "/admin/approve/" + _id,
      {},
      {
        headers: {
          token,
        },
      }
    );

    toast.success(response.data.message);
    location.reload();
  };

  const handleShowIdentityClick = (index) => {
    const updatedState = [...showIdentityClicked];
    updatedState[index] = true;
    setShowIdentityClicked(updatedState);
  };

  const handleRejectClick = async (_id, index) => {
    if (rejectionReasons[index].trim() === "") {
      toast.error("Please provide a reason for rejection");
    } else {
      const response = await axios.post(
        BASE_URL + "/admin/reject/" + _id,
        { message: rejectionReasons[index] },
        {
          headers: {
            token,
          },
        }
      );
      toast(response.data.message);
      window.location.reload();
    }
  };

  // If the data is loading, show a loading spinner or message
  if (loading) {
    return (
      <h2 style={{ color: "white", textAlign: "center" }}>
        Fetching latest from server....
      </h2>
    );
  }

  return (
    <div className="grievance-display-container">
      <div className="grievance-portal-nav">
        <div className="AllGrivance-button-container">
          <Link to="/portal/feed" className="AllGrivance-button">
            {" "}
            GO TO FEED{" "}
          </Link>
        </div>
        <div className="GrievanceForm-button-container">
          <Link to="/portal/profile" className="GrievanceForm-button">
            PROFILE
          </Link>
        </div>
      </div>
      {noData && (
        <h2 style={{ color: "white", textAlign: "center" }}>
          No grievances pending.
        </h2>
      )}
      <div className="grievance-display">
        {cards.map((card, index) => (
          <div className="brutalist-card" key={card.id}>
            <div className="brutalist-card__header">
              <div className="brutalist-card__icon">
                <CgProfile style={{ color: "white" }} />
              </div>
              <div className="brutalist-card__alert">{card.postedBy}</div>
              <div>{timeAgo(card.postedAt)} </div>
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
                  >
                    Confirm Reject
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminGrievance;
