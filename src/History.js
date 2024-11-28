import { Chrono } from "react-chrono";
import { useEffect, useState } from 'react'
import axios from "axios";
import { type } from "@testing-library/user-event/dist/type";
import { Link } from 'react-router-dom';
import "./history.css"
import { React } from 'react';

const items = [
  {
    title: "Octomber 2024",
    cardTitle: "I++ 24",
    media: {
      type: "IMAGE",
      source: {
        url: "https://cdn.app-sorteos.workers.dev/https://instagram.fmaa8-1.fna.fbcdn.net/v/t51.29350-15/462248397_1059976542436139_6391562260750067454_n.jpg?stp=dst-jpg_e15&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDgweDYwNy5zZHIuZjI5MzUwLmRlZmF1bHRfY292ZXJfZnJhbWUifQ&_nc_ht=instagram.fmaa8-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=TCy-M5lhHt4Q7kNvgEZS71S&_nc_gid=54be9a02ee854fb59ce0c65402b79a88&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=MzQ3Mjk3ODgxMjU4NTk4ODA0Mw%3D%3D.3-ccb7-5&oh=00_AYD-qoNSqlp9K9G-6vgsVFnqGv2MAK9LQEp3074KboUi5A&oe=671ECD99&_nc_sid=fc8dfb",
      },
    },
  },
  {
    title: "September 2024",
    cardTitle: "Teachers day",
    media: {
      type: "IMAGE",
      source: {
        url: "https://cdn.app-sorteos.workers.dev/https://instagram.fmaa8-1.fna.fbcdn.net/v/t39.30808-6/458694221_18283022833224758_3208875250810493477_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDEwODAuc2RyLmYzMDgwOC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.fmaa8-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=9JIky2w8AzQQ7kNvgFPYua8&_nc_gid=3ec08abffa6e466f8776853f1a31cc13&edm=ALQROFkAAAAA&ccb=7-5&ig_cache_key=MzQ1MjY0MDE5MTE0MDA1MDA0Ng%3D%3D.3-ccb7-5&oh=00_AYDbIaADbLi0_RI7pdGTYMyMGFVHHCnwrzKZXV90-i5EyA&oe=671EB5DD&_nc_sid=fc8dfb",
      },
    },
  },
  {
    title: "December 2023",
    cardTitle: "Winners of Smart India Hackathon",
    media: {
      type: "IMAGE",
      source: {
        url: "https://cdn.app-sorteos.workers.dev/https://instagram.fmaa11-1.fna.fbcdn.net/v/t51.29350-15/413418305_279228991796586_8405419072191249998_n.heic?stp=dst-jpg_e35&_nc_ht=instagram.fmaa11-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=S6nGuB1RvXYQ7kNvgHX82rE&_nc_gid=c6c8461bb3f44be791f4d01fd2292d89&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=MzI2NTAwODE1ODg3NzM5OTI1Mg%3D%3D.3-ccb7-5&oh=00_AYDnXXdZ_IL5hUg2HrztxpTlfmYclb5STXWqSGk400a8bA&oe=671EA11D&_nc_sid=fc8dfb",
      },
    },
  }, {
    title: "Octomber 2023",
    cardTitle: "ISTA OB's Appointment 2023-24",
    media: {
      type: "IMAGE",
      source: {
        url: "https://cdn.app-sorteos.workers.dev/https://instagram.fmaa8-1.fna.fbcdn.net/v/t51.29350-15/387703072_990328718717196_5223601161385105002_n.heic?stp=dst-jpg_e35&_nc_ht=instagram.fmaa8-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=Ck0_2vZWDUUQ7kNvgFdyCxs&_nc_gid=ab78403ae51344c98bb9cbc7db5a8c0f&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=MzIxMDY2NjQ3Mjk5NTEyMDk0OQ%3D%3D.3-ccb7-5&oh=00_AYDAcxtAXRlfL2rstHFIUR8XZ3a6l-YF_nCGsvat-AAf_g&oe=671EA623&_nc_sid=fc8dfb",
      },
    },
  },
  {
    title: "December 2023",
    cardTitle: "Freshers 2023",
    media: {
      type: "IMAGE",
      source: {
        url: "https://cdn.app-sorteos.workers.dev/https://instagram.fmaa8-1.fna.fbcdn.net/v/t51.29350-15/429321704_374057692079851_4923974607548836758_n.heic?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi42MDB4NzUwLnNkci5mMjkzNTAuZGVmYXVsdF9pbWFnZSJ9&_nc_ht=instagram.fmaa8-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=mkRIzjh1FKMQ7kNvgE1aZXk&_nc_gid=7979ce3da1a54a349cd50a708a93cd16&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=MzMwNzcyNjc0NzE0NzQ2NzkzNA%3D%3D.3-ccb7-5&oh=00_AYCox0rYrI1P3P0z5QRoj9NTKGK9x3eXX6TxzItZK6DJEQ&oe=671EBED8&_nc_sid=fc8dfb",
      },
    },
  }, {
    title: "Octomber 2022",
    cardTitle: "ISTA Office Bearers 2022",
    media: {
      type: "IMAGE",
      source: {
        url: "https://cdn.app-sorteos.workers.dev/https://instagram.fmaa11-1.fna.fbcdn.net/v/t51.29350-15/312025538_490355916479259_741305992602637414_n.webp?stp=dst-jpg_e35&_nc_ht=instagram.fmaa11-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=0u0hLtwUf0EQ7kNvgGTyqyr&_nc_gid=6221fcf778cf40a6b9f747bdd7319f33&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=Mjk1Mzg1ODQ2OTE2Mzk0MTY1Ng%3D%3D.3-ccb7-5&oh=00_AYAU09z0zru-A7vC2uJhCeXyR_hM8z5cPKavClbVHnQbHg&oe=671EB96D&_nc_sid=fc8dfb",
      },
    },
  },
  {
    title: "June 2022",
    cardTitle: "IT Batch 2018 - 2022",
    media: {
      type: "IMAGE",
      source: {
        url: "https://cdn.app-sorteos.workers.dev/https://instagram.fmaa8-1.fna.fbcdn.net/v/t51.29350-15/291062383_3071989226427049_8110413944291971328_n.webp?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDk2MS5zZHIuZjI5MzUwLmRlZmF1bHRfaW1hZ2UifQ&_nc_ht=instagram.fmaa8-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=cXm5k3OCDKgQ7kNvgHz-qe0&_nc_gid=2e1f5b2139394bf9ba997811bad65216&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=Mjg3MDY5MzY1NTUyODQ3ODIzMQ%3D%3D.3-ccb7-5&oh=00_AYDb8dFz9rrd40OJh1F1DYTdkh_9cicVjLYRzkidsiZiEA&oe=671EAF91&_nc_sid=fc8dfb",
      },
    },
  }

];


