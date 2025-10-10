import { memo } from 'react'
import FavoriteButton from '../FavoriteButton/FavoriteButton'
import styles from './MovieCard.module.css'
import { useAuth } from '../../hooks/use-auth'

function MovieCard({image, rating, title, id, onClick}){
    const { isAuth } = useAuth();
    
    return(
        <div className={styles.card}>
            <div className={styles.rating}> IMDb: {rating}</div>
            <img 
                src={image} 
                alt={title} 
                onClick={onClick}
                className={styles.clickableImage}
            />
            <div className={styles.title}>{title}</div>
            {
                isAuth && <FavoriteButton movieId={id}/>
            }
        </div>
    )
}

export default memo(MovieCard)