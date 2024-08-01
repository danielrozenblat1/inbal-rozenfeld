import NailPackage from "../components/nailpackage/NailPackage"
import Recommends from "../components/recommends/Recommends"
import styles from "./ThirdScreen.module.css"

const ThirdScreen=()=>{
    

return <>
<div className={styles.more} id="סילבוסים">"אז ענבל..  מה את מציעה לי?"</div>
<div className={styles.description}>תחזיקי חזק.. זה הולך ככה!</div>
<NailPackage/>
<div className={styles.more}>בכל הקורסים את תקבלי:</div>
<div className={styles.what}>
<div className={styles.header}>יחס אישי</div>
<div className={styles.description}>כל כיתה שלי מונה עד 2 תלמידות ואת תקבלי את היחס הכי אישי שאפשר!</div>
</div>

<div className={styles.what}>
<div className={styles.header}>ליווי אישי לאחר הקורס </div>
<div className={styles.description}>אני כאן לכל שאלה גם אחרי שסיימת את הקורס</div>
</div>
<div className={styles.what}>
<div className={styles.header}>תרגול ביתי לאחר כל מפגש</div>
<div className={styles.description}>כדי שתצאי הכי מקצועית שאפשר - את תקבלי ממני תרגול לאחר כל מפגש</div>
</div>
<div className={styles.what}>
<div className={styles.header}>לימוד עיקרי ניהול עסק</div>
<div className={styles.description}>לדעת לעשות ציפורניים זה מעולה! חשוב לדעת לנהל עסק , לדעת לנהל יומן ולהתנהל על לקוחות כדי להצליח להתפרנס מהתחום בצורה יפה! ואת זה אלמד אותך</div>
</div>






<Recommends/>
</>


}
export default ThirdScreen