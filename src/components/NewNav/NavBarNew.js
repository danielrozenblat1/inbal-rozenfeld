import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from "react-scroll";
import styles from './NavBarNew.module.css';
import logo from '../../images/ענבל רוזנפלד לוגו.png';
import { FaInstagram, FaFacebook, FaWhatsapp, FaBars, FaTimes } from 'react-icons/fa';
import Privacy from '../privacy/Privacy'

const NavBarNew = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isSticky, setIsSticky] = useState(false);
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    let lastScrollY = window.scrollY;
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (window.scrollY > 0) {
            setIsSticky(true);
          } else {
            setIsSticky(false);
          }
          lastScrollY = window.scrollY;
          ticking = false;
        });
        ticking = true;
      }
    };
    
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = () => {
    const phoneNumber = "+972507277977";
    const message ="היי ענבל ,אני רוצה לשמוע ממך עוד על..";
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, "_blank");
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);
  const menuItems = ['קורסים','תלמידות','מי אני','צרי קשר','שאלות נפוצות','בונוסים'];

  const handlePrivacyClick = () => {
    setIsPrivacyModalOpen(true);
    closeMenu(); // Close the mobile menu when opening privacy
  };

  return (
    <>
      <nav className={`${styles.navbar} ${isSticky ? styles.sticky : ''}`}>
        {windowWidth <= 850 && (
          <div className={styles.hamburger} onClick={toggleMenu}>
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </div>
        )}
        {windowWidth <= 850 && (
          <div className={styles.logo}>
            <img src={logo} alt="Logo" />
          </div>
        )}
        {isMenuOpen && windowWidth <= 850 && (
          <div className={styles.mobileMenu}>
            {menuItems.map((item, index) => (
              <ScrollLink 
                key={index} 
                to={item} 
                smooth={true} 
                offset={-100}
                duration={700} 
                onClick={closeMenu}
              >
                {item}
              </ScrollLink>
            ))}
            <a 
              onClick={handlePrivacyClick} 
              className={styles.mobilePrivacyLink}
            >
              הצהרת נגישות
            </a>
            <div className={styles.center}>
              <img className={styles.image} src={logo} alt="ענבל רוזנפלד לוגו"/>
            </div>
          </div>
        )}
        {windowWidth > 850 && (
          <div className={styles.menuItems}>
            {menuItems.map((item, index) => (
              <ScrollLink 
                key={index} 
                offset={-100}
                to={item} 
                smooth={true} 
                duration={500}
              >
                {item}
              </ScrollLink>
            ))}
          </div>
        )}
           
        {window.innerWidth > 1050 && (
          <div className={styles.logo}>
            <img src={logo} alt="Logo" />
          </div>
        )}
        
        <div className={styles.socialIcons}>
          <a href="https://www.instagram.com/inbal_rozenfeld_academy/" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a onClick={handleClick}>
            <FaWhatsapp />
          </a>
        </div>
      </nav>
      
      <Privacy 
        isOpen={isPrivacyModalOpen}
        onClose={() => setIsPrivacyModalOpen(false)}
      />
    </>
  );
};

export default NavBarNew;