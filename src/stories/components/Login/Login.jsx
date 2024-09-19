import React from "react";
import styles from "./Login.module.css";
import User from "../Register/User";
import Password from "../Register/Password";

const Login = () => {
  return <div className={styles.loginContainer}>
          <h2 className={styles.title}>Login</h2>
          
          <div className={styles.forminput} >
           <User />
           <Password/>
           </div>
           <button>Login</button>
  </div>;
};

export default Login;
