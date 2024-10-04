<<<<<<< HEAD
import React from "react";
=======
import React from 'react';
>>>>>>> 6952af284e6063967c3f140da9bef3a751fa9da9
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