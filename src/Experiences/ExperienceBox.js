import { Link } from "react-router-dom";
import React, { useState } from "react";
import { FaDownload, FaInfoCircle, FaEnvelope } from 'react-icons/fa';
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';

function ExperienceBox({ data }) {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [showEmail, setShowEmail] = useState(false);

    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen);
    };

    const toggleEmail = () => {
        setShowEmail(!showEmail);
    };

    return (
        <div className="expBox" style={{ 
            border: '2px solid #ccc', 
            borderRadius: '10px', 
            padding: '20px', 
            margin: '20px', 
            textAlign: 'left', 
            position: 'relative',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Add shadow
            width: '300px', // Fixed width
            overflow: 'hidden', // Hide overflow
        }}>
            <div style={{ 
                borderBottom: '1px solid #444', 
                paddingBottom: '10px', 
                marginBottom: '10px',
                overflow: 'hidden', // Hide overflow
            }}>
                <div style={{ marginBottom: '10px' }}>
                    <h3 style={{ 
                        fontSize: '1.2em', 
                        color: '#ffffff',
                        whiteSpace: 'nowrap', // Prevent text wrapping
                        overflow: 'hidden', // Hide overflow
                        textOverflow: 'ellipsis', // Show ellipsis if text overflows
                    }}>
                        {data[2]} 
                    </h3>
                </div>
                <div style={{ marginBottom: '10px' }}>
                    <span style={{ 
                        fontSize: '0.9em', 
                        color: '#dddddd',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        marginRight:"12px"
                    }}>
                        {data[5]} 
                    </span>
                    <span style={{ 
                        fontSize: '1em', 
                        color: '#dddddd',
                        whiteSpace: 'nowrap', // Prevent text wrapping
                        overflow: 'hidden',
                        opacity: '0.7',
                    }}>
                        | {data[9]}
                    </span>
                </div>
                <div>
                    <h3 style={{ 
                        fontSize: '0.8em', 
                        color: '#bbbbbb',
                    }}>
                        {data[8]}
                    </h3>
                </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                    <Link to={data[6]} target="_blank" rel="noreferrer" style={{ color: "#4da6ff", textDecoration: 'none', fontSize: '1em' }}>Read</Link>
                    <span style={{ margin: '0 10px' }}></span>
                    <Link to={data[data.length - 1]} style={{ color: "#4da6ff", textDecoration: 'none', fontSize: '1em' }}>
                        <FaDownload />
                    </Link>
                </div>
                <div>
                    <button onClick={toggleDrawer} style={{ background: 'none', border: 'none', color: "#4da6ff", cursor: 'pointer' }}>
                        <FaInfoCircle />
                    </button>
                    <button onClick={toggleEmail} style={{ background: 'none', border: 'none', color: "#4da6ff", cursor: 'pointer', marginLeft: '10px' }}>
                        <FaEnvelope />
                    </button>
                </div>
            </div>
            {showEmail && <div style={{ marginTop: '10px', color: '#ffffff' }}>Email: {data[1]}</div>}
            {drawerOpen && <div>
                <p style={{ marginTop: '10px', color: '#bbbbbb' }}>Topics covered: {data[7]}</p>
            </div>}
        </div>
    );
}

export default ExperienceBox;
