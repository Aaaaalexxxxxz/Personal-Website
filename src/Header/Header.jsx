import React, {useState, useEffect} from 'react'
import styles from './header.module.css'
import{Link} from 'react-scroll'
import {FaHome, FaAddressCard, FaUser, FaCode} from 'react-icons/fa'
import Gege from '../assets/Favicon.png'
function Header(){


    //change navbar color on scroll
    const [color, setColor] = useState(false)

    const changeColor = () => {
        if (window.scrollY >= 200) {
            setColor(true);
        } else {
            setColor(false);
        }
    }
    window.addEventListener('scroll', changeColor)



    return(
        <header>
            <div className={color? styles.headeractive : styles.header}>
                <a href="#homesection"><img src={Gege} className={styles.favicon} ></img></a>
                <ul className = {color ? styles.navbaractive : styles.navbar}>
                    <li className ={styles.navopt}><Link to="homesection" spy={true} smooth={true} offset={-50} duration={1}><FaHome size='0.9em'/> HOME</Link></li>
                    <li className ={styles.navopt}><Link to="aboutsection" spy={true} smooth={true} offset={35} duration={1}><FaUser size='0.9em'/> ABOUT ME</Link></li>
                    <li className ={styles.navopt}><Link to="projectsection" spy={true} smooth={true} offset={-70} duration={1}><FaCode size='0.9em'/> PROJECTS</Link></li>
                    <li className ={styles.navopt}><Link to="contactsection" spy={true} smooth={true} offset={-50} duration={1}><FaAddressCard size='0.9em'/> CONTACTS</Link></li>
                </ul>
                <ul className = {color ? styles.navbaractive_nar : styles.navbar_nar}>
                    <li className ={styles.navopt_nar}><Link to="homesection" spy={true} smooth={true} offset={-50} duration={1}><FaHome size='0.9em'/></Link></li>
                    <li className ={styles.navopt_nar}><Link to="aboutsection" spy={true} smooth={true} offset={35} duration={1}><FaUser size='0.9em' top='30%'/></Link></li>
                    <li className ={styles.navopt_nar}><Link to="projectsection" spy={true} smooth={true} offset={-70} duration={1}><FaCode size='0.9em'/></Link></li>
                    <li className ={styles.navopt_nar}><Link to="contactsection" spy={true} smooth={true} offset={-50} duration={1}><FaAddressCard size='0.9em'/></Link></li>
                </ul>
            </div>
        </header>
    );
};

export default Header