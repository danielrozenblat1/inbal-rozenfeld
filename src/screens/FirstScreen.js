import styles from "./FirstScreen.module.css"
import inbal from "../images/ענבל רוזנפלד.png"

import FormScreen from "../components/form/FormScreen"
import AboutMe from "../components/me/Me"

const FirstScreen=(props)=>{
   

return <>
<div className={props.scrolled?styles.descriptionP:styles.description}>תמיד חלמת להיות עצמאית? לנהל את הזמן שלך ולהפוך את החלום שלך לעסק מצליח ורווחי ? <br/> האקדמיה שלי כאן כדי להראות לך את הדרך!</div>

{/* <div className={styles.center}><img className={styles.image} src={inbal} alt="ענבל רוזנפלד"/></div> */}
<AboutMe/>
{/* <h1 className={styles.title}>ענבל רוזנפלד</h1>
<h2 className={styles.job}>קורס לק ג׳ל | בנייה בג׳ל | השתלמויות</h2> */}

</>


}
export default FirstScreen