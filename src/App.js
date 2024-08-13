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

  <ThirdScreen/>
  <BasicAccordion/>
 {/* <ForthScreen/> */}
  <ByMe/>
  </div>
  </>
}

export default App;
