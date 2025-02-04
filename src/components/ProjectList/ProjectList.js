import React from "react";
import "./ProjectList.css";

function ProjectList() {
  const projects = [
    {
      title: "Smart Home Beer Brewery",
      description: "Automated beer brewing with Raspberry Pi.",
      tech: "Python, C++, Embedded Systems",
      image: "/images/brew-to-the-future.jpg",
      alt: "Smart Home Beer Brewery",
      website: "https://home-brew-to-the-future.web.app/",
      github: "https://github.com/matanhayon/BrewToTheFuture",
    },
    {
      title: "Facebook Design Patterns",
      description: "Desktop app using Facebook API with design patterns.",
      tech: "C#, Multithreading, OOP",
      image: "/images/fakebook.png",
      alt: "Facebook Design Patterns",
      github: "https://github.com/matanhayon/Design-Patterns-with-Facebook-API",
    },
    {
      title: "Taki Game",
      description: "A C implementation of the Taki card game.",
      tech: "C",
      image: "/images/taki.png",
      alt: "Taki Game",
      github: "https://github.com/matanhayon/Taki-Game-in-C",
    },
    {
      title: "TicTacToe .NET",
      description: "A TicTacToe game built with .NET and C#.",
      tech: "C#, .NET",
      image: "/images/tictactoe.png",
      alt: "TicTacToe .NET",
      github:
        "https://github.com/matanhayon/TicTacToe-With-WinForms-Ex05-MatanHayon-EyalShpater",
    },
    {
      title: "Personal Portfolio",
      description: "My personal portfolio built with React.",
      tech: "React, JavaScript, CSS",
      image: "/images/fav.png",
      alt: "Current Portfolio",
      github: "https://github.com/your-username/personal-portfolio",
    },
  ];

  return (
    <div id="projects" className="project-list-container">
      {/* Project Introduction */}
      <div className="project-introduction">
        <h2>Explore My Projects</h2>
        <p>
          Here are some of the exciting projects I've worked on.
          <br />
          From embedded systems, object-oriented programming, to games, I enjoy
          experimenting with different technologies.
          <br />
          Click on the links to explore further!
        </p>
      </div>

      {/* Project List */}
      <div className="project-list">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img
              src={project.image}
              alt={project.alt}
              className="project-image"
            />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p>
              <strong>Tech Used:</strong> {project.tech}
            </p>
            <div className="project-links">
              {project.website && (
                <a
                  href={project.website}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Website
                </a>
              )}
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectList;
