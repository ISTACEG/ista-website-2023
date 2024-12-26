import React from 'react'
import {Link} from 'react-router-dom';
import './portal.scss'

export default function register() {
  return (
    <>
      <div class="login-box">
              <h2>Register</h2>
              
                  <div class="user-box">
                  <input type="text" name="" required="" />
                  <label>Roll No</label>
                  </div>
                  
                <div class="user-box">
                  <input type="password" name="" required="" />
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
                  
              
              </div>
    </>
  )
}
