import React from 'react';
import styles from './Skills.module.css';
import { skills, softSkills } from '../../data/data';
import { FaCheckCircle } from 'react-icons/fa';

const Skills = () => {
  return (
    <section id="skills" className='container'>
      <h2>My Skills</h2>
      <div className={styles.skillsContainer}>
        <div className={styles.skillCategory}>
            <h3>Technical Skills</h3>
            <div className={styles.skillList}>
                {skills.map((skill, id) => (
                    <article key={id} className={styles.skill}>
                        <FaCheckCircle className={styles.skillIcon}/>
                        <h4>{skill.title}</h4>
                    </article>
                ))}
            </div>
        </div>
        <div className={styles.skillCategory}>
            <h3>Soft Skills</h3>
             <div className={styles.skillList}>
                {softSkills.map((skill, id) => (
                    <article key={id} className={styles.skill}>
                        <FaCheckCircle className={styles.skillIcon}/>
                        <h4>{skill}</h4>
                    </article>
                ))}
            </div>
        </div>
      </div>
    </section>
  )
}

export default Skills;