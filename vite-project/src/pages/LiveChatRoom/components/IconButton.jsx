import React from 'react';
import styles from '../styles/IconButton.module.css';

export const IconButton = ({ src, size = 'medium', alt }) => {
  return (
    <button className={styles.iconButton}>
      <img
        loading="lazy"
        src={src}
        className={`${styles.icon} ${styles[size]}`}
        alt={alt}
      />
    </button>
  );
};