import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './portal.scss'

export default function register() {
  const [roll, setRoll] = useState("");

  return (
    <>
      <div class="login-box">
        <h2>Register</h2>

        <div class="user-box">
          <input type="text" name="" required="" value={roll} onChange={(e) => setRoll(e.target.value)} autoComplete='chrome-off' />
          <label>Roll No</label>
        </div>

        <div class="user-box">
          <input type="text" name="" required="" value={roll+"@student.annauniv.edu"} />
          <label>Mail</label>
        </div>
        <Link className="login-button-inbtw">
          SEND OTP
        </Link>
        <div class="user-box">
          <input type="password" name="" required="" autoComplete='new-password'/>
          <label>Enter OTP</label>
        </div>
        <Link className="login-button-inbtw">
          VERIFY OTP
        </Link>
        <div class="user-box">
          <input type="password" name="" required="" />
          <label>Password</label>
        </div>


        <Link to="/portal" className="login-button">
          REGISTER
        </Link>

        <div className="below-login">
          <Link to="/portal" className="below-login-link">
            Already have an Account ?
          </Link>
        </div>
      </div>
    </>
  )
}
