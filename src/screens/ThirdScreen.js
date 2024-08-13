import NailPackage from "../components/nailpackage/NailPackage"
import Recommends from "../components/recommends/Recommends"
import ShapedComponent from "../components/shape/Shape"
import Silabus from "../components/silabus/Silabus"
import styles from "./ThirdScreen.module.css"

const ThirdScreen = () => {
    return <>
        <div className={styles.more} id="סילבוסים">ענבל, איך זה הולך לעבוד?</div>
        <div className={styles.description}>ישבתי וחשבתי על כל מה שאני הייתי צריכה לדעת כשאני למדתי את התחום, מה היה חסר לי ומה היה חוסך לי כל כך הרבה זמן,עבודה קשה והרבה תרגול וחילקתי את כל המידע הזה ל-3 קורסים לפי רמות</div>
        <div className={styles.description}>(החליקי בין הקורסים ולחצי על הקורס שמתאים לך)</div>
             <Silabus/>
        <div className={styles.more}>בכל הקורסים את תקבלי:</div>
        <div className={styles.row}>
        <ShapedComponent 
            title="יחס אישי" 
            description="כל כיתה שלי מונה עד 2 תלמידות ואת תקבלי את היחס הכי אישי שאפשר" 
            number="01"
        />
        <ShapedComponent 
            title="תרגול ביתי לאחר כל מפגש" 
            description="כדי שתצאי הכי מקצועית שאפשר - את תקבלי ממני תרגול לאחר כל מפגש"
            number="02"
        />
        <ShapedComponent 
            title="הדרכה לפתיחת עוסק פטור" 
            description="כדי להתפרנס מהתחום ולנהל עסק צריך להתחיל מלפתוח עוסק פטור כדי שהמדינה תדע שאת מנהלת עסק ולכל ענייני המסים"
            number="03"
        />
        <ShapedComponent 
            title="הדרכה לניהול יומן,ניהול לקוחות ובניית מחירון ותקנון לעסק" 
            description="חשוב לי שתצאי ממני עם ידע פרקטי לכל מה שקורה אחרי הקורס - ושתקבלי עזרה ממני בכל הצעדים הראשונים של פתיחת עסק"
            number="04"
        />
        
        <ShapedComponent 
            title="שיעור שיווק ,פרסום וצילום ברשתות החברתיות" 
            description="חשוב לדעת לשווק את עצמך בתחום רווי מתחרים וחשוב מאוד לדעת לפרסם ולצלם את העבודות שלך בצורה שתביא לך לקוחות"
            number="05"
        />
  
              <ShapedComponent 
            title="הכנת תיק עבודות כבר במהלך הקורס" 
            description="תיק עבודות הוא אחד הדברים הכי חשובים לנייליסטית בתחילת דרכה - את התיק תוכלי לשלוח למתעניינות חדשות"
            number="06"
        />
        </div>
        <Recommends/>

    </>
}

export default ThirdScreen