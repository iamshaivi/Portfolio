"use client";
import { FaLinkedinIn, FaGithub, FaDiscord, FaTelegram, FaStackOverflow, FaMedium, FaBriefcase, FaBrain, FaDatabase } from "react-icons/fa";
import { FaCode, FaTools, FaChartLine, FaBroom, FaChartPie, FaTable, FaCalculator, FaWaveSquare, FaGitAlt, } from "react-icons/fa";
import { FaDocker, FaAws, FaBookOpen, FaCloud, FaRobot, FaMagic, FaSearch } from "react-icons/fa";
import { FaUser, FaEnvelope, FaTag, FaCommentDots, FaPaperPlane } from "react-icons/fa";
import { SiLeetcode, SiCodechef, SiHashnode, SiDevdotto, SiGmail, SiKaggle } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";


import { useState, useEffect } from "react";

import { FiChevronDown, FiChevronUp } from "react-icons/fi";

import { certificates, certificateCategories, } from "@/data/certificates";
import { projects, projectsCategories } from "@/data/projects";

export default function Home() {
    const [show, setShow] = useState(true);

    // Projects
    const [openProjectIndex, setOpenProjectIndex] = useState<number | null>(null);
    const [showAllProjects, setShowAllProjects] = useState(false);
    const [selectedProjectCategory, setSelectedProjectCategory] = useState("All");

    //Filter
    const filteredProjects =
        selectedProjectCategory === "All"
            ? projects
            : projects.filter(
                (project) => project.category === selectedProjectCategory
            );

    // Display
    const displayedProjects = showAllProjects
        ? filteredProjects
        : filteredProjects.slice(0, 3);

    //Columns
    const projectColumns = Array.from({ length: 3 }, () => [] as {
        project: typeof displayedProjects[number];
        index: number;
    }[]);

    //Fill Columns
    displayedProjects.forEach((project, index) => {
        projectColumns[index % 3].push({ project, index });
    });







    // Certificates
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const [showAll, setShowAll] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState("All");

    //Filter
    const filteredCertificates =
        selectedCategory === "All"
            ? certificates
            : certificates.filter(
                (certificate) => certificate.category === selectedCategory
            );

    // Display
    const displayedCertificates = showAll
        ? filteredCertificates
        : filteredCertificates.slice(0, 6);

    //Columns
    const certificatescolumns = Array.from({ length: 3 }, () => [] as {
        certificate: typeof displayedCertificates[number];
        index: number;
    }[]);

    //Fill Columns
    displayedCertificates.forEach((certificate, index) => {
        certificatescolumns[index % 3].push({ certificate, index });
    });





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

            <div id="Home" className=" flex flex-col min-h-screen items-center justify-between mx-10 my-6 px-30 py-10 border-b border-zinc-800 border-0">

                <div className="flex flex-row space-x-20 pt-10 space-y-10">

                    <div>

                        <div className="order-1 flex flex-col space-x-6 mt-6 items-left">
                            <h1 className="text-xl font-bold">Hey,</h1>
                            <h1 className="text-6xl font-bold text-gray-200 text-shadow-xs text-shadow-gray-50">I'm{" "} <span className="inline-block transition-transform duration-800 hover:scale-102">Shaivi</span></h1>
                            <h1 className="text-3xl font-bold text-shadow-xs text-shadow-gray-50">Open Source Contributor</h1>
                            <p className="text-left inline-block-flex"> <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&pause=1000&color=77DD77&center=true&width=600&lines=Aspiring+ML+Engineer+%F0%9F%A7%AE;B.Tech+CSE+%7C+Data+Science+%26+ML;Exploring+AI+%26+Cloud+Technologies+%F0%9F%8D%80;Python+%E2%80%A2+C+%E2%80%A2+SQL+%E2%80%A2+DSA" alt="Typing SVG" /> </p>
                            <p className="text-xl text-zinc-200">Passionate about Machine Learning, Data Analytics, and Cloud Computing. I enjoy building practical projects that solve real-world problems while continuously learning modern technologies.</p>
                        </div>

                        <div className="order-1 flex flex-row space-x-6 mt-6 pb-6 items-center  border-b border-zinc-800 border-0">
                            <a href="/resume.pdf" download className="text-2xl text-black font-semibold border-1 rounded-full shadow-md border-gray-200 bg-gray-200 px-4 py-2 justify-center hover:border-gray-200 hover:bg-gray-200 hover:shadow-lg hover:shadow-gray-600/35 transition-transform duration-800 ease-in-out hover:scale-105">Resume</a>
                            <a href="contact-me" className="text-2xl font-semibold text-white border border-zinc-800 bg-zinc-950 rounded-full px-4 py-2 shadow-md hover:border-zinc-700 hover:bg-zinc-950 transition-all duration-500 ease-in-out hover:scale-102">Contact</a>
                            <a href="Projects" className="text-2xl font-semibold text-white border border-zinc-800 bg-zinc-950 rounded-full px-4 py-2 shadow-md hover:border-zinc-700 hover:bg-zinc-950 transition-all duration-500 ease-in-out hover:scale-102">Projects</a>
                        </div>

                        <div className="order-1 flex flex-row space-x-6 mt-6 items-center">
                            <h1 className="text-lg font-bold text-shadow-xs text-shadow-gray-50">Go Through:</h1>
                            <a href="https://linkedin.com/in/shaivi30" target="_blank" rel="noopener noreferrer" className="border border-zinc-950 rounded-sm px-2.5 py-2 shadow-md transition-transform duration-800 hover:scale-105"> <FaLinkedinIn size={22} /> </a>
                            <a href="https://github.com/iamshaivi" target="_blank" rel="noopener noreferrer" className="border border-zinc-950 rounded-sm px-2.5 py-2 shadow-md transition-transform duration-800 hover:scale-105"> <FaGithub size={22} /> </a>
                            <a href="https://x.com/Shaivi330143" target="_blank" rel="noopener noreferrer" className="border border-zinc-950 rounded-sm px-2.5 py-2 shadow-md transition-transform duration-800 hover:scale-105"> <FaXTwitter size={22} /> </a>
                        </div>

                    </div>

                    <div>

                        <div className="w-80 h-80 rounded-full overflow-hidden">
                            <img src="/profile.jpeg" alt="Profile" className="w-full h-full object-cover transition-all duration-700 hover:scale-105" />
                        </div>

                    </div>

                </div>

            </div>


            <div id="About Me" className="flex flex-row mx-10 px-10 py-10 min-h-fit gap-10 border-b border-zinc-800 border-0">

                {/*Img*/}
                <div className="flex flex-1 border-0">
                    <img src="Img.jpg" alt="Image" className="rounded-4xl" />
                </div>

                {/*hello+%about me=%geducation+%degree+%Major*/}
                <div className="flex flex-1 flex-col px-6 border-0 border-l border-r border-zinc-800">

                    <h1 className="text-2xl font-semibold pb-2">Hello</h1>

                    <p className="text-md text-left font-sans"> I'm Shaivi, a second-year B.Tech CSE student specializing in Data Science and Machine Learning.<br />
                        I enjoy<br />
                        • Building AI projects<br />
                        • Data Visualization<br />
                        • Open Source<br />
                        • Learning Cloud Technologies</p><br /> 

                    <div className="border-0 border-t border-zinc-800 pt-4">
                        <h2 className="text-2xl font-semibold text-white">Education</h2><br />
                        <h3 className="text-lg text-left font-sans pb-1">{" "} <span className="font-mono">2025-2029:</span>Lovely Proffessional University</h3>
                        <h4 className="text-lg text-left font-sans pb-1">Bachelor of Technology in Computer Science and Engineering (Data Science and Machine Learning)</h4><br />
                        <h3 className="text-lg text-left font-sans pb-1">{" "} <span className="font-mono">2025:</span>UpGrad</h3>
                        <h4 className="text-md text-left font-sans">Data Science</h4>
                    </div>

                </div>

                {/*experience*/}
                <div className="flex flex-1 flex-col border-0 items-stretch">

                    <h2 className="text-2xl font-semibold pb-1 text-white">Experience</h2>

                    <div className="flex flex-col border-0 border-t border-zinc-800 pt-4">
                        <h3 className="text-md font-mono pb-2">2026</h3>
                        <h4 className="text-lg text-left font-sans">GirlScript Summer of Code</h4>
                        <h6 className="text-lg text-left font-sans">Open Source Contributor</h6>
                    </div>

                </div>

            </div>





            <div id="Skills" className="flex flex-col mx-10 px-10 py-20 min-h-fit gap-10 border-b-1 border-zinc-800 border-0">
                <h1 className="text-6xl font-bold">Skills & Expertise</h1>

                <div className="flex flex-row grid grid-cols-4 gap-4">
                    {/*box-1*x */}
                    <div className="flex flex-col items-center gap-4 border border-zinc-900 bg-zinc-950 rounded-lg px-6 py-4 shadow-md hover:border-zinc-800 hover:bg-zinc-950 hover:shadow-lg hover:shadow-zinc-700/20 transition-all duration-300">
                        <h1 className="font-bold">Data and Analytics</h1>
                        <div className="grid grid-cols-2 gap-1">

                            {/*box-1*x */}
                            <div className="flex items-center gap-4 border border-zinc-900 bg-zinc-950 rounded-full px-6 py-4 shadow-md hover:border-zinc-800 hover:bg-zinc-950 hover:shadow-lg hover:shadow-zinc-700/20 transition-all duration-300">
                                <h1 className="w-full bg-transparent outline-none placeholder:text-zinc-500">Web Scraping</h1>
                            </div>

                        </div>

                    </div>

                    <div className="flex flex-col gap-4">

                        {/*box-1*x */}
                        <div className="flex flex-col flex-1 items-center gap-4 border border-zinc-900 bg-zinc-950 rounded-lg px-6 py-4 shadow-md hover:border-zinc-800 hover:bg-zinc-950 hover:shadow-lg hover:shadow-zinc-700/20 transition-all duration-300">
                            <h1 className="font-bold">Tools & Platforms</h1>
                            <div className="gap-2">

                                {/*box-1*x */}
                                <div className="flex items-center gap-4 border border-zinc-900 bg-zinc-950 rounded-full px-6 py-4 shadow-md hover:border-zinc-800 hover:bg-zinc-950 hover:shadow-lg hover:shadow-zinc-700/20 transition-all duration-300">
                                    <h1 className="w-full bg-transparent outline-none placeholder:text-zinc-500">Data Science</h1>
                                </div>

                            </div>

                        </div>

                        {/*box-1*x */}
                        <div className="flex flex-col flex-2 items-center gap-4 border border-zinc-900 bg-zinc-950 rounded-lg px-6 py-4 shadow-md hover:border-zinc-800 hover:bg-zinc-950 hover:shadow-lg hover:shadow-zinc-700/20 transition-all duration-300">
                            <h1 className="font-bold">AI & Machine Learning</h1>
                            <div className="gap-2">
                                {/*box-1*x */}
                                <div className="flex items-center gap-4 border border-zinc-900 bg-zinc-950 rounded-full px-6 py-4 shadow-md hover:border-zinc-800 hover:bg-zinc-950 hover:shadow-lg hover:shadow-zinc-700/20 transition-all duration-300">
                                    <h1 className="w-full bg-transparent outline-none placeholder:text-zinc-500">Artificial Intelligence</h1>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="flex flex-col gap-4">
                        {/*box-1*x */}
                        <div className="flex flex-col flex-1 items-center gap-4 border border-zinc-900 bg-zinc-950 rounded-lg px-6 py-4 shadow-md hover:border-zinc-800 hover:bg-zinc-950 hover:shadow-lg hover:shadow-zinc-700/20 transition-all duration-300">
                            <h1 className="font-bold">Cloud & Systems</h1>
                            <div className="gap-2">
                                {/*box-1*x */}
                                <div className="flex items-center gap-4 border border-zinc-900 bg-zinc-950 rounded-full px-6 py-4 shadow-md hover:border-zinc-800 hover:bg-zinc-950 hover:shadow-lg hover:shadow-zinc-700/20 transition-all duration-300">
                                    <h1 className="w-full bg-transparent outline-none placeholder:text-zinc-500">Cloud Computing</h1>
                                </div>
                            </div>
                        </div>




                    </div>

                </div>

            </div>




































            <div id="Projects" className="flex flex-col border-b border-zinc-800 items-center justify-center py-20">

                <h2 className="text-6xl font-bold text-gray-200 text-shadow-xs text-shadow-gray-100 mb-12 transition-transform duration-800 hover:scale-102">
                    Projects
                </h2>

                {/* Categories */}
                <div className="flex flex-row h-full gap-4 pb-4 mb-8 border-b border-zinc-800">

                    {projectsCategories.map((category) => (

                        <button
                            key={category}
                            onClick={() => {
                                setSelectedProjectCategory(category);
                                setShowAllProjects(false);
                                setOpenProjectIndex(null);
                            }}
                            className={`px-5 py-3 rounded-full border transition-all duration-300 ease-out
                                ${selectedProjectCategory === category
                                    ? "bg-zinc-800 border-zinc-700 text-white scale-[1.03]"
                                    : "bg-zinc-950 border-zinc-800 text-zinc-400 hover:text-zinc-200 hover:scale-[1.02]"
                                }`}>
                            {category}
                        </button>

                    ))}

                </div>

                {/* Cards */}
                <div className="grid grid-cols-3 gap-8 items-start">

                    {projectColumns.map((column, columnIndex) => (

                        <div key={columnIndex} className="flex flex-col gap-8">

                            {column.map(({ project, index }) => (

                                <div key={project.id}
                                    className="rounded-3xl border border-zinc-800 bg-zinc-950 p-4 hover:border-zinc-800 hover:bg-zinc-950 hover:shadow-lg hover:shadow-zinc-700/20 transition-all duration-800 ease-out hover:scale-102">

                                    <img src={project.image}
                                        alt={project.title}
                                        className="w-full h-56 object-cover rounded-2xl hover:scale-[1.01] transition-transform duration-500" />

                                    <h3 className="text-xl text-zinc-200 mt-2">
                                        {project.title}
                                    </h3>

                                    <div className={`overflow-hidden transition-[max-height,opacity] duration-700 ease-in-out
                                            ${openProjectIndex === index
                                            ? "max-h-[350px] opacity-100 mt-6"
                                            : "max-h-0 opacity-0"
                                        }`}>

                                        <div className="space-y-2">

                                            <div className="flex gap-2">
                                                <span className="text-zinc-500">Category</span>
                                                <span>{project.category}</span>
                                            </div>

                                            <div className="flex justify-between gap-2">
                                                <span className="text-zinc-500">Skills</span>
                                                <span>
                                                    {project.skills.join(" • ")}
                                                </span>


                                            </div>

                                            <div className="flex flex-row gap-35">
                                                <a href={project.GithubRepo}
                                                    target="_blank"
                                                    className="inline-block justify-start border border-zinc-800 rounded-lg px-4 py-2 ml-3 hover:bg-white hover:text-black transition">
                                                    View Repository
                                                </a>


                                                <a href={project.verifyLink}
                                                    target="_blank"
                                                    className="inline-block justify-end border border-zinc-800 rounded-lg px-4 py-2 ml-3 hover:bg-white hover:text-black transition">
                                                    Live Demo ↗
                                                </a>
                                            </div>

                                        </div>

                                    </div>

                                    <button
                                        onClick={() =>
                                            setOpenProjectIndex(
                                                openProjectIndex === index ? null : index
                                            )
                                        }
                                        aria-expanded={openProjectIndex === index}
                                        className="w-full flex justify-center items-center mt-4 group">

                                        <FiChevronDown className={`text-2xl text-zinc-400 transition-all duration-400 ease-in-out
                                                ${openProjectIndex === index
                                                ? "rotate-180 text-zinc-200"
                                                : "rotate-0"
                                            } group-hover:text-white`} />

                                    </button>

                                </div>

                            ))}

                        </div>

                    ))}

                </div>

                {/* View All */}
                <div className="place-items-center">
                    {!showAllProjects && filteredProjects.length > 6 && (
                        <button
                            onClick={() => setShowAllProjects(true)}
                            className="w-125 h-14 py-2 mt-4 rounded-full border border-zinc-800 bg-zinc-950 flex flex-col items-center justify-center hover:border-zinc-900 hover:bg-zinc-900 hover:shadow-lg hover:shadow-zinc-700/35 transition-all duration-800 ease-out hover:scale-103">
                            View All
                            <FiChevronDown className="text-2xl" />
                        </button>
                    )}
                </div>

            </div>
















































            <div id="Certificates" className="flex flex-col border-0 border-b border-zinc-800 items-center justify-center py-20">
                <h2 className=" text-6xl font-bold text-gray-200 text-shadow-xs text-shadow-gray-100 mb-12 transition-transform duration-800 hover:scale-102">Certificates</h2>

                <div className="flex flex-row h-full gap-4 pb-4 mb-8 border-0 border-b-1 border-zinc-800 ">
                    {certificateCategories.map((category) => (

                        <button
                            key={category}
                            onClick={() => {
                                setSelectedCategory(category);
                                setShowAll(false);
                                setOpenIndex(null);
                            }}
                            className={`px-5 py-3 rounded-full border transition-all duration-300 ease-out
                                ${selectedCategory === category
                                    ? "bg-zinc-800 border-zinc-700 text-white scale-[1.03]"
                                    : "bg-zinc-950 border-zinc-800 text-zinc-400 hover:text-zinc-200 hover:scale-[1.02]"
                                }`}
                        >
                            {category}
                        </button>

                    ))}
                </div>

                <div className="grid grid-cols-3 gap-8 items-start">
                    {certificatescolumns.map((column, columnIndex) => (
                        <div key={columnIndex} className="flex flex-col gap-8">
                            {column.map(({ certificate, index }) => (
                                <div
                                    key={certificate.id}
                                    className="rounded-3xl border border-zinc-800 bg-zinc-950 p-4 hover:border-zinc-800 hover:bg-zinc-950 hover:shadow-lg hover:shadow-zinc-700/20 transition-all duration-800 ease-out hover:scale-102">
                                    <img src={certificate.image}
                                        alt={certificate.title}
                                        className="w-full h-56 object-cover rounded-2xl hover:scale-[1.01] transition-transform duration-500" />
                                    <h3 className="text-xl text-zinc-200 mt-2">
                                        {certificate.title}
                                    </h3>

                                    <div
                                        className={`overflow-hidden transition-[max-height,opacity] duration-700 ease-in-out ${openIndex === index
                                            ? "max-h-[350px] opacity-100 mt-6"
                                            : "max-h-0 opacity-0"
                                            }`}>
                                        <div className="space-y-4">

                                            <div>

                                                <p className="text-zinc-400">
                                                    {certificate.issuer}
                                                </p>
                                            </div>

                                            <div className="space-y-2 text-sm text-zinc-300">

                                                <div className="flex justify-between">
                                                    <div className="flex items-left gap-2">
                                                        <span className="text-zinc-500">Issued</span>
                                                        <span>{certificate.issued}</span>
                                                    </div>

                                                    <div className="flex items-right gap-2">
                                                        <span className="text-zinc-500">Credential ID</span>
                                                        <span>{certificate.credentialId}</span>
                                                    </div>
                                                </div>

                                                <div className="flex justify-between">
                                                    <span className="text-zinc-500">Skills</span>

                                                    <span>
                                                        {certificate.skills.join(" • ")}
                                                    </span>
                                                </div>

                                            </div>

                                            <a href={certificate.verifyLink}
                                                className="inline-block border border-zinc-800 rounded-lg px-4 py-2 hover:bg-white hover:text-black transition">
                                                Verify ↗
                                            </a>

                                        </div>
                                    </div>

                                    <button
                                        onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                        aria-expanded={openIndex === index}
                                        className="w-full flex justify-center items-center mt-4 group" >
                                        <FiChevronDown className={`text-2xl text-zinc-400 transition-all duration-400 ease-in-out
                                                ${openIndex === index ? "rotate-180 text-zinc-200" : "rotate-0"}group-hover:text-white`} />
                                    </button>

                                </div>
                            ))}
                        </div>
                    ))}
                </div>
                <div className="place-items-center">
                    {!showAll && filteredCertificates.length > 6 && (
                        <button onClick={() => setShowAll(true)}
                            className="w-125 h-14 py-2 mt-4 rounded-full border border-zinc-800 bg-zinc-950 flex flex-col items-center justify-center hover:border-zinc-900 hover:bg-zinc-900 hover:shadow-lg hover:shadow-zinc-700/35 transition-all duration-800 ease-out hover:scale-103">
                            View All
                            <FiChevronDown className="text-2xl" />
                        </button>
                    )}
                </div>
            </div>








            <div id="Contact" className="flex flex-row gap-6 border-0 p-10">

                <div className="flex flex-col flex-1 gap-6 ">

                    <h1 className="text-6xl font-bold">Contact Me</h1>

                    <div>
                        <p className="pt-2">Got an idea you'd like to bring to life? I'm always open to discussing possibilities and collaborating.</p>
                    </div>

                    <div className="flex flex-col gap-4">
                        <div className="font-semibold text-gray-200 border border-b-1 border-zinc-950 bg-zinc-950 rounded-br-full px-4 py-2 shadow-md hover:border-zinc-950 hover:bg-zinc-950 hover:shadow-zinc-500/10 transition-all duration-200 ease-in-out hover:scale-102">
                            <h2 className="px-6">Email </h2>
                            <h3 className="px-6">info.shaivi.26@gmail.com </h3>
                        </div>
                        <div className="font-semibold text-gray-200 border border-b-1 border-zinc-950 bg-zinc-950 rounded-br-full px-4 py-2 shadow-md hover:border-zinc-950 hover:bg-zinc-950 hover:shadow-zinc-500/10 transition-all duration-200 ease-in-out hover:scale-102">
                            <h2 className="px-6">Location </h2>
                            <h3 className="px-6">India, Punjab, Jalandhar</h3>
                        </div>
                    </div>

                    <div className=" flex flex-row space-x-6 mt-6 items-center">

                        <a href="https://linkedin.com/in/shaivi30" target="_blank" rel="noopener noreferrer"
                            className="border-1 border-zinc-950 bg-zinc-950 rounded-full px-6 py-4 shadow-md hover:border-zinc-900 hover:bg-zinc-900 hover:shadow-xl hover:shadow-zinc-700/35 transition-all duration-800 ease-in-out hover:scale-105">
                            <FaLinkedinIn size={32} />
                        </a>

                        <a href="https://github.com/iamshaivi" target="_blank" rel="noopener noreferrer"
                            className="border-1 border-zinc-950 bg-zinc-950 rounded-full px-6 py-4 shadow-md hover:border-zinc-900 hover:bg-zinc-900 hover:shadow-xl hover:shadow-zinc-700/35 transition-all duration-800 ease-in-out hover:scale-105">
                            <FaGithub size={32} />
                        </a>

                        <a href="https://x.com/Shaivi330143" target="_blank" rel="noopener noreferrer"
                            className="border-1 border-zinc-950 bg-zinc-950 rounded-full px-6 py-4 shadow-md hover:border-zinc-900 hover:bg-zinc-900 hover:shadow-xl hover:shadow-zinc-700/35 transition-all duration-800 ease-in-out hover:scale-105">
                            <FaXTwitter size={32} />
                        </a>

                        <a href="mailto:info.shaivi.26@gmail.com" target="_blank" rel="noopener noreferrer"
                            className="border-1 border-zinc-950 bg-zinc-950 rounded-full px-6 py-4 shadow-md hover:border-zinc-900 hover:bg-zinc-900 hover:shadow-xl hover:shadow-zinc-700/35 transition-all duration-800 ease-in-out hover:scale-105">
                            <SiGmail size={32} />
                        </a>
                    </div>

                </div>



                <div className="flex flex-col flex-1 gap-4 border shadow-md rounded-3xl px-6 py-4 m-2 bg-zinc-950 border-zinc-900 
                hover:border-zinc-900 hover:bg-zinc-950 hover:shadow-xl hover:shadow-zinc-700/10 transition-all duration-400 
                hover:scale-102 ease-in-out">

                    <div> <h1 className="text-4xl font-bold pb-4 pt-2 px-1.5">Send Your Details</h1> </div>

                    <div className="flex flex-row gap-6">
                        {/* Name */}
                        <div className="flex flex-1 items-center gap-4 border border-zinc-900 bg-zinc-950 rounded-l-full px-6 py-4 shadow-md hover:border-zinc-800 hover:bg-zinc-950 hover:shadow-lg hover:shadow-zinc-700/20 transition-all duration-300">
                            <FaUser className="text-zinc-400" />
                            <input type="text" placeholder="First Name"
                                /*value={formData.name} onChange={handleChange}*/
                                className="w-full bg-transparent outline-none placeholder:text-zinc-500" />
                        </div>

                        <div className="flex flex-1 items-center gap-4 border border-zinc-900 bg-zinc-950 rounded-r-full px-6 py-4 shadow-md hover:border-zinc-800 hover:bg-zinc-950 hover:shadow-lg hover:shadow-zinc-700/20 transition-all duration-300">

                            <input type="text" placeholder="Last Name"
                                /*value={formData.name} onChange={handleChange}*/
                                className="w-full bg-transparent outline-none placeholder:text-zinc-500" />
                        </div>
                    </div>

                    <div className="flex flex-row gap-6">

                        {/* Service/domain */}
                        <div className="flex flex-1 items-center gap-4 border border-zinc-900 bg-zinc-950 rounded-full px-6 py-4 shadow-md hover:border-zinc-800 hover:bg-zinc-950 hover:shadow-lg hover:shadow-zinc-700/20 transition-all duration-300">
                            <FaBriefcase className="text-zinc-400 text-xl" />
                            <input type="text" placeholder="Service/Domain"
                                /*value={formData.subject} onChange={handleChange}*/
                                className="w-full bg-transparent outline-none text-white placeholder:text-zinc-500" />
                        </div>

                        {/* Email */}
                        <div className="flex flex-1 items-center gap-4 border border-zinc-900 bg-zinc-950 rounded-full px-6 py-4 shadow-md hover:border-zinc-800 hover:bg-zinc-950 hover:shadow-lg hover:shadow-zinc-700/20 transition-all duration-300">
                            <FaEnvelope className="text-zinc-400 text-xl" />
                            <input type="email" placeholder="Email"
                                /*value={formData.email} onChange={handleChange}*/
                                className="w-full bg-transparent outline-none text-white placeholder:text-zinc-500" />
                        </div>

                    </div>

                    {/* Subject */}
                    <div className="flex items-center gap-4 border border-zinc-900 bg-zinc-950 rounded-full px-6 py-4 shadow-md hover:border-zinc-800 hover:bg-zinc-950 hover:shadow-lg hover:shadow-zinc-700/20 transition-all duration-300">
                        <FaBriefcase className="text-zinc-400 text-xl" />
                        <input type="text" placeholder="Subject"
                            /*value={formData.subject} onChange={handleChange}*/
                            className="w-full bg-transparent outline-none text-white placeholder:text-zinc-500" />
                    </div>

                    {/* Description */}
                    <div className="flex items-center gap-4 border border-zinc-900 bg-zinc-950 rounded-full px-6 py-4 shadow-md hover:border-zinc-800 hover:bg-zinc-950 hover:shadow-lg hover:shadow-zinc-700/20 transition-all duration-300">
                        <FaCommentDots className="text-zinc-400 text-xl" />
                        <textarea itemType="text" placeholder="Description"
                            /*value={formData.message} onChange={handleChange}*/
                            className="w-full bg-transparent outline-none text-white placeholder:text-zinc-500" />
                    </div>

                    {/* Send button */}
                    <button
                        /*onClick={() => console.log(formData)}*/
                        className="w-14 h-14 rounded-full border p-0.5 border-zinc-950 bg-zinc-950 flex items-center justify-center hover:border-zinc-900 hover:bg-zinc-900 hover:shadow-xl hover:shadow-zinc-700/35 transition-all duration-800 ease-out hover:scale-105">
                        <FaPaperPlane size={18} />
                    </button>

                </div>
            </div>

        </section>
    );
}