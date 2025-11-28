import React from 'react';
import styles from "./Contact.module.css";
import { MdEmail } from "react-icons/md";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <footer id='contact' className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out</p>
      </div>

      <ul className={styles.links}>
        <li className={styles.link}>
          <MdEmail size={40} />
          <a href="mailto:berhanumulu2022@gmail.com">
            berhanumulu2022@gmail.com
          </a>
        </li>

        <li className={styles.link}>
          <FaLinkedin size={40} />
          <a href="https://www.linkedin.com/in/Brexman27">
            linkedin.com/in/Brexman27
          </a>
        </li>

        <li className={styles.link}>
          <FaGithub size={40} />
          <a href="https://github.com/Berhanu27">
            github.com/Berhanu27
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Contact;
