import React from "react";
import styles from './Register.module.css';
import User from "./User";
import Password from "./Password";
import Mail from "./Mail";

const Register = () => {
    return(
        <div className={styles.container}>
        <h2 className={styles.title}>Register</h2>
        <div className={styles.formGroup}>
            <User />
            <Password />
            <Mail />
            <button type="submit">Register</button>
        </div>
    </div>
    )
};

export default Register; 