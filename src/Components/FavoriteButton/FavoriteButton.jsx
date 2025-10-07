import { useState, memo } from "react"
import styles from "./FavoriteButton.module.css"
import HeartIcon from "../HeartIcon/HeartIcon"

function FavoriteButton(){
    const [isFavorite, setIsFavorite] = useState(false);

    const handleToggle = () => {
        setIsFavorite(!isFavorite);
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