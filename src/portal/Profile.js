import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoIosLogOut } from "react-icons/io";
import { Tooltip } from "react-tooltip";
import "./portal.scss";
import QRCode from "react-qr-code";
import { useCookies } from "react-cookie";
import { BASE_URL } from "../constants";
import toast from "react-hot-toast";

export default function Profile() {
  const [cookies, setCookie, removeCookie] = useCookies(["token"]);
  const [grievances, setGrievances] = useState([]);
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true); // Loading state
  const token = cookies.token;

  useEffect(() => {
    fetch(BASE_URL + "/profile", {
      headers: {
        token,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setUser(data.user);
          setGrievances(data.grievances);
        }
        setLoading(false); // Set loading to false after fetch
      })
      .catch((error) => {
        console.error("Error fetching profile data:", error);
        toast.error(error.response.data.message);
        setLoading(false); // Set loading to false in case of error
      });
  }, [token]);

  const logout = () => {
    removeCookie("token");
    location.href = "/portal";
  };

  return (
    <div className="profile-container">
      <div className="profile-sidebar">
        <div className="profile-header">
          {/* User details section */}
          <h3 className="profile-topic">Your ISTA Account</h3>

          <div
            style={{
              height: "auto",
              margin: "0 auto",
              maxWidth: 104,
              width: "100%",
            }}
          >
            <QRCode
              size={256}
              style={{ height: "auto", maxWidth: "100%", width: "100%" }}
              value={"ISTA-ID-367547625762-" + user.roll + "-" + user.year}
              viewBox={`0 0 256 256`}
            />
          </div>

          <div className="profile-details">
            <h1 className="profile-welcome"></h1>
            <p className="profile-info">
              {user.roll} |{" "}
              {user.year != -1 ? user.year + "-th batch" : "faculty Account"}
            </p>
            <p className="profile-email">{user.student_mail}</p>
          </div>
        </div>
        {user.isAdmin && (
          <button
            className="change-password-button"
            onClick={() => (window.location.href = "/portal/Allgrievance")}
          >
            View New Grievances
          </button>
        )}
        <button
          className="change-password-button"
          onClick={() => (window.location.href = "/portal/forgot-password")}
          style={{ marginBottom: "30px" }}
        >
          Change Password
        </button>
        <button className="logout-button" onClick={logout}>
          <IoIosLogOut style={{ marginRight: "5px" }} />
          Logout
        </button>
        <div className="grievances-section">
          <h3 className="grievances-title">Your Grievances</h3>
          {loading ? ( // Show loading spinner or message
            <div className="loading-message">Loading...</div>
          ) : grievances.length === 0 ? ( // Show "No posts yet" if grievances array is empty
            <div className="no-posts-message">No posts yet.</div>
          ) : (
            <ul className="grievances-list">
              {grievances.map((e, index) => (
                <li className="grievance-item" key={index}>
                  <div className="grievance-head">{e.head}</div>
                  <div className="grievance-content">{e.content}</div>
                  <div className={"grievance-status " + e.status}>
                    {e.status}
                  </div>
                  {e.status === "rejected" && (
                    <div className="rejected-reason">
                      Reason:{" "}
                      {!e.rejectionMessage
                        ? "Not Mentioned"
                        : e.rejectionMessage}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="feedback-container">
          <a
            href="https://forms.gle/6jpdgAErigrwuuDm8"
            target="_blank"
            className="feedback-button"
            style={{ marginBottom: "30px" }}
          >
            Report a Bug or Share Feedback
          </a>
        </div>
      </div>
    </div>
  );
}
