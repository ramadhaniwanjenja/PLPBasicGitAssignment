import React from 'react';
import styles from '../styles/Dashboard.module.css';

export const AssignmentCard = ({ title, content }) => {
  return (
    <section className={styles.assignmentCard}>
      <header className={styles.cardHeader}>{title}</header>
      <div className={styles.cardContent}>{content}</div>
    </section>
  );
};
