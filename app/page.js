import styles from './styles/index.module.scss';
import { AiFillInstagram, AiFillFacebook, AiFillMail } from 'react-icons/ai'


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
            <seccion className={`${styles.home_seccion} page_container`}>
                <header className={styles.header_seccion}>
                    <h1>
                        <span className={styles.name}>D'Graná Tapas</span><br />
                        <span className={styles.pride}>Torremolinos</span><br />
                        Almuerzos y Cenas
                    </h1>
                    <p className={styles.description}>Disfruta de tu bebida con tapa gratis, además de una amplia selección de platos y raciones. Al más puro estilo granadino y sin moverte de la costa del sol - Torremolinos, Málaga.</p>
                    <Button value="Ver Menú" url="/menu" />
                </header>
            </seccion>

            <seccion id="contact" className={`${styles.contact_seccion} page_container`}>

                <header className={styles.contact_header}>
                    <h2 className={styles.contact_title}>¿Sabes ya dónde encontrarnos?</h2>
                </header>

                <div className={styles.info_container}>

                    <iframe
                        className={styles.map}
                        referrerPolicy="no-referrer-when-downgrade"
                        src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBBt4vEsmJK9ZSl3p9D4c-J-99eTkFrEdo&q=D’Graná+Tapas&zoom=16"
                        allowFullScreen
                        loading="lazy">
                    </iframe>

                    <div className={styles.directions_container}>

                        <div className={styles.social_container}>
                            <a href="https://www.instagram.com/dgranatapas" target="_blank"><AiFillInstagram className={`${styles.icon} ${styles.instagram}`} /></a>
                            <a href="https://www.facebook.com/DGran%C3%A1-Tapas" target='_blank'><AiFillFacebook className={`${styles.icon} ${styles.facebook}`} /></a>
                            <a href="mailto:" target="_blank"><AiFillMail className={`${styles.icon} ${styles.mail}`} /></a>
                        </div>

                        <div className={styles.address_container}>
                            <p>Lunes: cerrado.</p>
                            <p>Martes: 20:00 a 00:00</p>
                            <p>Miercoles a Domingo: 12:00 a 16:00 / 20:00 a 00:00</p>
                            <address>
                                Calle Casablanca, nº 30, local 2
                            </address>
                        </div>

                    </div>

                </div>

            </seccion>
        </>
    )
}