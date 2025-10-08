import { useTranslation } from "react-i18next"
import { useNavigate, useSearchParams } from "react-router-dom"
import { useEffect, useRef } from "react"
import styles from "./AuthForm.module.css"
import logo from "../../assets/images/LogoNetflix.png"

export default function AuthForm({ 
    type = "login", 
    onSubmit 
}) {
    const navigate = useNavigate();
    const { t } = useTranslation();
    const [searchParams] = useSearchParams();
    const emailRef = useRef(null);

    const handleLogoClick = () => {
        navigate("/");
    }

    // Автозаполнение email из URL параметров
    useEffect(() => {
        const emailFromUrl = searchParams.get('email');
        if (emailFromUrl && emailRef.current) {
            emailRef.current.value = emailFromUrl;
        }
    }, [searchParams]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = {
            email: formData.get('email'),
            password: formData.get('password'),
            ...(type === 'register' && { confirmPassword: formData.get('confirmPassword') })
        };
        
        if (onSubmit) {
            onSubmit(data);
        }
    }

    return (
        <div className={styles.authForm}>
            <img 
                src={logo} 
                alt="Logo"
                width={200}
                onClick={handleLogoClick}
                style={{ cursor: "pointer" }}
            />

            <div className={styles.form}>
                <h1>{type === 'login' ? t('login.signIn') : t('register.signUp')}</h1>
                <form onSubmit={handleSubmit}>
                    <input 
                        ref={emailRef}
                        name="email"
                        type="email" 
                        placeholder={t(`${type}.emailPlaceholder`)} 
                        required
                    />
                    <input 
                        name="password"
                        type="password" 
                        placeholder={t(`${type}.passwordPlaceholder`)} 
                        required
                    />
                    
                    {type === "register" && (
                        <input 
                            name="confirmPassword"
                            type="password" 
                            placeholder={t('register.confirmPasswordPlaceholder')} 
                            required
                        />
                    )}

                    <button type="submit" className={styles.submitButton}>
                        {t(`${type}.signUp`)}
                    </button>
                </form>

                {type === "login" && (
                    <>
                        <p className={styles.or}>{t('login.or')}</p>
                        <button className={styles.signInCodeButton}>
                            {t('login.useSignInCode')}
                        </button>
                        <a href="#" className={styles.forgotPassword}>
                            {t('login.forgotPassword')}
                        </a>
                        <div className={styles.checkboxContainer}>
                            <input type="checkbox" id="remember" />
                            <label htmlFor="remember">{t('login.rememberMe')}</label>
                        </div>
                    </>
                )}

                <div className={styles.switchContainer}>
                    {type === "login" ? (
                        <>
                            <p className={styles.switchText}>{t('login.newToNetflix')}</p>   
                            <a className={styles.switchButton} href="/register">
                                {t('login.signUpNow')}
                            </a>
                        </>
                    ) : (
                        <>
                            <p className={styles.switchText}>{t('register.alreadyHaveAccount')}</p>   
                            <a className={styles.switchButton} href="/login">
                                {t('register.signInNow')}
                            </a>
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}
