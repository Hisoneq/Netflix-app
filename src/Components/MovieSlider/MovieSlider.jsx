import { useState } from "react"
import MovieCard from "../MovieCard/MovieCard"
import styles from "./MovieSlider.module.css"

export default function MovieSlider({movies}) {

    const [isAnimating, setIsAnimating] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);

    const moviesToShow = movies.slice(currentSlide * 5, (currentSlide * 5) + 5);
    const maxSlides = Math.ceil(movies.length / 5) - 1; 

    const handleNextSlide = () => {
        setIsAnimating(true);
        setTimeout(() => {
            setCurrentSlide(prev => prev >= maxSlides ? 0 : prev + 1);
            setIsAnimating(false);
        }, 300);
    }

    return (
        <div className={styles.slider}>
            <div className={`${styles.moviesGrid} ${isAnimating ? styles.animating : ''}`}>
                {moviesToShow.length > 0 ? (
                    moviesToShow.map(movie => (
                        <MovieCard key={movie.id} image={movie.image} rating={movie.rating} title={movie.title} />
                    ))
                ) : (
                    <div>No movies found</div>
                )}
            </div>

            <button onClick={handleNextSlide} className={`${styles.navButton} ${styles.next}`}>›</button> 
        </div>
    )
}