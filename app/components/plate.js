import styles from './plate.module.scss';

import {findAllergens} from '../data/findAllergens';

import Image from 'next/image';

export default function Plate({ name, price, description, img, alt, allergens }) {

    return (
        <article className={styles.container}>
            <div className={styles.img_container}>
                <Image
                    className={styles.img}
                    src={img}
                    alt={alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            </div>
            <div className={styles.content_container}>
                <h3 className={styles.title}>{name} - {price}</h3>
                <p className={styles.description}>{description}</p>
                <ul className={styles.allergens_container}>
                    {
                        allergens === null
                            ? null
                            : allergens.map(allergen => {
                                const result = findAllergens(allergen);
                                return <li key={allergen}><Image title={allergen} alt={result.alt} src={result.src} width={35} height={35} className={styles.allergen}/></li>
                            })
                    }
                </ul>
            </div>
        </article>
    )
}