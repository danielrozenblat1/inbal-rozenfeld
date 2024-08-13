import React, { useState } from 'react'
import Button from "../button/Button"
import styles from "./NailPackage.module.css"
import nailIt from "../../images/קורס נייל איט למתחילות.png"
import nailMaster from "../../images/קורס נייל מאסטר למתחילות.png"
import premium from "../../images/קורס פרימיום למתחילות.png"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const AccordionItem = ({ title, image, content, buttonText, buttonMessage }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={styles.accordionItem}>
      <div className={styles.accordionHeader} onClick={() => setIsOpen(!isOpen)}>
        <div className={styles.title}>{title}</div>
        <div className={styles.center}><img className={styles.image} src={image} alt={title}/></div>
        <ExpandMoreIcon className={`${styles.expandIcon} ${isOpen ? styles.rotated : ''}`} />
      </div>
      {isOpen && (
        <div className={styles.accordionContent}>
          <div className={styles.courseContent}>
            {content}
          </div>
          <Button text={buttonText} message={buttonMessage}/>
        </div>
      )}
    </div>
  )
}

const NailPackage = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    direction: "rtl",
    slidesToShow: 1,
    centerMode: true,
    centerPadding: '10%',
    responsive: [
      {
        breakpoint: 760,
        settings: {
          centerMode: true,
          centerPadding: '5%',
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className={styles.accordionContainer}>
      <Slider {...sliderSettings}>
        <div className={styles.sliderItem}>
          <AccordionItem 
            title="קורס Nail it למתחילות"
            image={nailIt}
            content={
              <>
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
              </>
            }
            buttonText="ענבל, Nail it נשמע לי מעולה!"
            buttonMessage="היי ענבל, אשמח לשמוע עוד על קורס nail it"
          />
        </div>
        
        <div className={styles.sliderItem}>
          <AccordionItem 
            title="קורס Nail master למתחילות"
            image={nailMaster}
            content={
              <>
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
              </>
            }
            buttonText="ענבל, Nail master נשמע לי מעולה!"
            buttonMessage="היי ענבל, אשמח לשמוע עוד על קורס nail master"
          />
        </div>
        
        <div className={styles.sliderItem}>
          <AccordionItem 
            title="קורס Premium למתחילות"
            image={premium}
            content={
              <>
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
              </>
            }
            buttonText="ענבל, קורס Premium נשמע לי מעולה!"
            buttonMessage="היי ענבל, אשמח לשמוע עוד על קורס premium"
          />
        </div>
      </Slider>
    </div>
  )
}

export default NailPackage