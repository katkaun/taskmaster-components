import React from "react";
import styles from './Navigation.module.css';

function Navigation() {
    return (
        <ul className={styles.ul}>
            <li><a href="#">About us</a></li>
            <li><a href="#">Updates</a></li>
            <li><a href="#">Contact us</a></li>
            <li className={styles.floatRight}><a className={styles.active} href="#">Home</a></li>
        </ul>
    );
}

export default Navigation;