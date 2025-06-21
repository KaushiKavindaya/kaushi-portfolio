import React from 'react';
import styles from './Contact.module.css';
import { profile } from '../../data/data';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <FaEnvelope />
          <a href={`mailto:${profile.contact.email}`}>{profile.contact.email}</a>
        </li>
        <li className={styles.link}>
          <FaLinkedin />
          <a href={profile.contact.linkedin} target="_blank" rel="noopener noreferrer">linkedin.com/in/kaushi-kavindaya</a>
        </li>
        <li className={styles.link}>
          <FaGithub />
          <a href={profile.contact.github} target="_blank" rel="noopener noreferrer">github.com/KaushiKavindaya</a>
        </li>
         <li className={styles.link}>
          <FaPhone />
          <a href={`tel:${profile.contact.phone}`}>{profile.contact.phone}</a>
        </li>
      </ul>
    </footer>
  );
};

export default Contact;