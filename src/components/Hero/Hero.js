import React from "react";
import "./Hero.css"; // Importing the corresponding CSS file

function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        <img
          src="/images/profile.jpg" // Replace with your actual image path
          alt="Matan Hayon"
          className="hero-image"
        />
        <div className="hero-text">
          <h1>Hi, I'm Matan Hayon</h1>
          <p>
            A passionate software developer specializing in full-stack
            development.
          </p>
          <a href="#contact" className="hero-button">
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
