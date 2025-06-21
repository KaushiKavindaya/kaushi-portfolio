import React from 'react';
import styles from './Hero.module.css';
import { profile } from '../../data/data';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import profileImage from '../../assets/profile.jpeg'; 

const Hero = () => {
  return (
    <section id="hero" className={styles.container}>
      {/* Text Content */}
      <div className={styles.content}>
        <h1 className={styles.title}>{profile.name}</h1>
        <p className={styles.description}>{profile.title}</p>
        <div className={styles.socials}>
            <a href={profile.contact.linkedin} target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href={profile.contact.github} target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            <a href={`mailto:${profile.contact.email}`}><FaEnvelope /></a>
        </div>
        <a href={`mailto:${profile.contact.email}`} className={styles.contactBtn}>Contact Me</a>
      </div>
      
      {/* Profile Image */}
      <img 
        src={profileImage} 
        alt="Kaushi Kavindaya"  // <-- THE FIX IS HERE
        className={styles.heroImg} 
      />
    </section>
  );
};

export default Hero;