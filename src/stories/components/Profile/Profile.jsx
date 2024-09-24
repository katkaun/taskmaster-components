import React from "react";
import styles from "./Profile.module.css";
import UserIcon from "../UserIcon/UserIcon"; 
import Button from "../Button/Button"; 

const Profile = () => {
  return (
    <div className={styles.profileContainer}>
      <div className={styles.profileBody}>
        <div className={styles.profilePicture}>
          <UserIcon className={styles.userIcon} />
        </div>
        <h2 className={styles.profileName}>Ditt namn</h2>
        <p className={styles.profileText}></p>

        <div className={styles.contactInfo}>
          <p><strong>Användarnamn:</strong> johndoe</p>
          <p><strong>Epost:</strong> john@example.com</p>
          <p><strong>Telefonnummer:</strong> 123-456-789</p>
        </div>

        <div className={styles.buttonWrapper}>
          <Button title="Redigera" className={styles.editButton} />
        </div>
      </div>
    </div>
  );
};

export default Profile;