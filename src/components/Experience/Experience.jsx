import React from 'react';
import styles from './Experience.module.css';
import { experience, education } from '../../data/data';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';

const Experience = () => {
  return (
    <section id="experience" className='container'>
      <h2>My Journey</h2>
      <div className={styles.timeline}>
        
        {/* Work Experience */}
        {experience.map((item, id) => (
          <div key={id} className={`${styles.timelineItem} ${styles.work}`}>
            <div className={styles.iconWrapper}><FaBriefcase /></div>
            <div className={styles.timelineContent}>
              <h3>{item.role}</h3>
              <h4>{item.company}</h4>
              <span className={styles.date}>{item.date}</span>
              <ul>
                {item.description.map((point, index) => (
                    <li key={index}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}

        {/* Education */}
        {education.map((item, id) => (
          <div key={id} className={`${styles.timelineItem} ${styles.education}`}>
            <div className={styles.iconWrapper}><FaGraduationCap /></div>
            <div className={styles.timelineContent}>
              <h3>{item.degree}</h3>
              <h4>{item.institution}</h4>
              <span className={styles.date}>{item.date}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;