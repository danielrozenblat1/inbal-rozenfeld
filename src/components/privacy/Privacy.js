import React from 'react';
import { FaTimes } from 'react-icons/fa';
import styles from './Privacy.module.css';

const PrivacyModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={e => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>
          <FaTimes />
        </button>

        <div className={styles.content}>
          <h2 className={styles.title}>מדיניות פרטיות ותנאי שימוש</h2>
          
          <section className={styles.section}>
            <h3 className={styles.sectionTitle}>1. מידע כללי</h3>
            <ul>
              <li>סוגי מידע נאסף: פרטים אישיים, היסטוריית קורסים, תשלומים</li>
              <li>מטרות איסוף: רישום, תקשורת, שיפור שירות</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h3 className={styles.sectionTitle}>2. הסכמה ופרטיות</h3>
            <ul>
              <li>הסכמה מרצון חופשי למסירת פרטים</li>
              <li>זכות לחזרה מהסכמה בכל עת</li>
              <li>שמירה על סודיות מלאה</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h3 className={styles.sectionTitle}>3. אבטחת מידע</h3>
            <ul>
              <li>הצפנת נתונים</li>
              <li>הגבלת גישה למידע</li>
              <li>עדכון שוטף של מערכות אבטחה</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h3 className={styles.sectionTitle}>4. זכויות משתמש</h3>
            <ul>
              <li>עיון במידע אישי ללא תשלום</li>
              <li>תיקון/מחיקת פרטים</li>
              <li>מענה לפניות תוך 14 יום</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h3 className={styles.sectionTitle}>5. תנאי שירות</h3>
            <ul>
              <li>הרשמה מותנית באישור תנאים</li>
              <li>תשלום: מזומן/כרטיס אשראי/העברה בנקאית</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h3 className={styles.sectionTitle}>6. אחריות</h3>
            <ul>
              <li>אחריות מקצועית על הדרכה</li>
              <li>המשתמש אחראי על ציוד אישי</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h3 className={styles.sectionTitle}>7. תקשורת ושיווק</h3>
            <ul>
              <li>משלוח עדכונים באישור מראש</li>
              <li>אפשרות הסרה מרשימת תפוצה</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h3 className={styles.sectionTitle}>8. זכויות יוצרים</h3>
            <ul>
              <li>חומרי לימוד שייכים לאקדמיה</li>
              <li>איסור העתקה ללא אישור</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h3 className={styles.sectionTitle}>9. מדיניות Cookies</h3>
            <ul>
              <li>שימוש לשיפור חווית גלישה</li>
              <li>אפשרות לניהול העדפות</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h3 className={styles.sectionTitle}>10. הצהרת נגישות</h3>
            <ul>
              <li>התאמות עבור אנשים עם מוגבלויות</li>
              <li>תמיכה בטכנולוגיות מסייעות</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h3 className={styles.sectionTitle}>11. סמכות שיפוטית</h3>
            <p>סכסוכים יידונו בבית המשפט המחוזי בחיפה / קריות</p>
          </section>

          <section className={styles.section}>
            <h3 className={styles.sectionTitle}>12. יצירת קשר</h3>
            <div className={styles.contact}>
              <p>מייל: Inbal.rozenfeld@gmail.com</p>
              <p>טלפון: 0533393035</p>
              <p>כתובת: שדרות בן גוריון 63 קריית ביאליק</p>
            </div>
          </section>

          <p className={styles.lastUpdate}>עדכון אחרון: 01/12/24</p>

          <section className={styles.consent}>
            <h3 className={styles.sectionTitle}>הסכמה</h3>
            <p>בלחיצה על כפתור ההרשמה, הנך מאשר/ת:</p>
            <ul>
              <li>קריאה והבנת תנאים</li>
              <li>הסכמה מדעת לשימוש במידע</li>
              <li>נכונות הפרטים המסורים</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyModal;