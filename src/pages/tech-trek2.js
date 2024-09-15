import React, { useEffect } from "react";
import "./tech-trek2.scss";

function Techtrek2() {
    useEffect(() => {
        window.scrollTo(0, 0);
        console.log("techtrek2");
      }, []);
    
  return <p className="text1">Table here</p>;
}

export default Techtrek2;
