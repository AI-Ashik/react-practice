import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./styles/NavBar.module.css";

const NavBar = () => {
  return (
    <div>
      <nav className={styles.nav}>
        <ul className={styles.navLinks}>
          <li>
            <NavLink to="/" className={styles.activeLink}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={styles.activeLink}>
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink to="/blogs" className={styles.activeLink}>
              Blogs
            </NavLink>
          </li>
          <li>
            <NavLink to="/add-blog" className={styles.activeLink}>
              Add Blog
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
