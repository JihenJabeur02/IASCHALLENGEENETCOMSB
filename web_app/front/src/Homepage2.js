import React from "react";
import logo from "./logo.png";
import Header from './Header';

const Homepage2 = () => {
  const styles = {
    body: {
      margin: 0,
      fontFamily: "Arial, sans-serif",
      backgroundColor: "#f9f9f9",
    },
    container: {
      textAlign: "center",
    },
    header: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "10px 20px",
      backgroundColor: "#fff",
      borderBottom: "1px solid #ddd",
    },
    logo: {
      width: "100px",
    },
    mainContent: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "86vh", // Full viewport height
      backgroundColor: "#f9f9f9",
    },
    circleContainer: {
      display: "flex",
      flexWrap: "wrap", // Allow buttons to wrap into multiple rows
      justifyContent: "center",
      gap: "20px", // Spacing between buttons
      maxWidth: "650px", // Maximum width to avoid stretching
    },
    rectangle: {
      width: "300px", // Larger width
      height: "120px", // Larger height
      backgroundColor: "#89CFF0", // Light blue
      display: "flex",
      flexDirection: "column", // Stack text and description vertically
      justifyContent: "center",
      alignItems: "center",
      fontSize: "20px", // Larger font size
      fontWeight: "bold",
      color: "green",
      borderRadius: "15px", // Slightly more rounded corners
      boxShadow: "0 6px 10px rgba(0, 0, 0, 0.15)", // Slightly stronger shadow
      cursor: "pointer",
      border: "none",
      padding: "10px",
    },
    description: {
      fontSize: "12px", // Smaller font size for the description
      color: "black", // Black text color
      textAlign: "center", // Center the description text
    },
    contactButton: {
      backgroundColor: "#4caf50",
      color: "white",
      border: "none",
      padding: "10px 20px",
      fontSize: "16px",
      cursor: "pointer",
    },
  };

  return (
    <div style={styles.container}>
      <Header />
      <main style={styles.mainContent}>
        <div style={styles.circleContainer}>
          <button
            style={styles.rectangle}
            onClick={() => (window.location = "http://localhost:3000/industries")}
          >
            Industries Information
            <p style={styles.description}>
              "View and explore details about the selected industry, including location, products, and unique industry codes."
            </p>
          </button>
          <button
            style={styles.rectangle}
            onClick={() => (window.location = "http://localhost:3000/request")}
          >
            Request For Product
            <p style={styles.description}>
              "Submit product requests by selecting an industry, adding items, and specifying payment and date details."
            </p>
          </button>
          <button
            style={styles.rectangle}
            onClick={() => (window.location = "http://localhost:3000/cart")}
          >
            Cart Control
            <p style={styles.description}>
              "Manage selected products, review total costs, and finalize your request or save for later."
            </p>
          </button>
          <button
            style={styles.rectangle}
            onClick={() => (window.location = "http://localhost:3000/Energy")}
          >
            Energy Transaction
            <p style={styles.description}>
              "Record and manage transactions for energy products, including payment methods and transaction details."
            </p>
          </button>
        </div>
      </main>
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

export default Homepage2;
