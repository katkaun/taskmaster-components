import React from "react";
import styles from "./Register.module.css";

const User = ({ onUserChange }) => {
  const onUserComplete = (e) => {
    onUserChange(e.target.value);
  };

  return (
    <div className={styles.formGroup}>
      <label htmlFor="username">Username</label>
      <input
        type="text"
        id="username"
        placeholder="Enter username"
        onChange={onUserComplete}
        
      />
    </div>
  );
};

export default User;
