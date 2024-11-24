import React from 'react';
import styles from '../styles/NavigationItem.module.css';
import {Link} from "react-router-dom"

export const NavigationItem = ({ icon, label, isActive }) => {
  return (
    <div className={styles.navItem}>
      {icon && <img src={icon} alt={`${label} icon`} className={styles.navIcon} />}
      <div className={`${styles.navCircle} ${isActive ? styles.active : ''}`} />
      <Link>
      <div className={styles.navLabel}>{label}
      </div></Link>
    </div>
  );
};