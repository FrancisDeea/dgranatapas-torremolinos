'use client'

import styles from './category.module.scss';

import Image from 'next/image';
import {useRouter} from 'next/navigation';

export default function Category({ title, img, url, alt }) {
    const router = useRouter();

    return (
        <div className={styles.container} onClick={() => router.push(url)}>
                <Image
                    alt={alt}
                    src={img}
                    className={`${styles.img}`}
                    fill
                    sizes="(max-width: 1200px) 50vw, 33vw"

                />
                <h2 className={styles.title}>{title}</h2>
¡        </div>
    )
}