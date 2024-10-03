import React from 'react';
import styles from './Home.module.css';


const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <h1>Taskmaster AI</h1>
        <p>Taskmaster AI your personal organizer</p>
        
      </div>
      <div className={styles.main}>
        <h2>Welcome to Taskmaster AI</h2>
        <p>Try out our chat</p>
        <button className={styles.signinButton}>Sign in</button>
        <p>
          First time? Please <a href="#">register new account</a>
        </p>
      </div>
    </div>
  );
};

export default Home;
