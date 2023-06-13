'use client'

import styles from './menu.module.scss';

import Head from 'next/head';

import { useEffect } from 'react';

import Category from '../components/category';

export default function Menu() {

    useEffect(() => {
        document.body.classList.toggle('alhambra');

        return () => document.body.classList.toggle('alhambra');
    }, [])

    return (
        <>
            <Head>
                <title></title>
                <meta name="description" content="" />
                <meta name="keywords" content="" />
            </Head>
            <seccion className="page_container">
                <div className={styles.category_container}>
                    <Category title="Ensaladas" img="/assets/platos/ensalada-bacon-queso-cabra.webp" alt="ensaladas" url="/menu/ensaladas" />
                    <Category title="Entrantes" img="/assets/platos/patatas-bravas-caseras.webp" alt="entrantes" url="/menu/entrantes" />
                    <Category title="Platos" img="/assets/platos/flamenquin-cordobes-casero.webp" alt="platos principales" url="/menu/platos" />
                    <Category title="Pescados" img="/assets/platos/pata-pulpo-salsa-romesco.webp" alt="pescados frescos" url="/menu/pescados" />
                    <Category title="Exigentes" img="/assets/platos/milhojas-queso-cabra-mango-jamon.webp" alt="platos exigentes" url="/menu/platos-exigentes" />
                    <Category title="Hamburguesas" img="/assets/platos/hamburguesa-ternera-buey.webp" alt="hamburguesas de angus y buey" url="/menu/hamburguesas-buey-angus" />
                    <Category title="Asiático" img="/assets/platos/pan-bao-solomillo-2.webp" alt="platos asiáticos" url="/menu/platos-asiaticos" />
                    <Category title="Postres" img="/assets/platos/tarta de queso viña.webp" alt="postres" url="/menu/postres" />
                    <Category title="Bebidas" img="/assets/platos/bebidas-dgrana.webp" alt="bebidas" url="/menu/bebidas" />
                </div>
            </seccion>
        </>
    )
}