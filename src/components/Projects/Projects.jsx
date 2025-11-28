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
              src={`/src/components/Projects/${project.image}`}
              alt={project.title}
            />

            <h3>{project.title}</h3>
            <p>{project.description}</p>

            <p>
              <strong>Stack:</strong> {project.stack.join(", ")}
            </p>

            <a href={project.demo} target="_blank">
              Demo
            </a>
            <br />

            <a href={project.source} target="_blank">
              Source Code
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
