import React from "react";
import styles from './Register.module.css';
import User from "./User";
import Password from "./Password";
import Mail from "./Mail";
import Button from "../Button/Button";

const Register = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Register</h2>
      <div className={styles.formGroup}>
        <User />
        <Password />
        <Mail />
        <Button title="Register" className={styles.registerButton} />
      </div>
    </div>
  );
};

export default Register;
