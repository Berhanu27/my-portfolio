import React from "react";
import styles from "./ProjectCard.module.css";

const ProjectCard = ({ image, title, description, stack, demo, source }) => {
  return (
    <div className={styles.card}>
      <img src={image} alt={title} className={styles.image} />

      <h3>{title}</h3>
      <p>{description}</p>

      <div className={styles.stack}>
        {stack.map((item, i) => (
          <span key={i}>{item}</span>
        ))}
      </div>

      <div className={styles.links}>
        <a href={demo} target="_blank">Demo</a>
        <a href={source} target="_blank">Source</a>
      </div>
    </div>
  );
};

export default ProjectCard;
