import { useState, memo, useEffect } from "react"
import styles from "./FavoriteButton.module.css"
import HeartIcon from "../HeartIcon/HeartIcon"

function FavoriteButton({ movieId }) { 
    const [isFavorite, setIsFavorite] = useState(false);

    const storageKey = `favorite_${movieId}`;

    useEffect(() => {
        const saved = localStorage.getItem(storageKey)
        if (saved) {
            setIsFavorite(JSON.parse(saved))
        }
    }, [storageKey]) 

    const handleToggle = () => {
        const newValue = !isFavorite
        setIsFavorite(newValue);
        localStorage.setItem(storageKey, JSON.stringify(newValue))
    };

    return (
        <button 
            className={styles.favoriteButton}
            onClick={handleToggle}
        >
            <HeartIcon isActive={isFavorite} />
        </button>
    )
}

export default memo(FavoriteButton)