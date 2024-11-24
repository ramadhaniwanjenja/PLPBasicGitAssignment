import React from 'react';
import styles from '../CourseLayout.module.css';

export function WeekSection({ title, content }) {
  return (
    <section className={styles.weekSection}>
      <h2 className={styles.weekTitle}>{title}</h2>
      <div className={styles.weekContent}>{content}</div>
    </section>
  );
}