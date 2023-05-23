import styles from './button.module.scss';

import Link from 'next/link';

export default function Button({value, url}) {

    return (
            <Link href={url} className={styles.link}>{value}</Link>
    )
}