import styles from './FAQGroup.module.css'
import FAQElement from '../FAQElement/FAQElement'

export default function FAQGroup({ faqs }) {
  return (
    <div className={styles.faqGroup}>
      {faqs.map((faq) => (
        <FAQElement key={faq.title} {...faq} />
      ))}
    </div>
  );
}