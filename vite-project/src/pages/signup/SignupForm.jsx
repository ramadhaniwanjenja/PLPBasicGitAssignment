import React from 'react';
import { FormInput } from './FormInput';
import { SocialLogin } from './SocialLogin';
import styles from './SignupForm.module.css';

export function SignupForm() {
  return (
    <main className={styles.signupContainer}>
      <div className={styles.contentWrapper}>
        <section className={styles.formSection}>
          <form className={styles.formContent}>
            <h1 className={styles.formTitle}>SIGN UP</h1>
            
            <div className={styles.inputGroup}>
              <FormInput
                label="First name"
                id="firstName"
                placeholder="Micheal"
              />
              <FormInput
                label="Last name"
                id="lastName"
                placeholder="John"
              />
            </div>

            <FormInput
  label="Phone number"
  id="phone"
  type="tel"
  placeholder="+250 524 936 714"
  className={styles.textInput} /* Pass the CSS class explicitly if needed */
/>

<FormInput
  label="E-mail"
  id="email"
  type="email"
  placeholder="example@gmail.com"
  className={styles.textInput}
/>


            <div className={styles.inputGroup}>
              <FormInput
                label="Password"
                id="password"
                type="password"
                placeholder="............."
              />
              <FormInput
                label="Confirm Password"
                id="confirmPassword"
                type="password"
                placeholder="Confirm your password"
              />
            </div>

            <button type="submit" className={styles.submitButton}>
              Sign up
            </button>

            <SocialLogin />
          </form>
        </section>

        <section className={styles.welcomeSection}>
          <h2 className={styles.welcomeText}>
            <span className={styles.welcomeHighlight}>WELCOME TO</span>
            COURSE CRAFT
          </h2>
        </section>
      </div>
    </main>
  );
}
export default SignupForm;