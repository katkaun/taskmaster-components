import React from "react";
import styles from './Register.module.css';

const Mail = ({onMailChange}) => {

const onMailComplete = () => {
    onMailChange(e.target.value);
}

    return(
        <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input type="email" onBlur={onMailComplete} placeholder="Enter email" />
        </div>
    )
}

export default Mail;