const VerticalAlternatingTimeline = () => {

  const [list, setList] = useState([])

  // {
  //   title: "December 2023",
  //   cardTitle: "Winners of Smart India Hackathon",
  //   media: {
  //     type: "IMAGE",
  //     source: {
  //       url: "https://cdn.app-sorteos.workers.dev/https://instagram.fmaa11-1.fna.fbcdn.net/v/t51.29350-15/413418305_279228991796586_8405419072191249998_n.heic?stp=dst-jpg_e35&_nc_ht=instagram.fmaa11-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=S6nGuB1RvXYQ7kNvgHX82rE&_nc_gid=c6c8461bb3f44be791f4d01fd2292d89&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=MzI2NTAwODE1ODg3NzM5OTI1Mg%3D%3D.3-ccb7-5&oh=00_AYDnXXdZ_IL5hUg2HrztxpTlfmYclb5STXWqSGk400a8bA&oe=671EA11D&_nc_sid=fc8dfb",
  //     },
  //   },
  // }
  function convertToDownloadLink(url) {
    var fileId = url.match(/\/d\/([a-zA-Z0-9_-]+)/)?.[1];
    return `https://lh3.googleusercontent.com/d/${fileId}`;
  }

  useEffect(() => {
    const API_KEY = process.env.REACT_APP_ISTA_SHEET_API;
    const spreadsheetId = "1NNeeCtCLFN6feP2mXLrShReEbhQTMRdLylb4xAKi8qg";
    const range = "Sheet1!B2:F";
    axios
      .get(
        `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}?key=${API_KEY}`
      )
      .then((response) => {
        console.log(response.data.values)
        const updatedData = response.data.values.map(row => {
          console.log(row)
          return {
            title: row[0],
            cardTitle_: row[1],
            cardDetailedText_: row[2],
            media_: {
              type: "IMAGE",
              source: {
                url: convertToDownloadLink(row[3])
              }
            }
          }
        });
        setList(updatedData)
      })
      .catch((error) => {
        console.error("Error fetching data from Google Sheets", error);
      });
  }, []);

  return (
    <div style={{ width: "80%", margin: "auto", textAlign:"center" }}>
      <h2>ISTA's Timeline</h2>
      <Chrono
        key={list.length}
        items={[...list].reverse()}
        mode="VERTICAL_ALTERNATING"
        mediaSettings={{ fit: 'contain' }}
        hideControls={true}
        slideItemDuration={1000}
        cardHeight={450}
        slideShow
        theme={{
          cardForeColor: "violet",
          titleColorActive: "white",
          titleColor: "white",
          secondary: "#1a1a1a",
        }}
        disableToolbar={true}
      >
        {[...list].reverse().map((ele, index) => {
          // Get the image dimensions to determine its orientation
          const image = new Image();
          image.src = ele.media_.source.url;
          image.onload = () => {
            const isPortrait = image.height > image.width;
            image.isPortrait = isPortrait
          };

          const isPortrait = image.height > image.width; // If height is greater than width, it's portrait

          return (
            <div
              key={index}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                backgroundColor: "#f9f9f9",
                padding: "15px",
                borderRadius: "8px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                width: "100%",
              }}
            >
              <div className="mobile-only">
                <strong>({ele.title})</strong>
              </div>
              <strong style={{ fontSize: "15px", marginBottom: "10px" }}>
                {ele.cardTitle_}
              </strong>

              {/* Conditional layout based on image orientation */}
              {ele.isPortrait ? (
                // Newspaper style layout if portrait
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row", // Horizontal layout
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    width: "100%",
                  }}
                >
                  <img
                    src={ele.media_.source.url}
                    alt="media"
                    style={{
                      objectFit: "contain",
                      width: "40%", // Adjust width of image (40% as an example)
                      maxHeight: "300px",
                      borderRadius: "5px",
                      marginRight: "15px", // Space between image and text
                    }}
                  />

                  <p
                    style={{
                      fontSize: "14px",
                      color: "#555",
                      marginTop: "10px",
                      textAlign: "justify",
                      flex: 1, // Ensures the paragraph takes the remaining space
                      maxWidth: "55%", // Keeps text to a reasonable size
                    }}
                  >
                    {ele.cardDetailedText_}
                  </p>
                </div>
              ) : (
                // Default design for landscape images
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                  }}
                >
                  <img
                    src={ele.media_.source.url}
                    alt="media"
                    style={{
                      width: "90%",
                      objectFit: "contain",
                      borderRadius: "5px",
                    }}
                  />
                  <p
                    style={{
                      fontSize: "14px",
                      color: "#555",
                      marginTop: "10px",
                      textAlign: "justify"
                    }}
                  >
                    {ele.cardDetailedText_}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </Chrono>
    </div>
  );
};

