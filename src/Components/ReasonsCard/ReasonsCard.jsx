import { memo } from "react"
import styles from "./ReasonsCard.module.css"

function ReasonsCard({title, description, image}){
    return (
        <div className={styles.reasonsCard}>
            <h1>{title}</h1>
            <p>{description}</p>
            <img src={image} alt={title} />
        </div>
    )
}

export default memo(ReasonsCard);