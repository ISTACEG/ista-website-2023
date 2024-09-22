import React from "react";
import "../SideNavBar/SideNavBar.scss";

function SideNavBar({names}) {
    return (
        <div className="SideNavBarContainer">
            <h2>Companies</h2>
            <ul>
                {names.map((company, index) => (
                    <li key={index}>{company}</li>
                ))}
            </ul>
        </div>
    );
}

export default SideNavBar;
