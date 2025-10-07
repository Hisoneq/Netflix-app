import styles from "./Login.module.css"
import logo from "../../assets/images/LogoNetflix.png"
import { useNavigate } from "react-router-dom"
import { useTranslation } from "react-i18next"

export default function Login(){

    const navigate = useNavigate();
    const { t } = useTranslation();

    const handleLogin = () => {
        navigate("/");
    }

    return(
        <div className={styles.login}>
            
            <img 
                src={logo} 
                alt="Logo"
                width={200}
                onClick={handleLogin}
                style={{ cursor: "pointer" }}
            />

            <div className={styles.loginForm}>
                <h1>{t('login.signIn')}</h1>
                <input type="email" placeholder={t('login.emailPlaceholder')} />
                <input type="password" placeholder={t('login.passwordPlaceholder')} />
                <button className={styles.signInButton}>{t('login.signIn')}</button>
                <p className={styles.or}>{t('login.or')}</p>
                <button className={styles.signInCodeButton}>{t('login.useSignInCode')}</button>
                <a href="#" className={styles.forgotPassword}>{t('login.forgotPassword')}</a>
                <div className={styles.checkboxContainer}>
                    <input type="checkbox" id="remember" />
                    <label htmlFor="remember">{t('login.rememberMe')}</label>
                </div>
                <div className={styles.signupContainer}>
                    <p className={styles.newToNetflix}>{t('login.newToNetflix')}</p>   
                    <a className={styles.signUpButton} href="#">{t('login.signUpNow')}</a>
                </div>
            </div>
        </div>
    )
}