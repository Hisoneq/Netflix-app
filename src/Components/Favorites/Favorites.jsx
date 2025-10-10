import { useState, useEffect } from "react"
import style from "./Favorites.module.css"
import { useNavigate } from "react-router-dom"
import logo from "../../assets/images/LogoNetflix.png"
import Title from "../Title/Title";
import { useTranslation } from "react-i18next"
import MovieCard from "../MovieCard/MovieCard"
import MovieDetailsModal from "../MovieDetailsModal/MovieDetailsModal"
import { useAuth } from "../../hooks/use-auth"
import { getUserFavorites } from "../../utils/favorites"
import { MOVIES_DATA } from "../../data/movies"
import Loader from "../Loader/Loader"
import { useModal } from "../../hooks/useModal"


export default function Favorites(){
    const { t } = useTranslation();
    const navigate = useNavigate();
    const { id: userId, isAuth } = useAuth();
    const [favoriteMovies, setFavoriteMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const { isOpen, openModal, closeModal, modalContent } = useModal();

    useEffect(() => {
        const loadFavorites = async () => {
            if (!userId) {
                setLoading(false);
                return;
            }

            try {
                const favorites = await getUserFavorites(userId);
                const favoriteIds = favorites.map(f => Number(f.movieId));
                
                const movies = MOVIES_DATA
                    .filter(movie => favoriteIds.includes(movie.id));
                
                setFavoriteMovies(movies);
            } catch (error) {
                console.error("Error loading favorites:", error);
            } finally {
                setLoading(false);
            }
        };

        loadFavorites();
    }, [userId]);

    if (!isAuth) {
        return (
            <>
                <div className={style.favorites}>
                    <img 
                        src={logo} 
                        alt="Logo"
                        width={200}
                        onClick={() => navigate("/")}
                        style={{ cursor: "pointer" }}
                    />
                    <div className={style.titleContainer}>
                        <Title title={t('favorites.title')} />
                    </div>
                    <p className={style.message}>{t('favorites.pleaseLogin')}</p>
                </div>
                <MovieDetailsModal 
                    isOpen={isOpen}
                    movie={modalContent}
                    onClose={closeModal}
                />
            </>
        );
    }

    if (loading) {
        return (
            <>
                <div className={style.favorites}>
                    <img 
                        src={logo} 
                        alt="Logo"
                        width={200}
                        onClick={() => navigate("/")}
                        style={{ cursor: "pointer" }}
                    />
                    <div className={style.loaderContainer}>
                        <Loader />
                    </div>
                </div>
                <MovieDetailsModal 
                    isOpen={isOpen}
                    movie={modalContent}
                    onClose={closeModal}
                />
            </>
        );
    }

    return(
        <>
            <div className={style.favorites}>
                <img 
                    src={logo} 
                    alt="Logo"
                    width={200}
                    onClick={() => navigate("/")}
                    style={{ cursor: "pointer" }}
                />
                <div className={style.titleContainer}>
                    <Title title={t('favorites.title')} />
                </div>
                
                {favoriteMovies.length === 0 ? (
                    <p className={style.message}>{t('favorites.empty')}</p>
                ) : (
                    <div className={style.moviesGrid}>
                        {favoriteMovies.map(movie => (
                            <MovieCard 
                                key={movie.id}
                                id={movie.id}
                                image={movie.image}
                                rating={movie.rating}
                                title={t(movie.titleKey)}
                                onClick={() => openModal(movie)}
                            />
                        ))}
                    </div>
                )}
            </div>

            <MovieDetailsModal 
                isOpen={isOpen}
                movie={modalContent}
                onClose={closeModal}
            />
        </>
    )
}