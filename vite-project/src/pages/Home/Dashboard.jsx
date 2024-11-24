import React from 'react';
import { CourseCard } from './CourseCard';
import { ProgressCard } from './ProgressCard';
import styles from './Dashboard.module.css';
import {Link} from "react-router-dom"

const courseCategories = ['All', 'IT and software', 'Business', 'Media Training', 'Art'];
const ongoingCourses = [
  {
    category: 'IT and software',
    rating: '4.8',
    title: 'UI/UX DESIGN',
    duration: 'Duration: 3-4 months',
    students: '20',
    avatars: ['https://cdn.builder.io/api/v1/image/assets/TEMP/fd84c5408b1ba4201309b9f2fce3d08374f0d37408a601b2bf6201f10d832472?placeholderIfAbsent=true&apiKey=948df72a40ee4e568bae6fc607598694', 'https://cdn.builder.io/api/v1/image/assets/TEMP/759f8825c5c36a635632353d280e0cc5eb674af22e40573888e65eb1914bac80?placeholderIfAbsent=true&apiKey=948df72a40ee4e568bae6fc607598694']
  },
  {
    category: 'Business',
    rating: '4.5',
    title: 'DIGITAL MARKETING',
    duration: 'Duration: 2-6 months',
    students: '25'
  },
  {
    category: 'Media Training',
    rating: '4.6',
    title: 'VIDEO EDITING',
    duration: 'Duration: 3-6 months',
    students: '15'
  },
  {
    category: 'IT and software',
    rating: '4.7',
    title: 'GRAPHIC DESIGN',
    duration: 'Duration: 3-6 months',
    students: '17'
  }
];

export const Dashboard = () => {
  return (
    <main className={styles.landingPage}>
      <nav className={styles.sidebar}>
        <div className={styles.sidebarContent}>
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/5af02bbf1dbe2c914d0b750758a7dab76226075575e15bfb3cb6420169aa4ca2?placeholderIfAbsent=true&apiKey=948df72a40ee4e568bae6fc607598694" alt="Logo" className={styles.logo} />
          <ul className={styles.navList}>
          <Link to="/" style={{color:"inherit",textDecoration:"none"}} >
  <li className={styles.navItem}>
    <span className={styles.navIcon} />
    <span>Home</span>
  </li>
</Link>
            <Link to="/mentorprofile" style={{color:"inherit",textDecoration:"none"}} >
  <li className={styles.navItem}>
    <span className={styles.navIcon} />
    <span>Mentors</span>
  </li>
</Link>
<Link to="/coursemodule" style={{color:"inherit",textDecoration:"none"}} >
  <li className={styles.navItem}>
    <span className={styles.navIcon} />
    <span>Courses</span>
  </li>
</Link>
<Link to="/login" style={{color:"inherit",textDecoration:"none"}} >
  <li className={styles.navItem}>
    <span className={styles.navIcon} />
    <span>Settings</span>
  </li>
</Link>
<Link to="/signup" style={{color:"inherit",textDecoration:"none"}} >
  <li className={styles.navItem}>
    <span className={styles.navIcon} />
    <span>signup</span>
  </li>
</Link>
          </ul>
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/cce87849c2ff2bf3f8ed57804dd3a554d746d000677e7bb6adc650d8eb9f32f4?placeholderIfAbsent=true&apiKey=948df72a40ee4e568bae6fc607598694" alt="Profile" className={styles.profileImage} />
        </div>
      </nav>

      <section className={styles.mainContent}>
        <h1 className={styles.welcomeTitle}>Welcome!</h1>
        
        <nav className={styles.categoryNav}>
          {courseCategories.map((category, index) => (
            <button 
              key={index}
              className={`${styles.categoryButton} ${index === 0 ? styles.active : ''}`}
            >
              <span className={styles.categoryIcon} />
              {category}
            </button>
          ))}
        </nav>

        <h2 className={styles.sectionTitle}>Currently Ongoing</h2>
        
        <div className={styles.courseGrid}>
          {ongoingCourses.map((course, index) => (
            <CourseCard key={index} {...course} />
          ))}
        </div>
      </section>

      <aside className={styles.progressSection}>
        <div className={styles.progressHeader}>
          <h2 className={styles.progressTitle}>progress Tracking</h2>
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/71dd183f8d79e79315deba31e134429a4588c041b5461e89ce0de150920be769?placeholderIfAbsent=true&apiKey=948df72a40ee4e568bae6fc607598694" alt="User" className={styles.userAvatar} />
          <span className={styles.userName}>Anna</span>
        </div>

        <ProgressCard
          category="IT and software"
          title="UI/UX DESIGN"
          students="20"
          progress="61"
          isCompleted={false}
        />

        <ProgressCard
          category="IT and software"
          title="GRAPHIC DESIGN"
          students="17"
          progress="100"
          isCompleted={true}
        />

        <button className={styles.certificateButton}>Check certificate</button>
        <div className={styles.progressFooter} />
      </aside>
    </main>
  );
};
export default Dashboard;
