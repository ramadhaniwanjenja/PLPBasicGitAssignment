import React from 'react';
import styles from './QuizCard.module.css';

export const QuizCard = ({ title, content, variant = 'default' }) => {
  return (
    <section className={styles.quizCard}>
      <header className={`${styles.header} ${styles[variant]}`}>
        {title}
      </header>
      <div className={styles.content}>
        {content}
      </div>
    </section>
  );
};