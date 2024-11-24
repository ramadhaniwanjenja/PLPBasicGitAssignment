import React from 'react';
import styles from '../styles/UserProfile.module.css';

export const ActionButton = ({ text, variant = 'primary', onClick }) => {
  return (
    <button 
      className={`${styles.actionButton} ${styles[variant]}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};