import styles from './About.module.css'
import codingpic from '../assets/coding.jpg'
import {FaHtml5, FaCss3, FaJava, FaNodeJs, FaPython, FaReact, FaLinux} from 'react-icons/fa'
import {SiCplusplus, SiRacket, SiRstudio, SiJavascript, SiGnubash} from 'react-icons/si'

const pink = {color : "pink",}
const blue = {color: "lightblue",}
const link = {text_decoration:"none",
                color: "lightyellow"}
function Aboutcontent(){
    return(
        <><section id="aboutsection" className={styles.about}>
            <div className={styles.texts}>
                <h2>About Me</h2>
            </div>
            <section className={styles.aboutcontent}>
                <div className={styles.aboutme}>
                    <h3>Who am I?</h3>
                    <div>I am a <span style={blue}>Frontend Developer</span>,
                        <span style={pink}> Mathematics</span> student at the <a href='uwaterloo.ca' style = {link}>University of Waterloo</a></div>
            </div>
            <img className={styles.image} src={codingpic}>

            </img>
        </section><section className={styles.skills}>
                <div className={styles.texts}>
                    <h3 className={styles.title}>Relevent Skills</h3>
                    <div className={styles.skillgrid}>
                        <div className={styles.skillcard}>
                            <FaHtml5 className={styles.cardicon} />
                            <p className={styles.cardtext}>Html</p>
                        </div>
                        <div className={styles.skillcard}>
                            <FaCss3 className={styles.cardicon} />
                            <p className={styles.cardtext}>CSS</p>
                        </div>
                        <div className={styles.skillcard}>
                            <FaJava className={styles.cardicon} />
                            <p className={styles.cardtext}>Java</p>
                        </div>
                        <div className={styles.skillcard}>
                            <FaNodeJs className={styles.cardicon} />
                            <p className={styles.cardtext}>NodeJs</p>
                        </div>
                        <div className={styles.skillcard}>
                            <FaPython className={styles.cardicon} />
                            <p className={styles.cardtext}>Python</p>
                        </div>
                        <div className={styles.skillcard}>
                            <FaReact className={styles.cardicon} />
                            <p className={styles.cardtext}>React</p>
                        </div>
                        <div className={styles.skillcard}>
                            <SiCplusplus className={styles.cardicon} />
                            <p className={styles.cardtext}>C/C++</p>
                        </div>
                        <div className={styles.skillcard}>
                            <SiRacket className={styles.cardicon} />
                            <p className={styles.cardtext}>Racket</p>
                        </div>
                        <div className={styles.skillcard}>
                            <SiRstudio className={styles.cardicon} />
                            <p className={styles.cardtext}>RStudio</p>
                        </div>
                        <div className={styles.skillcard}>
                            <FaLinux className={styles.cardicon} />
                            <p className={styles.cardtext}>Linux</p>
                        </div>
                        <div className={styles.skillcard}>
                            <SiJavascript className={styles.cardicon} />
                            <p className={styles.cardtext}>JS</p>
                        </div>
                        <div className={styles.skillcard}>
                            <SiGnubash className={styles.cardicon} />
                            <p className={styles.cardtext}>Bash</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.experience}>
                <div className={styles.texts}>
                    <h2 className={styles.title}>My Experiences</h2>
                    <div className={styles.ExpCard}>
                        <h4>Job Title</h4>
                        <p> Date</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Saepe iure a illum, ratione autem maxime cum fugiat explicabo dignissimos
                            quisquam facere rem minima vero odit harum. Sequi delectus quasi nisi.</p>
                    </div>
                </div>
            </section>
        </section></>
    );
}

export default Aboutcontent