import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import savedImage from "./ias.jpg"; // Adjust the path to your saved image
import Header from "./Header";

function Home() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      <style>
        {`
          @keyframes moveLeft {
            0% {
              left: 100%;  /* Start from the right (off-screen) */
            }
            100% {
              left: -100%; /* Move to the left off-screen */
            }
          }
        `}
      </style>

      {/* Navbar */}
      <Header />

      {/* Main Section */}
      <main style={{ margin: 0, padding: 0 }}>
        {/* Full-Width Image Section with Quote */}
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "93vh",
            overflow: "hidden",
          }}
        >
          <img
            src={savedImage}
            alt="Future Tunisia Vision"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "100%", // Start from the right (off-screen)
              transform: "translateY(-50%)", // Center vertically
              textAlign: "center",
              animation: "moveLeft 10s linear infinite", // Apply animation
            }}
          >
            <p
              style={{
                fontSize: "60px",
                fontWeight: "bold",
                color: "#000000",
                backgroundColor: "transparent",
                padding: "20px 40px",
                borderRadius: "8px",
                margin: 0,
                display: "inline-block",
                whiteSpace: "nowrap", // Prevent text from wrapping
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
                overflow: "hidden",
              }}
            >
              Building smarter industries for a sustainable tomorrow
            </p>
          </div>

          {/* Learn More Button */}
          <Link to="/about" style={{ textDecoration: "none" }}>
            <button
              style={{
                fontWeight: "bold",
                fontSize: "60px",
                fontWeight: "bold",
                position: "absolute",
                bottom: "10%",
                left: "50%",
                transform: "translateX(-50%)",
                padding: "10px 20px",
                fontSize: "18px",
                backgroundColor: "transparent",
                color: "black",
                border: "black",
                cursor: "pointer",
                borderRadius: "50px",
                boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
                zIndex: 10, // Ensure it's above other elements
              }}
            >
              <h1> Learn More </h1>
            </button>
          </Link>
        </div>
      </main>
    </div>
  );
}

export default Home;
