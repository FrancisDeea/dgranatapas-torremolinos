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
                    <Category title="Ensaladas" img="/assets/platos/ensalada-bacon-queso-cabra.webp" url="/menu/ensaladas" />
                    <Category title="Entrantes" img="/assets/platos/patatas-bravas-caseras.webp" url="/menu/entrantes" />
                    <Category title="Platos" img="/assets/platos/flamenquin-cordobes-casero.webp" url="/menu/platos" />
                    <Category title="Pescados" img="/assets/platos/pata-pulpo-salsa-romesco.webp" url="/menu/pescados" />
                    <Category title="Exigentes" img="/assets/platos/milhojas-queso-cabra-mango-jamon.webp" url="/menu/platos-exigentes" />
                    <Category title="Hamburguesas" img="/assets/platos/hamburguesa-ternera-buey.webp" url="/menu/hamburguesas-buey-angus" />
                    <Category title="Asiático" img="" url="/menu/platos-asiaticos" />
                    <Category title="Postres" img="" url="/menu/hamburguesas-buey-angus" />
                    <Category title="Bebidas" img="" url="/menu/hamburguesas-buey-angus" />
                </div>
            </seccion>
        </>
    )
}