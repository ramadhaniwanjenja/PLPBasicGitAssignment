import React from 'react';
import styles from '../CourseLayout.module.css';

export function NavItem({ icon, label, isActive }) {
  return (
    <>
      <div className={`${styles.navItem} ${isActive ? styles.navItemActive : styles.navItemInactive}`}>
        {icon && <img src={icon} alt="" className={styles.logo} />}
      </div>
      <div className={styles.navText}>{label}</div>
    </>
  );
}