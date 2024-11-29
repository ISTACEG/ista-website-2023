import React, { useEffect, useState } from "react";
import "./tech-trek2.scss";
import axios from "axios";
import { Riple } from "react-loading-indicators";

function Techtrek2() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const rowsPerPage = 10;

  useEffect(() => {
    setIsLoading(true);
    console.log("techtrek2");
    const API_KEY = "AIzaSyCct8pMa7alWAdLXikM6gxG5ObKT2hABtE";
    const spreadsheetId = "1-D7-Tzdh1MAmTrcgTN_fd4nxP_2X4E91pbuPNIQpj-E";
    const range = "Final!A4:G";
    axios
      .get(
        `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}?key=${API_KEY}`
      )
      .then((response) => {
        // console.log(response.data.values);
        setData(response.data.values);
        console.log("check 2")
        console.log(response.data.values);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log("check 3")
        console.error("Error fetching data from Google Sheets", error);
        setIsLoading(false);
      });
  }, []);

  const dataToDisplay = data.sort((a, b) => b[6] - a[6]);
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
    <div className="tech-trek2" style={{width:"1500px"}}>
      <h1 className="title1">Tech Trek 2.0 Leaderboard</h1>
      {isLoading ? (
        <div className="loadingContainer">
          <Riple color="#523ad6" size="large" text="" textColor="#ac1414" />
        </div>
      ) : (
        <div className="tablewrap">
          <table className="table">
            <thead>
              <tr>
                {data.length > 0 &&
                  ["Position", "Name", "Reg no", "Week1", "Week2", "Week3", "Week4", "Total"].map(
                    (header, index) => <th key={index}>{header}</th>
                  )}
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
                    <td>{row[1]}</td>
                    <td>{row[2]}</td>
                    <td>{row[3]}</td>
                    <td>{row[4]}</td>
                    <td>{row[5]}</td>
                    <td>{row[6]}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
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
