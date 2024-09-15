import React, { useEffect, useState } from "react";
import "./tech-trek2.scss";
import Navbar from "../components/navbar";
import axios from "axios";

function Techtrek2() {
  const [data, setData] = useState([]);
  

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

  const header = ["Name", "Week1", "Total"];

  return (
    <div className="tech-trek2">
      <Navbar />
      <h1 className="title1">Tech Trek 2.0 Leaderboard</h1>
      <table className="table">
        <thead>
          <tr>
            {data.length > 0 &&
              header.map((header, index) => <th key={index}>{header}</th>)}
          </tr>
        </thead>
        <tbody>
          {data.slice(3).map((row, rowIndex) => (
            <tr key={rowIndex}>
              <td>{row[0]}</td>
              <td>{row[7]}</td>
              <td>{row[7]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Techtrek2;
