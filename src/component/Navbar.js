import React, { useState } from "react";
import "./css/Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="container-fluid">
      
      <nav className="navbar">
      <div className="portfolio">
          <a href="/" id="logo">
            Portfolio
          </a>
        </div>
        <div className={`nav-links ${isOpen ? "active" : ""}`}>
          <a href="/" id="home">
            Home
          </a>
          <a href="#about">About</a>
          <a href="#service">Service's</a>
          <a href="#skills">Skill's</a>
          <a href="#project">project's</a>
          <a href="#contact">Contact</a>
        </div>
        <div
          className={`burger ${isOpen ? "open" : ""}`}
          onClick={toggleNavbar}
        >
          <div className="line line1"></div>
          <div className="line line2"></div>
          <div className="line line3"></div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
