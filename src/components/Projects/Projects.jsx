import React from "react";
import styles from "./Projects.module.css";
import projects from "../../data/projects.json";
import { FiExternalLink, FiGithub } from "react-icons/fi";

const Projects = () => {
  return (
    <section id="projects" className={styles.container}>
      <div className={styles.header}>
        <span className={styles.label}>Portfolio</span>
        <h2 className={styles.title}>Featured Projects</h2>
        <p className={styles.subtitle}>
          A selection of projects I've worked on, showcasing my skills in full-stack development
        </p>
      </div>

      <div className={styles.projectsGrid}>
        {projects.map((project, index) => (
          <article key={index} className={styles.card}>
            <div className={styles.imageWrapper}>
              <img
                src={import.meta.env.BASE_URL + project.image}
                alt={project.title}
                className={styles.projectImage}
              />
              <div className={styles.overlay}>
                <a 
                  href={project.demo} 
                  target="_blank" 
                  rel="noreferrer"
                  className={styles.overlayBtn}
                  aria-label={`View ${project.title} demo`}
                >
                  <FiExternalLink />
                </a>
                <a 
                  href={project.source} 
                  target="_blank" 
                  rel="noreferrer"
                  className={styles.overlayBtn}
                  aria-label={`View ${project.title} source code`}
                >
                  <FiGithub />
                </a>
              </div>
            </div>

            <div className={styles.cardContent}>
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <p className={styles.projectDescription}>{project.description}</p>

              <div className={styles.stack}>
                {project.stack.map((tech, i) => (
                  <span key={i} className={styles.techTag}>{tech}</span>
                ))}
              </div>

              <div className={styles.links}>
                <a 
                  href={project.demo} 
                  target="_blank" 
                  rel="noreferrer"
                  className={styles.demoLink}
                >
                  <FiExternalLink /> Live Demo
                </a>
                <a 
                  href={project.source} 
                  target="_blank" 
                  rel="noreferrer"
                  className={styles.sourceLink}
                >
                  <FiGithub /> Source
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
