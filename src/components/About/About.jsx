import React from "react";
import styles from "./About.module.css";
import { FiCode, FiServer, FiLayout, FiDatabase } from "react-icons/fi";

const About = () => {
  const skills = [
    {
      icon: FiCode,
      title: "Frontend Development",
      description: "Building responsive, accessible, and performant user interfaces with React, modern CSS, and JavaScript.",
    },
    {
      icon: FiServer,
      title: "Backend Development",
      description: "Creating robust APIs and server-side applications with Node.js, Express, and RESTful architecture.",
    },
    {
      icon: FiDatabase,
      title: "Database Design",
      description: "Designing and managing databases with MySQL and MongoDB for efficient data storage and retrieval.",
    },
    {
      icon: FiLayout,
      title: "UI/UX Design",
      description: "Crafting intuitive user experiences with clean, modern designs and attention to detail.",
    },
  ];

  const stats = [
    { number: "10+", label: "Projects Completed" },
    { number: "2+", label: "Years Experience" },
    { number: "5+", label: "Happy Clients" },
  ];

  return (
    <section className={styles.container} id="about">
      <div className={styles.header}>
        <span className={styles.label}>About Me</span>
        <h2 className={styles.title}>
          Passionate about creating <span className={styles.highlight}>digital experiences</span>
        </h2>
        <p className={styles.subtitle}>
          I'm a software engineering student and full-stack developer dedicated to building 
          web applications that make a difference. With a strong foundation in both frontend 
          and backend technologies, I bring ideas to life through clean code and thoughtful design.
        </p>
      </div>

      <div className={styles.statsRow}>
        {stats.map((stat, index) => (
          <div key={index} className={styles.statItem}>
            <span className={styles.statNumber}>{stat.number}</span>
            <span className={styles.statLabel}>{stat.label}</span>
          </div>
        ))}
      </div>

      <div className={styles.content}>
        <div className={styles.imageSection}>
          <div className={styles.imageContainer}>
            <img 
              src="/about/aboutimage.png" 
              alt="About Berhanu" 
              className={styles.aboutImg} 
            />
          </div>
        </div>

        <div className={styles.skillsGrid}>
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div key={index} className={styles.skillCard}>
                <div className={styles.iconWrapper}>
                  <Icon className={styles.icon} />
                </div>
                <h3>{skill.title}</h3>
                <p>{skill.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
