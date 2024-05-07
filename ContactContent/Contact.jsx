import styles from './Contact.module.css'
import {MdEmail} from "react-icons/md"
import { FaLinkedin, FaGithub, FaFacebook} from "react-icons/fa"
function Contact(){
    return(
        <section id='contactsection' className={styles.contact}>
                <h1 className={styles.title}>Contact</h1>
                <div className={styles.contactbody}>
                    <div className={styles.contactmethod}>
                        <MdEmail/><a href='mailto: a355zhan@uwaterloo.ca'>a355zhan@uwaterloo.ca</a>
                    </div>
                    <div className={styles.contactmethod}> 
                        <FaLinkedin/><a href='https://www.linkedin.com/in/alexzhanglm/'>alexzhanglm</a>
                    </div>
                    <div className={styles.contactmethod}>
                        <FaGithub/><a href="https://github.com/Aaaaalexxxxxz">Aaaaalexxxxxz</a>
                    </div>
                </div>
        </section>
    );
}

export default Contact