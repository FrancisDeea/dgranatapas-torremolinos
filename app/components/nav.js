import styles from './nav.module.scss';

import Link from 'next/link';

export default function Nav({ onClick }) {
    return (
        <nav className={styles.container}>
            <ul>
                <li><Link href="/" className={styles.link} onClick={onClick}>Home</Link></li>
                <li><Link href="/contact" className={styles.link} onClick={onClick}>Contact</Link></li>
            </ul>
        </nav>
    )
}