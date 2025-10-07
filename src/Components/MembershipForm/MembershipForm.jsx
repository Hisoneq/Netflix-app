import styles from "./MembershipForm.module.css"
import { useTranslation } from "react-i18next"

export default function MembershipForm(){
    const { t } = useTranslation();
    
    return(
        <div className={styles.membershipForm}>
            
            <p className={styles.footerText}>{t('membership.readyToWatch')}</p>

            <div className={styles.inputContainer}>
                    <input type="email" placeholder={t('membership.emailPlaceholder')} />
                    <button className={styles.button}>{t('membership.getStarted')}</button>
            </div>

        </div>
    )
}