import { memo } from "react"
import { useNavigate } from "react-router-dom"
import logo from "../../assets/images/LogoNetflix.png"
import styles from "./Header.module.css"
import { useTranslation, Trans } from "react-i18next"

function Header(){

    const navigate = useNavigate();
    const { t, i18n } = useTranslation();

    const languages = [
        { code: "en", name: t('languages.english') },
        { code: "ru", name: t('languages.russian') }
    ];

    const handleLanguageChange = (languageCode) => { 
        i18n.changeLanguage(languageCode);
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
                        value={i18n.language}
                        onChange={(e) => handleLanguageChange(e.target.value)}  
                        className={styles.languageSelect}
                    >
                        {languages.map((language) => (
                            <option 
                                key={language.code} 
                                value={language.code}
                            >
                                {language.name}
                            </option>
                        ))}
                    </select>
                    <button className={styles.button} onClick={handleSignIn}>{t('header.signIn')}</button>
                </div>

            </div>

            <div className={styles.headerText}>
                <h1><Trans i18nKey="header.mainTitle" components={{ br: <br /> }} /></h1>
                <h3>{t('header.subtitle')}</h3>
                <p>{t('header.readyToWatch')}</p>

                <div className={styles.inputContainer}>
                    <input type="email" placeholder={t('header.emailPlaceholder')} />
                    <button className={styles.button}>{t('header.getStarted')}</button>
                </div>

            </div>
        </header>
    )
}

export default memo(Header)