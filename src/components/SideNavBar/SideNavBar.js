import React from "react";
import "../SideNavBar/SideNavBar.scss";

function SideNavBar({ names }) {
    return (
        <div className="SideNavBarContainer" style={{ width:"500px" }}>
            <div className="scrollableContainer">
                <ul>
                    {names.map((company, index) => (
                        <li key={index}>{company}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default SideNavBar;
