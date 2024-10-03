import React, { useState } from "react";
import styles from "./ProfileSettings.module.css";
import Button from "../Button/Button";

const ProfileSettings = () => {
  const [userInfo, setUserInfo] = useState({
    username: "Grupp2",
    email: "example@example.com",
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
    console.log('Sparade uppgifter:', userInfo);
  };

  return (
    <div className={styles.profileSettingsContainer}>
      <h2 className={styles.title}>Profile Settings</h2>
      <div className={styles.form}>
        <div className={styles.formGroup}>
          <label>Användarnamn</label>
          <input
            type="text"
            name="username"
            value={userInfo.username}
            onChange={handleInputChange}
          />
        </div>
        <div className={styles.formGroup}>
          <label>Epost</label>
          <input
            type="email"
            name="email"
            value={userInfo.email}
            onChange={handleInputChange}
          />
        </div>
        <div className={styles.formGroup}>
          <label>Telefonnummer</label>
          <input
            type="text"
            name="phone"
            value={userInfo.phone}
            onChange={handleInputChange}
          />
        </div>
        <div className={styles.formGroup}>
          <label>Lösenord</label>
          <input
            type="password"
            name="password"
            value={userInfo.password}
            onChange={handleInputChange}
          />
        </div>

        <div className={styles.buttonWrapper}>
          <Button
            title="Spara ändringar"
            className={styles.saveButton}
            onClick={handleSave}
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileSettings;