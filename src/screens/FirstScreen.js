import styles from "./FirstScreen.module.css"
import inbal from "../images/ענבל רוזנפלד.png"

import FormScreen from "../components/form/FormScreen"

const FirstScreen=(props)=>{
   

return <>
<div className={props.scrolled?styles.descriptionP:styles.description}>את יכולה להפסיק לקבל משימות מהבוס שלך ולהתחיל להרוויח מהתחום שתמיד אהבת</div>
<div className={styles.description}>איך זה קורה? תמשיכי לגלול!</div>
<div className={styles.center}><img className={styles.image} src={inbal} alt="ענבל רוזנפלד"/></div>
<h1 className={styles.title}>ענבל רוזנפלד</h1>
<h2 className={styles.job}>קורס לק ג׳ל | בנייה בג׳ל | השתלמויות</h2>
<FormScreen/>
</>


}
export default FirstScreen