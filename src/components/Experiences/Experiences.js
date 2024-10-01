import React, { useState, useEffect } from "react";
import styles from "../Experiences/Experiences.scss";
import Navbar from "../navbar";
import ExperienceBox from "./ExperienceBox";
import { Riple } from "react-loading-indicators";
import axios from "axios";

function Experiences() {
    const [data, setData] = useState([]);
    const [companies, setCompanies] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const [selectedYear, setSelectedYear] = useState("-1");
    const [type, setType] = useState("All");
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
        const spreadsheetId = "1wnqb43W0wI0zjZRDaG3rG5vpymJYFQinbPPVqUEacOQ";   
        const range = "Form Responses 1!A2:J";

        setIsLoading(true);
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
                setIsLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching data from Google Sheets", error);
                setIsLoading(false);
            });
    }, []);

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const indexOfLastRow = currentPage * rowsPerPage;
    const indexOfFirstRow = indexOfLastRow - rowsPerPage;

    const filteredData = data.filter(row => 
        (   
            row[2].toLowerCase().includes(searchQuery.toLowerCase()) || // candidate name
            row[5].toLowerCase().includes(searchQuery.toLowerCase()) // company 
        )  
        && (selectedYear === "-1" || row[8] === selectedYear) 
        && (type === "All" || row[9] === type)
    );

    const currentRows = filteredData.slice(indexOfFirstRow, indexOfLastRow);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className="container">
            <Navbar />
            <div className="ExperienceBody">
                <div className="inputBoxContainer" style={{padding:"0 10%"}}>
                    <div className="form__group field" style={{flex: 3}}>
                        <select 
                            className="form__field" 
                            value={type} 
                            onChange={(e) => setType(e.target.value)}
                        >
                            <option value="All">All</option>
                            <option value="Intern">Intern</option>
                            <option value="Placement">Placement</option>
                        </select>
                        <label htmlFor="type" className="form__label">Select Type</label>
                    </div>
                    <div className="form__group field" style={{flex: 7, textAlign:"left"}}>
                        <input 
                            type="input" 
                            className="form__field" 
                            placeholder="Enter Company Name" 
                            required="" 
                            value={searchQuery}
                            onChange={handleSearchChange}
                        />
                        <label htmlFor="name" className="form__label">Search by company name / candidate name </label>
                    </div>
                    <div className="form__group field" style={{flex: 3}}>
                        <select 
                            className="form__field" 
                            value={selectedYear} 
                            onChange={(e) => setSelectedYear(e.target.value)}
                        >
                            <option value="-1">All Year</option>
                            <option value="2023">2023</option>
                            <option value="2024">2024</option>
                            <option value="2025">2025</option>
                        </select>
                        <label htmlFor="year" className="form__label">Select Year</label>
                    </div>
                </div>
                <div className="filterBar">
                    {companies.sort().map((company, index) => (
                        <button 
                            key={index} 
                            onClick={() => {
                                setCurrentPage(1);
                                setSearchQuery(company);
                            }}
                            className={`filterButton ${searchQuery.toLowerCase() === company.toLowerCase() ? 'active' : ''}`}
                        >
                            {company}
                        </button>
                    ))}
                </div>
                <div className="ExperienceDetails">
                    {isLoading ? (
                        <div className="loadingContainer">
                            <Riple color="#523ad6" size="large" text="" textColor="#ac1414" />  
                        </div>
                    ) : (
                        currentRows.length === 0 ?
                            <div style={{ color:"red", width:"100%", marginTop:"4%" }}>
                                No records found.
                                <div>Filters : {searchQuery} {selectedYear != "-1" && selectedYear} {type != "All" && type}</div>
                                <div>Try adjusting your filters.</div>
                            </div>
                        :
                        <div className="EBContainer">
                            <div className="rowWrapper">
                                {currentRows.map((row, index) => (
                                    <div key={index} className="experienceBoxWrapper">
                                        <ExperienceBox data={row} />
                                    </div>
                                ))}
                            </div>
                            { filteredData.length > rowsPerPage && (
                                <div className="pagination">
                                    {Array.from({ length: Math.ceil(filteredData.length / rowsPerPage) }, (_, i) => (
                                        <button 
                                            key={i} 
                                            onClick={() => paginate(i + 1)}
                                            className={`pageButton ${currentPage === i + 1 ? 'active' : ''}`}
                                        >
                                            {i + 1}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Experiences;
