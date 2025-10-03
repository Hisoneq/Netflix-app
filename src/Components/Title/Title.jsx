import { memo } from 'react'
import styles from './Title.module.css'

function Title() {
    return (
        <div className={styles.trendingNow}>
            <h1>Trending Now</h1>
        </div>
    )
}

export default memo(Title)