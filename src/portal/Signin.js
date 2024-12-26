import React from 'react'
import './portal.scss'
import { Link } from "react-router-dom";
export default function Signin() {
  return (
    <>
      <div class="login-box">
        <h2>Login</h2>
        <form>
            <div class="user-box">
            <input type="text" name="" required="" />
            <label>Roll No</label>
            </div>
            <div class="user-box">
            <input type="password" name="" required="" />
            <label>Password</label>
            </div>
            
        </form>
        <div className="below-login">
                <Link to="/portal/forgot-password" className="below-login-link">
                Forgot password?
                </Link>
                <Link to="/portal/register" className="below-login-link">
                Are you a new user?
                </Link>
            </div>
        <Link to="/portal/profile" className="login-button">
                LOGIN
            </Link>
            
        
        </div>
    </>
  )
}
