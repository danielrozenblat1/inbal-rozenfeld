import React from 'react';
import styles from './Me.module.css';
import inbal from "../../images/ענבל רוזנפלד תדמית.png"
const AboutMe = () => {
  return <>
      <div className={styles.header} id="מי אני">בואי נכיר</div>
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img src={inbal} alt="ענבל רוזנפלד" className={styles.image} />
      </div>
      <div className={styles.content}>
        <h1 className={styles.title}>ענבל רוזנפלד</h1>
        <h2 className={styles.subtitle}>
   "הלוואי שכתלמידה היה לי אותי"
        </h2>
        <p className={styles.description}>
        הייתי בדיוק במקום שאת נמצאת בו! מאוהבת בתחום הזה ורק רוצה להתעסק בו (אפילו לא חשבתי על להרוויח ממנו וללמד אותו) רק רציתי ללמוד את התחום ולהכיר אותו יותר <br/> לקחתי קורס בתחום ואני יכולה להגיד לך שלא קיבלתי אפילו רבע מהדברים שאני מספקת היום - יחס אישי לא היה, לא אמרו לי מה לעשות עם הידע שרכשתי ולא ליווי אותי אפילו שנייה אחרי הקורס נגמר <br/> החלטתי שזה התיקון שלי והיום.. היום אני מעבירה שלושה קורסים מקיפים בתחום שיוציאו אותך תותחית על!
        </p>
      </div>
    </div>
    </>
};

export default AboutMe;