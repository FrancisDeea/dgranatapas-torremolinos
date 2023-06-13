import styles from './bubbleNav.module.scss';

import { GiKnifeFork } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai'

import Link from 'next/link';

import { useState } from 'react';


export default function BubbleNav() {
    const [show, setShow] = useState(false);


    return (
        <>
            <button className={styles.bubble_btn} onClick={() => setShow(!show)} style={show ? {"visibility": "hidden","opacity": "0"} : {"visibility": "visible", "opacity": "1"}}><GiKnifeFork className={styles.icon} />Pulsa para ver menú</button>
            <div className={styles.modal} style={show ? {"visibility": "visible", "maxHeight": "60%"} : {"visibility": "hidden", "maxHeight": "0px"}}>
                <nav>
                    <ul onClick={()=> setShow(!show)}>
                        <li><Link className={styles.link} href="/menu/ensaladas">Ensaladas</Link></li>
                        <li><Link className={styles.link} href="/menu/entrantes">Entrantes</Link></li>
                        <li><Link className={styles.link} href="/menu/platos">Platos</Link></li>
                        <li><Link className={styles.link} href="/menu/pescados">Pescados</Link></li>
                        <li><Link className={styles.link} href="/menu/platos-exigentes">Exigentes</Link></li>
                        <li><Link className={styles.link} href="/menu/hamburguesas-buey-angus">Hamburguesas</Link></li>
                        <li><Link className={styles.link} href="/menu/platos-asiaticos">Asiático</Link></li>
                        <li><Link className={styles.link} href="/menu/postres">Postres</Link></li>
                        <li><Link className={styles.link} href="/menu/bebidas">Bebidas</Link></li>
                    </ul>
                    <AiOutlineClose className={styles.btn_close} onClick={() => setShow(!show)} />
                </nav>
            </div>
        </>
    )
}