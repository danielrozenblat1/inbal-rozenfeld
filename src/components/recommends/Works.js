import React from 'react';
import styles from './Recommends.module.css';


import result1 from "../../images/ענבל רוזנפלד תלמידות 1.webp"
import result2 from "../../images/ענבל רוזנפלד תלמידות 2.webp"

import result7 from "../../images/ענבל רוזנפלד תלמידות 7.webp"
import result8 from "../../images/ענבל רוזנפלד תלמידות 8.webp"
import result9 from "../../images/ענבל רוזנפלד תלמידות 9.webp"

import result11 from "../../images/ענבל רוזנפלד המלצה 1.webp"
import result12 from "../../images/ענבל רוזנפלד המלצה 2.webp"
import result13 from "../../images/ענבל רוזנפלד המלצה 3.webp"
import result14 from "../../images/ענבל רוזנפלד המלצה 4.webp"
import result15 from "../../images/ענבל רוזנפלד תלמידות 11.webp"
import result16 from "../../images/ענבל רוזנפלד תלמידות 12.webp"
import result17 from "../../images/ענבל רוזנפלד תלמידות 13.webp"

import result18 from "../../images/ענבל רוזנפלד תלמידות 14.webp"
import result19 from "../../images/ענבל רוזנפלד תלמידות 15.webp"
import result20 from "../../images/ענבל רוזנפלד עם תלמידות 1.webp"
import result21 from "../../images/ענבל רוזנפלד עם תלמידות 2.webp"
import result22 from "../../images/ענבל רוזנפלד עם תלמידות 3.webp"
import result23 from "../../images/ענבל רוזנפלד עם תלמידות 4.webp"
import result24 from "../../images/ענבל רוזנפלד עם תלמידות 5.webp"
import result25 from "../../images/ענבל רוזנפלד עם תלמידות 6.webp"
import result26 from "../../images/ענבל דוגמאות לציפורניים 1.webp"
import result27 from "../../images/ענבל דוגמאות לציפורניים 2.webp"
import result28 from "../../images/ענבל דוגמאות לציפורניים 3.webp"
import result29 from "../../images/ענבל דוגמאות לציפורניים 4.webp"
const Works = () => {
  const images = [
    result1, result2, , result20, result23,result25, result26,
    result7, result8, result9, result27,result28,result29, result11 , result21,result12,  result22,result13, result14, result15,result25,  result17, 
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
                  loading="lazy"
                  decoding="async"
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
                  loading="lazy"
                  decoding="async"
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