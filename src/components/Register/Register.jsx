import React from "react";
import styles from './Register.module.css';
import User from "./User";
import Password from "./Password";
import Mail from "./Mail";
import Button from "../Button/Button";

const Register = ({className, buttonClassName}) => {
  return (
    <div className={` ${styles.container} ${className}`}>
      <h2 className={styles.title}>Register</h2>
      <div className={styles.formGroup}>
        <User />
        <Password />
        <Mail />
        <Button title="Register" className={`${styles.registerButton} ${buttonClassName}`} />
      </div>
    </div>
  );
};

export default Register;
