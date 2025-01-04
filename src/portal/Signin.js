import React from "react";
import "./portal.scss";
import { Link } from "react-router-dom";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { BASE_URL } from "../constants";
import { useCookies } from "react-cookie";

export default function Signin() {
  const [cookies, setCookie, removeCookie] = useCookies(["token"]);

  const handleLogin = () => {
    const roll = document.querySelector('input[type="text"]').value;
    const password = document.querySelector('input[type="password"]').value;

    if (!roll || !password) {
      toast.error("Please fill in all fields");
      return;
    }

    const loginData = {
      roll,
      password,
    };

    console.log(BASE_URL);
    toast.loading("logging you in...");
    console.log(BASE_URL + "/auth/login/userLogin");
    axios
      .post(BASE_URL + "/auth/login/userLogin", loginData)
      .then((response) => {
        toast.dismiss();
        toast.success(response.data.message);
        setCookie("token", response.data.token);
        if (response.data.success) {
          window.location.href = "/portal/feed";
        }
      })
      .catch((error) => {
        toast.dismiss();
        console.error(error);
        toast.error(error.response.data.message);
      });
  };
  return (
    <div class="parent-box">
      <div class="login-box">
        <h2>Login to your ISTA Account</h2>
        <div class="user-box">
          <input type="text" name="" required="" autoComplete="chrome-off" />
          <label>Roll No</label>
        </div>
        <div class="user-box">
          <input
            type="password"
            name=""
            required=""
            autoComplete="new-password"
          />
          <label>Password</label>
        </div>
        <div className="below-login">
          <Link to="/portal/forgot-password" className="below-login-link">
            Forgot password?
          </Link>
          <Link to="/portal/register" className="below-login-link">
            Don't have an ISTA Account ?
          </Link>
        </div>
        <Link onClick={handleLogin} className="login-button">
          LOGIN
        </Link>
      </div>
    </div>
  );
}
