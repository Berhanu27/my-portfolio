import React from 'react';
import styles from "./Contact.module.css";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const Contact = () => {
  return (
    <footer id='contact' className={styles.container}>
      <div className={styles.content}>
        <div className={styles.info}>
          <span className={styles.label}>Get In Touch</span>
          <h2 className={styles.title}>Let's Work Together</h2>
          <p className={styles.description}>
            I'm currently available for freelance work and full-time positions. 
            If you have a project in mind or just want to chat, feel free to reach out!
          </p>

          <div className={styles.contactDetails}>
            <a href="mailto:berhanumulu2022@gmail.com" className={styles.contactItem}>
              <MdEmail className={styles.contactIcon} />
              <span>berhanumulu2022@gmail.com</span>
            </a>
            <div className={styles.contactItem}>
              <MdLocationOn className={styles.contactIcon} />
              <span>Ethiopia</span>
            </div>
          </div>
        </div>

        <div className={styles.socialSection}>
          <h3 className={styles.socialTitle}>Connect With Me</h3>
          <div className={styles.socials}>
            <a 
              href="https://github.com/Berhanu27" 
              target="_blank" 
              rel="noreferrer"
              className={styles.socialLink}
              aria-label="GitHub"
            >
              <FaGithub />
              <span>GitHub</span>
            </a>
            <a 
              href="https://www.linkedin.com/in/Brexman27" 
              target="_blank" 
              rel="noreferrer"
              className={styles.socialLink}
              aria-label="LinkedIn"
            >
              <FaLinkedin />
              <span>LinkedIn</span>
            </a>
            <a 
              href="mailto:berhanumulu2022@gmail.com"
              className={styles.socialLink}
              aria-label="Email"
            >
              <MdEmail />
              <span>Email</span>
            </a>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <p className={styles.copyright}>
          © {new Date().getFullYear()} Berhanu Mulu. All rights reserved.
        </p>
        <p className={styles.madeWith}>
          Made with ❤️ using React
        </p>
      </div>
    </footer>
  );
};

export default Contact;
