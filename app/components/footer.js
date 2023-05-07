import styles from './footer.module.scss'

import { BsFillHeartFill } from 'react-icons/bs'

export default function Footer() {
    return (
        <footer className={styles.container}>
            <p>Created with <BsFillHeartFill className={styles.icon} /> by <a href="https://github.com/FrancisDeea" target="_blank">Francis Bernal Cabra</a></p>
        </footer>
    )
}