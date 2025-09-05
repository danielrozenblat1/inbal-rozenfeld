import React from 'react';
import styles from './FirstScreenNew.module.css';
import ContactForm from "../components/form copy/FormScreen"

const HeroSection = (props) => {
  return <>
    <div className={props.scrolled ? styles.heroContainerP: styles.heroContainer} dir="rtl">
      <div className={styles.contentWrapper}>
        {/* אזור התוכן */}
        <div className={styles.contentSection}>
          <div className={styles.bgBlur}>
            <div className={styles.blurCircle1}></div>
            <div className={styles.blurCircle2}></div>
          </div>
          
          <div className={styles.textContent}>
            {/* פסקת תיאור */}
            <p className={styles.descriptionB}>
         אוהבת את תחום הציפורניים וחולמת להתפרנס ממנו?
            </p>
            
            {/* כותרת ראשית */}
            <h1 className={styles.title}>הדרך ליצור לעצמך קריירה ריווחית בתחום הציפורניים, לעבוד בזמנים שלך ולנהל את עצמך בלי אף בוס על הראש </h1>
             <p className={styles.highlightedDescription}>
      אין צורך בנסיון קודם
            </p>
       
          </div>
             <div className={styles.formSection}>
        <ContactForm />
      </div>
        </div>
        
      </div>
      
      {/* טופס יצירת קשר */}
   
    </div>
  </>
};

export default HeroSection;