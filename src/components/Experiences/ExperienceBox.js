import React from "react";
import "../Experiences/Experiences.scss";
import { Link } from "react-router-dom";

function ExperienceBox() {
    return (
        <div className="ExperienceBoxContainer">
            <div className="ExperienceBoxBorder">
                <div className="ExperienceBoxDetails">
                    <div className="ExperienceBoxheading">
                        <h1>Yuvaraj V</h1>
                    </div>
                    <div className="EBCompany">
                        <h3>Athena Health</h3>
                    </div>
                    <div className="EBJoiningYear">
                        <h3>2024</h3>
                    </div>
                </div>
                <div className="ExperienceArticleContainer">
                    <div>
                        <Link style={{color : "white"}}>Read Experience</Link>
                    </div>
                    <div className="ExperienceType">
                        <div className="ExperienceTypeContainer">
                            <p>Placement</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ExperienceBox;
