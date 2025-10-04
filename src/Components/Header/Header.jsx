import { memo, useState } from "react"
import logo from "../../assets/images/LogoNetflix.png"
import styles from "./Header.module.css"

function Header(){


    const Languages = ["English", "Русский", "Español", "Français", "Deutsch"];
    
    const [isLanguageOpen, setIsLanguageOpen] = useState(false);
    const [currentLanguage, setCurrentLanguage] = useState(Languages[0]);

    const handleLanguageClick = (language) => {
        console.log('Language clicked:', language);
        setCurrentLanguage(language);
        setIsLanguageOpen(false);
    }


    return (
        <header className={styles.header}>
            <div className={styles.headerTop}>
                
                <img 
                src={logo} 
                alt="Logo"
                width={200}
                 />

                <div className={styles.buttonsContainer}>
                    <div className={styles.languageDropdown}>
                        <button className={`${styles.button} ${styles.languageButton}`} onClick={() => setIsLanguageOpen(!isLanguageOpen)}>{currentLanguage} ▼</button>
                        {
                            isLanguageOpen && (
                                <ul className={styles.languageMenu}>
                                    { Languages.map((language) => (
                                        <li key={language}>
                                            <button className={styles.languageOption} onClick={() => handleLanguageClick(language)}>{language}</button>
                                        </li>
                                    ))}
                                </ul>
                            )
                        }
                    </div>
                    <button className={styles.button}>Sign In</button>
                </div>

            </div>

            <div className={styles.headerText}>
                <h1>Unlimited movies, TV<br/>shows, and more</h1>
                <h3>Starts at EUR 7.99. Cancel anytime.</h3>
                <p>Ready to watch? Enter your email to create or restart your membership.</p>

                <div className={styles.inputContainer}>
                    <input type="email" placeholder="Email address" />
                    <button className={styles.button}>Get Started →</button>
                </div>

            </div>
        </header>
    )
}

export default memo(Header)