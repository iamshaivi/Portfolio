import DonutChart from "./donut";
import LRadar from "./radar";
import Tool from "./tool";

import { FaLinkedinIn, FaGithub, FaDiscord, FaTelegram, FaStackOverflow, FaMedium, FaBriefcase, FaBrain, FaDatabase } from "react-icons/fa";
import { FaCode, FaTools, FaChartLine, FaBroom, FaChartPie, FaTable, FaCalculator, FaWaveSquare, FaGitAlt, } from "react-icons/fa";
import { FaDocker, FaAws, FaSquareRootAlt, FaBookOpen, FaCloud, FaRobot, FaMagic, FaSearch } from "react-icons/fa";
import { FaUser, FaEnvelope, FaTag, FaCommentDots, FaPaperPlane } from "react-icons/fa";
import { SiLeetcode, SiCodechef, SiHashnode, SiDevdotto, SiKeras, SiScipy, SiGmail, SiMongodb, SiKaggle, SiExpress, SiFastapi, SiFlask, } from "react-icons/si";
import { SiGit, SiGithub, SiDocker, SiSelenium, SiFigma, SiAutodesk, SiVercel, SiNetlify, SiRender, SiHuggingface, SiJupyter, SiPostman, SiPycharm, SiCanva, SiMysql, SiNumpy, SiPandas, SiPlotly, SiScikitlearn, SiTensorflow, SiPytorch, SiStreamlit} from "react-icons/si";
import { FaXTwitter, FaChartArea, FaSpider, FaReact, FaNodeJs, FaBootstrap, } from "react-icons/fa6";
import { TbBrain, TbRobot, TbBulb,TbBinaryTree2, TbListDetails, TbPrompt, TbNetwork, TbChartDots3, TbBinaryTree, TbBoxMultiple, TbPackages, TbCube, TbServer, TbCloudComputing, TbWorldWww, TbSparkles, TbSpider, TbHierarchy3, TbTopologyStar3, TbMathFunction } from "react-icons/tb"
import { LuSearchCode, LuSquareTerminal, LuCloud, LuBot, LuChartScatter, LuMessageSquareText, LuChartColumn, LuChartSpline, LuLayoutDashboard, } from "react-icons/lu";
import { FiSearch, } from "react-icons/fi";
import { PiBrainBold, PiLightbulbFilamentBold, PiFunctionBold, PiChartBarBold, PiMathOperationsBold, PiTreeStructureBold, PiGraph, PiChartScatterBold, PiCloudArrowUpFill, } from "react-icons/pi";
import { RiChatVoiceLine, RiNodeTree, RiTerminalBoxLine, RiDashboardHorizontalFill, RiNextjsFill, RiTailwindCssFill, } from "react-icons/ri";
import { BsChatText, } from "react-icons/bs"; 
import { VscCode } from "react-icons/vsc";
import { BiBarChartAlt2, BiWorld, } from "react-icons/bi";
import { MdQueryStats, MdDashboard, MdCleaningServices } from "react-icons/md";
import { HiOutlineChartBar, HiOutlineSparkles, HiOutlineVariable, HiOutlineCheckBadge, HiOutlinePresentationChartBar } from "react-icons/hi2";

