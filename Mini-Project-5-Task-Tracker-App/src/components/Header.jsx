// src/components/Header.jsx
import React from "react";
import { Link } from "react-router-dom";

const Header = ({ darkMode, toggleDarkMode }) => {
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem",
        backgroundColor: darkMode ? "#333" : "#f5f5f5",
        color: darkMode ? "#fff" : "#000",
      }}
    >
      <h1>Task Tracker</h1>
      
      <div>
        {/* Navigation */}
        <Link
          to="/"
          style={{
            marginRight: "1rem",
            color: darkMode ? "#fff" : "#000",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          Home
        </Link>
        <Link
          to="/stats"
          style={{
            marginRight: "1rem",
            color: darkMode ? "#fff" : "#000",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          Stats
        </Link>

        {/* Dark Mode Toggle */}
        <button onClick={toggleDarkMode}>
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </header>
  );
};

export default Header;
