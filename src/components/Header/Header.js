import React from "react";
import "./Header.css"; // Import the new CSS file

function Header() {
  return (
    <header className="header">
      <h1>Matan Hayon</h1>
      <nav>
        <ul>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
