import styles from './footer.module.css'
import { FaLinkedin, FaGithub, FaFacebook} from "react-icons/fa"
function Footer(){
    return(
        <div className={styles.footer}>
            <span className={styles.footer_left}>Developed and operated by Alex Zhang</span>
            <span className={styles.copyright}>&copy; {new Date().getFullYear()} Alex Zhang</span>
            <span className={styles.footer_right}>
                <ul className={styles.contact}>
                    <li><a href="https://www.linkedin.com/in/alexzhanglm/"><FaLinkedin className={styles.icon} color='#F3F3ED'/></a></li>
                    <li><a href="https://github.com/"><FaGithub className={styles.icon} color='#F3F3ED'/></a></li>
                    <li><a href="#"><FaFacebook className={styles.icon} color='#F3F3ED'/></a></li>
                </ul>
                </span>
        </div>
    );
}

export default Footer