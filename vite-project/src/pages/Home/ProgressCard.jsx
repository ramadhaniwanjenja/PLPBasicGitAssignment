import React from 'react';
import styles from './Dashboard.module.css';

export const ProgressCard = ({ category, title, students, progress, isCompleted }) => {
  return (
    <article className={styles.progressCard}>
      <div className={styles.progressContent}>
        <span className={styles.categoryBadge}>
          <span className={styles.categoryIcon} />
          <span>{category}</span>
        </span>
        <h3 className={styles.courseTitle}>{title}</h3>
        <span className={styles.studentCount}>{students} students</span>
      </div>
      <div className={styles.progressStatus}>
        <span>{isCompleted ? '100% Done' : `${progress}% Done`}</span>
        <img
          src={`http://b.io/ext_${isCompleted ? '9' : '8'}-`}
          alt=""
          className={styles.progressIcon}
        />
      </div>
    </article>
  );
};
export default ProgressCard;
