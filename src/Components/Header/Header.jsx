import { useRef } from "react"
import { useNavigate } from "react-router-dom"
import logo from "../../assets/images/LogoNetflix.png"
import styles from "./Header.module.css"
import { useTranslation, Trans } from "react-i18next"
import { useAuth } from "../../hooks/use-auth"
import { useDispatch } from "react-redux"
import { removeUser } from "../../store/slices/userSlice"
import { getAuth, signOut } from "firebase/auth"

export default function Header(){
    const dispatch = useDispatch();
    const { isAuth } = useAuth();

    const navigate = useNavigate();
    const emailRef = useRef(null);
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

    const handleSubmit = (e) => {
        e.preventDefault()
        const email = emailRef.current.value;
        if (email) {
            navigate(`/register?email=${encodeURIComponent(email)}`);
        } else {
            navigate('/register');
        }
    }

    const handleFavorites = (e) => {
        e.preventDefault()
        navigate('/favorites')
    }

    const handleLogout = () => {
        const auth = getAuth();
        signOut(auth)
            .then(() => {
                dispatch(removeUser());
                navigate("/");
            })
            .catch((error) => {
                console.error('Logout error:', error);
            });
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

                    {
                        isAuth ? 
                        <>
                            <button className={styles.button} onClick={handleLogout}>{t('header.logout')}</button> 
                            <button className={styles.button} onClick={handleFavorites}>{t('header.favorites')}</button>
                        </>
                        :
                        <>
                            <button className={styles.button} onClick={handleSignIn}>{t('header.signIn')}</button>
                            <button className={styles.buttonDisabled}>{t('header.favorites')}</button>
                        </>
                    }
                    
                </div>

            </div>

            <div className={styles.headerText}>
                <h1><Trans i18nKey="header.mainTitle" components={{ br: <br /> }} /></h1>
                <h3>{t('header.subtitle')}</h3>
                <p>{t('header.readyToWatch')}</p>

                <form className={styles.inputContainer} onSubmit={handleSubmit}>
                    <input 
                    ref={emailRef}
                    type="email" 
                    placeholder={t('header.emailPlaceholder')}
                     />
                    <button className={styles.button} type="submit">{t('header.getStarted')}</button>
                </form>

            </div>
        </header>
    )
}