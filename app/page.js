import styles from './styles/index.module.scss';

import Head from 'next/head'
import Button from './components/button';

export default function Home() {
    return (
        <>
            <Head>
                <title></title>
                <meta name="description" content="" />
                <meta name="keywords" content="" />
            </Head>
            <seccion className={`${styles.home_section} page_container`}>
                <header className={styles.header_section}>
                    <h1>
                        <span className={styles.name}>D'Graná Tapas</span><br />
                        <span className={styles.pride}>Torremolinos</span><br />
                        Almuerzos y Cenas
                    </h1>
                    <p className={styles.description}>Disfruta de tu bebida con tapa gratis, además de una amplia selección de platos y raciones. Al más puro estilo granadino y sin moverte de la costa del sol - Torremolinos, Málaga.</p>
                    <Button value="Ver Menú" url="/menu" />
                </header>
            </seccion>
        </>
    )
}