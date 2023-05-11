import styles from './category.module.scss';

import Image from 'next/image'

export default function Category({ title, url }) {

    return (
        <div className={styles.container}>
            <Image
                src={url}
                className={`${styles.img}`}
                fill
            />
            <h2 className={styles.title}>{title}</h2>
        </div>
    )
}