import React from "react";
import { FaArrowUp } from "react-icons/fa"; // Import the arrow-up icon
import "./BackToTop.css"; // Import the CSS file

function BackToTop() {
  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scroll to the top
    });
  };

  return (
    <button className="back-to-top" onClick={scrollToTop}>
      <FaArrowUp />
    </button>
  );
}

export default BackToTop;
