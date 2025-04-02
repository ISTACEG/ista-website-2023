import React, { useEffect } from 'react';


const folderId = "1O5SUiPpfhtMFZiHyBbFC05yBbHLZN-yV"

const GoogleDriveFolder = () => {

    return (
        <div className='material-section'>
            <div className='boxes' id="resource-box">
                <div className="google-drive-folder">
                    <h3 style={{ color: "white" }}>Intern/Placement Resources</h3>
                    <iframe src={`https://googledriveembedder.collegefam.com/?key=AIzaSyAvuXPOZeOq6MRL-zBqc_15WWoMPsesA9s&folderid=${folderId}`}></iframe>
                </div>
            </div>
        </div>
    );
};

export default GoogleDriveFolder;