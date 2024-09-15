import React, { useEffect, useState } from "react";
import "./tech-trek2.scss";
import Navbar from "../components/navbar";
import axios from "axios";

function Techtrek2() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;

  useEffect(() => {
    console.log("techtrek2");
    const API_KEY = process.env.REACT_APP_API_KEY;
    const spreadsheetId = process.env.REACT_APP_SHEET_ID;
    console.log(API_KEY);
    const range = "Sheet1!A1:H50";
    axios
      .get(
        `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}?key=${API_KEY}`
      )
      .then((response) => {
        console.log(response.data.values);
        setData(response.data.values);
      })
      .catch((error) => {
        console.error("Error fetching data from Google Sheets", error);
      });
  }, []);

  const dataToDisplay = data.slice(3); 
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = dataToDisplay.slice(indexOfFirstRow, indexOfLastRow);

  const totalPages = Math.ceil(dataToDisplay.length / rowsPerPage);

  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <div className="tech-trek2">
      <Navbar />
      <h1 className="title1">Tech Trek 2.0 Leaderboard</h1>
      <table className="table">
        <thead>
          <tr>
            {data.length > 0 &&
              ["Position", "Name", "Week1", "Total"].map((header, index) => (
                <th key={index}>{header}</th>
              ))}
          </tr>
        </thead>
        <tbody>
          {currentRows.map((row, rowIndex) => {
            const position = (currentPage - 1) * rowsPerPage + rowIndex + 1;
            let rowClass = "";

            if (position === 1) {
              rowClass = "gold";
            } else if (position === 2) {
              rowClass = "silver";
            } else if (position === 3) {
              rowClass = "bronze";
            }

            return (
              <tr key={rowIndex} className={rowClass}>
                <td>{position}</td>
                <td>{row[0]}</td>
                <td>{row[7]}</td>
                <td>{row[7]}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="pagination-controls">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="prev"
        >
          Previous
        </button>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="next"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Techtrek2;
