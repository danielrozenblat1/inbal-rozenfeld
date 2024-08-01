import styles from "./SecondScreen.module.css"
import coins from "../Icons/wired-outline-298-coins (1).json"
import free from "../Icons/wired-outline-1143-bird-from-the-top-out.json"
import proffession from "../Icons/wired-outline-1349-guarantee.json"
import celebrate from "../Icons/wired-outline-2237-champagne-flutes.json"
import balance from "../Icons/wired-outline-1592-nail-polish.json"
import keep from "../Icons/wired-outline-1776-staircase-running.json"
import training from "../Icons/wired-outline-1594-manicure (1).json"
import Can from "../components/can/Can"
import What from "../components/what/What"
const SecondScreen=()=>{


    return <>
        <div className={styles.title}>זה באמת יכול לקרות!</div>
        <div className={styles.more}>את יכולה</div>
        <div className={styles.row}>
            <Can icon={coins} title="להרוויח הרבה כסף"/>
            <Can icon={free} title="לצאת לעצמאות כלכלית"/>
            <Can icon={proffession} title="לקבל מקצוע לחיים"/>
            <Can icon={celebrate} title="לנהל את עצמך"/>
        </div>
        <div className={styles.more}>אבל חשוב לי שתדעי!</div>
        <div className={styles.more} style={{textDecoration:"underline"}}>זה ידרוש ממך</div>
        <div className={styles.row}>

<What icon={balance} title="התמדה" description="יהיו תקופות קשות יותר ויהיו תקופות קלות יותר מוטיבציה באה והולכת אבל ההתמדה היא מה שתהפוך אותך לבלתי מנוצחת"/>
<What icon={training} title="אימונים" description="לא תתאמני על השיטות שתלמדי? המקצועיות שלך לא תשתפר! לא תתאמני על הטכניקות שלך? את תשארי במקום"/>
<What icon={keep} title="סבלנות" description="הצלחה קבועה לא באה ביום וגם לא ביומיים - היא לוקחת זמן וללא סבלנות יהיה לך קשה מאוד להצליח"/>
        </div>
           </>
}
export default SecondScreen