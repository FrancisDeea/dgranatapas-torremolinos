import styles from './plate.module.scss';

import Image from 'next/image';

export default function Plate() {

    return (
        <article className={styles.container}>
            <div className={styles.img_container}>
                <Image
                    className={styles.img}
                    src="/assets/platos/cazon-adobo-frito.webp"
                    alt=""
                    fill
                    sizes=""
                />
            </div>
            <div className={styles.content_container}>
                <h3 className={styles.title}>ensalada</h3>
                <p className={styles.description}>Esto es una ensalada con lechuga y tomate.</p>
                <div className={styles.allergens_container}>
                    gluten
                </div>
            </div>
        </article>
    )
}