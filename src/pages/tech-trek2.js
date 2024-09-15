import React, { useEffect } from "react";
import "./tech-trek2.scss";
import Navbar from "../components/navbar";

function Techtrek2() {
    useEffect(() => {
        window.scrollTo(0, 0);
        console.log("techtrek2");
      }, []);
    
  return(
    <div className="tech-trek2">
    <Navbar/>
    <p className="text1">Table here</p>
  </div>
)
}

export default Techtrek2;
