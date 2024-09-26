import React from 'react';
import styles from './Footer.module.css';

function Footer() {
  return (
    <section className={styles.footer}>
      <div className={styles.footerRow}>
        <div className={styles.footerCol}>
          <ul className={styles.links}>
            <li>
              <img src="/armin.jpg" alt="TaskMasterAI Logo" width="250" height="250" />
            </li>
          </ul>
        </div>
        <div className={styles.footerCol}>
          <ul className={styles.links}>
            <li><a href="#">Home</a></li>
            <li><a href="#">About us</a></li>
            <li><a href="#">Contact us</a></li>
          </ul>
        </div>
        <div className={styles.footerCol}>
          <ul className={styles.links}>
            <li><a href="#">Login</a></li>
            <li><a href="#">Register</a></li>
            <li><a href="#">Kalender</a></li>
          </ul>
        </div>
        <div className={styles.footerCol}>
          <h4>TaskMasterAI</h4>
          <p>
            Börja ditt äventyr mot ett mer ordnat liv med TaskMaster AI
          </p>
          <div className={styles.icons}>
            <img src="/facebook.png" alt="Facebook" width="50" height="50" />
            <img src="/youtube.png" alt="YouTube" width="50" height="50" />
            <img src="/x.png" alt="X" width="50" height="50" />
            <img src="/instagram.png" alt="Instagram" width="50" height="50" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
