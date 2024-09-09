import { Link, useNavigate } from "react-router-dom";
import React from "react";
import "./ipp23.scss";

const Ipp23 = () => {
  const navigate = useNavigate();
  return (
    <Link className="whole" to="https://cache.istaceg.in/">
      <div>CACHE</div>
      <br></br>
      <div className="hap">Feb '24 Edition is out now!</div>
    </Link>
  );
};

export default Ipp23;
