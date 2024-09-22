import React from "react";
import companies from "../SideNavBar/companies";
import "../SideNavBar/SideNavBar.scss";

function SideNavBar() {
    return (
        <div className="SideNavBarContainer">
            <h2>Companies</h2>
            <ul>
                {companies.map((company, index) => (
                    <li key={index}>{company}</li>
                ))}
            </ul>
        </div>
    );
}

export default SideNavBar;
