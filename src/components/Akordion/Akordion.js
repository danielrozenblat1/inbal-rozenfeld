import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ScrollReveal from 'scrollreveal';
import styles from "./Akordion.module.css"
import Button from '../button/Button';
 function DropdownAccordion({ title, content }) {
  const [expanded, setExpanded] = React.useState(false);

  return (

    <div className={styles.akordion} >
      <Accordion
        expanded={expanded}
        sx={{
            boxShadow: '0px 2px 5px 0px #333',
          width: "100%",
          margin: "auto",
          background:"linear-gradient(146deg, rgba(255,247,234,1) 20%, rgba(233,216,171,1) 50%, rgba(255,247,236,1) 80%)",
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
              padding:"5px 0",
              color: 'black', // Apply black color to content
              fontFamily: 'AssistantR',
              direction: "rtl",
              fontSize:18
            },
            
            "& .MuiSvgIcon-root": { // Target the icon for black color
              color: 'black',
            },
           
          }}
        >
          <Typography itemProp="headline">{title}</Typography>
        </AccordionSummary >
        <AccordionDetails
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: "90%",
            margin: "0 auto",
            color: 'black', // Apply black color to content
           
            direction: "rtl",
            zIndex: 1,
            textAlign:"center",
            borderTop: '1px solid black', // Add top border
          }}
        >
          <Typography sx={{ fontFamily: 'AssistantR' , fontSize:18}} itemProp="description">{content}</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
 
  );
}

export default function BasicAccordion() {
    React.useEffect(()=>{

        ScrollReveal().reveal(`.${styles.title}`, {
            duration: 1000,
            distance: "30px",
            origin: "top", // Start from the right side
            easing: "ease-out",
            reset:false,
            viewFactor: 0.2,
            interval: 300, // Delay between each element
            delay: 200, // Delay before the animation starts
            scale: 1, // Set scale to 1 or null
          });
    },[])
  return (
    <div
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        width: "50%",
        margin: "0 auto",
        
      }}
    >
      {/* Center parent container */}
     
    <div className={styles.title} id="שאלות נפוצות" itemProp="mainEntity" itemScope itemType="https://schema.org/WebPage">שאלות נפוצות</div>
    <DropdownAccordion title="אין לי נסיון בכלל בתחום, זה עדיין רלוונטי עבורי?" content="ברור! את לא חייבת נסיון בכלל! אבל את כן חייבת לאהוב את התחום ולהיות עם מוטיבציה ורצון להצליח בו!" />
      <DropdownAccordion title="אני מפחדת שלא אצליח בתחום" content="ברגע שיש התמדה , ברגע שאת לא מורידה את הרגל מהגז וברגע שיש תיק עבודות והאיכות קיימת - את תצליחי - הצלחה לא באה ברגע , אבל ברגע שאת תמיד משתפרת ולא מוותרת - ההצלחה תגיע!"/>
      <DropdownAccordion title="נכוותי מהתחום בעבר - איך אדע שהפעם זה אחרת?" content={<><div className={styles.description}>גם אני בעברי נכוותי מהתחום ולכן אני מבינה את החשש שלך ב100% , אני אשמח לשמוע איך נכווית בתחום ולראות איך אני יכולה לעזור לך</div>
      <Button text="ענבל, בואי נדבר" message="ענבל, נכוותי מהתחום בעבר ואני רוצה לשמוע איך את יכולה לעזור לי.."/> </>}/>
      <DropdownAccordion title="אני מאוהבת בתחום אבל מפחדת לעשות את הצעד" content="אני יודעת - זה לא פשוט, זה מרתיע להיות תלויה בעצמך, זה מרתיע לעבר שינויים וזה לא פשוט לנהל עסק - אבל עם זאת - בכל יום שעובר - שאת מתלבטת - מישהי אחרת עושה את הצעד ומגשימה את החלום שלך! אני מציעה שתשאירי פרטים בטופס ונדבר על הכל!"/>
     <Button text="ענבל,יש לי עוד שאלות" message="היי ענבל, הגעתי מהדף שלך, אשמח לדעת עוד על.."/>
     
    </div>
  
  );
}
