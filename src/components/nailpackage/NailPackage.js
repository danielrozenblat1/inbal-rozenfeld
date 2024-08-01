import Button from "../button/Button"
import styles from "./NailPackage.module.css"
import nailIt from "../../images/קורס נייל איט למתחילות.png"
import nailMaster from "../../images/קורס נייל מאסטר למתחילות.png"
import premium from "../../images/קורס פרימיום למתחילות.png"
const NailPackage = () => {
 return <>
    <div className={styles.box}>
      <div className={styles.title}>קורס Nail it למתחילות</div>
      <div className={styles.center}><img className={styles.image} src={nailIt} alt="nail it למתחילות"/></div>
      <div className={styles.courseContent}>
        קורס Nail It יקנה לכן את כל היסודות והמיומנויות הבסיסיות בתחום בדגש על בנייה בג׳ל:
        <ul className={styles.courseList}>
          <li> בניית ציפורניים בג׳ל בשני שיטות מתקדמות</li>
          <li> שיטות מניקור נכונות לכל סוגי הבנייה</li>
          <li> אנטומיה של מבנה הציפורן</li>
          <li> הכרה וטיפול במחלות נפוצות</li>
          <li> היכרות עם חומרים וכלי עבודה</li>
          <li> חיטוי ועיקור</li>
          <li> הסרת לק ג׳ל בצורה נכונה</li>
          <li> שיוף צורה סימטרית שקד/מרובע/בלרינה</li>
          <li> מניקור מכשירי בעזרת צבתית/מספריים</li>
          <li> מריחה צמודה לקוטיקולה</li>
          <li> טיפים לצילום נכון לאינסטגרם</li>
          <li> עבודה מעשית על מודליסטית</li>
        </ul>
        *בסיום הקורס תקבלו תעודת מקצוע
        כל נרשמת תקבל בתחילת הקורס ערכת מתנה יוקרתית בשווי 2,000 ש"ח הכוללת מגוון רחב של מוצרים עם מותגים מובילים להתחיל את דרכה כמקצועית בתחום.
      </div>
      <Button text="ענבל, Nail it נשמע לי מעולה!" message="היי ענבל, אשמח לשמוע עוד על קורס nail it"/>
    </div>
    <div className={styles.box}>
      <div className={styles.title}>קורס Nail master למתחילות</div>
      <div className={styles.center}><img className={styles.image} src={nailMaster} alt="nail master למתחילות"/></div>
      <div className={styles.courseContent}>
        קורס Nail Master יקנה לכן את כל היסודות והמיומנויות הבסיסיות בתחום מניקור לק ג׳ל:
        <ul className={styles.courseList}>
          <li> אנטומיה של מבנה הציפורן</li>
          <li> הכרה וטיפול במחלות נפוצות</li>
          <li> היכרות עם חומרים וכלי עבודה</li>
          <li> חיטוי ועיקור</li>
          <li> הסרת לק ג׳ל בצורה נכונה</li>
          <li> שיוף צורה סימטרית שקד/מרובע/בלרינה</li>
          <li> מניקור מכשירי בעזרת צבתית/מספריים</li>
          <li> תיקון מבנה אנטומי מדויק</li>
          <li> מריחה צמודה לקוטיקולה</li>
          <li> טיפים לצילום נכון לאינסטגרם</li>
          <li> עבודה מעשית על מודליסטית</li>
        </ul>
        *בסיום הקורס תקבלו תעודת מקצוע
        כל נרשמת תקבל בתחילת הקורס ערכת מתנה יוקרתית בשווי 2,000 ש"ח הכוללת מגוון רחב של מוצרים עם מותגים מובילים להתחיל את דרכה כמקצועית בתחום.
      </div>
      <Button text="ענבל, Nail master נשמע לי מעולה!" message="היי ענבל, אשמח לשמוע עוד על קורס nail master"/>
    </div>
    <div className={styles.box}>
      <div className={styles.title}>קורס Premium למתחילות</div>
      <div className={styles.center}><img className={styles.image} src={premium} alt="קורס Premium למתחילות"/></div>
      <div className={styles.courseContent}>
        קורס פרימיום חדש המאחד את 2 הקורסים לקורס אחד!
        מניקור לק ג׳ל על ציפורניים טבעיות ✅
        בנייה בג׳ל בשיטות המתקדמות ביותר ✅
        בקורס תלמדי:
        <ul className={styles.courseList}>
          <li> אנטומיה של מבנה הציפורן</li>
          <li> הכרה וטיפול במחלות נפוצות</li>
          <li> היכרות עם חומרים וכלי עבודה</li>
          <li> חיטוי ועיקור</li>
          <li> הסרת לק ג׳ל בצורה נכונה</li>
          <li> שיוף צורה סימטרית שקד/מרובע/בלרינה</li>
          <li> מניקור מכשירי בעזרת צבתית/מספריים</li>
          <li> תיקון מבנה אנטומי מדויק</li>
          <li> מריחה צמודה לקוטיקולה</li>
          <li> בניית ציפורניים בג׳ל בשני שיטות מתקדמות</li>
          <li> שיטות מניקור נכונות לכל סוגי הבנייה</li>
          <li> טיפים לצילום נכון לאינסטגרם</li>
          <li> עבודה מעשית על מודליסטית</li>
        </ul>
        *בסיום הקורס תקבלו תעודת מקצוע
        כל נרשמת תקבל בתחילת הקורס ערכת מתנה יוקרתית בשווי 2,000 ש"ח הכוללת מגוון רחב של מוצרים עם מותגים מובילים להתחיל את דרכה כמקצועית בתחום.
        בסיום הקורס תהיי בעלת מיומנויות גבוהות בתחום ותוכלי להפוך את עיצוב הציפורניים למקצוע!
      </div>
      <Button text="ענבל, קורס Premium נשמע לי מעולה!" message="היי ענבל, אשמח לשמוע עוד על קורס premium"/>
    </div>
  </>
}

export default NailPackage