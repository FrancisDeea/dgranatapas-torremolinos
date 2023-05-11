'use client'

import styles from './category.module.scss';

import Image from 'next/image';
import {useRouter} from 'next/navigation';

export default function Category({ title, img, url }) {
    const router = useRouter();

    return (
        <div className={styles.container} onClick={() => router.push(url)}>
                <Image
                    src={img}
                    className={`${styles.img}`}
                    fill
                />
                <h2 className={styles.title}>{title}</h2>
¡        </div>
    )
}