import styles from './Contact.module.css'
import resume from '../assets/Parking Pass.pdf'
import image from '../assets/WechatIMG1559.jpg'
function Contact(){
    return(
        <section id='contactsection' className={styles.contact}>
            <div>
                <h1 className={styles.title}>Contact</h1>
                <div className={styles.contactbody}>
                    <div className={styles.resume}>
                    <img src={image} width="300" ></img>
                    </div>
                    <div className = {styles.hori}></div>
                    <div className = {styles.methods}>
                       <ul>
                        <li>
                            
                        </li>
                       </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact