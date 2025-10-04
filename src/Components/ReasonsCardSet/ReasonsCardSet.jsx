import styles from "./ReasonsCardSet.module.css"
import ReasonsCard from "../ReasonsCard/ReasonsCard"

export default function ReasonsCardSet({reasonsCards}){
    return (
        <div className={styles.reasonsCardSet}>
           {
            reasonsCards.map((reason) => (
                <ReasonsCard key={reason.title} title={reason.title} description={reason.description} image={reason.image} />
            ))
           }
        </div>
    )
}