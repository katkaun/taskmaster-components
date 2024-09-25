import React from "react";
import styles from "./Navbar.module.css";

const Navbar = ({ icons, links, title, logo }) => {
  return (
    <div className={styles.navbar}>
      <div className={styles.navbarLogo}>
        <h1>Plats för Logo</h1>
      </div>
      <div className={styles.navbarLinks}>
        {icons.map((Icon, index) => (
          <a key={index} href="#">
            <Icon /> {/* Renderar varje ikonkomponent */}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Navbar;