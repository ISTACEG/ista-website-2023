import React, { useState, useEffect } from "react";
import "./home-page.scss";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title, CategoryScale } from "chart.js";
import Select from "react-select";
import axios from "axios";
import "./statistics.css";

ChartJS.register(ArcElement, Tooltip, Legend, Title, CategoryScale);



const DataSummaryTable = ({ title, data, total }) => {
    const [visibleRows, setVisibleRows] = useState(10); // State to manage the number of visible rows

    // Function to handle showing more rows
    const showMore = () => {
        setVisibleRows((prevVisibleRows) => prevVisibleRows + 10); // Increase visible rows by 10
    };

    return (
        <div>
            <h3>{title}</h3>
            <table className="statistics-table">
                <thead>
                    <tr>
                        <th style={{ textAlign: "left" }}>Company Name</th>
                        <th>No. of Students</th>
                    </tr>
                </thead>
                <tbody>
                    {data
                        .sort((a, b) => b.noOfStudents - a.noOfStudents)
                        .slice(0, visibleRows) // Display only the number of visible rows
                        .map((item, index) => (
                            <tr key={index}>
                                <td style={{ textAlign: "left" }}>{item.companyName}</td>
                                <td>{item.noOfStudents}</td>
                            </tr>
                        ))}
                    <tr style={{ fontWeight: "bolder" }}>
                        <td style={{ textAlign: "left" }}>Total</td>
                        <td>{total}</td>
                    </tr>
                </tbody>
            </table>

            {data.length > visibleRows && ( // Show the "Show More" button if there are more rows
                <button onClick={showMore} style={{ marginTop: '10px' }}>
                    Show More
                </button>
            )}
        </div>
    );
};

