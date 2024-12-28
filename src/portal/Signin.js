import React from 'react'
import './portal.scss'
import { Link } from "react-router-dom";
import axios from 'axios';
export default function Signin() {
  const handleLogin = () => {
    // validate fields and send roll and password to POST http://localhost:4000/auth/login/userLogin using await and async axios
    const roll = document.querySelector('input[type="text"]').value;
    const password = document.querySelector('input[type="password"]').value;

    if (!roll || !password) {
      alert("Please fill in all fields");
      return;
    }

    const loginData = {
      roll,
      password
    };

    axios.post('http://localhost:4000/auth/login/userLogin', loginData)
      .then(response => {
        console.log(response.data);
        alert(response.data.message);
        alert(response.data.token);
        document.cookie = `token=${response.data.token}`;
        if (response.data.success) {
        window.location.href = '/portal/feed';
        }
      })
      .catch(error => {
        console.error(error);
        alert("Login failed. Please check your credentials and try again.");
      });
  }
  return (
    <div class="parent-box">
      <div class="login-box">
        <h2>Login to your ISTA Account</h2>
        <div class="user-box">
          <input type="text" name="" required="" autoComplete='chrome-off' />
          <label>Roll No</label>
        </div>
        <div class="user-box">
          <input type="password" name="" required="" autoComplete='new-password' />
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
  )
}
