import React from 'react';
import styles from './QuizDashboard.module.css';
import { SideNavItem } from './components/SideNavItem';
import { QuizCard } from './components/QuizCard';

const navItems = [
  { label: 'Home', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/067091cfade3b022546f7e7425b6ea84a9dd808f080dcae1e3edf2ee3ef07aa5?placeholderIfAbsent=true&apiKey=948df72a40ee4e568bae6fc607598694' },
  { label: 'Mentors', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/cce87849c2ff2bf3f8ed57804dd3a554d746d000677e7bb6adc650d8eb9f32f4?placeholderIfAbsent=true&apiKey=948df72a40ee4e568bae6fc607598694' },
  { label: 'Courses', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/7e8ff92cf94a3ce58de052156646a2bfdad5f875f38040bdab195ea89405be18?placeholderIfAbsent=true&apiKey=948df72a40ee4e568bae6fc607598694' },
  { label: 'Modules', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/44f2a50ee55e34eccb510afac23e21a0182c1ee1b3265d7022ec19c0ba0d1f83?placeholderIfAbsent=true&apiKey=948df72a40ee4e568bae6fc607598694' }
];

export const QuizDashboard = () => {
  return (
    <main className={styles.dashboard}>
      <nav className={styles.sidebar}>
        <div className={styles.navContent}>
          {navItems.map((item, index) => (
            <SideNavItem
              key={index}
              icon={item.icon}
              label={item.label}
              isActive={index === 2}
            />
          ))}
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/cce87849c2ff2bf3f8ed57804dd3a554d746d000677e7bb6adc650d8eb9f32f4?placeholderIfAbsent=true&apiKey=948df72a40ee4e568bae6fc607598694"
            alt="Profile"
            className={styles.profileImage}
          />
        </div>
      </nav>
      
      <section className={styles.mainContent}>
        <header className={styles.header}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/7e8ff92cf94a3ce58de052156646a2bfdad5f875f38040bdab195ea89405be18?placeholderIfAbsent=true&apiKey=948df72a40ee4e568bae6fc607598694"
            alt=""
            className={styles.logo}
          />
          <h1 className={styles.title}>Quizzes</h1>
          <form className={styles.searchForm}>
            <label htmlFor="search" className="visually-hidden">Search</label>
            <input
              type="search"
              id="search"
              placeholder="Search..."
              className={styles.searchInput}
            />
          </form>
        </header>

        <QuizCard
          title="Upcoming Quiz"
          content="Quiz 2"
        />

        <div className={styles.contentGrid}>
          <nav className={styles.moduleNav}>
            <ul>
              <li>Modules</li>
              <li>Assignment</li>
              <li>Quizzes</li>
              <li>Forums</li>
            </ul>
          </nav>

          <section className={styles.quizResults}>
            <QuizCard
              title="Past Quiz"
              content={<span>Quiz 1: <span className={styles.score}>18 out of 20</span></span>}
            />
          </section>
        </div>
      </section>
    </main>
  );
};

export default QuizDashboard;