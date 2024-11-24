import React from 'react';
import styles from '../styles/UserProfile.module.css';

export const ProfileImage = ({ name, phone, imageUrl }) => {
  return (
    <section className={styles.profileCard}>
      <img
        loading="lazy"
        src={imageUrl}
        alt={`Profile picture of ${name}`}
        className={styles.profileImage}
      />
      <h2 className={styles.profileName}>{name}</h2>
      <p className={styles.profilePhone}>{phone}</p>
    </section>
  );
};