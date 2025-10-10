import { useState } from "react"
import MovieCard from "../MovieCard/MovieCard"
import MovieDetailsModal from "../MovieDetailsModal/MovieDetailsModal"
import styles from "./MovieSlider.module.css"
import { useModal } from "../../hooks/useModal"

export default function MovieSlider({movies}) {

    const [isAnimating, setIsAnimating] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);
    const { isOpen, openModal, closeModal, modalContent } = useModal();

    const maxSlides = movies.length - 5; 

    const handleNextSlide = () => {
        if (currentSlide >= maxSlides) return;
        setIsAnimating(true);
        setTimeout(() => {
            setCurrentSlide(prev => prev + 1);
            setIsAnimating(false);
        }, 300);
    }

    const handlePrevSlide = () => {
        if (currentSlide <= 0) return;
        setIsAnimating(true);
        setTimeout(() => {
            setCurrentSlide(prev => prev - 1);
            setIsAnimating(false);
        }, 300);
    }

    return (
        <>
            <div className={styles.slider}>
                <div className={styles.sliderContainer}>
                    <div 
                        className={`${styles.moviesGrid} ${isAnimating ? styles.animating : ''}`}
                        style={{ transform: `translateX(-${currentSlide * 230}px)` }}
                    >
                        {movies.map(movie => (
                            <MovieCard 
                                key={movie.id} 
                                image={movie.image} 
                                rating={movie.rating} 
                                title={movie.title} 
                                id={movie.id}
                                onClick={() => openModal(movie)}
                            />
                        ))}
                    </div>
                </div>

                <button onClick={handlePrevSlide} className={`${currentSlide <= 0 ? styles.disabled : styles.navButton} ${styles.prev}`}>‹</button> 
                <button onClick={handleNextSlide} className={`${currentSlide >= maxSlides ? styles.disabled : styles.navButton} ${styles.next}`}>›</button> 
            </div>

            <MovieDetailsModal 
                isOpen={isOpen}
                movie={modalContent}
                onClose={closeModal}
            />
        </>
    )
}