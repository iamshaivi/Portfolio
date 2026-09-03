"use client"
import { useState, useEffect } from "react";

import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { FaFilter } from "react-icons/fa";

import { projects, projectsCategories } from "@/data/projects";

export default function Projects() {

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

    return (
        <div id="Projects" className="relative z-30 bg-zinc-950 flex flex-col border-b border-zinc-900/95 items-center justify-center py-20">

            <h2 className="text-6xl font-bold text-gray-200 text-shadow-xs text-shadow-gray-100 mb-12 transition-transform duration-800 hover:scale-102">
                Projects
            </h2>

            {/* Categories */}
            <div className="flex flex-row h-full gap-4 pb-4 mb-8">

                <button
                    className="w-14 h-14 rounded-full border pt-0.5 border-zinc-900 bg-zinc-950 flex items-center justify-center shadow-lg shadow-zinc-700/35 shrink-0"
                >
                    <FaFilter size={24} />
                </button>

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
                                ? "bg-zinc-950 border-zinc-900 text-white scale-[1.03]"
                                : "bg-zinc-950 border-zinc-900 text-zinc-400 hover:text-zinc-200 hover:scale-[1.02]"
                            }`}>
                        {category}
                    </button>

                ))}

            </div>

            {/* Cards */}
            <div className="grid grid-cols-3 gap-8 items-start m-5">

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
                                        ? "max-h-[700px] opacity-100 mt-6"
                                        : "max-h-0 opacity-0"
                                    }`}>

                                    <div className="space-y-2">

                                        <div className="flex gap-2">
                                            <span className="text-zinc-500">Category</span>
                                            <span>{project.category}</span>
                                        </div>

                                        <p className="text-sm leading-6 text-zinc-300 mt-4">
                                            {project.description}
                                        </p>

                                        <div className="flex justify-between gap-2">
                                            <span className="text-zinc-500">Skills</span>
                                            <span>
                                                {project.skills.join(" • ")}
                                            </span>


                                        </div>

                                        <div className="flex flex-row gap-4 mt-4">
                                            <div className="mr-32">
                                                {project.GithubRepo && (
                                                    <a
                                                        href={project.GithubRepo}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="inline-block border border-zinc-800 rounded-lg px-4 py-2 hover:bg-white hover:text-black transition"
                                                    >
                                                        View Repository
                                                    </a>
                                                )}
                                            </div>

                                            <div className="">
                                                {project.verifyLink && (
                                                    <a
                                                        href={project.verifyLink}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="inline-block border border-zinc-800 rounded-lg px-4 py-2 hover:bg-white hover:text-black transition"
                                                    >
                                                        Live Demo ↗
                                                    </a>
                                                )}
                                            </div>
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
    );
}