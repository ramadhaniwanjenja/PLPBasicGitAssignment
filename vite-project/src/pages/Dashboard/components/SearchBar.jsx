import React from 'react';
import styles from '../styles/Dashboard.module.css';

export const SearchBar = () => {
  return (
    <form className={styles.searchContainer} role="search">
      <label htmlFor="searchInput" className="visually-hidden">Search</label>
      <input
        type="search"
        id="searchInput"
        className={styles.searchInput}
        placeholder="Search..."
        aria-label="Search"
      />
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/44f2a50ee55e34eccb510afac23e21a0182c1ee1b3265d7022ec19c0ba0d1f83?placeholderIfAbsent=true&apiKey=948df72a40ee4e568bae6fc607598694"
        alt=""
        className={styles.searchIcon}
        aria-hidden="true"
      />
    </form>
  );
};