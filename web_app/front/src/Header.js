import React from "react";
import { Link } from "react-router-dom";
import logo from "./logo.png"; // Adjust the path to your logo file

// Header Component
function Header() {
  const isLoggedIn = localStorage.getItem('id'); // Check if the user is logged in

  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "15px 30px",
        borderBottom: "2px solid #ccc",
        position: "sticky",
        top: 0,
        backgroundColor: "white",
        zIndex: 1000,
      }}
    >
      {/* Logo Section */}
      <div>
        <img src={logo} alt="IndoCon Logo" style={{ height: "40px" }} />
      </div>

      {/* Navigation Links */}
      <nav style={{ display: "flex", gap: "25px" }}>
        <Link to="/" style={navItemStyle("green")}>HOME</Link>
        <Link to="/about" style={navItemStyle()}>About Us</Link>
        
        <Link to="/signin" style={navItemStyle()}>✎ Sign In</Link>


        {/* Conditional rendering of Login / Sign In */}
        {!isLoggedIn ? (
          <Link to="/signin" style={navItemStyle()}>✎ Sign In</Link> // Show Sign In if not logged in
        ) : (
          <Link to="/login" style={navItemStyle()}>Login</Link> // Show Login if already signed in
        )}
      </nav>

      {/* Help Icon */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "15px",
          height: "15px",
          backgroundColor: "white",
          borderRadius: "50%",
          border: "2px solid black",
          color: "black",
          fontSize: "10px",
          fontWeight: "bold",
          cursor: "pointer",
        }}
      >
        ?
      </div>
    </header>
  );
}

const navItemStyle = (color = "black") => ({
  textDecoration: "none",
  color: color,
  fontWeight: "bold",
});

export default Header;
