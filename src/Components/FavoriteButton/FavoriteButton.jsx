import { useState, memo } from "react"
import styles from "./FavoriteButton.module.css"

function FavoriteButton(){
    const [isFavorite, setIsFavorite] = useState(false);

    const handleToggle = () => {
        setIsFavorite(!isFavorite);
    };

    return (
        <button 
            className={styles.favoriteButton}
            onClick={handleToggle}
            aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
        >
            {isFavorite ? '❤️' : '🤍'}
        </button>
    )
}

export default memo(FavoriteButton)