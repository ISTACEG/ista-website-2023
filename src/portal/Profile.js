// Profile.js
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoIosLogOut } from "react-icons/io";
import { Tooltip } from "react-tooltip";
import './portal.scss';
import QRCode from "react-qr-code";


export default function Profile() {
    const [grievances, setGrievances] = useState([]);
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);
    const token = document.cookie.split("=")[1].split(";")[0];
    useEffect(() => {
        fetch("http://localhost:4000/profile", {
            headers: {
                token
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    setUser(data.user);
                    setGrievances(data.grievances);
                    console.log(data.grievances);
                    setLoading(false);
                }
            });
    }
        , []);
    return (
        <div className="profile-container">
            <div className="profile-sidebar">
                <div className="profile-header">
                    {/* User details section */}
                    <h3 className="profile-topic">Your ISTA Account</h3>

                    <div style={{ height: "auto", margin: "0 auto", maxWidth: 104, width: "100%" }}>
                        <QRCode
                            size={256}
                            style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                            value={"ippothiku onnu illa"}
                            viewBox={`0 0 256 256`}
                        />
                    </div>

                    <div className="profile-details">
                        <h1 className="profile-welcome"></h1>
                        <p className="profile-info">{user.roll} | {user.year}-th batch</p>
                        <p className="profile-email">{user.roll}@student.annauniv.edu</p>
                    </div>

                </div>

                {/* Grievances section */}
                <div className="grievances-section">
                    <h3 className="grievances-title">Your Grievances</h3>
                    <ul className="grievances-list">
                    {grievances.map(e => <li className="grievance-item">
                            <div className="grievance-head">{e.head}</div>
                            <div className="grievance-content">{e.content}</div>
                            <div className="grievance-status pending">{e.status}</div>
                            {e.status == "rejected" && <div className="rejected-reason">{e.rejectionMessage}</div>}
                        </li>)}
                    </ul>
                </div>
            </div>
        </div>
    );
}
