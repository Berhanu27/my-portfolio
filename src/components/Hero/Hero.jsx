import React from "react";
import styles from "./Hero.module.css";
import brexmanImg from "./brexman.jpg";

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi Buddy I'm Berhanu/Brexman</h1>

        <p className={styles.description}>
          I am a full stack developer and software Engineering student with
          two years of web development experience using HTML, CSS, JavaScript,
          PHP, NodeJS, and React.
        </p>

        <a href="mailto:berhanumulu2022@gmail.com" className={styles.contactBtn}>
        CONTACT ME
        </a>
      </div>

      <img src={brexmanImg} alt="Brexman's photo" className={styles.heroImg} />

      <div className={styles.topBlur}></div>
      <div className={styles.bottomBlur}></div>
    </section>
  );
};

export default Hero;
