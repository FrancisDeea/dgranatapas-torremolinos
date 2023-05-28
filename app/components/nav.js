import styles from './nav.module.scss';

import Link from 'next/link';

export default function Nav({ onClick }) {
    return (
        <nav className={styles.container}>
            <ul>
                <li><Link href="/" className={styles.link} onClick={onClick}>Inicio</Link></li>
                <li><Link href="#contact" className={styles.link} onClick={onClick}>Contacto</Link></li>
                <li><Link href="/menu" className={styles.link} onClick={onClick}>Ver Menú</Link></li>
            </ul>
        </nav>
    )
}