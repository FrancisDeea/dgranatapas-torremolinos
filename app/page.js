import styles from './styles/index.module.scss';
import { AiFillInstagram, AiFillFacebook, AiFillMail } from 'react-icons/ai'


import Head from 'next/head'
import Button from './components/button';

import Image from 'next/image';
import bar from '../public/dgranatapas-torremolinos.webp';

export default function Home() {
    return (
        <>
            <Head>
                <title>D'Graná Tapas - Inicio</title>
                <meta name="description" content="Disfruta de almuerzos, cenas y tapas gratis con tu bebida como en Granada, pero en Málaga, Torremolinos." />
                <meta name="keywords" content="bar, tapas, cenas, comidas, malaga, torremolinos" />
            </Head>
            <seccion id="home" className={`${styles.home_seccion} page_container`}>
                <header className={styles.home_header}>
                    <h1>
                        <span className={styles.name}>D'Graná Tapas</span><br />
                        <span className={styles.pride}>Torremolinos</span><br />
                        Almuerzos y Cenas
                    </h1>
                    <p className={styles.description}>Disfruta de tu bebida con tapa gratis, además de una amplia selección de platos y raciones. Al más puro estilo granadino y sin moverte de la costa del sol - Torremolinos, Málaga.</p>
                    <Button value="Ver Menú" url="/menu" />
                </header>
            </seccion>

            <seccion className={`${styles.about_seccion} page_container`}>

                <header className={styles.about_header}>
                    <h2 className={styles.black}>Conoce nuestro bar, nuestra historia.</h2>
                </header>

                <div className={styles.columns_container}>

                    <div className={styles.about_content}>
                        <p className={styles.black}>Somos lalala ven conocenos y prueba nuestras tapas, jajaja que risa. Esto es una mera prueba. No se como quedará.</p>
                        <Button value="Ver historia" url="/menu" className={styles.btn} />
                    </div>

                    <div className={styles.img_content}>
                        <div className={styles.img_container}>
                            <Image
                                alt="localización dgrana tapas torremolinos"
                                className={styles.img}
                                src={bar}
                                fill
                            />
                        </div>
                    </div>

                </div>

            </seccion>

            <seccion id="contact" className={`${styles.contact_seccion} page_container`}>

                <header>
                    <h2>¿Sabes ya dónde encontrarnos?</h2>
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