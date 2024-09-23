import React, { useState, useEffect } from "react";
import styles from "../Experiences/Experiences.scss";
import Navbar from "../navbar";
import ExperienceBox from "./ExperienceBox";
import axios from "axios";

function Experiences() {
    const [data, setData] = useState([]);
    const [companies, setCompanies] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState("");
    const rowsPerPage = 12;

    function getDownloadLink(url) {
        const fileIdMatch = url.match(/id=([^&]+)/);
        if (fileIdMatch && fileIdMatch[1]) {
            const fileId = fileIdMatch[1];
            return `https://drive.google.com/uc?export=download&id=${fileId}`;
        } else {
            throw new Error('Invalid Google Drive URL');
        }
    }

    useEffect(() => {
        const API_KEY = "AIzaSyAsunr59TCE3Qwb7p6YpRhtRNo4E-uZsJg";
        const spreadsheetId = "1BeY7DuBl7uBqTZGgvsAUXyTvDh-g6IXIRoA-tMkP7gg";
        const range = "Sheet1!A2:H47";

        axios
            .get(
                `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}?key=${API_KEY}`
            )
            .then((response) => {
                const updatedData = response.data.values.map(row => {
                    const viewLink = row[6];
                    row[5] = row[5].toUpperCase().trim();
                    const downloadLink = getDownloadLink(viewLink);
                    return [...row, downloadLink];
                });
                setData(updatedData);
                console.log(updatedData)
                const uniqueCompanies = [...new Set(updatedData.map(row => row[5]))];
                setCompanies(uniqueCompanies);
            })
            .catch((error) => {
                console.error("Error fetching data from Google Sheets", error);
            });
    }, []);

    const indexOfLastRow = currentPage * rowsPerPage;
    const indexOfFirstRow = indexOfLastRow - rowsPerPage;

    const filteredData = data.filter(row => 
        row[2].toLowerCase().includes(searchQuery.toLowerCase()) || // candidate name
        row[5].toLowerCase().includes(searchQuery.toLowerCase()) // company name
    );

    const currentRows = filteredData.slice(indexOfFirstRow, indexOfLastRow);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);


    return (
        <div className="container">
            <Navbar />
            <div className="ExperienceBody">
                <div className="inputBoxContainer">
                    <div className="form__group field">
                        <input 
                            type="input" 
                            className="form__field" 
                            placeholder="Enter Company Name" 
                            required="" 
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <label htmlFor="name" className="form__label">Search by company name / candidate name </label>
                    </div>
                </div>
                <div className="filterBar" style={{ overflowX: 'scroll', background:"transparent", whiteSpace: 'nowrap', scrollbarColor: 'darkblue lightgray', scrollbarWidth: 'thin'}}>
                    <style>
                        {`
                            .filterBar::-webkit-scrollbar {
                                height: 8px;
                            }
                            .filterBar::-webkit-scrollbar-track {
                                background: lightgray;
                            }
                            .filterBar::-webkit-scrollbar-thumb {
                                background-color: darkblue;
                                border-radius: 10px;
                            }
                        `}
                    </style>
                    {companies.sort().map((company, index) => (
                        <button 
                            key={index} 
                            onClick={() => setSearchQuery(company)}
                            style={{ 
                                padding: '10px', 
                                backgroundColor: searchQuery === company && '#0A2640', 
                                color: searchQuery === company ? "white" : 'black',
                                display: 'inline-block',
                                margin:"10px",
                                borderRadius: "10px"
                            }}
                        >
                            {company}
                        </button>
                    ))}
                </div>
                <div className="ExperienceDetails">
                    <div className="EBContainer">
                        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                            {currentRows.map((row, index) => (
                                <div key={index} style={{ flex: '1 0 21%', margin: '10px' }}>
                                    <ExperienceBox data={row} />
                                </div>
                            ))}
                        </div>
                        { Math.ceil(filteredData.length / rowsPerPage) != 1 && <div className="pagination">
                            {Array.from({ length: Math.ceil(filteredData.length / rowsPerPage) }, (_, i) => (
                                <button 
                                    key={i} 
                                    onClick={() => paginate(i + 1)}
                                    style={{ 
                                        backgroundColor: currentPage === i + 1 ? 'blue' : 'white', 
                                        color: currentPage === i + 1 ? 'white' : 'black' 
                                    }}
                                >
                                    {i + 1}
                                </button>
                            ))}
                        </div>}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Experiences;