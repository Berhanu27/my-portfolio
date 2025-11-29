import React from "react";
import styles from "./About.module.css";
import { FiMousePointer, FiServer, FiPenTool } from "react-icons/fi";

const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>ABOUT</h2>

      <div className={styles.content}>

        {/* LEFT IMAGE */}
        <img src="/about/aboutimage.png"
 alt="About section" className={styles.aboutImg} />

        {/* RIGHT SIDE */}
        <ul className={styles.aboutItems}>
          
          <li className={styles.aboutItem}>
            <FiMousePointer className={styles.icon} />
            <div>
              <h3>Frontend Developer</h3>
              <p>I'm a frontend developer with experience building responsive and optimized websites.</p>
            </div>
          </li>

          <li className={styles.aboutItem}>
            <FiServer className={styles.icon} />
            <div>
              <h3>Backend Developer</h3>
              <p>I develop fast and optimized backend systems and APIs.</p>
            </div>
          </li>

          <li className={styles.aboutItem}>
            <FiPenTool className={styles.icon} />
            <div>
              <h3>UI Designer</h3>
              <p>I have designed multiple landing pages and created design systems.</p>
            </div>
          </li>

        </ul>

      </div>
    </section>
  );
};

export default About;
