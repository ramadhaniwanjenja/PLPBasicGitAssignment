import React from 'react';
import styles from './Dashboard.module.css';

export const CourseCard = ({ category, rating, title, duration, students, avatars }) => {
  return (
    <article className={styles.courseCard}>
      <div className={styles.cardHeader}>
        <span className={styles.categoryBadge}>
          <span className={styles.categoryIcon} />
          <span>{category}</span>
        </span>
        <span className={styles.ratingBadge}>
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/e64808426076045b219657d3a21af31d3fa77843c5130f1d5bf5db83cbed743c?placeholderIfAbsent=true&apiKey=948df72a40ee4e568bae6fc607598694" alt="" className={styles.ratingIcon} />
          <span>{rating}</span>
        </span>
      </div>
      <h3 className={styles.courseTitle}>{title}</h3>
      <div className={styles.cardFooter}>
        <span className={styles.duration}>{duration}</span>
        <div className={styles.studentsSection}>
          <span className={styles.studentCount}>{students} students</span>
          {avatars && (
            <div className={styles.avatarGroup}>
              {avatars.map((avatar, index) => (
                <img 
                  key={index}
                  src={avatar}
                  alt=""
                  className={styles.studentAvatar}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </article>
  );
};
export default CourseCard;
