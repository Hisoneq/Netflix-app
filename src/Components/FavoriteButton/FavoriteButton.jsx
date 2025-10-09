import { useState, memo, useEffect, useMemo } from "react"
import { doc, setDoc, deleteDoc, onSnapshot } from "firebase/firestore"
import { db } from "../../firebase"
import { useAuth } from "../../hooks/use-auth"
import styles from "./FavoriteButton.module.css"
import HeartIcon from "../HeartIcon/HeartIcon"

function FavoriteButton({ movieId }) { 
    const [isFavorite, setIsFavorite] = useState(false);
    const [loading, setLoading] = useState(false);
    const { id: userId } = useAuth();

    const favoriteDocRef = useMemo(() => {
        if (!userId || !movieId || userId === null || movieId === null) {
            return null;
        }

        const userIdStr = String(userId);
        const movieIdStr = String(movieId);

        return doc(db, "users", userIdStr, "favorites", movieIdStr);
    }, [userId, movieId]);

    useEffect(() => {
        if (!favoriteDocRef) return;

        const unsubscribe = onSnapshot(favoriteDocRef, (docSnapshot) => {
            setIsFavorite(docSnapshot.exists());
        }, (error) => {
            console.error("Error listening to favorite:", error);
        });

        return () => unsubscribe();
    }, [favoriteDocRef]);

    if (!userId) {
        return (
            <button className={styles.favoriteButton} disabled>
                <HeartIcon isActive={false} />
            </button>
        );
    }

    const handleToggle = async () => {
        if (!favoriteDocRef || loading) return;

        setLoading(true);

        try {
            if (isFavorite) {
                await deleteDoc(favoriteDocRef);
            } else {
                await setDoc(favoriteDocRef, {
                    movieId: String(movieId),
                    addedAt: new Date().toISOString()
                });
            }
        } catch (error) {
            console.error("Error toggling favorite:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <button 
            className={styles.favoriteButton}
            onClick={handleToggle}
            disabled={loading}
        >
            <HeartIcon isActive={isFavorite} />
        </button>
    )
}

export default memo(FavoriteButton)
