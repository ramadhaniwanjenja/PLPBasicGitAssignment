import React from 'react';
import { ProfileImage } from './components/ProfileImage';
import { InfoField } from './components/InfoField';
import { ActionButton } from './components/ActionButton';
import styles from './styles/UserProfile.module.css';

const UserProfile = () => {
  const userData = {
    name: "Anna Bella",
    phone: "+250 749 520 624",
    email: "example@gmail.com",
    gender: "Female",
    nationality: "Nigeria",
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/cce87849c2ff2bf3f8ed57804dd3a554d746d000677e7bb6adc650d8eb9f32f4?placeholderIfAbsent=true&apiKey=948df72a40ee4e568bae6fc607598694"
  };

  return (
    <main className={styles.profileContainer}>
      <header className={styles.profileHeader}>
        <h1 className={styles.pageTitle}>User Profile</h1>
        <p className={styles.pageSubtitle}>
          Manage your details and change your password
        </p>
      </header>

      <section className={styles.contentWrapper}>
        <aside className={styles.sidebarSection}>
          <ProfileImage
            name={userData.name}
            phone={userData.phone}
            imageUrl={userData.imageUrl}
          />
        </aside>

        <article className={styles.mainContent}>
          <section className={styles.generalInfo}>
            <h2 className={styles.sectionTitle}>General information</h2>
            <div className={styles.infoGrid}>
              <InfoField label="Full name" value={userData.name} />
              <InfoField label="Gender" value={userData.gender} />
              <InfoField label="Nationality" value={userData.nationality} />
            </div>
            <ActionButton text="Update" variant="primary" />
          </section>

          <section className={styles.securitySection}>
            <h2 className={styles.sectionTitle}>Security</h2>
            <div className={styles.securityGrid}>
              <InfoField label="Email" value={userData.email} />
              <InfoField label="Phone number" value={userData.phone} />
              <InfoField label="Password" value="..............." />
            </div>
            <div className={styles.actionButtons}>
              <ActionButton text="change password" />
              <ActionButton text="change phone number" />
            </div>
          </section>
        </article>
      </section>

      <footer className={styles.profileFooter}>
        <ActionButton text="sign out" variant="danger" />
      </footer>
    </main>
  );
};

export default UserProfile;