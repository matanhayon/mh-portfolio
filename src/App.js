import React from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import ProjectList from "./components/ProjectList/ProjectList";
import Contact from "./components/Contact/Contact";
import BackToTop from "./components/BackToTop/BackToTop";
import "./App.css";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <ProjectList />
      <Contact />
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