function Statistics() {
    const [pselectedYear, setPSelectedYear] = useState(2025);
    const [iselectedYear, setISelectedYear] = useState(2025);
    const [placementsData, setPlacementsData] = useState([]);
    const [lastUpdatedDate, setLastUpdatedDate] = useState("");
    const [internData, setInternData] = useState([]);
    const [loading, setLoading] = useState(true); // Add loading state

    const filteredPlacementData = placementsData.filter((item) => item.batch === pselectedYear);
    const filteredInternshipData = internData.filter((item) => item.batch === iselectedYear);

    const prepareChartData = dataset => {
        const sortedData = dataset.sort((a, b) => b.noOfStudents - a.noOfStudents);
        const top10 = sortedData.slice(0, 15);
        const others = sortedData.slice(15);

        const othersTotal = others.reduce((total, item) => total + item.noOfStudents, 0);

        const labels = [...top10.map(item => item.companyName), "Other Companies"];
        const data = [...top10.map(item => item.noOfStudents), othersTotal];

        return {
            labels,
            datasets: [
                {
                    data,
                    backgroundColor: [
                        "#ff6384", "#36a2eb", "#cc65fe", "#ffce56", "#ff8e72",
                        "#c0c0c0", "#4bc0c0", "#9966ff", "#ff9f40", "#ffcc33",
                        "#cccccc", "#f54291", "#42f554", "#4277f5", "#f5a742",
                        "#f54242", "#42f5e6", "#a742f5", "#e1f542", "#2a9df4",
                        "#d9534f", "#5bc0de", "#5cb85c", "#428bca", "#800080",
                        "#ffa500", "#00ff7f", "#4682b4", "#dc143c", "#ffd700"
                    ],
                    borderColor: "#fff",
                    borderWidth: 1,
                },
            ],
        };
    };

    const pieChartPlacementData = prepareChartData(filteredPlacementData);
    const pieChartInternshipData = prepareChartData(filteredInternshipData);

    const pyearOptions = [
        { value: 2025, label: "2025" },
    ];

    const iyearOptions = [
        { value: 2025, label: "2025" },
    ];

    const handlePYearChange = (selectedOption) => {
        setPSelectedYear(selectedOption.value);
    };

    const handleIYearChange = (selectedOption) => {
        setISelectedYear(selectedOption.value);
    };

    const calculateTotal = (dataset) => dataset.reduce((total, item) => total + item.noOfStudents, 0);

    const totalPlacements = calculateTotal(filteredPlacementData);
    const totalInternships = calculateTotal(filteredInternshipData);

    useEffect(() => {
        const API_KEY = "AIzaSyCct8pMa7alWAdLXikM6gxG5ObKT2hABtE";
        const spreadsheetId = "1depyEdtOIvBmR71OZGQkgsx6kngqaViW6UiUIARIPgw";
        const range1 = "Sheet1!A4:C";
        const range2 = "Sheet1!E4:G";
        const rangeSingleCell = "Sheet1!K1";

        setLoading(true); // Set loading to true when the request starts

        axios
            .get(`https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range1}?key=${API_KEY}`)
            .then((response) => {
                const formatted = response.data.values.map((row) => ({
                    companyName: row[0],
                    noOfStudents: parseInt(row[1]),
                    batch: parseInt(row[2]),
                }));
                setPlacementsData(formatted);
            })
            .catch((error) => {
                console.error("Error fetching data from Google Sheets", error);
            });

        axios
            .get(`https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${rangeSingleCell}?key=${API_KEY}`)
            .then((response) => {
                setLastUpdatedDate(response.data.values[0][0]);
            })
            .catch((error) => {
                console.error("Error fetching data from Google Sheets", error);
            });

        axios
            .get(`https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range2}?key=${API_KEY}`)
            .then((response) => {
                const formatted = response.data.values.map((row) => ({
                    companyName: row[0],
                    noOfStudents: parseInt(row[1]),
                    batch: parseInt(row[2]),
                }));
                setInternData(formatted);
            })
            .catch((error) => {
                console.error("Error fetching data from Google Sheets", error);
            })
            .finally(() => {
                setLoading(false); // Set loading to false once all data is fetched
            });
    }, []);

 
    return (
        <section id="events" className="events-box special-1">
            <h2>Placement Statistics</h2>
            {loading ? <p className="loading">Loading...</p> :
            <div className="event-item-1">
                <div className="charts-row" style={{ textAlign: "left", alignItems: "self-start" }}>
                    <div className="chart-container-1">
                        <div className="dropdown-container-1">
                            <Select
                                options={pyearOptions}
                                onChange={handleIYearChange}
                                defaultValue={pyearOptions.find((option) => option.value === pselectedYear)}
                                className="year-dropdown-1"
                            />
                        </div>
                        <Pie
                            data={pieChartPlacementData}
                            options={{
                                responsive: true,
                                plugins: {
                                    title: {
                                        display: true,
                                        text: `Placements Statistics for ${pselectedYear}`,
                                        font: {
                                            size: 15,
                                        },
                                    },
                                    legend: {
                                        position: 'bottom',
                                        labels: {
                                            boxWidth: 10,
                                            font: {
                                                size: 12,
                                            },
                                            padding: 10,
                                        },
                                    },
                                    tooltip: {
                                        enabled: true,
                                    },
                                },
                                animation: {
                                    animateScale: true,
                                    animateRotate: true,
                                },
                            }}
                            height={300}
                            width={300}
                        />
                        <p>Total Placements: {totalPlacements}</p>
                        <br />
                        <DataSummaryTable title={"Placements Summary"} data={filteredPlacementData} total={totalPlacements} />
                    </div>

                    <div className="chart-container-1">
                        <div className="dropdown-container-1">
                            <Select
                                options={iyearOptions}
                                onChange={handleIYearChange}
                                defaultValue={iyearOptions.find((option) => option.value === iselectedYear)}
                                className="year-dropdown-1"
                            />
                        </div>
                        <Pie
                            data={pieChartInternshipData}
                            options={{
                                responsive: true,
                                plugins: {
                                    title: {
                                        display: true,
                                        text: `Internships Statistics for ${iselectedYear}`,
                                        font: {
                                            size: 15,
                                        },
                                    },
                                    legend: {
                                        position: 'bottom',
                                        labels: {
                                            boxWidth: 10,
                                            font: {
                                                size: 12,
                                            },
                                            padding: 10,
                                        },
                                    },
                                    tooltip: {
                                        enabled: true,
                                    },
                                },
                                animation: {
                                    animateScale: true,
                                    animateRotate: true,
                                },
                            }}
                            width={300}
                            height={300}
                        />
                        <p>Total Internships: {totalInternships}</p>
                        <DataSummaryTable title={"Internship Summary"} data={filteredInternshipData} total={totalInternships} />
                    </div>
                </div>

                <p>Note: This data only includes students from the IT Department from CEG Campus, Anna University.</p>
                <p>Last updated: {lastUpdatedDate}</p>
            </div>}
        </section>
    );
}


export default Statistics;
