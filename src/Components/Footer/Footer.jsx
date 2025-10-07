import styles from "./Footer.module.css"
import { useTranslation } from "react-i18next"

export default function Footer(){
    const { t } = useTranslation();

    const footerLinks = [
        { key: "faq", label: t('footer.faq'), href: "#" },
        { key: "helpCenter", label: t('footer.helpCenter'), href: "#" },
        { key: "account", label: t('footer.account'), href: "#" },
        { key: "mediaCenter", label: t('footer.mediaCenter'), href: "#" },
        { key: "investorRelations", label: t('footer.investorRelations'), href: "#" },
        { key: "jobs", label: t('footer.jobs'), href: "#" },
        { key: "waysToWatch", label: t('footer.waysToWatch'), href: "#" },
        { key: "termsOfUse", label: t('footer.termsOfUse'), href: "#" },
        { key: "privacy", label: t('footer.privacy'), href: "#" },
        { key: "cookiePreferences", label: t('footer.cookiePreferences'), href: "#" },
        { key: "corporateInformation", label: t('footer.corporateInformation'), href: "#" },
        { key: "contactUs", label: t('footer.contactUs'), href: "#" },
    ]

    return(
        <footer className={styles.footer}>
            <ul className={styles.footerLinks}>
                {footerLinks.map((link) => (
                    <li key={link.key}>
                        <a href={link.href}>{link.label}</a>
                    </li>
                ))}
            </ul>
        </footer>
    )
}