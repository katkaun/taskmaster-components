import React, { useState } from "react";
import styles from "./ProfileSettings.module.css";
import Button from "../Button/Button"; 

const ProfileSettings = () => {
  const [userInfo, setUserInfo] = useState({
    username: "Grupp2",
    email: "@example.se",
    phone: "123-456-789",
    password: "****",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const handleSave = () => {
    // Inget api än
  };

  return (
    <div className={styles.profileSettingsContainer}>
      <h2 className={styles.title}>Profile Settings</h2>
      <form className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="username">Användarnamn</label>
          <input
            type="text"
            name="username"
            value={userInfo.username}
            onChange={handleInputChange}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">Epost</label>
          <input
            type="email"
            name="email"
            value={userInfo.email}
            onChange={handleInputChange}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="phone">Telefonnummer</label>
          <input
            type="text"
            name="phone"
            value={userInfo.phone}
            onChange={handleInputChange}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="password">Lösenord</label>
          <input
            type="password"
            name="password"
            value={userInfo.password}
            onChange={handleInputChange}
          />
        </div>

        
        <div style={{ pointerEvents: "none" }}>
          <Button title="Spara ändringar" className={styles.registerButton} />
        </div>
      </form>
    </div>
  );
};

export default ProfileSettings;