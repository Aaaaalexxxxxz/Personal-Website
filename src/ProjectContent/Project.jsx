import styles from './Project.module.css'
import gege from '../assets/gege.jpeg'

function Projectcontent(){
    return(
        <section id="projectsection" className={styles.project}>
            <h1>Projects and Recent Works</h1>
            <div className={styles.projectgrid}>
                <div className={styles.projectcard}>
                    <a href='#'><h3>My Personal Website</h3></a>
                    <img src={gege} className={styles.cardimg}></img>
                    <p>A fully responsive website built with React, Javascript and Css.</p>
                </div>
            </div>
        </section>
    );
}

export default Projectcontent