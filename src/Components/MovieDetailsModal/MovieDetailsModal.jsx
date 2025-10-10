import Modal from "../Modal/Modal"
import { useTranslation } from "react-i18next"
import FavoriteButton from "../FavoriteButton/FavoriteButton"
import styles from "./MovieDetailsModal.module.css"
import { useAuth } from "../../hooks/use-auth"

export default function MovieDetailsModal({ isOpen, movie, onClose }) {
    const { t, i18n } = useTranslation();
    const { isAuth } = useAuth();
    
    if (!isOpen || !movie) return null;
    
    const currentLanguage = i18n.language;
    const movieTitle = movie.titleKey ? t(movie.titleKey) : (movie.title || 'Untitled');
    const directorName = movie.director 
      ? (typeof movie.director === 'object' 
          ? movie.director[currentLanguage] || movie.director.en 
          : movie.director)
      : null;
    
    return (
      <Modal isOpen={isOpen} onClose={onClose}>
        <div className={styles.modalContent}>
          <div className={styles.imageContainer}>
            <img src={movie.image} alt={movieTitle} className={styles.movieImage} />
            <div className={styles.gradient}></div>
          </div>
          
          <div className={styles.details}>
            <div className={styles.header}>
              <h2 className={styles.title}>{movieTitle}</h2>
            </div>
            
            <div className={styles.info}>
              <span className={styles.rating}>⭐ {movie.rating}</span>
              {movie.year && <span className={styles.year}>{movie.year}</span>}
              {movie.duration && <span className={styles.duration}>{movie.duration} {t('modal.min')}</span>}
              {
                isAuth && 
                <div className={styles.favoriteBtn}>
                    <FavoriteButton movieId={movie.id} />
                </div>
              }
            </div>
            
            {movie.genreKeys && (
              <div className={styles.genres}>
                {movie.genreKeys.map((genreKey, index) => (
                  <span key={index} className={styles.genre}>{t(genreKey)}</span>
                ))}
              </div>
            )}
            
            {movie.descriptionKey && (
              <p className={styles.description}>{t(movie.descriptionKey)}</p>
            )}
            
            {directorName && (
              <p className={styles.director}>
                <strong>{t('modal.director')}:</strong> {directorName}
              </p>
            )}
          </div>
        </div>
      </Modal>
    );
  }