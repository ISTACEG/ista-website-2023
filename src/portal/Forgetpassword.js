import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./portal.scss";
import axios from "axios";
import toast from "react-hot-toast";

export default function Register() {
  const [isDisabled, setIsDisabled] = useState(false);
  const [timer, setTimer] = useState(60);
  const [roll, setRoll] = useState("");

  const handleClick = () => {
    const toastId = toast.loading("Sending OTP...");
    axios
      .post(BASE_URL + "/auth/forgot/generateOtp", { roll })
      .then((response) => {
        toast.dismiss(toastId);
        toast.success(response.data.message);
        if (response.data.verified) {
          window.location.href = "/portal";
        } else {
          setIsDisabled(false);
          setTimer(60);
        }
      })
      .catch((error) => {
        toast.dismiss(toastId);
        console.error("Error:", error);
        toast.error("An error occurred. Please try again.");
        setIsDisabled(false);
        setTimer(60);
      });
    setIsDisabled(true);
    let countdown = 60;

    const interval = setInterval(() => {
      countdown -= 1;
      setTimer(countdown);

      if (countdown <= 0) {
        clearInterval(interval);
        setIsDisabled(false);
        setTimer(60);
      }
    }, 1000);
  };

  const handleVerify = () => {
    const otp = document.getElementById("otp").value;
    const toastId = toast.loading("Verifying OTP...");
    axios
      .post(BASE_URL + "/auth/forgot/verifyOtp", { roll, otp })
      .then((response) => {
        toast.dismiss(toastId);
        toast.success(response.data.message);
      })
      .catch((error) => {
        toast.dismiss(toastId);
        console.error("Error:", error);
        toast.error("An error occurred. Please try again.");
      });
  };

  const handleRegister = () => {
    const password = document.getElementById("password").value;
    const toastId = toast.loading("Changing Password...");
    axios
      .post(BASE_URL + "/auth/forgot/changePassword", { roll, password })
      .then((response) => {
        toast.dismiss(toastId);
        toast.success(response.data.message);
        window.location.href = "/portal";
      })
      .catch((error) => {
        toast.dismiss(toastId);
        console.error("Error:", error);
        toast.error("An error occurred. Please try again.");
      });
  };

  return (
    <>
      <div class="login-box">
        <h2>Change Password - ISTA Account</h2>

        <div class="user-box">
          <input
            type="text"
            name=""
            required=""
            value={roll}
            onChange={(e) => setRoll(e.target.value)}
            autoComplete="chrome-off"
          />
          <label>Roll No</label>
        </div>
        <div class="user-box">
          <input
            type="text"
            name=""
            required=""
            value={roll + "@student.annauniv.edu"}
          />
          <label>Mail</label>
        </div>

        <Link
          className={`login-button-inbtw ${isDisabled ? "disabled" : ""}`}
          onClick={!isDisabled ? handleClick : null}
          style={{
            pointerEvents: isDisabled ? "none" : "auto",
            opacity: isDisabled ? 0.5 : 1,
          }}
        >
          {isDisabled ? `Wait ${timer}s` : "GET OTP"}
        </Link>
        <div class="user-box">
          <input
            type="password"
            name=""
            id="otp"
            required=""
            autoComplete="new-password"
          />
          <label>Enter OTP</label>
        </div>
        <Link className="login-button-inbtw" onClick={handleVerify}>
          VERIFY OTP
        </Link>
        <div class="user-box">
          <input type="password" id="password" name="" required="" />
          <label> Create a new Password</label>
        </div>

        <Link onClick={handleRegister} className="login-button">
          Change Password
        </Link>

        <div className="below-login">
          <Link to="/portal" className="below-login-link">
            Remember Password ?
          </Link>
        </div>
      </div>
    </>
  );
}
