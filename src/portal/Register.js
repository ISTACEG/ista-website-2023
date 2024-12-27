import React from 'react'
import { useState } from 'react';
import {Link} from 'react-router-dom';
import './portal.scss'

export default function Register() {
  const [isDisabled, setIsDisabled] = useState(false);
    const [timer, setTimer] = useState(60);

    const handleClick = () => {
        alert('OTP is being sent to the student email.');
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
  return (
    <>
      <div class="login-box">
              <h2>Register</h2>
              
                  <div class="user-box">
                  <input type="text" name="" required="" />
                  <label>Roll No</label>
                  </div>

                  <Link className={`login-button-inbtw ${isDisabled ? 'disabled' : ''}`}
                      onClick={!isDisabled ? handleClick : null} 
                      style={{
                          pointerEvents: isDisabled ? 'none' : 'auto',
                          opacity: isDisabled ? 0.5 : 1, 
                      }}
                  >
                      {isDisabled ? `Wait ${timer}s` : 'GET OTP'}
                  </Link>
                  
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
