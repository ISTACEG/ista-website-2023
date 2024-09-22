import React from "react";
import "../Experiences/Experiences.scss";
import { Link } from "react-router-dom";

function ExperienceBox({key, data}) {

    return (
        <div className="ExperienceBoxContainer">
            <div className="ExperienceBoxBorder">
                <div className="ExperienceBoxDetails">
                    <div className="ExperienceBoxheading">
                        <h1>{data[2]}</h1>
                    </div>
                    <div className="EBCompany">
                        <h3>{data[5]}</h3>
                    </div>
                    <div className="EBJoiningYear">
                        <h3>{2023}</h3>
                    </div>
                </div>
                <div className="ExperienceArticleContainer">
                    <div>
                        <Link to={data[6]} style={{color : "white"}}>Read Experience</Link>
                    </div>
                    <div className="ExperienceType">
                        <div className="ExperienceTypeContainer">
                            <p>{"Placements"}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ExperienceBox;
