import styles from '../styles/NavigationItem.module.css';
import {Link} from "react-router-dom"

// eslint-disable-next-line react/prop-types
export const NavigationItem = ({ icon, label, isActive,link }) => {
  return (
    <Link to={link} style={{ textDecoration: "none", color: "inherit" }}>
    <div className={styles.navItem}>
      {icon && <img src={icon} alt={`${label} icon`} className={styles.navIcon} />}
      <div className={`${styles.navCircle} ${isActive ? styles.active : ''}`} />
      <div className={styles.navLabel}>{label}</div>
    </div>
    </Link>
  );
};