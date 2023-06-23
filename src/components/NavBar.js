/* eslint-disable */
import React from 'react';
import { NavLink } from 'react-router-dom';
import {BiSolidUser} from 'react-icons/bi'
import styles from '../styles/Navbar.module.css'

function NavBar() {
 
  return (
    <nav>
    <div className={styles.navDiv}>
      <h1>Bookstore CMS</h1>
      <NavLink  className={styles.navHome} to="/">BOOKS</NavLink>
      <NavLink  className={styles.navCategories} to="categories">CATEGORIES</NavLink>
    </div>
    <span className={styles.navUser}>
    <BiSolidUser/>
    </span>
    </nav>

  );
}

export default NavBar;
