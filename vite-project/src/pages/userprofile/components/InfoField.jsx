import React from 'react';
import styles from '../styles/UserProfile.module.css';

export const InfoField = ({ label, value }) => {
  return (
    <section className={styles.infoField}>
      <label className={styles.fieldLabel}>{label}</label>
      <p className={styles.fieldValue}>{value}</p>
    </section>
  );
};