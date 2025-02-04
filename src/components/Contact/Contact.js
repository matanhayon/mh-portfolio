import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa"; // Import icons
import "./Contact.css";

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <h2>Contact Me</h2>
      <div className="contact-links">
        <a
          href="mailto:matanhayon@gmail.com"
          className="contact-item"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaEnvelope className="icon" />
          <span>matanhayon@gmail.com</span>
        </a>
        <a
          href="https://www.linkedin.com/in/matan-h/"
          className="contact-item"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="icon" />
          <span>LinkedIn</span>
        </a>
        <a
          href="https://github.com/matanhayon"
          className="contact-item"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="icon" />
          <span>GitHub</span>
        </a>
      </div>
    </section>
  );
}

export default Contact;
