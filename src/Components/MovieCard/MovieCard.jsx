import { memo } from 'react'
import FavoriteButton from '../FavoriteButton/FavoriteButton'
import styles from './MovieCard.module.css'

function MovieCard({image, rating, title, id}){
    return(
        <div className={styles.card}>
            <div className={styles.rating}> IMDb: {rating}</div>
            <img src={image} alt={title} />
            <div className={styles.title}>{title}</div>
            <FavoriteButton movieId={id}/>
        </div>
    )
}

export default memo(MovieCard)