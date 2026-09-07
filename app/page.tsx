"use client";
import { FaLinkedinIn, FaGithub, FaDiscord, FaTelegram, FaStackOverflow, FaMedium, FaBriefcase, FaBrain, FaDatabase } from "react-icons/fa";
import { FaCode, FaTools, FaChartLine, FaBroom, FaChartPie, FaTable, FaCalculator, FaWaveSquare, FaGitAlt, } from "react-icons/fa";
import { FaDocker, FaAws, FaBookOpen, FaCloud, FaRobot, FaMagic, FaSearch } from "react-icons/fa";
import { FaUser, FaEnvelope, FaTag, FaCommentDots, FaPaperPlane } from "react-icons/fa";
import { SiLeetcode, SiCodechef, SiHashnode, SiDevdotto, SiGmail, SiKaggle } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";

import { useState, useEffect } from "react";

export default function Home() {
    const [show, setShow] = useState(true);

    // Navbar scroll effect
    useEffect(() => {
        let lastScroll = window.scrollY;

        const handleScroll = () => {
            const currentScroll = window.scrollY;

            // Always show at the top
            if (currentScroll <= 50) {
                setShow(true);
            }
            // Hide while scrolling down
            else if (currentScroll > lastScroll) {
                setShow(false);
            }
            // Show while scrolling up
            else {
                setShow(true);
            }

            lastScroll = currentScroll;
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (

        <section>

            <div id="Home" className="sticky top-0 h-screen flex flex-col min-h-screen items-center justify-between mx-10 my-6 px-30 py-10 border-b border-zinc-900 border-0">

                <div className="flex flex-row space-x-20 pt-10 space-y-10">

                    <div>

                        <div className="order-1 flex flex-col space-x-6 mt-6 items-left">

                            <div className="flex w-50 gap-4 border border-zinc-900 bg-zinc-950 rounded-full px-4 py-2 mb-2 shadow-xl shadow-zinc-700/20">
                                <h1 className="text-xl text-zinc-200">Open to Internship</h1>
                            </div>

                            <h1 className="text-xl font-bold">Hey,</h1>
                            <h1 className="text-6xl font-bold text-gray-200 text-shadow-xs text-shadow-gray-50">I'm{" "} <span className="inline-block transition-transform duration-800 hover:scale-102">Shaivi</span></h1>
                            <h1 className="text-3xl font-bold text-shadow-xs text-shadow-gray-50">Open Source Contributor</h1>
                            <p className="text-left inline-block-flex"> <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&pause=1000&color=77DD77&center=true&width=600&lines=Aspiring+ML+Engineer+%F0%9F%A7%AE;B.Tech+CSE+%7C+Data+Science+%26+ML;Exploring+AI+%26+Cloud+Technologies+%F0%9F%8D%80;Python+%E2%80%A2+C+%E2%80%A2+SQL+%E2%80%A2+DSA" alt="Typing SVG" /> </p>
                            <p className="text-xl text-zinc-200">Passionate about Machine Learning, Data Analytics, and Cloud Computing. I enjoy building practical projects that solve real-world problems while continuously learning modern technologies.</p>
                        </div>

                        <div className="order-1 flex flex-row space-x-6 mt-6 pb-6 items-center border-b border-zinc-900 border-0">
                            <a href="/CV.pdf" download className="text-2xl text-black font-semibold border-1 rounded-full shadow-md border-gray-200 bg-gray-200 px-4 py-2 justify-center hover:border-gray-200 hover:bg-gray-200 hover:shadow-lg hover:shadow-gray-600/35 transition-transform duration-800 ease-in-out hover:scale-105">Resume</a>
                            <a href="#Contact" className="text-2xl font-semibold text-white border border-zinc-900 bg-zinc-950 rounded-full px-4 py-2 shadow-md hover:border-zinc-700 hover:bg-zinc-950 transition-all duration-500 ease-in-out hover:scale-102">Contact</a>
                            <a href="#Projects" className="text-2xl font-semibold text-white border border-zinc-900 bg-zinc-950 rounded-full px-4 py-2 shadow-md hover:border-zinc-700 hover:bg-zinc-950 transition-all duration-500 ease-in-out hover:scale-102">Projects</a>
                        </div>

                        <div className="order-1 flex flex-row space-x-6 mt-6 items-center">
                            <h1 className="text-lg font-bold text-shadow-xs text-shadow-gray-50">Go Through:</h1>
                            <a href="https://linkedin.com/in/shaivi30" target="_blank" rel="noopener noreferrer" className="border border-zinc-950 rounded-sm px-2.5 py-2 shadow-md transition-transform duration-800 hover:scale-105"> <FaLinkedinIn size={22} /> </a>
                            <a href="https://github.com/iamshaivi" target="_blank" rel="noopener noreferrer" className="border border-zinc-950 rounded-sm px-2.5 py-2 shadow-md transition-transform duration-800 hover:scale-105"> <FaGithub size={22} /> </a>
                            <a href="https://x.com/Shaivi330143" target="_blank" rel="noopener noreferrer" className="border border-zinc-950 rounded-sm px-2.5 py-2 shadow-md transition-transform duration-800 hover:scale-105"> <FaXTwitter size={22} /> </a>
                        </div>

                    </div>

                    <div>

                        <div className="w-110 h-110 rounded-full overflow-hidden">
                            <img src="/profile.jpeg" alt="Profile" className="w-full h-full object-cover transition-all duration-700 hover:scale-105" />
                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}