import React from 'react';
import './Logout.module.css';

function Logout() {
    const logginOut = () => {
        alert ("You have log out!")
        
    }
    return (
        <button onClick={logginOut}>Logout</button>
    )
};

export default Logout