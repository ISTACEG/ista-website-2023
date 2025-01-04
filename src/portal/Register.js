import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './portal.scss'
import axios from 'axios';

export default function Register() {
  const [isDisabled, setIsDisabled] = useState(false);
  const [timer, setTimer] = useState(60);
  const [roll, setRoll] = useState("");

<<<<<<< Updated upstream
  const handleClick = () => {
    axios.post('http://localhost:4000/auth/register/generateOtp', { roll })
      .then(response => {
        alert(response.data.message);
        if (response.data.verified) {
          // he is already verified guy
          window.location.href = '/portal';
        } else {
          setIsDisabled(false);
          setTimer(60);
        }
      })
      .catch(error => {
        console.error('Error:', error);
        alert('An error occurred. Please try again.');
        setIsDisabled(false);
        setTimer(60);
      });
    setIsDisabled(true);
    let countdown = 60;
=======
    const handleClick = () => {
        alert('OTP is being sent to the student email.Student please check you email spam if you have received any email');
        setIsDisabled(true); 
        let countdown = 60;
>>>>>>> Stashed changes

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
    const otp = document.getElementById('otp').value;
    axios.post('http://localhost:4000/auth/register/verifyOtp', { roll, otp })
      .then(response => {
        alert(response.data.message);
      })
      .catch(error => {
        console.error('Error:', error);
        alert('An error occurred. Please try again.');
      })
  }

  const handleRegister = () => { 
    const password = document.getElementById('password').value;
    axios.post('http://localhost:4000/auth/register/addDetails', { roll, password })
      .then(response => {
        alert(response.data.message);
        if (response.data.success) {
          window.location.href = '/portal';
        }
      })
      .catch(error => {
        console.error('Error:', error);
        alert('An error occurred. Please try again.');
      })
  }

  return (
    <>
      <div class="login-box">
        <h2>Create a ISTA Account</h2>

        <div class="user-box">
          <input type="text" name="" required="" value={roll} onChange={(e) => setRoll(e.target.value)} autoComplete='chrome-off' />
          <label>Roll No</label>
        </div>
        <div class="user-box">
          <input type="text" name="" required="" value={roll + "@student.annauniv.edu"} />
          <label>Mail</label>
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
          <input type="password" name="" id='otp' required="" autoComplete='new-password' />
          <label>Enter OTP</label>
        </div>
        <Link className="login-button-inbtw" onClick={handleVerify}>
          VERIFY OTP
        </Link>
        <div class="user-box">
          <input type="password" id="password" name="" required="" />
          <label>Password</label>
        </div>


        <Link onClick={handleRegister} className="login-button">
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
