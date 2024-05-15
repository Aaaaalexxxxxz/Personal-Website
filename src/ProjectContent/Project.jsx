import styles from './Project.module.css'
import gege from '../assets/Favicon.png'
import gymloglogo from '../assets/Gym-log-logo.png'
function Projectcontent(){
    return(
        <section id="projectsection" className={styles.project}>
            <h1>Projects and Recent Works</h1>
            <div className={styles.projectgrid}>
                <div className={styles.projectcard}>
                    <a href='https://github.com/Aaaaalexxxxxz/Personal-Website'><h3>My Personal Website</h3></a>
                    <img src={gege} className={styles.cardimg}></img>
                    <p>A fully responsive website built with React, Javascript and CSS.</p>
                </div>
                <div className={styles.projectcard}>
                    <a href='https://github.com/Aaaaalexxxxxz/Gym-Log'><h3>Online Gym Log</h3></a>
                    <img src={gymloglogo} className={styles.cardimg}></img>
                    <p>A basic functional gym log created using React, Javascript and CSS. </p>
                </div>
            </div>
        </section>
    );
}

export default Projectcontent