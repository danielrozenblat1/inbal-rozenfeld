import NailPackage from "../components/nailpackage/NailPackage"
import Recommends from "../components/recommends/Recommends"
import ShapedComponent from "../components/shape/Shape"
import Silabus from "../components/silabus/Silabus"
import styles from "./ThirdScreen.module.css"

const ThirdScreen = () => {
    return <>
        <div className={styles.more} id="סילבוסים">ענבל, איך מתקדמים?</div>
        <div className={styles.description}>כשאני למדתי הרגשתי שהיה חסר המון  ידע, הכוונה אישית וכלים אמיתיים להצלחה! בעקבות זה לאורך השנים פיתחתי הבנה עמוקה של הצרכים המקצועיים הנדרשים להצלחה בתחום. בניתי את הקורסים שלי בצורה מדויקת שיתנו לך את כל הידע הדרוש, בצורה שתשלב בין תיאוריה, פרקטיקה והתנסות אמיתית. תכנית לימוד ממוקדת, תרגול מעשי וצמוד וליווי לאורך כל הדרך בדגש על יחס אישי ומקצועי. חילקתי את זה ל-4 קורסים מדויקים שמכינים אותך בצורה הכי מקצועית להצלחה בטוחה. <br/> עכשיו, רק נותר לך לבחור את הקורס המתאים לך ולהתחיל להתקדם!</div>
        <div className={styles.description}>(החליקי בין הקורסים ולחצי על הקורס שמתאים לך)</div>
             <Silabus/>
        <div className={styles.more}>בכל הקורסים את תקבלי:</div>
        <div className={styles.row}>
        <ShapedComponent 
            title="יחס אישי" 
            description="כל כיתה שלי מונה עד 2 תלמידות כדי שאוכל להקנות לך יחס אישי מקסימלי" 
            number="01"
        />
        <ShapedComponent 
            title="תרגול לאחר כל מפגש" 
            description="בשביל להגיע לעסק מצליח ורווחי את חייבת להיות בלמידה ותרגול כל הזמן, לכן תקבלי ממני תרגול לאחר כל מפגש"
            number="02"
        />
        <ShapedComponent 
            title="פתיחת עוסק פטור" 
            description="כדי לנהל עסק תקבלי ממני את הכלים והידע איך לפתוח עסק בצורה נכונה"
            number="03"
        />
        <ShapedComponent 
            title="ניהול יומן,ניהול לקוחות ובניית מחירון לעסק" 
            description=" מעבר לידע המקצועי את מקבלת ממני כלים לניהול עסק מצליח ורווחי"
            number="04"
        />
        
        <ShapedComponent 
            title="שיווק,פרסום וצילום לרשתות החברתיות" 
            description="חשוב לדעת לשווק את עצמך בתחום רווי מתחרים וחשוב מאוד לדעת לפרסם ולצלם את העבודות שלך בצורה שתביא לך לקוחות בצורה מקצועית ומדוייקת"
            number="05"
        />
  
              <ShapedComponent 
            title="הכנת תיק עבודות במהלך הקורס" 
            description="תיק עבודות הוא אחד הדברים הכי חשובים לנייליסטית בתחילת דרכה , תוכלי להשתמש בו כבר מההתחלה לצורך שיווק ופרסום"
            number="06"
        />
        </div>
        <Recommends/>

    </>
}

export default ThirdScreen