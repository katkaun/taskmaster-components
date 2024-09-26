import React from "react";
import styles from "./Navbar.module.css";
import Logo from "../Logo/Logo";

const Navbar = ({ icons = [], logo }) => {
  return (
    <div className={styles.navbar}>
      <div className={styles.navbarLogo}>{logo ? logo : <Logo />}</div>
      <div className={styles.navbarLinks}>
        {Array.isArray(icons) && icons.length > 0 ? (
          icons.map((Icon, index) => (
            <a key={index} href="#">
              <Icon />
            </a>
          ))
        ) : (
          <p>Icons not available</p>
        )}
      </div>
    </div>
  );
};

export default Navbar;
