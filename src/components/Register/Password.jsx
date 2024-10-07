import React from "react";
import styles from "./Register.module.css";

const Password = ({ onPasswordChange }) => {
  const onPasswordComplete = (e) => {
    onPasswordChange(e.target.value);
  };

  return (
    <div className={styles.formGroup}>
      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        onChange={onPasswordComplete}
        placeholder="Enter password"
      />
    </div>
  );
};

export default Password;
