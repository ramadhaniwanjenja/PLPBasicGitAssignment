import React from 'react';
import styles from './SideNavItem.module.css';

export const SideNavItem = ({ icon, label, isActive }) => {
  return (
    <div className={`${styles.navItem} ${isActive ? styles.active : ''}`}>
      {icon && <img loading="lazy" src={icon} alt="" className={styles.icon} />}
      <span className={styles.label}>{label}</span>
    </div>
  );
};