import styles from "./SecondScreen.module.css"
import coins from "../Icons/wired-outline-414-money-bag-dollar.json"

import proffession from "../Icons/wired-outline-1349-guarantee.json"

import balance from "../Icons/wired-outline-1592-nail-polish.json"
import keep from "../Icons/wired-outline-472-hourglass.json"
import training from "../Icons/wired-outline-1594-manicure (1).json"
import boss from "../Icons/wired-outline-977-internship.json"

import What from "../components/what/What"
import Box from "../components/box/Box"
const SecondScreen=()=>{


    return <>
        <strong><div className={styles.description}>תמיד אני אומרת לתלמידות שלי שכשאני למדתי הלוואי והיה לי אותי!</div></strong> 
        <div className={styles.title}>כי גם אני הייתי שם</div>
        <div className={styles.description}>אני מבינה איך זה מרגיש להיות על סף קבלת החלטה שמרגישה גדולה ומפחידה</div>
        <div className={styles.description}>אבל אני יכולה להבטיח לך שהשקעה בעצמך היא הדרך הבטוחה ל</div>
        <div className={styles.row}>
       
            <Box title="עצמאות כלכלית" description="את תלמדי איך להפוך את התשוקה שלך למקצוע שמכניס הכנסה יציבה שתאפשר לך ביטחון וחופש כלכלי." icon={coins}/>
            <Box title="להיות הבוסית של עצמך" description="את תלמדי איך לנהל את הלו״ז שאת בוחרת לעצמך ועם הלקוחות שאת בוחרת לעבוד מולן." icon={boss}/>
            <Box title="לרכוש מקצוע לחיים" description="את תרכשי מיומנויות מקצועיות שיבטיחו לך עבודה שתוביל אותך לעסק מצליח ולבניית קריירה." icon={proffession}/>
        </div>

<div className={styles.description}>אני מאמינה שכל אחת יכולה להצליח כשיש לה את המנטורית ומורת דרך  הנכונה לידה שתאמין בה ותכוון אותה לאורך כל הדרך עד להצלחה. שתיתן את הכלים הנכונים ואת התמיכה המתאימה.</div>
<div className={styles.description}>אני כאן כדי להוביל אותך בצעדים בטוחים אל קריירה משגשגת, שבה תוכלי לא רק ליהנות מהעבודה שלך אלא גם להשיג עצמאות כלכלית, הגשמה עצמית ומקצוע לחיים.</div>
<div className={styles.quate}>"לאורך כל הדרך האמנתי בעצמי  <br/>גם את יכולה! ובשביל זה אני כאן"</div>
<div className={styles.more}>אבל חשוב לי שתדעי!</div>
<div className={styles.more}>זה ידרוש ממך</div>
        {/* <div className={styles.more}>אבל חשוב לי שתדעי!</div>
        <div className={styles.more} style={{textDecoration:"underline"}}>זה ידרוש ממך</div> */}
        <div className={styles.row}>

<What icon={balance} title="התמדה ותרגול" description="כמו בכל תחום, התמדה היא המפתח להצלחה. תמיד יהיה משהו חדש שצריך ללמוד כדי להרחיב את השירות שלנו, תמיד יש לאן להתפתח ולאן לשאוף. בשביל להגיע לעסק מצליח ורווחי את חייבת להיות בלמידה ותרגול כל הזמן."/>
<What icon={keep} title="זמן" description="הקורס מותאם לקצב שלך, אך חשוב להקדיש זמן ללמידה והתנסות מעשית."/>
<What icon={training} title="סבלנות" description="היכולת ללמוד ולהשתפר דורשת סבלנות – אבל עם התמיכה וההדרכה שלי, תראי שהמאמץ שווה את זה."/>
        </div>
           </>
}
export default SecondScreen