import styles from "./Footer.module.css"

export default function Footer(){
    return(
        <footer className={styles.footer}>
            <p className={styles.footerText}>Ready to watch? Enter your email to create or restart your membership.</p>

            <div className={styles.inputContainer}>
                    <input type="email" placeholder="Email address" />
                    <button className={styles.button}>Get Started →</button>
            </div>
        </footer>
    )
}