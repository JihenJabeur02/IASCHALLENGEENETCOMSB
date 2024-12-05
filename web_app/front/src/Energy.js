import React, { useState } from "react";
import logo from "./logo.png";
import Header from './Header';
import solutionImage from "./photo4.png";
import powerAnalysisImage from "./photo1.png";
import dailypoweranalysis from "./photo3.png";
import energystoragepercentege from "./photo5.png";
import anomalydetection from "./photo2.png";

const AccountInformation = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const tableData = [
    { new_date: "2006-12-23", Global_active_power: 4773.386, Generated_power: 6223.585384, Storage_Percentage: 23.301671 },
    { new_date: "2006-12-26", Global_active_power: 3934.11, Generated_power: 5406.380542, Storage_Percentage: 27.232092 },
    { new_date: "2007-02-03", Global_active_power: 4029.722, Generated_power: 5489.841371, Storage_Percentage: 26.59675 },
    { new_date: "2007-02-18", Global_active_power: 3829.762, Generated_power: 5293.663151, Storage_Percentage: 27.65384 },
    { new_date: "2007-04-28", Global_active_power: 22.738, Generated_power: 46.386664, Storage_Percentage: 50.983715 },
    { new_date: "2007-04-29", Global_active_power: 0.0, Generated_power: 0.0, Storage_Percentage: "NaN" },
    { new_date: "2009-06-13", Global_active_power: 14.218, Generated_power: 37.212853, Storage_Percentage: 61.792771 },
  ];

  const styles = {
    container: {
      fontFamily: "'Arial', sans-serif",
      color: "#000",
      padding: "0px",
      height: "100vh",
      width: "100vw",
      boxSizing: "border-box",
      overflow: "auto",
      position: "relative",
    },
    
    logo: {
      width: "120px",
      height: "120px",
    },
    
    navLink: {
      textDecoration: "none",
      color: "#B22222",
      fontWeight: "bold",
    },
    
    tableContainer: {
      marginBottom: "20px",
      overflowX: "auto",
    },
    table: {
      width: "100%",
      borderCollapse: "collapse",
      marginBottom: "50px",
    },
    th: {
      border: "1px solid #ccc",
      padding: "10px",
      backgroundColor: "#f2f2f2",
      textAlign: "left",
    },
    td: {
      border: "1px solid #ccc",
      padding: "10px",
      textAlign: "left",
    },
    imageSection: {
      marginTop: "20px",
    },
    imageRow: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "20px",
    },
    imageLeft: {
      flex: "1",
      textAlign: "left",
      marginRight: "20px",
    },
    imageRight: {
      flex: "1",
      textAlign: "right",
      marginLeft: "20px",
    },
    imageTitle: {
      fontWeight: "bold",
      fontSize: "20px",
      marginBottom: "10px",
      color: "#008000",
      textAlign: "center",
    },
    image: {
      maxWidth: "100%",
      borderRadius: "10px",
    },
    imageCentered: {
      textAlign: "center",
    },
  };

  return (
    <div style={styles.container}>
      {/* Header */}
      <Header />

      {/* Table Section */}
      <div style={styles.tableContainer}>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>New Date</th>
              <th style={styles.th}>Global Active Power</th>
              <th style={styles.th}>Generated Power</th>
              <th style={styles.th}>Storage Percentage</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, index) => (
              <tr key={index}>
                <td style={styles.td}>{row.new_date}</td>
                <td style={styles.td}>{row.Global_active_power}</td>
                <td style={styles.td}>{row.Generated_power}</td>
                <td style={styles.td}>{row.Storage_Percentage}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Image Section */}
      <div style={styles.imageSection}>
        {/* Row 1 */}
        <div style={styles.imageRow}>
          <div style={styles.imageLeft}>
            <h2 style={styles.imageTitle}>Power Consumption actual-prediction</h2>
            <img src={solutionImage} alt="Power Consumption" style={styles.image} />
          </div>
          <div style={styles.imageRight}>
            <h2 style={styles.imageTitle}>Energy Storage Percentage</h2>
            <img src={energystoragepercentege} alt="Energy Storage" style={styles.image} />
          </div>
        </div>

        {/* Row 2 */}
        <div style={styles.imageRow}>
          <div style={styles.imageLeft}>
            <h2 style={styles.imageTitle}>Anomaly Detection</h2>
            <img src={anomalydetection} alt="Anomaly Detection" style={styles.image} />
          </div>
          <div style={styles.imageRight}>
            <h2 style={styles.imageTitle}>Generated Power vs Consumed Power</h2>
            <img src={dailypoweranalysis} alt="Power Analysis" style={styles.image} />
          </div>
        </div>

        {/* Centered Final Image */}
        <div style={styles.imageCentered}>
          <h2 style={styles.imageTitle}>Active Power Weekends-Weekdays</h2>
          <img src={powerAnalysisImage} alt="Weekdays Analysis" style={styles.image} />
        </div>
      </div>
      <footer style={{ marginTop: "15px", textAlign: "center" }}>
  <button
    style={{
      padding: "15px 0",
      fontSize: "18px",
      backgroundColor: "#2c8f31",
      color: "white",
      border: "none",
      cursor: "pointer",
      width: "100%", // Full width button
      textAlign: "center",
      fontWeight: "bold",
    }}
  >
    Contact Us
  </button>
</footer>
    </div>
  );
};

export default AccountInformation;