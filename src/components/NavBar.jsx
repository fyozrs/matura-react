import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "../css/NavBar.css";


function NavBar({ searchQuery, setSearchQuery }) {
  const handleSearch = (e) => {
    e.preventDefault();
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">Topics</Link>
      </div>
      <div className="navbar-links">
        <form onSubmit={handleSearch} className="search-form">
          <input
            type="text"
            placeholder="Search for topics..."
            className="search-input"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit" className="search-button">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </form>

        <Link to="/" className="nav-link">Home</Link>
        <Link to="/favorites" className="nav-link">Favorites</Link>
      </div>
    </nav>
  );
}

export default NavBar