'use client';

import BubbleNav from "../components/bubbleNav";
import { usePathname } from "next/navigation";

export default function MenuLayout({ children }) {
    const path = usePathname();
    console.log(path)
    return (
        <>
            {path === '/menu' ? null : <BubbleNav />}
            {children}
        </>
    )
}