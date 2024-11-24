import React from 'react';
import styles from '../styles/MentorCard.module.css';

export const MentorCard = ({ name, title, image, experience, education, career, tools }) => {
  return (
    <article className={styles.mentorCard}>
      <div className={styles.imageContainer}>
        <img src={image} alt={`${name} profile`} className={styles.profileImage} />
        <div className={styles.mentorInfo}>
          <h2 className={styles.mentorName}>{name}</h2>
          <p className={styles.mentorTitle}>{title}</p>
        </div>
      </div>
      <h3 className={styles.sectionTitle}>Experience and info</h3>
      <div className={styles.infoContainer}>
        <p className={styles.experience}>{experience}</p>
        <p className={styles.education}><strong>Education:</strong> {education}</p>
        <p className={styles.career}><strong>Career:</strong> {career}</p>
        <p className={styles.tools}><strong>Tools:</strong> {tools}</p>
        <button className={styles.contactButton}>Talk to mentor</button>
      </div>
    </article>
  );
};