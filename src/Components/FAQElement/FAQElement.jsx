import styles from './FAQElement.module.css'
import { useState } from 'react';

export default function FAQElement({ title, description }) {

    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

  return (
    <div className={styles.faqElement}>
      <div className={styles.faqHeader}>
        <h3>{title}</h3>
        <button className={`${styles.button} ${isOpen ? styles.rotated : ''}`} onClick={handleToggle}>+</button>
      </div>
      {isOpen && <div className={styles.faqDescription}><p>{description}</p></div>}
    </div>
  );
}