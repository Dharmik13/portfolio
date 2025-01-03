import React, { useState } from "react";
import "../Navbar/navbar.css";
import logo from "../../assets/images/mylogo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="container">
          <ul className="navbar-left">
            <div className="logoLeft">
              <img src={logo} className="logoImg" alt="logo" />
            </div>
          </ul>
          <div className="hamburger" onClick={toggleMenu}>
            ☰
          </div>
          <ul className={`navbar_right ${isOpen ? "open" : ""}`}>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#features">Features</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#resume">Resume</a>
            </li>
            <li>
              <a href="#skill">Skills</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
