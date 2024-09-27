import React from "react";
import styles from "./Navbar.module.css";

const Navbar = ({ className, icons = [], logo }) => {
  return (
    <div className={`${styles.navbar} ${className}`}>
      <div className={styles.navbarLogo}>{logo || null}</div>
      <div className={styles.navbarLinks}>
        {Array.isArray(icons) && icons.length > 0 ? (
          icons.map(
            (
              Icon,
              index // Icon här refererar till varje komponent
            ) => (
              <div key={index} href="#">
                <Icon /> {/* Renderar den aktuella ikonen */}
              </div>
            )
          )
        ) : (
          <p>Icons not available</p>
        )}
      </div>
    </div>
  );
};

export default Navbar;
