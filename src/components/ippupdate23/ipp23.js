import { Link, useNavigate } from "react-router-dom";
import React from "react";
import "./ipp23.scss";

const Ipp23 = () => {
  const navigate = useNavigate();
  return (
    <button className="whole" onClick={() => navigate("/ipp23")}>
      <div>i++23</div>
      <div className="hap">Happening now!</div>
    </button>
  );
};

export default Ipp23;
