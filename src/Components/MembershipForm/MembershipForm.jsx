import { useRef } from "react"
import styles from "./MembershipForm.module.css"
import { useTranslation } from "react-i18next"
import { useNavigate } from "react-router-dom"

export default function MembershipForm(){
    const { t } = useTranslation();
    const navigate = useNavigate();
    const emailRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        const email = emailRef.current.value;
        if (email) {
            navigate(`/register?email=${encodeURIComponent(email)}`);
        } else {
            navigate('/register');
        }
    }
    
    return(
        <div className={styles.membershipForm}>
            <p className={styles.footerText}>{t('membership.readyToWatch')}</p>

            <form className={styles.inputContainer} onSubmit={handleSubmit}>
                <input 
                    ref={emailRef}
                    type="email" 
                    placeholder={t('membership.emailPlaceholder')} 
                />
                <button type="submit" className={styles.button}>
                    {t('membership.getStarted')}
                </button>
            </form>
        </div>
    )
}