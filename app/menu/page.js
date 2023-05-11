import styles from './menu.module.scss';

import Head from 'next/head';

import Category from '../components/category';

export default function Menu() {

    return (
        <>
            <Head>
                <title></title>
                <meta name="description" content="" />
                <meta name="keywords" content="" />
            </Head>
            <seccion className="page_container">
                <div className={styles.category_container}>
                    <Category title="Ensaladas" url="/assets/platos/ensalada-bacon-queso-cabra.webp" />
                    <Category title="Entrantes" url="/assets/platos/patatas-bravas-caseras.webp" />
                    <Category title="Platos" url="/assets/platos/flamenquin-cordobes-casero.webp" />
                    <Category title="Pescados" url="/assets/platos/pata-pulpo-salsa-romesco.webp" />
                    <Category title="Exigentes" url="/assets/platos/milhojas-queso-cabra-mango-jamon.webp" />
                    <Category title="Hamburguesas" url="/assets/platos/hamburguesa-ternera-buey.webp" />
                </div>
            </seccion>
        </>
    )
}