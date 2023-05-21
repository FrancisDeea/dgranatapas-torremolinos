import styles from './title.module.scss';

export default function Title({ heading, description }) {

    return (
        <header className={styles.header_section}>
            <h1 className={styles.title}>{heading}</h1>
            <p className={styles.description}>{description}</p>
        </header>
    )
}