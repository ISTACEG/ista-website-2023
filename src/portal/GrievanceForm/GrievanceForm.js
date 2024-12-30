import React, { useState } from "react";
import "./GrievanceForm.css";
import { Link } from "react-router-dom";
import axios from "axios";

function GrievanceForm() {
  const [identity, setIdentity] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const token = document.cookie.split("=")[1].split(";")[0];

  const handleIdentityChange = (event) => {
    setIdentity(event.target.value);
  };

  const handlePost = () => {
    if (subject === "" || message === "" || identity == "") {
      alert("Please fill all the fields");
      return;
    }
    console.log(subject, message, identity, token);
    axios.post("http://localhost:4000/post/new", {
      head: subject,
      content: message,
      idRevealPreferance: identity,
    }, {
      headers: {
      "Content-Type": "application/json",
      "token": `${token}`,
      }
    })
    .then((response) => {
      if (response.data.success) {
      alert("Grievance redirected to chairperson for review, once approved it will be posted in feed");
      window.location.href = "/portal/profile";
      } else {
      alert("Error posting grievance");
      }
    })
    .catch((error) => {
      console.error("There was an error posting the grievance!", error);
      alert("Error posting grievance");
    });
  }

  return (
    <>
      {/* Navigation Section */}
      <div className="grievance-portal-nav">
        <div className="AllGrivance-button-container">
          <Link to="/portal/feed" className="AllGrivance-button"> Feed </Link>
        </div>
        <div className="GrievanceForm-button-container">
          <Link to="/portal/addGrievance" className="GrievanceForm-button">Post a Grievance</Link>
        </div>
      </div>

      {/* Grievance Form Section */}
      <div className="form-container-container">
        <div className="form-container">
          <div className="form">
            <span className="heading">Grievance Form</span>
            <span className="c1">Please forward any query or doubt in the portal</span>

            {/* Subject Input */}
            <input
              className="input"
              type="text"
              placeholder="Enter the Subject"
              onChange={(e) => setSubject(e.target.value)}
              required
            />

            {/* Message Textarea */}
            <textarea
              className="textarea"
              placeholder="Enter in detail"
              onChange={(e) => setMessage(e.target.value)}
              required
            />

            {/* Anonymous Option Section */}
            <div className="Anonymous-option-container">
              <div className="Anonymous-heading">
                Choose Whether to Hide or Show Your Identity
              </div>
              <div className="radio-button-container">
                <div className="radio-button">
                  <input
                    type="radio"
                    className="radio-button__input"
                    id="show"
                    name="identity"
                    value="show"
                    checked={identity === "show"}
                    onChange={handleIdentityChange}
                  />
                  <label className="radio-button__label" htmlFor="show">
                    <span className="radio-button__custom"></span>
                    Show Identity
                  </label>
                </div>
                <div className="radio-button">
                  <input
                    type="radio"
                    className="radio-button__input"
                    id="hide"
                    name="identity"
                    value="hide"
                    checked={identity === "hide"}
                    onChange={handleIdentityChange}
                  />
                  <label className="radio-button__label" htmlFor="hide">
                    <span className="radio-button__custom"></span>
                    Hide Identity
                  </label>
                </div>
              </div>
            </div>

            {/* Alert Box for Hide Identity */}
            {identity === "hide" && (
              <div className="alert-box">
                Your identity will be kept hidden except the chairperson, who will not reveal your identity. Collecting identity is to prevent inappropriate content.
              </div>
            )}

            <span className="c2">
              Share your concerns and help us improve our campus experience. Your feedback is important to us!
            </span>

            {/* Buttons Section */}
            <div className="button-container">
              <div className="reset-button-container">
                <button onClick={handlePost} className="reset-button" id="reset-btn">
                  Publish
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default GrievanceForm;
