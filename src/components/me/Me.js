import React from 'react';
import styles from './Me.module.css';
import inbal from "../../images/ענבל רוזנפלד.png"
const AboutMe = () => {
  return <>
      <div className={styles.header} id="מי אני">נעים מאוד</div>
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img src={inbal} alt="ענבל רוזנפלד" className={styles.image} />
      </div>
      <div className={styles.content}>
        <h1 className={styles.title}>ענבל רוזנפלד</h1>
        <h2 className={styles.subtitle}>
   אני הולכת לגרום לך להתאהב במקצוע הזה בדיוק כמוני
        </h2>
        <p className={styles.description}>
        בעלת האקדמיה ללימודי ציפורניים. המסע שלי התחיל בדיוק מהמקום שבו את נמצאת היום – עם חלום ושאיפה להצליח.
אחרי שנים של ניסיון בתחום ועם יומן מלא לקוחות פתחתי אקדמיה ובמהלך השנים לימדתי עשרות תלמידות והובלתי אותן להצלחה אישית ומקצועית. האהבה שלי לתחום לא נעצרת בעשייה שלי היא מתבטאת גם ברצון עז לחלוק את הידע שלי עם תלמידות, לראות אותן מתקדמות ומגשימות את החלומות שלהן. 
התשוקה שלי היא להכשיר את הדור הבא של המניקוריסטיות בצורה הכי נכונה, מדויקת ומקצועית!
כל תלמידה אצלי מקבלת יחס אישי ותמיכה לאורך כל הדרך, כדי שתוכל לצמוח ולהקים עסק מצליח ורווחי והכי חשוב, להגשים את עצמה.
        </p>
      </div>
    </div>
 
    </>
};

export default AboutMe;