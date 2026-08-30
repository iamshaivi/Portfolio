// data/tools.ts

import { FaLinkedinIn, FaGithub, FaDiscord, FaTelegram, FaStackOverflow, FaMedium, FaBriefcase, FaBrain, FaDatabase } from "react-icons/fa";
import { FaCode, FaTools, FaChartLine, FaBroom, FaChartPie, FaTable, FaCalculator, FaWaveSquare, FaGitAlt, } from "react-icons/fa";
import { FaDocker, FaAws, FaSquareRootAlt, FaBookOpen, FaCloud, FaRobot, FaMagic, FaSearch } from "react-icons/fa";
import { FaUser, FaEnvelope, FaTag, FaCommentDots, FaPaperPlane } from "react-icons/fa";
import { SiLeetcode, SiCodechef, SiHashnode, SiDevdotto, SiKeras, SiScipy, SiGmail, SiMongodb, SiKaggle, SiExpress, SiFastapi, SiFlask, } from "react-icons/si";
import { SiGit, SiGithub, SiDocker, SiSelenium, SiFigma, SiAutodesk, SiVercel, SiNetlify, SiRender, SiHuggingface, SiJupyter, SiPostman, SiPycharm, SiCanva, SiMysql, SiNumpy, SiPandas, SiPlotly, SiScikitlearn, SiTensorflow, SiPytorch, SiStreamlit } from "react-icons/si";
import { FaXTwitter, FaChartArea, FaSpider, FaReact, FaNodeJs, FaBootstrap, } from "react-icons/fa6";
import { TbBrain, TbRobot, TbBulb, TbBinaryTree2, TbListDetails, TbPrompt, TbNetwork, TbChartDots3, TbBinaryTree, TbBoxMultiple, TbPackages, TbCube, TbServer, TbCloudComputing, TbWorldWww, TbSparkles, TbSpider, TbHierarchy3, TbTopologyStar3, TbMathFunction } from "react-icons/tb"
import { LuSearchCode, LuSquareTerminal, LuCloud, LuBot, LuChartScatter, LuMessageSquareText, LuChartColumn, LuChartSpline, LuLayoutDashboard, } from "react-icons/lu";
import { FiSearch, } from "react-icons/fi";
import { PiBrainBold, PiLightbulbFilamentBold, PiFunctionBold, PiChartBarBold, PiMathOperationsBold, PiTreeStructureBold, PiGraph, PiChartScatterBold, PiCloudArrowUpFill, } from "react-icons/pi";
import { RiChatVoiceLine, RiNodeTree, RiTerminalBoxLine, RiDashboardHorizontalFill, RiNextjsFill, RiTailwindCssFill, } from "react-icons/ri";
import { BsChatText, } from "react-icons/bs";
import { VscCode } from "react-icons/vsc";
import { BiBarChartAlt2, BiWorld, } from "react-icons/bi";
import { MdQueryStats, MdDashboard, MdCleaningServices } from "react-icons/md";
import { HiOutlineChartBar, HiOutlineSparkles, HiOutlineVariable, HiOutlineCheckBadge, HiOutlinePresentationChartBar } from "react-icons/hi2";

export const toolsCategories = [
    "All",
    "Development & DevOps",
    "AI & ML",
    "DS & Analytics",
    "Cloud & Deployment",
    "Database",
    "Others",
];

export const tools = [
    {
        id: 1,
        name: "Git",
        category: "Development & DevOps",
        icon: SiGit,
    },
    {
        id: 2,
        name: "GitHub",
        category: "Development & DevOps",
        icon: SiGithub,
    },
    {
        id: 3,
        name: "VS Code",
        category: "Development & DevOps",
        icon: VscCode,
    },
    {
        id: 4,
        name: "Ollama",
        category: "Development & DevOps",
    },
    {
        id: 5,
        name: "Docker",
        category: "Development & DevOps",
        icon: SiDocker,
    },
    {
        id: 6,
        name: "Selenium",
        category: "Development & DevOps",
        icon: SiSelenium,
    },
    {
        id: 7,
        name: "Power BI",
        category: "DS & Analytics",
        icon: BiBarChartAlt2,
    },

    {
        id: 8,
        name: "Tableau",
        category: "DS & Analytics",
        icon: PiChartBarBold,
    },

    {
        id: 9,
        name: "Figma",
        category: "Others",
        icon: SiFigma,
    },

    {
        id: 10,
        name: "Kaggle",
        category: "DS & Analytics",
        icon: SiKaggle,
    },

    {
        id: 11,
        name: "AutoCAD",
        category: "Others",
        icon: SiAutodesk,
    },

    {
        id: 12,
        name: "Vercel",
        category: "Cloud & Deployment",
        icon: SiVercel,
    },

    {
        id: 13,
        name: "Streamlit",
        category: "Cloud & Deployment",
        icon: SiStreamlit,
    },

    {
        id: 14,
        name: "Netlify",
        category: "Cloud & Deployment",
        icon: SiNetlify,
    },

    {
        id: 15,
        name: "Render",
        category: "Cloud & Deployment",
        icon: SiRender,
    },

    {
        id: 16,
        name: "Hugging Face Spaces",
        category: "Cloud & Deployment",
        icon: SiHuggingface,
    },

    {
        id: 17,
        name: "Jupyter Notebook",
        category: "DS & Analytics",
        icon: SiJupyter,
    },

    {
        id: 18,
        name: "Postman",
        category: "Development & DevOps",
        icon: SiPostman,
    },

    {
        id: 19,
        name: "PyCharm",
        category: "Development & DevOps",
        icon: SiPycharm,
    },

    {
        id: 20,
        name: "Canva",
        category: "Others",
        icon: SiCanva,
    },

    {
        id: 21,
        name: "MySQL Workbench",
        category: "Database",
        icon: SiMysql,
    },

    {
        id: 22,
        name: "MongoDB",
        category: "Database",
        icon: SiMongodb,
    },

    {
        id: 23,
        name: "NumPy",
        category: "DS & Analytics",
    },

    {
        id: 24,
        name: "Pandas",
        category: "DS & Analytics",
    },

    {
        id: 25,
        name: "Matplotlib",
        category: "DS & Analytics",
    },

    {
        id: 26,
        name: "OpenCV",
        category: "AI & ML",
    },

    {
        id: 27,
        name: "Seaborn",
        category: "DS & Analytics",
    },

    {
        id: 28,
        name: "Plotly",
        category: "DS & Analytics",
    },

    {
        id: 29,
        name: "Scikit-learn",
        category: "AI & ML",
    },

    {
        id: 30,
        name: "TensorFlow",
        category: "AI & ML",
    },

    {
        id: 31,
        name: "Keras",
        category: "AI & ML",
        icon: SiKeras,
    },

    {
        id: 32,
        name: "PyTorch",
        category: "AI & ML",
        icon: SiPytorch,
    },

    {
        id: 33,
        name: "SciPy",
        category: "DS & Analytics",
        icon: SiScipy,
    },

    {
        id: 34,
        name: "XGBoost",
        category: "AI & ML",
    },

    {
        id: 35,
        name: "LightGBM",
        category: "AI & ML",
    },

]