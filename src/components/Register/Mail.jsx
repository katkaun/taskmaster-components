import React from "react";
import styles from "./Register.module.css";

const Mail = ({ onMailChange }) => {
  const onMailComplete = (e) => {
    onMailChange(e.target.value);
  };

  return (
    <div className={styles.formGroup}>
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        onChange={onMailComplete}
        placeholder="Enter email"
      />
    </div>
  );
};

export default Mail;
