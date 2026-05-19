import styles from "./Recommends.module.css"
import result1 from "../../images/ענבל רוזנפלד תלמידות 1.webp"
import result2 from "../../images/ענבל רוזנפלד תלמידות 2.webp"

import result7 from "../../images/ענבל רוזנפלד תלמידות 7.webp"
import result8 from "../../images/ענבל רוזנפלד תלמידות 8.webp"
import result9 from "../../images/ענבל רוזנפלד תלמידות 9.webp"

import result11 from "../../images/ענבל רוזנפלד המלצה 1.webp"
import result12 from "../../images/ענבל רוזנפלד המלצה 2.webp"
import result13 from "../../images/ענבל רוזנפלד המלצה 3.webp"
import result14 from "../../images/ענבל רוזנפלד המלצה 4.webp"
import result15 from "../../images/ענבל רוזנפלד תלמידות 11.webp"
import result16 from "../../images/ענבל רוזנפלד תלמידות 12.webp"
import result17 from "../../images/ענבל רוזנפלד תלמידות 13.webp"

import result18 from "../../images/ענבל רוזנפלד תלמידות 14.webp"
import result19 from "../../images/ענבל רוזנפלד תלמידות 15.webp"
import result20 from "../../images/ענבל רוזנפלד עם תלמידות 1.webp"
import result21 from "../../images/ענבל רוזנפלד עם תלמידות 2.webp"
import result22 from "../../images/ענבל רוזנפלד עם תלמידות 3.webp"
import result23 from "../../images/ענבל רוזנפלד עם תלמידות 4.webp"
import result24 from "../../images/ענבל רוזנפלד עם תלמידות 5.webp"
import result25 from "../../images/ענבל רוזנפלד עם תלמידות 6.webp"

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Button from "../button/Button"
import FormScreen from "../form/FormScreen"
const Recommends=()=>{
    const sliderSettings = {
     
        infinite: true,
        speed: 700,
        autoplaySpeed: 2500,
        infinite: true,
   
        dots:false,
        
        slidesToShow: window.innerWidth < 450 ? 1 :
                 
                      window.innerWidth <= 1050 ? 2 : 4,
        slidesToScroll:1,
                     
      };
      const content = [
        {
          type: 'image',
          src: result1,
        },
    

    
        {
          type: 'image',
          src: result8,
        },
      
        {
          type: 'image',
          src: result9,
        },
        {
          type: 'image',
          src: result11,
        },
        {
          type: 'image',
          src: result2,
        },
           {
          type: 'image',
          src: result20,
        },
        {
          type: 'image',
          src: result12,
        },
        {
          type: 'image',
          src: result21,
        },
        
          {
            type: 'image',
            src: result17,
          },
          {
            type: 'image',
            src: result13,
          },
             {
          type: 'image',
          src: result22,
        },
          {
            type: 'image',
            src: result7,
          },
          {
            type: 'image',
            src: result16,
          },
             {
          type: 'image',
          src: result23,
        },
          {
            type: 'image',
            src: result14,
          },
             {
          type: 'image',
          src: result24,
        },
          {
            type: 'image',
            src: result15,
          },
             {
          type: 'image',
          src: result25,
        },
          {
            type: 'image',
            src: result18,
          },
          {
            type: 'image',
            src: result19,
          },
        ];  
return <>
<div className={styles.title} id="תלמידות"></div>
<div className={styles.sliderContainer}>
        <Slider {...sliderSettings}>
          {content.map((item, index) => (
            <div key={index} itemscope itemtype="http://schema.org/Review">
              {item.type === 'image' && (
                <img src={item.src} className={styles.image1} alt={`ענבל רוזנפלד לקוחה ממליצה מספר ${index + 1}`} itemprop="image" loading="lazy" decoding="async"/>
              )}
              {item.type === 'video' && (
                <video
                  style={{ width: "100%",display:"flex",objectFit:"cover", margin: "auto", height: "100%" }}
                  muted
                  controls
                
                  itemprop="image"
                >
                  <source src={item.src} type="video/mp4" />
             
                </video>
         
              )}
           <meta itemprop="datePublished" content={new Date().toISOString()} />
            </div>
            
          ))}
        </Slider>
      </div>
      {/* <div className={styles.explain} >ההכשרה שלך היא זו שתגדיר אותך כעוד אחת שסיימה קורס מקצועי או כמקצוענית חסרת פשרות</div> */}

</>


}
export default Recommends