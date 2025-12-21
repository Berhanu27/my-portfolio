import React from "react";
import styles from "./Hero.module.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FiDownload } from "react-icons/fi";

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <span className={styles.greeting}>👋 Hello, I'm</span>
        <h1 className={styles.title}>
          Berhanu <span className={styles.highlight}>Mulu</span>
        </h1>
        <h2 className={styles.subtitle}>
          <span className={styles.typewriter}>Full Stack Developer</span>
        </h2>

        <p className={styles.description}>
          A passionate software engineering student with 2+ years of experience 
          crafting modern web applications using React, Node.js, and cutting-edge technologies.
        </p>

        <div className={styles.cta}>
          <a href="#contact" className={styles.primaryBtn}>
            Get In Touch
          </a>
          <a href="#projects" className={styles.secondaryBtn}>
            View Projects
          </a>
        </div>

        <div className={styles.socials}>
          <a href="https://github.com/Berhanu27" target="_blank" rel="noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/Brexman27" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="mailto:berhanumulu2022@gmail.com" aria-label="Email">
            <MdEmail />
          </a>
        </div>
      </div>

      <div className={styles.imageWrapper}>
        <div className={styles.imageBorder}></div>
        <img
          src="/hero/brexman.jpg"
          alt="Berhanu Mulu - Full Stack Developer"
          className={styles.heroImage}
        />
        <div className={styles.statusBadge}>
          <span className={styles.statusDot}></span>
          Available for work
        </div>
      </div>

      <div className={styles.backgroundElements}>
        <div className={styles.gradientOrb1}></div>
        <div className={styles.gradientOrb2}></div>
        <div className={styles.gridPattern}></div>
      </div>

      <a href="#about" className={styles.scrollIndicator} aria-label="Scroll down">
        <span></span>
      </a>
    </section>
  );
};

export default Hero;
