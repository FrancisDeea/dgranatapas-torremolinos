'use client';

import BubbleNav from "../components/bubbleNav";

import { usePathname } from "next/navigation";

import { useState } from 'react';

export default function MenuLayout({ children }) {
    const path = usePathname();

    return (
        <>
            {children}
            {path === '/menu' ? null : <BubbleNav />}
        </>
    )
}