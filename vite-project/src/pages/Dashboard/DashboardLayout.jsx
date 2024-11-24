import React from 'react';
import { SidebarItem } from './components/SideBarItem'
import { AssignmentCard } from './components/AssigmentCard';
import { SearchBar } from './components/SearchBar';
import styles from './styles/Dashboard.module.css';

const sidebarItems = [
  { icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/067091cfade3b022546f7e7425b6ea84a9dd808f080dcae1e3edf2ee3ef07aa5?placeholderIfAbsent=true&apiKey=948df72a40ee4e568bae6fc607598694', label: 'Home' },
  { label: 'Mentors' },
  { label: 'Courses' },
];

const moduleItems = [
  { label: 'Modules' },
  { label: 'Assignment' },
  { label: 'Quizzes' },
  { label: 'Forums' },
];

export  function DashboardLayout() {
  return (
    <main className={styles.dashboardContainer}>
      <nav className={styles.sidebar}>
        <div className={styles.sidebarContent}>
          {sidebarItems.map((item, index) => (
            <SidebarItem
              key={index}
              icon={item.icon}
              label={item.label}
              isActive={index === 2}
            />
          ))}
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/cce87849c2ff2bf3f8ed57804dd3a554d746d000677e7bb6adc650d8eb9f32f4?placeholderIfAbsent=true&apiKey=948df72a40ee4e568bae6fc607598694"
            alt="User profile"
            className={styles.profileImage}
          />
        </div>
      </nav>

      <div className={styles.mainContent}>
        <header className={styles.dashboardHeader}>
          <div className={styles.headerContent}>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/7e8ff92cf94a3ce58de052156646a2bfdad5f875f38040bdab195ea89405be18?placeholderIfAbsent=true&apiKey=948df72a40ee4e568bae6fc607598694"
              alt=""
              className={styles.headerIcon}
            />
            <h1 className={styles.headerTitle}>Assignment</h1>
            <SearchBar />
          </div>
        </header>

        <AssignmentCard
          title="Upcoming assignments"
          content="Assignment 2: Design a landing page"
        />

        <div className={styles.contentGrid}>
          <nav className={styles.moduleNav}>
            {moduleItems.map((item, index) => (
              <button
                key={index}
                className={styles.moduleItem}
                tabIndex="0"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <AssignmentCard
            title="Past assignments"
            content={
              <>
                <p className={styles.assignmentScore}>
                  Assignment 1: <span className={styles.score}>100%</span>
                </p>
                <hr className={styles.divider} />
                <p className={styles.quizScore}>
                  Quiz 1: <span className={styles.score}>18 out of 20</span>
                </p>
              </>
            }
          />
        </div>
      </div>
    </main>
  );
}
export default DashboardLayout;