function Entry({ list }) {

  const [processedList, setProcessedList] = useState([]);

  useEffect(() => {
    const processImages = async () => {
      const promises = list.reverse().map((ele) => {
        return new Promise((resolve) => {
          const image = new Image();
          image.src = ele.media_.source.url;
          console.log("got here")
          image.onload = () => {
            const isPortrait = image.height > image.width;
            resolve({ ...ele, isPortrait });
          };
        });
      });

      console.log(promises)

      const processed = await Promise.all(promises);
      setProcessedList(processed);
      console.log("processed")
      console.log(processed)
    };

    processImages();
  }, [list]);

  return (
    <div>
      {processedList.map((ele, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            backgroundColor: "#f9f9f9",
            padding: "15px",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            width: "100%",
          }}
        >
          {ele.isPortrait ? <div
            style={{
              display: "flex",
              flexDirection: "row", // Horizontal layout
              alignItems: "flex-start",
              justifyContent: "flex-start",
              width: "100%",
            }}
          >
            <img
              src={ele.media_.source.url}
              alt="media"
              style={{
                objectFit: "contain",
                width: "40%", // Adjust width of image (40% as an example)
                maxHeight: "300px",
                borderRadius: "5px",
                marginRight: "15px", // Space between image and text
              }}
            />

            <p
              style={{
                fontSize: "14px",
                color: "#555",
                marginTop: "10px",
                textAlign: "justify",
                flex: 1, // Ensures the paragraph takes the remaining space
                maxWidth: "55%", // Keeps text to a reasonable size
              }}
            >
              {ele.cardDetailedText_}
            </p>
          </div> :
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <img
                src={ele.media_.source.url}
                alt="media"
                style={{
                  width: "90%",
                  objectFit: "contain",
                  borderRadius: "5px",
                }}
              />
              <p
                style={{
                  fontSize: "14px",
                  color: "#555",
                  marginTop: "10px",
                  textAlign: "justify"
                }}
              >
                {ele.cardDetailedText_}
              </p>
            </div>
          }
        </div>
      ))}
    </div>
  )
}

export default VerticalAlternatingTimeline;