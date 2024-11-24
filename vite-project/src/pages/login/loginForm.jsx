import React from 'react';
import googleLogo from './assets/google.png';
import facebookLogo from './assets/icloud.png'; // Replace this with the correct Facebook logo
import twitterLogo from './assets/x.png'; // X is for Twitter

import styles from './LoginForm.module.css';

export default function LoginForm() {
  const socialPlatforms = [
    { name: 'Google', imgSrc: googleLogo },
    { name: 'Facebook', imgSrc: facebookLogo },
    { name: 'Twitter', imgSrc: twitterLogo },
  ];
  

  return (
    <main className={styles.loginContainer}>
      <div className={styles.contentWrapper}>
        <section className={styles.formSection}>
          <div className={styles.formContent}>
            <h1 className={styles.loginTitle}>LOG IN</h1>
            <form>
              <div>
                <label htmlFor="email" className={styles.inputLabel}>
                  Username or E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  className={styles.inputField}
                  placeholder="Micheal john / example@gmail.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="password" className={styles.inputLabel}>
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className={styles.inputField}
                  required
                />
              </div>
              <button type="submit" className={styles.loginButton}>
                Log In
              </button>
            </form>

            <div className={styles.socialLoginSection}>
              <div className={styles.socialDivider} />
              <p className={styles.inputLabel}>or sign up with</p>
              <div className={styles.contentWrapper}>
              <div className={styles.contentWrapper}>
  {socialPlatforms.map((platform) => (
    <button
      key={platform.name}
      className={styles.socialButton}
      aria-label={`Sign in with ${platform.name}`}
    >
      <img
        src={platform.imgSrc}
        alt={`${platform.name} logo`}
        className={styles.socialIcon}
      />
    </button>
  ))}
</div>

              </div>
            </div>
          </div>
        </section>

        <section className={styles.welcomeSection}>
          <h2 className={styles.welcomeText}>
            <span className={styles.welcomeHighlight}>WELCOME TO</span>
            <br /> COURSE CRAFT
          </h2>
        </section>
      </div>
    </main>
  );
}

