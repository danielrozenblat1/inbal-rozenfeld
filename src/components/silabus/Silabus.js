import React from 'react';
import { DropdownAccordion } from "../Akordion/Akordion";
import nailIt from "../../images/קורס נייל איט למתחילות.png";
import nailMaster from "../../images/קורס נייל מאסטר למתחילות.png";
import premium from "../../images/קורס פרימיום למתחילות.png";
import BoxPlus from "./BoxPlus";
import styles from "./Silabus.module.css";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import icon1 from '../../images/work.png';
import icon2 from '../../images/class.png';
import icon3 from '../../images/homework.png';
import icon4 from '../../images/certificate.png';
import icon5 from '../../images/withyou.png';
import icon6 from '../../images/sun.png';
import icon7 from '../../images/moon.png';
import icon8 from "../../images/מודליסטית.png"
import Button from '../button/Button';
import levelUp from "../../images/קורס לבל אפ למתקדמות.png";
const Silabus = () => {

  const courseTopics4 = [
    "קיצור זמנים באופן מיידי",
    "הסרת לק ג׳ל בצורה נכונה",
    "מניקור מכשירי בעזרת צבתית/מספריים",
    "תיקון מבנה אנטומי מדויק ליצירת מראה מושלם",
    "מריחה צמודה לקוטיקולה",
   
  ];

  const courseDetails4 = [
    { text: "5 שעות לימוד | מפגש 1", icon: icon1 },
    { text: "קבלת תעודת מקצוע", icon: icon4 },
    { text: "ליווי אישי לאחר ההשתלמות", icon: icon5 },
    { text: "מסלול בוקר: 9:00-14:00", icon: icon6 },
    { text: "מסלול ערב: 15:00-20:00", icon: icon7 },
    { text: "עבודה מעשית על מודליסטית", icon: icon8 }
  ];
  const courseTopics = [
    "בניית ציפורניים בג׳ל בשיטות המתקדמות ביותר",
    "שיטות מניקור נכונות לכל סוגי הבנייה",
    "אנטומיה של מבנה הציפורן",
    "הכרה וטיפול במחלות נפוצות",
    "היכרות עם חומרים וכלי עבודה",
    "חיטוי ועיקור",
    "הסרת לק ג׳ל בצורה נכונה",
    "שיוף צורה סימטרית שקד/מרובע/בלרינה",
    "מניקור מכשירי בעזרת צבתית/מספריים",
    "מריחה צמודה לקוטיקולה",
    
  
  ];

  const courseDetails = [
    { text: "12 שעות לימוד | 3 מפגשים | 4 שעות כל שיעור", icon: icon1 },
    { text: "כיתת לימוד פרטנית עד 2 תלמידות", icon: icon2 },
    { text: "שיעורי בית פרקטיים לאחר כל מפגש", icon: icon3 },
    { text: "קבלת תעודת מקצוע", icon: icon4 },
    { text: "ליווי אישי לאחר הקורס", icon: icon5 },
    { text: "מסלול בוקר: 09:00-13:00", icon: icon6 },
    { text: "מסלול ערב: 16:00-20:00", icon: icon7 },
    { text: "עבודה מעשית על מודליסטית", icon: icon8 }
  ];



  const courseTopics1 = [
    "אנטומיה של מבנה הציפורן",
    "הכרה וטיפול במחלות נפוצות",
    "היכרות עם חומרים וכלי עבודה",
    "חיטוי ועיקור",
    "הסרת לק ג׳ל בצורה נכונה",
    "שיוף צורה סימטרית שקד/מרובע/בלרינה",
    "מניקור מכשירי בעזרת צבתית/מספריים",
    "תיקון מבנה אנטומי מדויק",
    "מריחה צמודה לקוטיקולה",
    
  
  ];

  const courseDetails1 = [
    { text: "12 שעות לימוד | 3 מפגשים | 4 שעות כל שיעור", icon: icon1 },
    { text: "כיתת לימוד פרטנית עד 2 תלמידות", icon: icon2 },
    { text: "שיעורי בית פרקטיים לאחר כל מפגש", icon: icon3 },
    { text: "קבלת תעודת מקצוע", icon: icon4 },
    { text: "ליווי אישי לאחר הקורס", icon: icon5 },
    { text: "מסלול בוקר: 09:00-13:00", icon: icon6 },
    { text: "מסלול ערב: 16:00-20:00", icon: icon7 },
    { text: "עבודה מעשית על מודליסטית", icon: icon8 }
  ];


  const courseTopics2 = [
    "אנטומיה של מבנה הציפורן",
    "הכרה וטיפול במחלות נפוצות",
    "היכרות עם חומרים וכלי עבודה",
    "חיטוי ועיקור",
    "הסרת לק ג׳ל בצורה נכונה",
    "שיוף צורה סימטרית שקד/מרובע/בלרינה",
    "מניקור מכשירי בעזרת צבתית/מספריים",
    "תיקון מבנה אנטומי מדויק",
    "מריחה צמודה לקוטיקולה",
    "בניית ציפורניים בג׳ל בשיטות המתקדמות ביותר",
    "שיטות מניקור נכונות לכל סוגי הבנייה",
    
  ];

  const courseDetails2 = [
    { text: "16 שעות לימוד | 4 מפגשים 4 שעות כל שיעור", icon: icon1 },
    { text: "כיתת לימוד פרטנית עד 2 תלמידות", icon: icon2 },
    { text: "שיעורי בית פרקטיים לאחר כל מפגש", icon: icon3 },
    { text: "קבלת תעודת מקצוע", icon: icon4 },
    { text: "ליווי אישי לאחר הקורס", icon: icon5 },
    { text: "מסלול בוקר: 09:00-13:00", icon: icon6 },
    { text: "מסלול ערב: 16:00-20:00", icon: icon7 },
    { text: "עבודה מעשית על מודליסטית", icon: icon8 }
  ];

  function DropdownAccordion({ title, content }) {
    const [expanded, setExpanded] = React.useState(false);
  
    return (
      <div className={styles.akordion}>
        <Accordion
          expanded={expanded}
          sx={{
            boxShadow: '0px 2px 5px 0px #777',
            width: "100%",
            margin: "auto",
            background: "none",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            position: "relative",
            "&:before": {
              content: "''",
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "inherit",
              zIndex: -1,
            },
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            onClick={() => setExpanded(!expanded)}
            sx={{
              display: "flex",
              alignItems: "center",
              textAlign: "center",
              "& .MuiTypography-root": {
                width: "100%",
                padding: "5px 0",
                color: 'black',
                fontFamily: 'AssistantR',
                direction: "rtl",
                fontSize: 18
              },
              "& .MuiSvgIcon-root": {
                color: 'black',
              },
            }}
          >
            <Typography itemProp="headline">{title}</Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              width: "90%",
              margin: "0 auto",
              color: 'black',
              direction: "rtl",
              zIndex: 1,
              textAlign: "center",
              borderTop: '1px solid black',
            }}
          >
            <Typography sx={{ fontFamily: 'AssistantR', fontSize: 18 }} itemProp="description">{content}</Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    );
  }

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    centerMode: true,
    centerPadding: '22%',
    responsive: [
      {
        breakpoint: 760,
        settings: {
          centerMode: true,
          centerPadding: '10%',
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const NailItContent = () => (
    <div className={styles.courseContainer}>
        <h3 className={styles.courseTitle}>
        קורס Nail It יקנה לכן את כל היסודות והמיומנויות בתחום{' '}
        <span className={styles.goldGradient}>בדגש על בנייה בג׳ל:</span>
      </h3>
      <ul className={styles.topicsList}>
        {courseTopics.map((topic, index) => (
          <li key={index} className={styles.topicItem}>
            <FontAwesomeIcon icon={faCheck} className={styles.checkIcon} />
            <span>{topic}</span>
          </li>
        ))}
      </ul>

      <h4 className={styles.sectionTitle}>היקף הקורס:</h4>
      <ul className={styles.detailsList}>
        {courseDetails.map((detail, index) => (
          <li key={index} className={styles.detailItem}>
            <img src={detail.icon} alt={`Icon ${index + 1}`} className={styles.detailIcon} />
            <span>{detail.text}</span>
          </li>
        ))}
      </ul>

      <div className={styles.premiumSection}>
        <h3 className={styles.premiumTitle}>בנוסף תקבלי</h3>
        <h3 className={styles.premiumTitle}>ערכת PREMIUM במחיר מיוחד עבורך:</h3>
        <p>במסגרת הצטרפותך לקורס תוכלי להנות מהטבה מיוחדת לרכישת ערכת לימוד מפוארת של מותגים מובילים המכילה את כל מה שאת צריכה לתחילת דרכך.</p>
        <p>שווי הערכה: <span className={styles.originalPrice}>3,500 ש"ח</span></p>
        <p className={styles.discountedPrice}>בשבילך: 2,500 ש"ח</p>
      </div>

      <p className={styles.paymentOptions}>
        אפשרויות תשלום: אשראי (עד 3 תשלומים) / מזומן / העברה בנקאית
      </p>
      <Button text="קורס NAIL IT מעניין אותי" message="היי ענבל, אשמח לשמוע עוד על קורס NAIL IT"/>
    </div>
  );

  const NailMasterContent = () => {


  return (
    <div className={styles.courseContainer}>
      <h3 className={styles.courseTitle}>
        קורס Nail Master יקנה לכן את כל היסודות והמיומנויות המתקדמות בתחום הציפורניים{' '}
        <span className={styles.goldGradient}>בדגש על מניקור לק ג׳ל:</span>
      </h3>
      <ul className={styles.topicsList}>
        {courseTopics1.map((topic, index) => (
          <li key={index} className={styles.topicItem}>
            <FontAwesomeIcon icon={faCheck} className={styles.checkIcon} />
            <span>{topic}</span>
          </li>
        ))}
      </ul>

      <h4 className={styles.sectionTitle}>היקף הקורס:</h4>
      <ul className={styles.detailsList}>
        {courseDetails1.map((detail, index) => (
          <li key={index} className={styles.detailItem}>
            <img src={detail.icon} alt={`Icon ${index + 1}`} className={styles.detailIcon} />
            <span>{detail.text}</span>
          </li>
        ))}
      </ul>

      <div className={styles.premiumSection}>
        <h3 className={styles.premiumTitle}>בנוסף תקבלי</h3>
        <h3 className={styles.premiumTitle}>ערכת PREMIUM במחיר מיוחד עבורך:</h3>
        <p>במסגרת הצטרפותך לקורס תוכלי להנות מהטבה מיוחדת לרכישת ערכת לימוד מפוארת של מותגים מובילים המכילה את כל מה שאת צריכה לתחילת דרכך.</p>
        <p>שווי הערכה: <span className={styles.originalPrice}>3,500 ש"ח</span></p>
        <p className={styles.discountedPrice}>בשבילך: 2,500 ש"ח</p>
      </div>

      <p className={styles.paymentOptions}>
        אפשרויות תשלום: אשראי (עד 3 תשלומים) / מזומן / העברה בנקאית
      </p>
      <Button text="קורס NAIL MASTER מעניין אותי" message="היי ענבל, אשמח לשמוע עוד על קורס NAIL MASTER"/>
    </div>
  );
};

const PremiumContent = () => {


  return (
    <div className={styles.courseContainer}>
    <h3 className={styles.courseTitle}>
        קורס פרימיום חדש המאחד את 2 הקורסים לקורס אחד!{' '}
        <span className={styles.goldGradient}>בדגש על מניקור לק ג׳ל  <br/> ובנייה בג׳ל:</span>
      </h3>
      <div className={styles.premiumFeatures}>
        <p><FontAwesomeIcon icon={faCheck} className={styles.checkIcon} /> מניקור לק ג׳ל על ציפורניים טבעיות</p>
        <p><FontAwesomeIcon icon={faCheck} className={styles.checkIcon} /> בנייה בג׳ל בשיטות המתקדמות ביותר</p>
      </div>
      <h4 className={styles.sectionTitle}>בקורס תלמדי:</h4>
      <ul className={styles.topicsList}>
        {courseTopics2.map((topic, index) => (
          <li key={index} className={styles.topicItem}>
            <FontAwesomeIcon icon={faCheck} className={styles.checkIcon} />
            <span>{topic}</span>
          </li>
        ))}
      </ul>

      <h4 className={styles.sectionTitle}>היקף הקורס:</h4>
      <ul className={styles.detailsList}>
        {courseDetails2.map((detail, index) => (
          <li key={index} className={styles.detailItem}>
            <img src={detail.icon} alt={`Icon ${index + 1}`} className={styles.detailIcon} />
            <span>{detail.text}</span>
          </li>
        ))}
      </ul>

      <div className={styles.premiumSection}>
        <h3 className={styles.premiumTitle}>בנוסף תקבלי</h3>
        <h3 className={styles.premiumTitle}>ערכת PREMIUM במחיר מיוחד עבורך:</h3>
        <p>במסגרת הצטרפותך לקורס תוכלי להנות מהטבה מיוחדת לרכישת ערכת לימוד מפוארת של מותגים מובילים המכילה את כל מה שאת צריכה לתחילת דרכך.</p>
        <p>שווי הערכה: <span className={styles.originalPrice}>3,500 ש"ח</span></p>
        <p className={styles.discountedPrice}>בשבילך: 2,500 ש"ח</p>
      </div>

      <p className={styles.paymentOptions}>
        אפשרויות תשלום: אשראי (עד 3 תשלומים) / מזומן / העברה בנקאית
      </p>
      <Button text="קורס ה PREMIUM מעניין אותי" message="היי ענבל, אשמח לשמוע עוד על קורס ה PREMIUM"/>
    </div>
  );
};
 const LevelUpContent = () => {


    return (
      <div className={styles.courseContainer}>
    <h3 className={styles.courseTitle}>
    כבר עברת קורס בתחום? את מקבלת לקוחות על בסיס יום יומי ועדיין לא מרגישה שזה מושלם?
או שאת רוצה להקפיץ את הרמה שלך ?
        <span className={styles.goldGradient}>בדגש על שיפור מיומנויות מתקדמות:</span>
      </h3>
        <h4 className={styles.sectionTitle}>הגיע הזמן להשתלמות  LEVEL UP</h4>
        <ul className={styles.topicsList}>
          {courseTopics4.map((topic, index) => (
            <li key={index} className={styles.topicItem}>
              <FontAwesomeIcon icon={faCheck} className={styles.checkIcon} />
              <span>{topic}</span>
            </li>
          ))}
        </ul>

        <h4 className={styles.sectionTitle}>היקף הקורס:</h4>
        <ul className={styles.detailsList}>
          {courseDetails4.map((detail, index) => (
            <li key={index} className={styles.detailItem}>
              <img src={detail.icon} alt={`Icon ${index + 1}`} className={styles.detailIcon} />
              <span>{detail.text}</span>
            </li>
          ))}
        </ul>

        <p className={styles.paymentOptions}>
          אפשרויות תשלום: מזומן / העברה בנקאית / אשראי
        </p>
        <Button text="קורס Level Up מעניין אותי" message="היי ענבל, אשמח לשמוע עוד על קורס Level Up"/>
      </div>
    );
  };


  return (
    <Slider {...sliderSettings}>
      <DropdownAccordion 
        title={<BoxPlus image={nailIt} description="קורס NAIL IT למתחילות"/>} 
        content={<NailItContent />}
      />
      <DropdownAccordion 
        title={<BoxPlus image={nailMaster} description="קורס NAIL MASTER למתחילות"/>} 
        content={<NailMasterContent />}
      />
      <DropdownAccordion 
        title={<BoxPlus image={premium} description="קורס PREMIUM למתחילות"/>} 
        content={<PremiumContent />}
      />
          <DropdownAccordion 
        title={<BoxPlus image={levelUp} description="קורס Level Up למתקדמות"/>} 
        content={<LevelUpContent />}
      />
    </Slider>
  );
}

export default Silabus;