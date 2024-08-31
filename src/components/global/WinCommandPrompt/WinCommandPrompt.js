import React from 'react';
import styles from './WinCommandPrompt.module.css';

const WinCommandPrompt = ({ children }) => {
  return (
    <div className={styles.window}>
      <div className={styles.fakeTab}>
        <span className={styles.tabTitle}>
            Command Prompt&nbsp;&nbsp;&nbsp;&nbsp;x
        </span>
      </div>
      <div className={styles.content}>
        {children}
      </div>
    </div>
  );
};

export default WinCommandPrompt;