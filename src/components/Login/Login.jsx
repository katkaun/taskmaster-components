import React, { useState } from "react";
import styles from "./Login.module.css";
import User from "./User";
import Password from "./Password";
import { Button } from "../Button";

const Login = ({ onLogin, className }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (username && password) {
      onLogin(username, password);
    }
  };

  return (
    <div className={`${styles.loginContainer} ${className}`}>
      <h2 className={styles.title}>Login</h2>

      <form onSubmit={handleLogin} className={styles.forminput}>
        <User setUsername={setUsername} />
        <Password setPassword={setPassword} />
        <Button
          title="Login"
          onClick={handleLogin}
          className={styles.loginButton}
        />
      </form>
    </div>
  );
};

export default Login;
