import React, { useState } from "react";
import "./GrievanceForm.css";
import { Link } from "react-router-dom";

function GrievanceForm() {
  // State to track the selected identity option
  const [identity, setIdentity] = useState("");

  // Handler for radio button change
  const handleIdentityChange = (event) => {
    setIdentity(event.target.value);
  };

  return (
    <>
      {/* Navigation Section */}
      <div className="grievance-portal-nav">
        <div className="AllGrivance-button-container">
          <Link to="/portal/Allgrievance/Allgrievance" className="AllGrievance-button" style={{color : "white"}}>
            All Grievance
          </Link>
        </div>
        <div className="GrievanceForm-button-container">
          <Link to="/portal/GrievanceForm/GrievanceForm" className="GrievanceForm-button">
            Grievance Form
          </Link>
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
              required
            />

            {/* Message Textarea */}
            <textarea
              className="textarea"
              placeholder="Enter in detail"
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
                    <button className="reset-button" id="reset-btn">
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
