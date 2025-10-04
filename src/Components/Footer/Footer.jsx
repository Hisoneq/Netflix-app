import styles from "./Footer.module.css"

export default function Footer(){

    const footerLinks = [
        { link: "FAQ", href: "#" },
        { link: "Help Center", href: "#" },
        { link: "Account", href: "#" },
        { link: "Media Center", href: "#" },
        { link: "Investor Relations", href: "#" },
        { link: "Jobs", href: "#" },
        { link: "Ways to Watch", href: "#" },
        { link: "Terms of Use", href: "#" },
        { link: "Privacy", href: "#" },
        { link: "Cookie Preferences", href: "#" },
        { link: "Corporate Information", href: "#" },
        { link: "Contact Us", href: "#" },
    ]
    return(
        <footer className={styles.footer}>
            <p className={styles.footerText}>Ready to watch? Enter your email to create or restart your membership.</p>

            <div className={styles.inputContainer}>
                    <input type="email" placeholder="Email address" />
                    <button className={styles.button}>Get Started →</button>
            </div>

            <ul className={styles.footerLinks}>
                {footerLinks.map((link) => (
                    <li key={link.link}>
                        <a href={link.href}>{link.link}</a>
                    </li>
                ))}
            </ul>
        </footer>
    )
}