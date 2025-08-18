import logo from './logo.svg';
import './App.css';
import NavBarNew from './components/NewNav/NavBarNew';
import FirstScreen from './screens/FirstScreen';
import SecondScreen from './screens/SecondScreen';
import ThirdScreen from './screens/ThirdScreen';
import AboutMe from './components/me/Me';
import BasicAccordion from './components/Akordion/Akordion';
import { useEffect, useState } from 'react';
import ByMe from './components/ByMe/ByMe';
import ForthScreen from './screens/ForthScreen';
import Silabus from './components/silabus/Silabus';
import Location from './screens/Place';
import WhoFits from './components/fit/WhoFits';
import FormScreen from './components/form/FormScreen';
import PrivacyPolicy from './components/privacy copy/Privacy';

function App() {
  const [scrolled, setScrolled] = useState(false);


  useEffect(() => {
   


    window.addEventListener("scroll", handleScroll);

    return () => {
        window.removeEventListener("scroll", handleScroll);
    };
}, []);

  const handleScroll = () => {
    if (window.pageYOffset > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  return <>
  <div class="app">
  <NavBarNew/>
  <FirstScreen scrolled={scrolled}/>
  <SecondScreen/>
  <WhoFits/>
  <ThirdScreen/>
  
  <FormScreen title="הכל מתחיל בקבלת החלטה!"/>
  <BasicAccordion/>
 {/* <ForthScreen/> */}
 <Location/>
      <PrivacyPolicy
                  ownerName="ענבל רוזנפלד"
                  email="inbal.rozenfeld@gmail.com"
                  phone="+972 XX-XXX-XXXX"
                  domain="https://inbalrozenfeld.co.il/"
                />
  <ByMe/>
  </div>
  </>
}

export default App;
