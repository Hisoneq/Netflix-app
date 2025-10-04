import { memo, useState } from "react"
import { useNavigate } from "react-router-dom"
import logo from "../../assets/images/LogoNetflix.png"
import styles from "./Header.module.css"

function Header(){

    const navigate = useNavigate();

    const Languages = ["English", "Русский", "Español", "Français", "Deutsch"];
    const [currentLanguage, setCurrentLanguage] = useState(Languages[0]);

    const handleLanguageChange = (e) => {
        const newLanguage = e.target.value;
        setCurrentLanguage(newLanguage);
    }

    const handleSignIn = () => {
        navigate("/login");
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
                    <select 
                        value={currentLanguage}
                        onChange={handleLanguageChange}
                        className={styles.languageSelect}
                    >
                        {Languages.map((language) => (
                            <option 
                                key={language} 
                                value={language}
                            >
                                {language}
                            </option>
                        ))}
                    </select>
                    <button className={styles.button} onClick={handleSignIn}>Sign In</button>
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