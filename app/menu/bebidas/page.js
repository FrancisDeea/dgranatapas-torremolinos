import Head from 'next/head';

import styles from './bebidas.module.scss';

export default function Bebidas() {

    return (
        <>
            <Head>
                <title></title>
                <meta name="description" content="" />
                <meta name="keywords" content="" />
            </Head>
            <seccion className={`menu_container drinks_container`}>
                <div className={styles.container}>

                    <header>
                        <h1>Bebidas</h1>
                    </header>

                    <div className={styles.subcontainer}>
                        <h2 className={styles.subtitle}>Refrescos</h2>
                        <hr className={styles.separator} />

                        <article className={styles.product}>
                            <p className={styles.left}>
                                Coca-Cola original / zero / zero-zero
                            </p>

                            <p className={styles.right}>
                                2.70
                            </p>
                        </article>

                        <article className={styles.product}>
                            <p className={styles.left}>
                                Fanta naranja / limón
                            </p>

                            <p className={styles.right}>
                                2.70
                            </p>
                        </article>

                        <article className={styles.product}>
                            <p className={styles.left}>
                                Nestea limón / Maracuya
                            </p>

                            <p className={styles.right}>
                                2.70
                            </p>
                        </article>

                        <article className={styles.product}>
                            <p className={styles.left}>
                                Tónica
                            </p>

                            <p className={styles.right}>
                                2.70
                            </p>
                        </article>

                        <article className={styles.product}>
                            <p className={styles.left}>
                                Tinto de verano "La Casera"
                            </p>

                            <p className={styles.right}>
                                2.70
                            </p>
                        </article>

                        <article className={styles.product}>
                            <p className={styles.left}>
                                Tinto de verano casero (limón o blanca)
                            </p>

                            <p className={styles.right}>
                                2.70
                            </p>
                        </article>

                        <article className={styles.product}>
                            <p className={styles.left}>
                                Maceta grande de tinto verano casero
                            </p>

                            <p className={styles.right}>
                                3.50
                            </p>
                        </article>
                    </div>

                    <div className={styles.subcontainer}>
                        <h2 className={styles.subtitle}>Vino Tinto</h2>
                        <hr className={styles.separator} />

                        <article className={styles.product}>
                            <p className={styles.left}>
                                Rioja
                            </p>

                            <p className={styles.right}>
                                3.00
                            </p>
                        </article>

                        <article className={styles.product}>
                            <p className={styles.left}>
                                Ribera
                            </p>

                            <p className={styles.right}>
                                3.50
                            </p>
                        </article>
                    </div>

                    <div className={styles.subcontainer}>
                        <h2 className={styles.subtitle}>Vino Blanco</h2>
                        <hr className={styles.separator} />

                        <article className={styles.product}>
                            <p className={styles.left}>
                                Verdejo
                            </p>

                            <p className={styles.right}>
                                3.00
                            </p>
                        </article>

                        <article className={styles.product}>
                            <p className={styles.left}>
                                Frizzante
                            </p>

                            <p className={styles.right}>
                                3.00
                            </p>
                        </article>
                    </div>

                    <div className={styles.subcontainer}>
                        <h2 className={styles.subtitle}>Cerveza Alhambra (Grifo)</h2>
                        <hr className={styles.separator} />

                        <article className={styles.product}>
                            <p className={styles.left}>
                                Caña
                            </p>

                            <p className={styles.right}>
                                2.20
                            </p>
                        </article>

                        <article className={styles.product}>
                            <p className={styles.left}>
                                Copa
                            </p>

                            <p className={styles.right}>
                                3.30
                            </p>
                        </article>

                        <article className={styles.product}>
                            <p className={styles.left}>
                                Pinta/Maceta
                            </p>

                            <p className={styles.right}>
                                3.80
                            </p>
                        </article>
                    </div>

                    <div className={styles.subcontainer}>
                        <h2 className={styles.subtitle}>Tercios de Cerveza</h2>
                        <hr className={styles.separator} />

                        <article className={styles.product}>
                            <p className={styles.left}>
                                Alhambra especial
                            </p>

                            <p className={styles.right}>
                                2.80
                            </p>
                        </article>

                        <article className={styles.product}>
                            <p className={styles.left}>
                                Alhambra 1925
                            </p>

                            <p className={styles.right}>
                                3.50
                            </p>
                        </article>

                        <article className={styles.product}>
                            <p className={styles.left}>
                                Alhambra Reserva Roja
                            </p>

                            <p className={styles.right}>
                                3.50
                            </p>
                        </article>

                        <article className={styles.product}>
                            <p className={styles.left}>
                                Alhambra IPA
                            </p>

                            <p className={styles.right}>
                                3.50
                            </p>
                        </article>

                        <article className={styles.product}>
                            <p className={styles.left}>
                                Radler (con limón)
                            </p>

                            <p className={styles.right}>
                                2.80
                            </p>
                        </article>

                        <article className={styles.product}>
                            <p className={styles.left}>
                                San Miguel 0.0
                            </p>

                            <p className={styles.right}>
                                2.80
                            </p>
                        </article>

                        <article className={styles.product}>
                            <p className={styles.left}>
                                San Miguel sin gluten
                            </p>

                            <p className={styles.right}>
                                2.80
                            </p>
                        </article>
                    </div>

                    <div className={styles.subcontainer}>
                        <h2 className={styles.subtitle}>Copas/Combinados</h2>
                        <hr className={styles.separator} />

                        <article className={styles.product}>
                            <p className={styles.left}>
                                Normal
                            </p>

                            <p className={styles.right}>
                                5.50
                            </p>
                        </article>

                        <article className={styles.product}>
                            <p className={styles.left}>
                                Premium
                            </p>

                            <p className={styles.right}>
                                6.50
                            </p>
                        </article>
                    </div>

                    <div className={styles.subcontainer}>
                        <h2 className={styles.subtitle}>Café y té</h2>
                        <hr className={styles.separator} />

                        <article className={styles.product}>
                            <p className={styles.left}>
                                Solo, cortado, con leche, manchada
                            </p>

                            <p className={styles.right}>
                                1.50
                            </p>
                        </article>

                        <article className={styles.product}>
                            <p className={styles.left}>
                                Bombón o carajillo
                            </p>

                            <p className={styles.right}>
                                2.00
                            </p>
                        </article>

                        <article className={styles.product}>
                            <p className={styles.left}>
                                Té o infusion
                            </p>

                            <p className={styles.right}>
                                1.50
                            </p>
                        </article>
                    </div>
                </div>
            </seccion>
        </>
    )
}