import React from 'react';
import styles from './Place.module.css';
import place from "../images/ענבל רוזנפלד קליניקה מיקום.png"
const Location = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>מיקום הקליניקה</h2>
      <p className={styles.subtitle}>(לחצי על התמונה להכוונה בוייז)</p>
      <a 
        href="https://www.waze.com/ul?ll=32.83052%2C35.07198&navigate=yes&zoom=17&address=%D7%A9%D7%93%D7%A8%D7%95%D7%AA%20%D7%91%D7%9F%20%D7%92%D7%95%D7%A8%D7%99%D7%95%D7%9F%2063%2C%20%D7%A7%D7%A8%D7%99%D7%99%D7%AA%20%D7%91%D7%99%D7%90%D7%9C%D7%99%D7%A7" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <img
          src={place}
          alt="מיקום הקליניקה"
          className={styles.image}
        />
      </a>
    </div>
  );
};

export default Location;