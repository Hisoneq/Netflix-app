import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "../firebase";

/**
 * Получить все избранные фильмы пользователя
 * @param {string} userId - ID пользователя
 * @returns {Promise<Array>} - Массив ID избранных фильмов
 */
export const getUserFavorites = async (userId) => {
    if (!userId) return [];

    try {
        const favoritesRef = collection(db, "users", userId, "favorites");
        const q = query(favoritesRef, orderBy("addedAt", "desc"));
        const querySnapshot = await getDocs(q);
        
        return querySnapshot.docs.map(doc => ({
            movieId: doc.id,
            addedAt: doc.data().addedAt
        }));
    } catch (error) {
        console.error("Error fetching favorites:", error);
        return [];
    }
};

