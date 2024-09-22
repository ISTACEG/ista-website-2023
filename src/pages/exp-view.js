import React, { useEffect, useState } from "react";
import "./tech-trek2.scss";
import Navbar from "../components/navbar";
import axios from "axios";

function Techtrek2() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;

  useEffect(() => {
    const API_KEY = "AIzaSyAsunr59TCE3Qwb7p6YpRhtRNo4E-uZsJg";
    const spreadsheetId = "1BeY7DuBl7uBqTZGgvsAUXyTvDh-g6IXIRoA-tMkP7gg";
    const range = "Sheet1!A2:H47";
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
 

  return (
    <div className="tech-trek2">
      <h1>Working</h1>
    </div>
  );
}

export default Techtrek2;
