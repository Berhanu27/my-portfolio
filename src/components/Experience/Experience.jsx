import React from "react";
import experience from "../../data/experience";
import styles from "./Experience.module.css";

const Experience = () => {
  return (
    <section id="experience" className={styles.container}>
      <h2 className={styles.title}>Experience</h2>

      <div className={styles.grid}>
        {experience.map((item, index) => {
          const Icon = item.icon;
          return (
            <div key={index} className={styles.card}>
              <Icon size={40} />
              <h3>{item.name}</h3>
              <p>{item.level}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Experience;
