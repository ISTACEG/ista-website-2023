import React, { useEffect } from 'react';

const folderId = "1eXHIXlAtWrE8I0v_AU_w-FvMmt-DcIrz"

const GoogleDriveFolder = () => {


    return (
        <div className="google-drive-folder" style={{backgroundColor:"white", position: "fixed", top: 0, left: 0, width: "100%", height: "100%"}} >
            <h1>Study Materials</h1>
            {/* <iframe src={`https://drive.google.com/embeddedfolderview?id=${folderId}#grid`} style={{width:"100%", height:"100%"}}>
            </iframe> */}

            <iframe src={`https://googledriveembedder.collegefam.com/?key=AIzaSyAvuXPOZeOq6MRL-zBqc_15WWoMPsesA9s&folderid=${folderId}`} width="100%" style={{height:"60vh"}}></iframe>

        </div>
    );
};

export default GoogleDriveFolder;