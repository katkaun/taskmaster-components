import React from "react";
import styles from "./Profile.module.css";
import UserIcon from "../UserIcon/UserIcon"; 

const Profile = () => {
  return (
    <div className={styles.profileContainer}>
      <div className={styles.profileBody}>
        <div className={styles.profilePicture}>
          {}
          <UserIcon className={styles.userIcon} />
        </div>
        <h2 className={styles.profileName}>Ditt namn</h2>
        <p className={styles.profileText}></p>
        
        {}
        <div className={styles.contactInfo}>
          <p><strong>Användarnamn:</strong> </p>
          <p><strong>Epost:</strong> @example.se</p>
          <p><strong>Telefonnummer:</strong> 123-456-789</p>
        </div>
      </div>
    </div>
  );
};

export default Profile; 