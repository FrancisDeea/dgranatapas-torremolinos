'use client'

import styles from './header.module.scss'

import { BsList } from 'react-icons/bs'
import { AiOutlineClose } from 'react-icons/ai'

import Nav from './nav'

import { useState } from 'react'

import Link from 'next/link';
import Image from 'next/image';
import logo from '/public/assets/logo-dgrana-tapas-blanco.png';

export default function Header() {
    const [show, setShow] = useState(false);

    // If <show> state is false, <close> style will be applied, or vice-versa.
    const open = { "height": "100vh", "visibility": "visible" };
    const close = { "height": "0", "visibility": "hidden" };

    // This switch function will be applied to the buttons and passed it to <Nav> component to be applied when one link is clicked
    function handleClick() {
        setShow(!show);
    }

    return (
        <header className={styles.container}>
            <Link href="/#home"><Image className={styles.logo} src={logo} alt="logo dgrana tapas" /></Link>
            <BsList className={styles.btn_open} onClick={handleClick} />
            <div className={styles.modal} onClick={handleClick} style={show ? open : close}>
                <Nav onClick={handleClick} />
                <AiOutlineClose className={styles.btn_close} onClick={handleClick} />
            </div>
        </header>
    )
}