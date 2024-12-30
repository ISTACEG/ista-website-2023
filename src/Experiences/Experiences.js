import React, { useState, useEffect } from "react";
import "./Experiences.scss";
import ExperienceBox from "./ExperienceBox";
import { Riple } from "react-loading-indicators";
import axios from "axios";

function Experiences() {
    const [data, setData] = useState([]);
    const [passingYears, setPassingYears] = useState([]);
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
        const API_KEY = process.env.REACT_APP_ISTA_SHEET_API;
        const spreadsheetId = "1iBy_1sicMPPzgWMLjzlzTHU4C8TaHFoNITkXo-RHgZs";
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
                    const downloadLink = getDownloadLink(viewLink); // open link to downlink link
                    return [...row, downloadLink];
                });
                setData(updatedData.sort(() => Math.random - 0.5));
                const uniqueCompanies = [...new Set(updatedData.map(row => row[5]))];
                var years = [...new Set(updatedData.map(row => row[8]))];
                years.sort((a, b) => a - b);
                setPassingYears(years);
                setCompanies(uniqueCompanies);
                setIsLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching data from Google Sheets", error);
                setIsLoading(false);
            });
    }, []);

    const handleSearchChange = (e) => {
        setCurrentPage(1);
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
        && (type === "All" || row[9].toLowerCase() === type.toLowerCase())
    );

    const currentRows = filteredData.slice(indexOfFirstRow, indexOfLastRow);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div>
        <div className="exp-container">
        {isLoading ? (
                        <div className="loadingContainer">
                            <Riple color="#523ad6" size="large" text="" textColor="#ac1414" />
                        </div>
                    ) : (
            <div className="ExperienceBody">
                <div className="input-box-container">
                    <div className="form-group" style={{ flex: 3 }}>
                        <select
                            className="form-select"
                            value={type}
                            onChange={(e) => { setCurrentPage(1); setType(e.target.value) }}
                        >
                            <option value="All">Select Type ( All )</option>
                            <option value="Summer Intern">Summer Intern</option>
                            <option value="FTE">FTE</option>
                            <option value="6 Months Intern + FTE">6 Month Intern + FTE</option>
                            <option value="6 Months Intern Only">6 Month Intern Only</option>
                        </select>
                        {/* <label htmlFor="type" className="form-label">Select Type</label> */}
                    </div>
                    <div className="form-group" style={{ flex: 7 }}>
                        <input
                            type="text"
                            className="form-input"
                            placeholder="Enter Company Name / Candidate Name"
                            value={searchQuery}
                            onChange={handleSearchChange}
                        />
                    </div>
                    <div className="form-group" style={{ flex: 3 }}>
                        <select
                            className="form-select"
                            value={selectedYear}
                            onChange={(e) => { setCurrentPage(1); setSelectedYear(e.target.value) }}
                        >
                            <option value="-1">All Year</option>
                            {passingYears.map(yr => <option value={yr}>{yr}</option>)}
                            {/* <option value="2022">2022</option>
                            <option value="2023">2023</option>
                            <option value="2024">2024</option>
                            <option value="2025">2025</option> */}
                        </select>
                        {/* <label htmlFor="year" className="form-label">Select Year</label> */}
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
                            style={{fontWeight:"bold"}}
                            className={`filterButton ${searchQuery.toLowerCase() === company.toLowerCase() ? 'active' : ''}`}
                        >
                            {company}
                        </button>
                    ))}
                </div>
                <div className="ExperienceDetails">

                        {(currentRows.length === 0 ?
                            <div style={{ color: "red", width: "100%", marginTop: "4%", textAlign:"center" }}>
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
                                {filteredData.length > rowsPerPage && (
                                    <div className="pagination">
                                        <button
                                            disabled={currentPage === 1}
                                            onClick={() => paginate(currentPage - 1)}
                                            className="pageButton"
                                        >
                                            Prev
                                        </button>
                                        <div>
                                            {currentPage > 2 && (
                                                <>
                                                    <button onClick={() => paginate(1)} className="pageButton">
                                                        1
                                                    </button>
                                                    <button className="pageButton">...</button>
                                                </>
                                            )}
                                            {Array.from({ length: 3 }, (_, i) => {
                                                const page = currentPage - 1 + i;
                                                if (page > 0 && page <= Math.ceil(filteredData.length / rowsPerPage)) {
                                                    return (
                                                        <button
                                                            key={page}
                                                            onClick={() => paginate(page)}
                                                            className={`pageButton ${currentPage === page ? 'active' : ''}`}
                                                        >
                                                            {page}
                                                        </button>
                                                    );
                                                }
                                                return null;
                                            })}
                                            {currentPage < Math.ceil(filteredData.length / rowsPerPage) - 1 && (
                                                <>
                                                    <button className="pageButton">...</button>
                                                    <button
                                                        onClick={() => paginate(Math.ceil(filteredData.length / rowsPerPage))}
                                                        className="pageButton"
                                                    >
                                                        {Math.ceil(filteredData.length / rowsPerPage)}
                                                    </button>
                                                </>
                                            )}
                                        </div>
                                        <button
                                            disabled={currentPage === Math.ceil(filteredData.length / rowsPerPage)}
                                            onClick={() => paginate(currentPage + 1)}
                                            className="pageButton"
                                        >
                                            Next
                                        </button>
                                    </div>
                                )}

                            </div>
                    )}
                </div>
            </div>)}
        </div>
        </div>
    );
}

export default Experiences;
