import React from 'react';
import styles from './Projects.module.css';
import { projects } from '../../data/data';

const Projects = () => {
  return (
    <section id="projects" className='container'>
      <h2>My Recent Work</h2>
      <div className={styles.projectsContainer}>
        {projects.map((project, id) => (
          <article key={id} className={styles.projectItem}>
            <div className={styles.projectContent}>
                <h3>{project.title} ({project.year})</h3>
                <p>{project.description}</p>
                <ul className={styles.technologies}>
                    {project.technologies.map((tech, id) => (
                        <li key={id}>{tech}</li>
                    ))}
                </ul>
                <div className={styles.projectCta}>
                    <a href={project.github} className={styles.btn} target="_blank" rel="noopener noreferrer">GitHub</a>
                    {/* Add a live demo link if you have one */}
                    {/* <a href={project.demo} className={`${styles.btn} ${styles.btnPrimary}`} target="_blank">Live Demo</a> */}
                </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;