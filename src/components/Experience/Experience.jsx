import React from "react";
import experience from "../../data/experience";
import styles from "./Experience.module.css";

const Experience = () => {
  return (
    <section id="experience" className={styles.container}>
      <div className={styles.header}>
        <span className={styles.label}>Skills</span>
        <h2 className={styles.title}>Technologies I Work With</h2>
        <p className={styles.subtitle}>
          Here are the tools and technologies I use to bring ideas to life
        </p>
      </div>

      <div className={styles.grid}>
        {experience.map((item, index) => {
          const Icon = item.icon;
          return (
            <div key={index} className={styles.card}>
              <div className={styles.iconWrapper}>
                <Icon className={styles.icon} />
              </div>
              <h3 className={styles.skillName}>{item.name}</h3>
              <span className={`${styles.level} ${styles[item.level.toLowerCase()]}`}>
                {item.level}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Experience;
