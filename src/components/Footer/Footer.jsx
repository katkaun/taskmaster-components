import React from 'react';
import styles from './Footer.module.css';
import Image from '../Image/Image';
import Logo from '../Logo/Logo';

function Footer() {
  return (
    <section className={styles.footer}>
      <div className={styles.footerRow}>
        <div className={styles.footerCol}>
          <ul className={styles.links}>
            <li><Logo /></li>
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
            <Image imageName="facebook" alt="Facebook" />
            <Image imageName="youtube" alt="YouTube" />
            <Image imageName="x" alt="X (formerly Twitter)" />
            <Image imageName="instagram" alt="Instagram" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;