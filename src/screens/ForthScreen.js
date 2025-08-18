import styles from "./ForthScreen.module.css"

import { useEffect, useState } from "react"
import ScrollReveal from "scrollreveal"

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ShapedComponent from "../components/shape/Shape";
import shapeone from "../images/ענבל רוזנפלד תלמידות 2.png"
import NailPackage from "../components/nailpackage/NailPackage";

const ForthScreen=()=>{



 







    useEffect(()=>{

        ScrollReveal().reveal(`.${styles.title}`, {
            duration: 500,
            distance: "60px",
            origin: "top",
            easing: "ease-out",
            reset: false,
            viewFactor: 0.2,
            interval: 300,
            delay: 200,
            scale: 1,
          });
          ScrollReveal().reveal(`.${styles.bold}`, {
            duration: 500,
            distance: "60px",
            origin: "top",
            easing: "ease-in",
            reset: false,
            viewFactor: 0.2,
            interval: 300,
            delay: 200,
            beforeReveal: (domEl) => {
              domEl.style.transform = "scale(1)";
            },
            beforeReset: (domEl) => {
              domEl.style.transform = "scale(0.2)";
            },
          });
          ScrollReveal().reveal(`.${styles.go}`, {
            duration: 500,
            distance: "60px",
            origin: "top",
            easing: "ease-out",
            reset: false,
            viewFactor: 0.2,
            interval: 300,
            delay: 200,
            scale: 1,
          });
    },[])
    const sliderSettings = {
      dots: true,
      infinite: true,
      speed: 500,
  direction:"rtl",
        slidesToShow: 1, // Adjust this value to control the number of visible slides
      centerMode: true, // Enable center mode
      centerPadding: '22%', // Adjust the padding to control the amount of the next and previous slides visible
      responsive: [
        {
          breakpoint: 760,
          settings: {
         
            centerMode: true, // Enable center mode
            centerPadding: '10%',
            slidesToShow: 1,
            slidesToScroll: 1,
           
          },
        },
      ],
    };

return <>
      <div className={styles.title} id="">אז איך את רוצה להכנס לתחום?</div>
      <div className={styles.description} id="">החליקי ולחצי על כל קורס כדי לראות יותר לגביו</div>
      <NailPackage/>
      {/* <Slider {...sliderSettings}> */}
      <div className={styles.row}>
  {/* <ShapedComponent title="שיעור ראשון" description="השיעור הראשון מתמקד בכל העניין טכני, את תבצעי מולי את התרגילים ואני אתקן אותך" number="01" />
  <ShapedComponent title="שיעור שני" description="השיעור הראשון מתמקד בכל העניין טכני, את תבצעי מולי את התרגילים ואני אתקן אותך" number="02"/>
  <ShapedComponent title="שיעור שלישי" description="השיעור הראשון מתמקד בכל העניין טכני, את תבצעי מולי את התרגילים ואני אתקן אותך" number="03"/> */}
      {/* </Slider> */}
      </div>
</>

}
export default ForthScreen
