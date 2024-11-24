import React from 'react';
import styles from './SignupForm.module.css';

export function FormInput({ label, type = 'text', id, placeholder, value }) {
  return (
    <div className={styles.inputWrapper}>
      <label htmlFor={id} className={styles.inputLabel}>
        {label}
      </label>
      <input
        type={type}
        id={id}
        className={styles.textInput}
        placeholder={placeholder}
        defaultValue={value}
        aria-label={label}
      />
    </div>
  );
}