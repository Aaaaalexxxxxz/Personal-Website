import styles from './Home.module.css'
import {useTypewriter,  Curser} from 'react-simple-typewriter'

function Homecontent(){
    const [typeEffect] = useTypewriter({
        words: ['Frontend Developer', 'Mathematics @ UWaterloo', 'Data Analyst'],
        loop:{},
        typeSpeed: 100,
        deleteSpeed: 40
    })
        return(
            <>
            <section id = "homesection" className={styles.homeintro}>
                <div className={styles.container}>
                    <div className={styles.intro}>Hi, my name is </div>
                    <div className={styles.name}>Alex Zhang</div>
                    <div className={styles.welcome}>Welcome to my website!</div>
                    <div className={styles.type}>
                        <p>👋 I'm a <span className={styles.typetext}>{typeEffect}</span></p>
                    </div>
                    <div className={styles.more}>
                    <a href='#aboutsection'>MORE</a>
                        <div className={styles.arrow}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>
                </section>
              </>
        );
};

export default Homecontent