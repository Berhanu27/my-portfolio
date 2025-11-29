import React from "react";
import styles from "./Projects.module.css";
import projects from "../../data/projects.json";

const Projects = () => {
  return (
    <section id="projects">
      <h2 style={{ color: "white", marginBottom: "20px" }}>Projects</h2>

      <div className={styles.projectsContainer}>
        {projects.map((project, index) => (
          <div key={index} className={styles.card}>

            <img
              src={import.meta.env.BASE_URL + project.image}
              alt={project.title}
              className={styles.projectImage}
            />

            <h3>{project.title}</h3>
            <p>{project.description}</p>

            <p>
              <strong>Stack:</strong> {project.stack.join(", ")}
            </p>

            <a href={project.demo} target="_blank" rel="noreferrer">Demo</a>
            <br />
            <a href={project.source} target="_blank" rel="noreferrer">Source Code</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
