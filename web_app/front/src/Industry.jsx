import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./Header";

function App() {
  const [data, setData] = useState([]);
  const [locations, setLocations] = useState({});
  const [error, setError] = useState(null);

  const styles = {
    app: {
      textAlign: "center",
      fontFamily: "'Roboto', sans-serif",
      backgroundColor: "#fff",
      padding: "20px",
      minHeight: "100vh",
      paddingBottom: "50px", // Prevent content overlap with footer
    },
    backButton: {
      textDecoration: "none",
      color: "#000",
      fontSize: "20px",
      marginBottom: "20px",
      textAlign: "left",
    },
    linedTable: {
      borderCollapse: "collapse",
      width: "100%",
      border: "1px solid #000",
      backgroundColor: "#69A9C7",
    },
    linedTableThTd: {
      border: "1px solid #000",
      padding: "8px",
      textAlign: "left",
    },
  };

  useEffect(() => {
    axios
      .get("http://localhost:5000/industries/get")
      .then((r) => {
        
        setData(r.data);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    const fetchLocation = async (latitude, longitude, id) => {
      const API_KEY = "de9ca2d201e54254a6d62124c6083362";
      const url = `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${API_KEY}`;

      try {
        const response = await fetch(url);
        const locationData = await response.json();
        if (locationData.results && locationData.results.length > 0) {
          setLocations((prev) => ({
            ...prev,
            [id]: locationData.results[0].formatted,
          }));
        } else {
          setLocations((prev) => ({
            ...prev,
            [id]: "Unknown location",
          }));
        }
      } catch (err) {
        setLocations((prev) => ({
          ...prev,
          [id]: "Error fetching location",
        }));
      }
    };

    const fetchLocationsForAll = async () => {
      for (const item of data) {
        const response = await axios.get(
          `http://localhost:5000/industries/getOne/${item.Id}`
        );
        const { laltitude, longtitude } = response.data;
        fetchLocation(laltitude, longtitude, item.Id);
      }
    };

    if (data.length > 0) {
      fetchLocationsForAll();
    }
  }, [data]);

  return (
    <div style={styles.app}>
      <Header />

      <main style={{ padding: "20px" }}>
        <a href="/" style={styles.backButton}>
          ←
        </a>
        <h2>Industries</h2>

        <table style={styles.linedTable}>
          <thead>
            <tr>
              <th style={styles.linedTableThTd}>Industry Name</th>
              <th style={styles.linedTableThTd}>Industry Code</th>
              <th style={styles.linedTableThTd}>Industry Location</th>
              <th style={styles.linedTableThTd}>Products</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.Id}>
                <td style={styles.linedTableThTd}>{item.IndustryName}</td>
                <td style={styles.linedTableThTd}>{item.IndustryCode}</td>
                <td style={styles.linedTableThTd}>
                  {locations[item.Id] || "Loading..."}
                </td>
                <td style={styles.linedTableThTd}>
                  <button
                    onClick={() =>
                      (window.location = `http://localhost:3000/product/${item.Id}`)
                    }
                  >
                    Products
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>

      <footer
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          width: "100%",
          textAlign: "center",
          padding: "10px 0",
          backgroundColor: "#2c8f31",
          color: "white",
          fontWeight: "bold",
          zIndex: 1000,
        }}
      >
        <button
          style={{
            fontSize: "18px",
            backgroundColor: "transparent",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          Contact Us
        </button>
      </footer>
    </div>
  );
}

export default App;
