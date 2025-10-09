import { useTranslation } from "react-i18next"
import { useNavigate, useSearchParams } from "react-router-dom"
import { useEffect, useRef, useState } from "react"
import styles from "./AuthForm.module.css"
import logo from "../../assets/images/LogoNetflix.png"
import PasswordInput from "../PasswordInput/PasswordInput"

export default function AuthForm({ type = "login", onSubmit, error }) {
    const navigate = useNavigate();
    const { t } = useTranslation();
    const [searchParams] = useSearchParams();
    const emailRef = useRef(null);

    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const isRegister = type === "register";
    const lengthError = isRegister && password && password.length < 8;
    const isPasswordMatch = password === confirmPassword;

    useEffect(() => {
        const emailFromUrl = searchParams.get('email');
        if (emailFromUrl && emailRef.current) {
            emailRef.current.value = emailFromUrl;
        }
    }, [searchParams]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        onSubmit?.(formData.get('email'), formData.get('password'));
    }

    return (
        <div className={styles.authForm}>
            <img 
                src={logo} 
                alt="Logo"
                width={200}
                onClick={() => navigate("/")}
                style={{ cursor: "pointer" }}
            />

            <div className={styles.form}>
                <h1>{isRegister ? t('register.signUp') : t('login.signIn')}</h1>
                
                {error && (
                    <div className={styles.errorMessage}>
                        {t(`${type}.errors.${error}`)}
                    </div>
                )}
                
                <form onSubmit={handleSubmit}>
                    <input 
                        ref={emailRef}
                        name="email"
                        type="email" 
                        placeholder={t(`${type}.emailPlaceholder`)}
                        required
                    />
                    
                    <PasswordInput
                        name="password"
                        placeholder={t(`${type}.passwordPlaceholder`)}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    
                    {lengthError && (
                        <p className={styles.passwordLengthError}>
                            {t('register.passwordLengthError')}
                        </p>
                    )}
                    
                    {isRegister && (
                        <>
                            <PasswordInput
                                name="confirmPassword"
                                placeholder={t('register.confirmPasswordPlaceholder')}
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                            
                            {password && confirmPassword && (
                                <p className={isPasswordMatch ? styles.passwordMatch : styles.passwordMismatch}>
                                    {isPasswordMatch ? t('register.passwordMatch') : t('register.passwordMismatch')}
                                </p>
                            )}
                        </>
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
                        <a
                            href="#"
                            className={styles.forgotPassword}
                            onClick={(e) => e.preventDefault()}
                        >
                            {t('login.forgotPassword')}
                        </a>
                        <div className={styles.checkboxContainer}>
                            <input type="checkbox" id="remember" />
                            <label htmlFor="remember">{t('login.rememberMe')}</label>
                        </div>
                    </>
                )}

                <div className={styles.switchContainer}>
                    <p className={styles.switchText}>
                        {isRegister ? t('register.alreadyHaveAccount') : t('login.newToNetflix')}
                    </p>   
                    <a className={styles.switchButton} href={isRegister ? "/login" : "/register"}>
                        {isRegister ? t('register.signInNow') : t('login.signUpNow')}
                    </a>
                </div>
            </div>
        </div>
    )
}
