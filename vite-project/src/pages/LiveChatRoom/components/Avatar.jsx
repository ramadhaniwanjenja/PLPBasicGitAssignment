import React from 'react';
import styles from '../styles/Avatar.module.css';

export const Avatar = ({ src, size = 'medium', alt }) => {
  return (
    <img
      loading="lazy"
      src={src}
      className={`${styles.avatar} ${styles[size]}`}
      alt={alt}
    />
  );
};