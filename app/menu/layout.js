'use client';

import BubbleNav from "../components/bubbleNav";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function MenuLayout({ children }) {
    const path = usePathname();

    useEffect(() => {
        document.body.style.background = "linear-gradient(90deg, var(--left-gradient) 0%, var(--right-gradient) 100%)";
        return () => document.body.style.background = "var(--background-color)";
    }, [])

    return (
        <>
            {path === '/menu' ? null : <BubbleNav />}
            {children}
        </>
    )
}