import { useTranslation } from "react-i18next"
import { useNavigate, useSearchParams } from "react-router-dom"
import { useEffect, useRef, useState } from "react"
import styles from "./AuthForm.module.css"
import logo from "../../assets/images/LogoNetflix.png"
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function AuthForm({ 
    type = "login", 
    onSubmit 
}) {
    const navigate = useNavigate();
    const { t } = useTranslation();

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [isPasswordMatch, setIsPasswordMatch] = useState(false);

    const [searchParams] = useSearchParams();
    const emailRef = useRef(null);

    const handleLogoClick = () => {
        navigate("/");
    }

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

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    }

    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
    }

    useEffect(() => {
        if (type === "register" && password && confirmPassword) {
            setIsPasswordMatch(password === confirmPassword);
        }
    }, [password, confirmPassword, type]);

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
                    
                    <div className={styles.passwordContainer}>
                        <input 
                            name="password"
                            type={showPassword ? "text" : "password"} 
                            placeholder={t(`${type}.passwordPlaceholder`)} 
                            required
                            value={password}
                            onChange={handlePasswordChange}
                        />
                        {
                            password && (
                                <span 
                                    className={styles.passwordToggle} 
                                    onClick={togglePasswordVisibility}
                                >
                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                </span>
                            )
                        }
                    </div>
                    
                    {type === "register" && (
                        <>
                            <div className={styles.passwordContainer}>
                                <input 
                                    name="confirmPassword"
                                    type={showConfirmPassword ? "text" : "password"} 
                                    placeholder={t('register.confirmPasswordPlaceholder')} 
                                    required
                                    value={confirmPassword}
                                    onChange={handleConfirmPasswordChange}
                                />
                                {
                                    confirmPassword && (
                                        <span 
                                            className={styles.passwordToggle} 
                                            onClick={toggleConfirmPasswordVisibility}
                                        >
                                            {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                                        </span>
                                    )
                                }
                            </div>
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
