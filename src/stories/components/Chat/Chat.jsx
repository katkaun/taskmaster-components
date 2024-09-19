import React from 'react';
import styles from './Chat.module.css';

const Chat = () => {
  return (
    <div className={styles.chatContainer}>
      <div className={styles.header}>
       
      </div>
      <div className={styles.chatContent}>
        
      </div>
      <div className={styles.chatInput}>
        <input type="text" placeholder="Skicka ett meddelande" />
      </div>
    </div>
  );
};

export default Chat;
