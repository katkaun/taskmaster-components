import React, { useState } from "react";
import styles from "./Register.module.css";
import User from "./User";
import Password from "./Password";
import Mail from "./Mail";
import Button from "../Button/Button";

const Register = ({ className }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !password || !email) {
      alert("Please fill in all fields");
      return;
    }

    console.log("Submitted:", { username, password, email });
    //Clear form after register
    setUsername("");
    setPassword("");
    setEmail("");
  };

  return (
    <div className={` ${styles.container} ${className}`}>
      <h2 className={styles.title}>Register</h2>
      <form className={styles.formGroup} onSubmit={handleSubmit}>
        <User value={username} onUserChange={setUsername} />
        <Password value={password} onPasswordChange={setPassword} />
        <Mail value={email} onMailChange={setEmail} />
        <Button
          type="submit"
          title="Register"
          className={styles.registerButton}
        />
      </form>
    </div>
  );
};

export default Register;