export default function Skills() {

    const languages = [
        { name: "Python", color: "#06B6D4" },      // Cyan
        { name: "JavaScript", color: "#3B82F6" },  // Blue
        { name: "TypeScript", color: "#2563EB" },  // Deep Blue
        { name: "HTML5", color: "#8B5CF6" },       // Purple
        { name: "CSS3", color: "#EC4899" },        // Pink
        { name: "C", color: "#EF4444" },           // Red
        { name: "C++", color: "#F97316" },         // Orange
        { name: "Java", color: "#FACC15" },        // Lime
        { name: "SQL", color: "#22C55E" },         // Green
    ];

    return (
        <section id="Skills" className="relative z-20 bg-zinc-900/35 border-b border-zinc-900 px-10 py-20" >
            <div className="mx-auto max-screen">
                <h1 className="text-6xl font-bold text-gray-200 mb-10"> Skills & Expertise </h1>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-star">
                    {/*Language*/}
                    <div className="flex flex-col gap-6">
                        <DonutChart title="Languages" data={languages} />

                        {/*Data Science*/}
                        <div className="flex flex-col gap-2 border shadow-md rounded-3xl px-6 py-4 m-2 bg-zinc-950 border-zinc-950 
                                 hover:border-zinc-950 hover:bg-zinc-950 hover:shadow-zinc-600/10 transition-all duration-200 ease-in-out ">

                            <h1 className="text-xl">Data Science</h1>

                            <div className="grid grid-cols-2 gap-2" >

                                <div className="flex flex-row gap-4 border border-zinc-900 bg-zinc-950 rounded-full px-4 py-2">
                                    <LuChartSpline className="text-zinc-200 text-lg" /> <p className="text-zinc-200">Data Analysis</p>
                                </div>

                                <div className="flex flex-row gap-4 border border-zinc-900 bg-zinc-950 rounded-full px-4 py-2">
                                    <PiFunctionBold className="text-zinc-200 text-lg" /> <p className="text-zinc-200">Statistical Analysis</p>
                                </div>

                                <div className="flex flex-row gap-4 border border-zinc-900 bg-zinc-950 rounded-full px-4 py-2">
                                    <BiBarChartAlt2 className="text-zinc-200 text-lg" /> <p className="text-zinc-200">Data Visualization</p>
                                </div>

                                <div className="flex flex-row gap-4 border border-zinc-900 bg-zinc-950 rounded-full px-4 py-2">
                                    <RiDashboardHorizontalFill className="text-zinc-200 text-lg" /> <p className="text-zinc-200">Dashboard Building</p>
                                </div>

                                <div className="flex flex-row gap-4 border border-zinc-900 bg-zinc-950 rounded-full px-4 py-2">
                                    <PiTreeStructureBold className="text-zinc-200 text-lg" /> <p className="text-zinc-200">Data Modeling</p>
                                </div>

                                <div className="flex flex-row gap-4 border border-zinc-900 bg-zinc-950 rounded-full px-4 py-2">
                                    <TbSparkles className="text-zinc-200 text-lg font-extralight" /> <p className="text-zinc-200">Data Cleaning</p>
                                </div>

                                <div className="flex flex-row gap-4 border border-zinc-900 bg-zinc-950 rounded-full px-4 py-2">
                                    <TbSpider className="text-zinc-200 text-lg" /> <p className="text-zinc-200">Web Scraping</p>
                                </div>

                                <div className="flex flex-row gap-4 border border-zinc-900 bg-zinc-950 rounded-full px-4 py-2">
                                    <HiOutlinePresentationChartBar className="text-zinc-200 text-lg" /> <p className="text-zinc-200">Power BI</p>
                                </div>

                                <div className="flex flex-row gap-4 border border-zinc-900 bg-zinc-950 rounded-full px-4 py-2">
                                    <TbChartDots3 className="text-zinc-200 text-lg" /> <p className="text-zinc-200">Tableau</p>
                                </div>

                            </div>

                        </div>

                    </div>

                    <div className="flex flex-col gap-6">
                        <LRadar />

                        {/*Cloud & Systems*/}
                        <div className="flex flex-col gap-2 border shadow-md rounded-3xl px-6 py-4 m-2 bg-zinc-950 border-zinc-950 
                                 hover:border-zinc-950 hover:bg-zinc-950 hover:shadow-zinc-600/10 transition-all duration-200 ease-in-out ">

                            <h1 className="text-xl">Cloud & Systems</h1>

                            <div className="grid grid-cols-2 gap-2">

                                <div className="flex flex-row gap-4 border border-zinc-900 bg-zinc-950 rounded-full px-4 py-2">
                                    <TbServer className="text-zinc-200 text-lg" /> <p className="text-zinc-200">Cloud Infrastructure</p>
                                </div>

                                <div className="flex flex-row gap-4 border border-zinc-900 bg-zinc-950 rounded-full px-4 py-2">
                                    <PiGraph className="text-zinc-200 text-lg" /> <p className="text-zinc-200">Distributed Systems</p>
                                </div>

                                <div className="flex flex-row gap-4 border border-zinc-900 bg-zinc-950 rounded-full px-4 py-2">
                                    <TbCloudComputing className="text-zinc-200 text-lg" /> <p className="text-zinc-200">Cloud Services</p>
                                </div>

                                <div className="flex flex-row gap-4 border border-zinc-900 bg-zinc-950 rounded-full px-4 py-2">
                                    <TbCube className="text-zinc-200 text-lg" /> <p className="text-zinc-200">Virtualization</p>
                                </div>

                            </div>

                        </div>

                    </div>

                    <div className="flex flex-col gap-6">
                        {/*AI & ML*/}
                        <div className="flex flex-col gap-2 border shadow-md rounded-3xl px-6 py-4 m-2 bg-zinc-950 border-zinc-950 
                                 hover:border-zinc-950 hover:bg-zinc-950 hover:shadow-zinc-600/10 transition-all duration-200 ease-in-out ">

                            <div className="flex flex-row gap-4 px-1">
                                <h1 className="text-xl">AI & Machine Learning</h1>
                            </div>

                            <div className="flex flex-row gap-4 border border-zinc-900 bg-zinc-950 rounded-full px-4 py-2">
                                <LuMessageSquareText className="text-zinc-200 text-lg" /> <p className="text-zinc-200">Natural Language Processing (NLP)</p>
                            </div>

                            <div className="flex flex-row gap-4 border border-zinc-900 bg-zinc-950 rounded-full px-4 py-2">
                                <LuBot className="text-zinc-200 text-lg" /> <p className="text-zinc-200">AI Agents</p>
                            </div>

                            <div className="flex flex-row gap-4 border border-zinc-900 bg-zinc-950 rounded-full px-4 py-2">
                                <LuSquareTerminal className="text-zinc-200 text-lg" /> <p className="text-zinc-200">Prompt Engineering</p>
                            </div>

                            <div className="flex flex-row gap-4 border border-zinc-900 bg-zinc-950 rounded-full px-4 py-2">
                                <TbBinaryTree className="text-zinc-200 text-lg" /> <p className="text-zinc-200">Search Algorithms</p>
                            </div>

                        </div>


                        {/*Frameworks & Technologies*/}
                        <div className="flex flex-col gap-2 border shadow-md rounded-3xl px-6 py-4 m-2 bg-zinc-950 border-zinc-950 
                                 hover:border-zinc-950 hover:bg-zinc-950 hover:shadow-zinc-600/10 transition-all duration-200 ease-in-out ">

                            <h1 className="text-xl">Frameworks & Technologies</h1>

                            <div className="grid grid-cols-2 gap-2">

                                <div className="flex flex-row gap-4 border border-zinc-900 bg-zinc-950 rounded-full px-4 py-2">
                                    <FaReact className="text-cyan-400 text-lg" /> <p className="text-zinc-200">React.js</p>
                                </div>

                                <div className="flex flex-row gap-4 border border-zinc-900 bg-zinc-950 rounded-full px-4 py-2">
                                    <RiNextjsFill className="text-white text-lg" /> <p className="text-zinc-200">Next.js</p>
                                </div>

                                <div className="flex flex-row gap-4 border border-zinc-900 bg-zinc-950 rounded-full px-4 py-2">
                                    <FaNodeJs className="text-green-500 text-lg" /> <p className="text-zinc-200">Node.js</p>
                                </div>

                                <div className="flex flex-row gap-4 border border-zinc-900 bg-zinc-950 rounded-full px-4 py-2">
                                    <RiTailwindCssFill className="text-sky-400 text-lg" /> <p className="text-zinc-200">Tailwind CSS</p>
                                </div>

                                <div className="flex flex-row gap-4 border border-zinc-900 bg-zinc-950 rounded-full px-4 py-2">
                                    <FaBootstrap className="text-violet-500 text-lg" /> <p className="text-zinc-200">Bootstrap</p>
                                </div>

                                <div className="flex flex-row gap-4 border border-zinc-900 bg-zinc-950 rounded-full px-4 py-2">
                                    <SiExpress className="text-emerald-400 text-lg" /> <p className="text-zinc-200">Express.js</p>
                                </div>

                                <div className="flex flex-row gap-4 border border-zinc-900 bg-zinc-950 rounded-full px-4 py-2">
                                    <SiFastapi className="text-zinc-200 text-lg" /> <p className="text-zinc-200">FastAPI</p>
                                </div>

                                <div className="flex flex-row gap-4 border border-zinc-900 bg-zinc-950 rounded-full px-4 py-2">
                                    <SiFlask className="text-zinc-300 text-lg" /> <p className="text-zinc-200">Flask</p>
                                </div>

                            </div>

                        </div>

                    </div>


                </div>

            </div>

            <div className="flex mx-auto max-fit border-0 rounded-3xl p-2">
                {/*Mathematics*/}
                <div className="flex flex-1 flex-col gap-2 border shadow-md rounded-3xl px-6 py-4 m-2 bg-zinc-950 border-zinc-950 
                                 hover:border-zinc-950 hover:bg-zinc-950 hover:shadow-zinc-600/10 transition-all duration-200 ease-in-out ">

                    <div className="flex flex-row gap-4 px-1">
                        <TbMathFunction className="text-zinc-200 text-lg" />
                        <h1 className="text-xl">Mathematics</h1>
                    </div>

                    <div className="flex flex-col gap-2">

                        <div className="flex flex-row gap-4 border border-zinc-900 bg-zinc-950 rounded-full px-4 py-2">
                            <p className="text-zinc-200">Linear Algebra</p>
                        </div>

                        <div className="flex flex-row gap-4 border border-zinc-900 bg-zinc-950 rounded-full px-4 py-2">
                            <p className="text-zinc-200">Calculus</p>
                        </div>

                        {/*<div className="flex flex-row gap-4 border border-zinc-900 bg-zinc-950 rounded-full px-4 py-2">
                            <p className="text-zinc-200">Multivariable Calculus</p>
                        </div>

                        <div className="flex flex-row gap-4 border border-zinc-900 bg-zinc-950 rounded-full px-4 py-2">
                            <p className="text-zinc-200">Differential Equations</p>
                        </div>

                        <div className="flex flex-row gap-4 border border-zinc-900 bg-zinc-950 rounded-full px-4 py-2">
                            <p className="text-zinc-200">Vector Calculus</p>
                        </div>*/}

                        <div className="flex flex-row gap-4 border border-zinc-900 bg-zinc-950 rounded-full px-4 py-2">
                            <p className="text-zinc-200">Optimization</p>
                        </div>

                        <div className="flex flex-row gap-4 border border-zinc-900 bg-zinc-950 rounded-full px-4 py-2">
                            <p className="text-zinc-200">Probability & Statisticss</p>
                        </div>

                    </div>

                </div>

                {/*Concepts*/}
                <div className="flex flex-1 flex-col gap-2 border shadow-md rounded-3xl px-6 py-4 m-2 bg-zinc-950 border-zinc-950 
                                 hover:border-zinc-950 hover:bg-zinc-950 hover:shadow-zinc-600/10 transition-all duration-200 ease-in-out ">

                    <div className="flex flex-row gap-4 px-1">
                        <TbListDetails className="text-zinc-200 text-lg" />
                        <h1 className="text-xl">Core CS</h1>
                    </div>

                    <div className="flex flex-col gap-2">

                        <div className="flex flex-row gap-4 border border-zinc-900 bg-zinc-950 rounded-full px-4 py-2">
                            <p className="text-zinc-200">Object-Oriented Programming (OOP)</p>
                        </div>

                        <div className="flex flex-row gap-4 border border-zinc-900 bg-zinc-950 rounded-full px-4 py-2">
                            <p className="text-zinc-200">Data Structures & Algorithms (DSA)</p>
                        </div>

                        <div className="flex flex-row gap-4 border border-zinc-900 bg-zinc-950 rounded-full px-4 py-2">
                            <p className="text-zinc-200">Database Management Systems (DBMS)</p>
                        </div>

                        <div className="flex flex-row gap-4 border border-zinc-900 bg-zinc-950 rounded-full px-4 py-2">
                            <p className="text-zinc-200">Operating Systems</p>
                        </div>

                        <div className="flex flex-row gap-4 border border-zinc-900 bg-zinc-950 rounded-full px-4 py-2">
                            <p className="text-zinc-200">Computer Networks</p>
                        </div>

                        <div className="flex flex-row gap-4 border border-zinc-900 bg-zinc-950 rounded-full px-4 py-2">
                            <p className="text-zinc-200">System Design</p>
                        </div>

                    </div>

                </div>
            </div>

            <Tool/>

        </section >
    );
}