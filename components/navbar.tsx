"use client";
import { useEffect, useState } from "react";

import { SiGmail } from "react-icons/si";
export default function Navbar() {

    const [show, setShow] = useState(true);

    useEffect(() => {
        let lastScroll = window.scrollY;

        const handleScroll = () => {
            const currentScroll = window.scrollY;

            if (currentScroll <= 50) {
                setShow(true);
            } else if (currentScroll > lastScroll) {
                setShow(false);
            } else {
                setShow(true);
            }

            lastScroll = currentScroll;
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (

        <nav className={`fixed top-0 left-0 w-full z-50 bg-zinc-950/70 backdrop-blur-sm flex flex-row items-center justify-between 
                border-b border-zinc-800 transition-transform duration-300 ${show ? "translate-y-0" : "-translate-y-full"}`}>

            <div className="flex flex-row order-1 items-center gap-6">
                <img src="/favicon.ico" className="h-15 w-15" />
                <ul className="flex gap-6">
                    <li> <a href="#Home" className="text-lg">Home</a></li>
                    <li> <a href="#About Me" className="text-lg">About</a></li>
                    <li> <a href="#Skills" className="text-lg">Skills</a></li>
                    <li> <a href="#Projects" className="text-lg">Projects</a></li>
                    <li> <a href="#Certificates" className="text-lg">Certificates</a></li>
                    <li> <a href="#Contact" className="text-lg">Contact</a></li>
                </ul>
            </div>
            <div className="flex flex-row order-2 items-center gap-6">
                <a
                    href="mailto:shaivi.2025@lpu.in" className="border border-zinc-950 rounded-sm px-2.5 py-1 shadow-md hover:shadow-lg
                    hover:shadow-zinc-700/35 transition-all ease-in-out duration-700 hover:scale-105 hover:border-zinc-950">
                    <SiGmail size={32} />
                </a>
            </div>
        </nav>
    );
}