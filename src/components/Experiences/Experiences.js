import React, { useState, useEffect } from "react";
import styles from "../Experiences/Experiences.scss";
import Navbar from "../navbar";
import SideNavBar from "../SideNavBar/SideNavBar";
import { ReactComponent as SearchSymbol } from "../../img/search.svg";
import ExperienceBox from "./ExperienceBox";
import axios from "axios";
import companies from './../SideNavBar/companies';

function Experiences() {
    const [data, setData] = useState([]);
    const [companies, setCompanies] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const rowsPerPage = 10;

    function getDownloadLink(url) {

        const fileIdMatch = url.match(/id=([^&]+)/);
        console.log(fileIdMatch)
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
                console.log(response.data.values); // this is array of array
                // array[i] = [time, mail, name, phone, mail, company, view_link, ]
                // append the download link to the array by using the getDownloadLink function
                const updatedData = response.data.values.map(row => {
                    const viewLink = row[6]; // assuming the view link is at index 6
                    const downloadLink = getDownloadLink(viewLink);
                    return [...row, downloadLink];
                });
                setData(updatedData);
                const uniqueCompanies = [...new Set(updatedData.map(row => row[5]))];
                setCompanies(uniqueCompanies);                

                console.log(updatedData)
            })
            .catch((error) => {
                console.error("Error fetching data from Google Sheets", error);
            });
    }, []);

    const indexOfLastRow = currentPage * rowsPerPage;
    const indexOfFirstRow = indexOfLastRow - rowsPerPage;
    const currentRows = data.slice(indexOfFirstRow, indexOfLastRow);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className="container">
            <Navbar />
            <div className="ExperienceBody">
                <div className="inputBoxContainer">
                    <div className="form__group field">
                        <input type="input" className="form__field" placeholder="Enter Company Name" required="" />
                        <label htmlFor="name" className="form__label">Enter Company Name</label>
                    </div>
                    <div>
                        <button style={{ border: "1px solid white", padding: "10px" }}>Search</button>
                    </div>
                </div>
                <div className="ExperienceDetails">
                    <div>
                        <SideNavBar names={companies} />
                    </div>
                    <div className="EBContainer">
                        <div className="EBFilters">
                            <div><button style={{ border: "1px solid white", padding: "10px" }}>All</button></div>
                            <div><button style={{ border: "1px solid white", padding: "10px" }}>Placements</button></div>
                            <div><button style={{ border: "1px solid white", padding: "10px" }}>Internship</button></div>
                        </div>
                        <div>
                            {currentRows.map((row, index) => (
                                <ExperienceBox key={index} data={row} />
                            ))}
                        </div>
                        <div className="pagination">
                            {Array.from({ length: Math.ceil(data.length / rowsPerPage) }, (_, i) => (
                                <button key={i} onClick={() => paginate(i + 1)}>
                                    {i + 1}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Experiences;