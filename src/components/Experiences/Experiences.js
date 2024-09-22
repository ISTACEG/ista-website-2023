import React from "react";
import styles from "../Experiences/Experiences.scss";
import Navbar from "../navbar";
import SideNavBar from "../SideNavBar/SideNavBar";
import { ReactComponent as SearchSymbol } from "../../img/search.svg";
import ExperienceBox from "./ExperienceBox";



function Experiences() {
    return (
        <div className="container">
            <Navbar />
            <div className="ExperienceBody">
                <div className="inputBoxContainer">
                    <div className="form__group field">
                        <input type="input" className="form__field" placeholder="Enter Company Name" required="" />
                        <label for="name" className="form__label">Enter Company Name</label>
                    </div>
                    <div>
                        <button style={{border : "1px solid white", padding : "10px"}}>Search</button>
                    </div>
                </div>
                <div className="ExperienceDetails">
                    <div>
                        <SideNavBar />
                    </div>
                    <div className="EBContainer">
                        <div className="EBFilters">
                            <div><button style={{border : "1px solid white", padding : "10px"}}>All</button></div>
                            <div><button style={{border : "1px solid white", padding : "10px"}}>Placements</button></div>
                            <div><button style={{border : "1px solid white", padding : "10px"}}>Internship</button></div>
                        </div>
                        <div>
                            <ExperienceBox />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Experiences;