import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">🎬 Cinema</div>

      <ul className="nav-links">
        <li><Link to="/movie">Movie</Link></li>
        <li><Link to="/actor">Actor</Link></li>
        <li><Link to="/tv">TV</Link></li>
      </ul>

      <div className="search-box">
        <input type="text" placeholder="Search..." />
        <button>Search</button>
      </div>
    </nav>
  );
}