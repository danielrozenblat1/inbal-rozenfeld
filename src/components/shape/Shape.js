import React, { useEffect, useRef } from 'react';
import styles from './Shape.module.css';
import { Player } from '@lordicon/react';
import ScrollReveal from 'scrollreveal';
const ShapedComponent = ({ title, description, number, icon }) => {
    const handleComplete = () => {
        setTimeout(() => {
          playerRef1?.current?.playFromBeginning();
        }, 2500); // play again after 2.5 seconds
      };
      const playerRef1 = useRef(null);
    
      useEffect(() => {
        playerRef1?.current?.playFromBeginning();
      }, []);
      useEffect(()=>{
        ScrollReveal().reveal(`.${styles.number}`, {
            duration: 1000,
            distance: "60px",
            origin: "left", // Start from the right side
            easing: "ease-out",
            reset:false,
            viewFactor: 0.2,
            interval: 300, // Delay between each element
            delay: 200, // Delay before the animation starts
            scale: 1, // Set scale to 1 or null
          });
          ScrollReveal().reveal(`.${styles.description}`, {
            duration: 1000,
            distance: "30px",
            origin: "bottom", // Start from the right side
            easing: "ease-out",
            reset:false,
            viewFactor: 0.2,
            interval: 300, // Delay between each element
            delay: 200, // Delay before the animation starts
            scale: 1, // Set scale to 1 or null
          });
        
          ScrollReveal().reveal(`.${styles.title}`, {
            duration: 1000,
            distance: "30px",
            origin: "right", // Start from the right side
            easing: "ease-out",
            reset:false,
            viewFactor: 0.2,
            interval: 300, // Delay between each element
            delay: 200, // Delay before the animation starts
            scale: 1, // Set scale to 1 or null
          });
      },[])
  return (
    <div className={styles.container}>
      <div className={styles.shape}>
        <span className={styles.number}>{number}</span>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
    
      </div>
    </div>
  );
};

export default ShapedComponent;