import React from 'react';
import { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import Button from '../button/Button';
import styles from "./WhoFits.module.css"
const WhoFits = () => {
  useEffect(() => {
    ScrollReveal().reveal(`.${styles.header}`, {
      duration: 600,
      distance: "60px",
      origin: "top",
      easing: "ease-out",
      reset: false,
      viewFactor: 0.2,
      interval: 200,
      delay: 100,
      scale: 1,
    });
  }, [])

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.wrapY}>
          <h1 className={styles.title}>למי זה מתאים?</h1>
      
          <div className={styles.text}>
            <span className={styles.checkmark}>✓</span>
            <div className={styles.description}>
              לכל מי שרוצה לצאת לעצמאות כלכלית וחולמת להגשים את עצמה
            </div>
          </div>

          <div className={styles.text}>
            <span className={styles.checkmark}>✓</span>
            <div className={styles.description}>
              לכל מי שמעוניינת להתעסק בתחום הציפורניים ולהצליח בגדול
            </div>
          </div>

          <div className={styles.text}>
            <span className={styles.checkmark}>✓</span>
            <div className={styles.description}>
              מתחילות ללא ניסיון שרוצות וחולמות להגיע לרמה המקצועית הגבוהה ביותר
            </div>
          </div>

          <div className={styles.text}>
            <span className={styles.checkmark}>✓</span>
            <div className={styles.description}>
              לכל מי שרוצה לצאת לדרך עצמאית וללא בוס על הראש
            </div>
          </div>

          <div className={styles.text}>
            <span className={styles.checkmark}>✓</span>
            <div className={styles.description}>
              למי שרוצה לנהל את הלו"ז שהיא בוחרת לעצמה ועם הלקוחות שהיא בוחרת לעבוד מולן
            </div>
          </div>
        </div>
      </div>
    <Button text="ענבל זה נשמע לי מתאים"/>
    </>
  )
}

export default WhoFits