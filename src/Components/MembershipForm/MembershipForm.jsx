import styles from "./MembershipForm.module.css"

export default function MembershipForm(){
    return(
        <div className={styles.membershipForm}>
            
            <p className={styles.footerText}>Ready to watch? Enter your email to create or restart your membership.</p>

            <div className={styles.inputContainer}>
                    <input type="email" placeholder="Email address" />
                    <button className={styles.button}>Get Started →</button>
            </div>

        </div>
    )
}