import React from 'react';
import styles from './Recommends.module.css';


import result1 from "../../images/ענבל רוזנפלד תלמידות 1.png"
import result2 from "../../images/ענבל רוזנפלד תלמידות 2.png"
import result3 from "../../images/ענבל רוזנפלד תלמידות 3.png"
import result4 from "../../images/ענבל רוזנפלד תלמידות 4.png"
import result5 from "../../images/ענבל רוזנפלד תלמידות 5.png"
import result6 from "../../images/ענבל רוזנפלד תלמידות 6.png"
import result7 from "../../images/ענבל רוזנפלד תלמידות 7.png"
import result8 from "../../images/ענבל רוזנפלד תלמידות 8.png"
import result9 from "../../images/ענבל רוזנפלד תלמידות 9.png"
import result10 from "../../images/ענבל רוזנפלד תלמידות 10.png"
import result11 from "../../images/ענבל רוזנפלד המלצה 1.png"
import result12 from "../../images/ענבל רוזנפלד המלצה 2.png"
import result13 from "../../images/ענבל רוזנפלד המלצה 3.png"
import result14 from "../../images/ענבל רוזנפלד המלצה 4.png"
import result15 from "../../images/ענבל רוזנפלד תלמידות 11.png"
import result16 from "../../images/ענבל רוזנפלד תלמידות 12.png"
import result17 from "../../images/ענבל רוזנפלד תלמידות 13.png"

import result18 from "../../images/ענבל רוזנפלד תלמידות 14.png"
import result19 from "../../images/ענבל רוזנפלד תלמידות 15.png"

const Works = () => {
  const images = [
    result1, result2, result3, result4, 
    result5, result6, result7, result8, result9, result10, result11 ,result12, result13, result14, result15, result16, result17, result19, result18
  ];

  return (
    <>


   
      <div className={styles.container}>
        <div className={styles.scrollTrack}>
          {/* קבוצה ראשונה של תמונות */}
          <div className={styles.scrollContainer}>
            {images.map((img, index) => (
              <div key={`first-${index}`} className={styles.imageWrapper}>
                <img
                  src={img}
                  alt={`המלצה ${index + 1}`}
                  className={styles.image}
                />
              </div>
            ))}
          </div>
          {/* קבוצה שנייה זהה של תמונות */}
          <div className={styles.scrollContainer}>
            {images.map((img, index) => (
              <div key={`second-${index}`} className={styles.imageWrapper}>
                <img
                  src={img}
                  alt={`המלצה ${index + 1}`}
                  className={styles.image}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

    </>
  );
};

export default Works;