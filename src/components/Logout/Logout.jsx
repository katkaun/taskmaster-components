import React from "react";
import styles from './Logout.modules.css';

function Logout() {
    const logginOut = () => {
        alert ("You have log out!")
        
    }
    return (
        <button onClick={logginOut}>Logout</button>
    )
};

export default Logout