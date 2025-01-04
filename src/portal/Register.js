import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./portal.scss";
import axios from "axios";
import toast from "react-hot-toast";
import { BASE_URL } from "../constants";

export default function Register() {
  const [isDisabled, setIsDisabled] = useState(false);
  const [timer, setTimer] = useState(60);
  const [roll, setRoll] = useState("");
  const [domain, setDomain] = useState("");
  const handleClick = () => {
    if (!domain) {
      toast.error("Please select an email domain.");
      return;
    }

    toast.loading("sending OTP to your mail...");
    axios
      .post(BASE_URL + "/auth/register/generateOtp", {
        roll: roll,
        mail: roll + domain,
      })
      .then((response) => {
        toast.dismiss();
        toast.success(response.data.message);
        if (response.data.verified) {
          toast("You are already verified. Please login");
          window.location.href = "/portal";
        } else {
          setIsDisabled(false);
          setTimer(60);
        }
      })
      .catch((error) => {
        toast.dismiss();
        toast.error(error.response.data.message);
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
    toast.loading("Verifying OTP...");
    axios
      .post(BASE_URL + "/auth/register/verifyOtp", { roll: roll, otp })
      .then((response) => {
        toast.dismiss();
        toast.success(response.data.message);
      })
      .catch((error) => {
        toast.dismiss();
        toast.error(error.response.data.message);
      });
  };

  const handleRegister = () => {
    const password = document.getElementById("password").value;
    toast.loading("trying to register...");
    axios
      .post(BASE_URL + "/auth/register/addDetails", {
        roll: roll,
        password,
      })
      .then((response) => {
        toast.dismiss();
        toast.success(response.data.message);
        if (response.data.success) {
          window.location.href = "/portal";
        }
      })
      .catch((error) => {
        toast.dismiss();
        console.error("Error:", error);
        toast.error(error.response.data.message);
      });
  };

  return (
    <>
      <div class="login-box">
        <h2>Create an ISTA Account</h2>

        <div class="user-box">
          <input
            type="text"
            required
            value={roll}
            onChange={(e) => setRoll(e.target.value)}
            autoComplete="chrome-off"
          />
          <label>Roll No / faculty name</label>
        </div>
        <div class="user-box">
          <div class="dropdown-container">
            <select
              class="dropdown"
              onChange={(e) => setDomain(e.target.value)}
              value={domain}
            >
              <option value="">Select Email Domain</option>
              <option value="@student.annauniv.edu">
                @student.annauniv.edu
              </option>
              <option value="@auist.net">@auist.net</option>
            </select>
          </div>
          <input
            type="text"
            value={roll + domain}
            readOnly
            style={{ cursor: "not-allowed" }}
          />
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
            id="otp"
            required
            autoComplete="new-password"
          />
          <label>Enter OTP</label>
        </div>
        <Link className="login-button-inbtw" onClick={handleVerify}>
          VERIFY OTP
        </Link>
        <div class="user-box">
          <input type="password" id="password" required />
          <label>Password</label>
        </div>

        <Link onClick={handleRegister} className="login-button">
          REGISTER
        </Link>

        <div className="below-login">
          <Link to="/portal" className="below-login-link">
            Already have an Account?
          </Link>
        </div>
      </div>
    </>
  );
}
