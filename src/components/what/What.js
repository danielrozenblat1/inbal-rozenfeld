import React, { useEffect, useRef } from 'react';
import styles from './What.module.css';
import { Player } from '@lordicon/react';

const What = ({ icon, title, description }) => {

    const handleComplete = () => {
        setTimeout(() => {
          playerRef1?.current?.playFromBeginning();
        }, 2500); // play again after 2.5 seconds
      };
      const playerRef1 = useRef(null);
    
      useEffect(() => {
        playerRef1?.current?.playFromBeginning();
      }, []);
    
  return (
    <div className={styles.container}>
      <div className={styles.header}>
      <div className={styles.icon}>
        <Player icon={icon} ref={playerRef1} size="100%" loop={true} onComplete={handleComplete}></Player>
      </div>
        <h2 className={styles.title}>{title}</h2>
      </div>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default What;