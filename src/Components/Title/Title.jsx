import { memo } from 'react'
import styles from './Title.module.css'

function Title({title}) {
    return (
        <div className={styles.title}>
            <h1>{title}</h1>
        </div>
    )
}

export default memo(Title)