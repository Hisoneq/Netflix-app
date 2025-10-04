import styles from "./ReasonsCard.module.css"

export default function ReasonsCard({title, description, image}){
    return (
        <div className={styles.reasonsCard}>
            <h1>{title}</h1>
            <p>{description}</p>
            <img src={image} alt={title} />
        </div>
    )
}