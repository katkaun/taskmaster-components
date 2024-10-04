import React from 'react';
import styles from './Logout.module.css';

function Logout() {
    const logginOut = () => {
        alert("You have logged out!");
    };

    return (
        <button onClick={logginOut} className={styles.button}>Logout</button>
    );
}

export default Logout;