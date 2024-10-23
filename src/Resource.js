import React, { useEffect } from 'react';

import { Navbar } from './home-page'

const folderId = "1eXHIXlAtWrE8I0v_AU_w-FvMmt-DcIrz"

const GoogleDriveFolder = () => {


    return (
        <div className='material-section'>
            <div className='boxes' id="resource-box">
                <div className="google-drive-folder">
                    <h3 style={{ color: "white" }}>Materials</h3>
                    <iframe src={`https://googledriveembedder.collegefam.com/?key=AIzaSyAvuXPOZeOq6MRL-zBqc_15WWoMPsesA9s&folderid=${folderId}`}></iframe>
                </div>
                <div className="google-drive-folder">
                    <h3 style={{ color: "white" }}>Question Papers</h3>
                    <iframe src={`https://googledriveembedder.collegefam.com/?key=AIzaSyAvuXPOZeOq6MRL-zBqc_15WWoMPsesA9s&folderid=13z3SH4XIhV5K6F6Sv8n-rJ-ebaz89tBB`}></iframe>
                </div>
            </div>
        </div>
    );
};

export default GoogleDriveFolder;