import logo from "../../assets/images/LogoNetflix.png"
import styles from "./Header.module.css"

export default function Header(){
    return (
        <header className={styles.header}>
            <div className={styles.headerTop}>
                
                <img 
                src={logo} 
                alt="Logo"
                width={200}
                 />

                <div className={styles.buttonsContainer}>
                    <button className={styles.button}>English</button>
                    <button className={styles.button}>Sign In</button>
                </div>

            </div>

            <div className={styles.headerText}>
                <h1>Unlimited movies, TV<br/>shows, and more</h1>
                <h3>Starts at EUR 7.99. Cancel anytime.</h3>
                <p>Ready to watch? Enter your email to create or restart your membership.</p>

                <div className={styles.inputContainer}>
                    <input type="email" placeholder="Email address" />
                    <button className={styles.button}>Get Started</button>
                </div>

            </div>
        </header>
    )
}