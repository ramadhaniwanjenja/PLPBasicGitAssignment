import React from 'react';
import styles from './CourseLayout.module.css';
import { NavItem } from './components/NavItem';
import { WeekSection } from './components/WeekSection';

const navigationItems = [
  { label: 'Home', isActive: false },
  { label: 'Mentors', isActive: false },
  { label: 'Courses', isActive: true },
];

const weekSections = [
  { title: 'WEEK 1-2', content: 'INTRODUCTION TO UI/UX DESIGN' },
  { title: 'WEEK 3', content: 'USER RESEARCH AND PERSONA' },
  { title: 'WEEK 4-5', content: 'WIREFRAMING AND PROTOTYPING' },
  { title: 'WEEK 6', content: 'VISUAL DESIGN PRINCIPLES' },
];

export function CourseLayout() {
  return (
    <main className={styles.mainContainer}>
      <div className={styles.contentWrapper}>
        <aside className={styles.sidebarContainer}>
          <nav className={styles.navigationMenu}>
            <div className={styles.menuWrapper}>
              <div className={styles.menuContent}>
                <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/5af02bbf1dbe2c914d0b750758a7dab76226075575e15bfb3cb6420169aa4ca2?placeholderIfAbsent=true&apiKey=948df72a40ee4e568bae6fc607598694" alt="" className={styles.logo} />
                {navigationItems.map((item, index) => (
                  <NavItem key={index} {...item} />
                ))}
                <div className={styles.navItem} />
                <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/cce87849c2ff2bf3f8ed57804dd3a554d746d000677e7bb6adc650d8eb9f32f4?placeholderIfAbsent=true&apiKey=948df72a40ee4e568bae6fc607598694" alt="" className={styles.profileImage} />
              </div>
            </div>
            <div className={styles.modulesContainer}>
              <span>Modules</span>
              <span className={styles.moduleItem}>Assignment</span>
              <span className={styles.moduleItem}>Quizzes</span>
              <span className={styles.moduleItem}>Forums</span>
            </div>
          </nav>
        </aside>

        <div className={styles.mainContent}>
          <div className={styles.courseContent}>
            <header>
              <h1 className={styles.courseHeader}>WELCOME TO UI/UX DESIGN</h1>
            </header>
            {weekSections.map((section, index) => (
              <WeekSection key={index} {...section} />
            ))}
          </div>

          <aside className={styles.assessmentPanel}>
            <h2 className={styles.assessmentTitle}>Assessments</h2>
            <div>Quiz 1: <span className={styles.quizScore}>18 out of 20</span></div>
            <div>Assignment 1: <span className={styles.assignmentStatus}>completed!</span></div>
            <h3 className={styles.assessmentTitle}>Upcoming</h3>
            <div>Quiz 2</div>
            <div>Assignment 2</div>
          </aside>
        </div>
      </div>
    </main>
  );
}
export default CourseLayout;