import React from 'react';
import styles from './Chat.module.css';

const Chat = () => {
  return (
    <div className={styles.chatContainer}>
      <div className={styles.header}>
        <p className={styles.welcome}>Välkommen</p>
      </div>
      <div className={styles.chatContent}>
        <p>Skriv för hjälp av planering</p>
      </div>
      <div className={styles.chatInput}>
        <input type="text" placeholder="Skicka ett meddelande" />
        <div className={styles.buttonContainer}>
          <button>Skicka meddelande</button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
