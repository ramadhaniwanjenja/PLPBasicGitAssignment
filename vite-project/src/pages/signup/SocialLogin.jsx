import React from 'react';
import styles from './SignupForm.module.css';

export function SocialLogin() {
  return (
    <section className={styles.socialLoginSection}>
      <div className={styles.divider} />
      <button className={styles.socialButton} aria-label="Login with Google" />
      <button className={styles.socialButton} aria-label="Login with Facebook" />
      <button className={styles.socialButton} aria-label="Login with Twitter" />
      <div className={styles.divider} />
    </section>
  );
}