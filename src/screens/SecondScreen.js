import styles from "./SecondScreen.module.css"
import coins from "../Icons/wired-outline-298-coins (1).json"

import proffession from "../Icons/wired-outline-1349-guarantee.json"

import balance from "../Icons/wired-outline-1592-nail-polish.json"
import keep from "../Icons/wired-outline-472-hourglass.json"
import training from "../Icons/wired-outline-1594-manicure (1).json"
import boss from "../Icons/wired-outline-1027-marketing-campaign.json"

import What from "../components/what/What"
import Box from "../components/box/Box"
const SecondScreen=()=>{


    return <>
        <div className={styles.title}>גם אני הייתי שם</div>
        <div className={styles.description}>אני מבינה איך זה מרגיש להיות על סף קבלת החלטה שמרגישה גדולה ומפחידה</div>
        <div className={styles.description}>אבל אני יכולה להבטיח לך שהשקעה בעצמך היא הדרך הבטוחה ל</div>
        <div className={styles.row}>
       
            <Box title="עצמאות כלכלית" description="עם עבודה נכונה את תוכלי להרוויח סכומים שפעם רק חלמת עליהם ולדהור לעבר העצמאות הכלכלית וחיים ללא דאגות כספיות" icon={coins}/>
            <Box title="להיות הבוסית של עצמך" description="את תוכלי לקום מתי שאת רוצה,לעבוד כמה שאת רוצה ומתי שאת רוצה ועדיין להגיע לסכומים דמיוניים" icon={boss}/>
            <Box title="לרכוש מקצוע לחיים" description="התחביב הכי גדול שלך יכול להפוך לעבודה היומיומית שלך ולפרנסה היחידה והעיקרית שלך" icon={proffession}/>
        </div>

<div className={styles.description}>אני מאמינה שכל אחת יכולה להצליח כשיש לה את המנטורית ומורת דרך  הנכונה לידה שתאמין בה ותכוון אותה לאורך כל הדרך עד להצלחה. שתיתן את הכלים הנכונים ואת התמיכה המתאימה.</div>
<div className={styles.description}>אני כאן כדי להוביל אותך בצעדים בטוחים אל קריירה משגשגת, שבה תוכלי לא רק ליהנות מהעבודה שלך אלא גם להשיג עצמאות כלכלית, הגשמה עצמית ומקצוע לחיים.</div>
<div className={styles.quate}>"לאורך כל הדרך האמנתי בעצמי! ,גם את יכולה ובשביל זה אני כאן"</div>
<div className={styles.more}>אבל חשוב לי שתדעי!</div>
<div className={styles.more}>זה ידרוש ממך</div>
        {/* <div className={styles.more}>אבל חשוב לי שתדעי!</div>
        <div className={styles.more} style={{textDecoration:"underline"}}>זה ידרוש ממך</div> */}
        <div className={styles.row}>

<What icon={balance} title="התמדה" description="יהיו תקופות קשות יותר ויהיו תקופות קלות יותר מוטיבציה באה והולכת אבל ההתמדה היא מה שתהפוך אותך לבלתי מנוצחת"/>
<What icon={training} title="אימונים" description="לא תתאמני על השיטות שתלמדי? המקצועיות שלך לא תשתפר! לא תתאמני על הטכניקות שלך? את תשארי במקום"/>
<What icon={keep} title="סבלנות" description="הצלחה קבועה לא באה ביום וגם לא ביומיים - היא לוקחת זמן וללא סבלנות יהיה לך קשה מאוד להצליח"/>
        </div>
           </>
}
export default SecondScreen