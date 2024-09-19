import React from "react";
import styles from "./Button.module.css";

const Button = ({ title }) => {
  if (!title) {
    console.error("title is missnig in login button");
  }
  return (
    <div className={styles.buttonContainer}>
      <button>{title}</button>
    </div>
  );
};

export default Button;
