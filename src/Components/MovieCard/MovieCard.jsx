import styles from './MovieCard.module.css'

export default function MovieCard({image, rating}){
    return(
        <div className={styles.card}>
            <div> Rating: {rating}</div>
            <img src={image} alt="" />
        </div>
    )
}