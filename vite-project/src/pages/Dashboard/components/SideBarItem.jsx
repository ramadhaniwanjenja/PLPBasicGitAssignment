import React from 'react';
import styles from '../styles/Dashboard.module.css';

export const SidebarItem = ({ icon, label, isActive }) => {
  return (
    <div className={`${styles.sidebarItem} ${isActive ? styles.active : ''}`}>
      {icon && <img loading="lazy" src={icon} alt="" className={styles.sidebarIcon} />}
      <span className={styles.sidebarLabel}>{label}</span>
    </div>
  );
};
