import React from 'react';
import styles from './VisualDesignPrinciples.module.css';

export default function VisualDesignPrinciples() {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>
        WEEK 6: VISUAL DESIGN PRINCIPLES
      </h1>
      
      <section className={styles.definitionCard}>
        <h2>Hierarchy</h2>
        <h3>Definition:</h3>
        <p className={styles.regularText}>
          Visual hierarchy refers to the arrangement of elements in a way that
          signifies their importance or guides users through a flow. It helps
          users focus on the most critical elements first.
        </p>
      </section>

      <section className={styles.applicationCard}>
        <h2>How to Apply:</h2>
        <ul className={styles.regularText}>
          <li>
            Use larger fonts or bold styling for headlines.
          </li>
          <li>
            Use contrast (colour, size, or placement) to draw attention to
            key elements like CTAs (Call-to-Actions).
          </li>
          <li>
            Position important items higher on the page (above the fold) for
            greater visibility.
          </li>
        </ul>
        
        <p className={styles.regularText}>
          Example: A button that is larger and brightly coloured on a landing
          page draws the user's attention to it as the primary action.
        </p>
      </section>

      <nav className={styles.navigationWrapper}>
        <button className={styles.navButton} tabIndex="0">Previous</button>
        <button className={styles.navButton} tabIndex="0">Next</button>
      </nav>
    </main>
  );
}
