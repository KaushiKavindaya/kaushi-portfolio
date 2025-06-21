import React from 'react';
import styles from './About.module.css';
import { profile } from '../../data/data';

const About = () => {
  return (
    <section id="about" className={`container ${styles.aboutContainer}`}>
        <h2>About Me</h2>
        <div className={styles.content}>
            <p>{profile.bio}</p>
        </div>
    </section>
  )
}

export default About;