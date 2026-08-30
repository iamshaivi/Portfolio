"use client";

import { useState } from "react";

import { tools, toolsCategories } from "@/data/tools";

import { FaFilter } from "react-icons/fa";

export default function Tool() {

    const [selectedCategory, setSelectedCategory] = useState("All");
    const [showFilters, setShowFilters] = useState(false);

    // Filter tools based on the selected category
    const filteredTools =
        selectedCategory === "All"
            ? tools
            : tools.filter((tool) => tool.category === selectedCategory);

    return (
        <div className="flex flex-col gap-6 pt-6 mx-auto max-fit border rounded-3xl bg-zinc-950 border-zinc-950 m-4 p-2">
            <div className="flex items-center w-full mb-8">

                <h2 className="text-xl text-zinc-200 shrink-0 pl-2.5">
                    Tools • Libraries • SDKs
                </h2>

                <div className="ml-auto flex items-center gap-2 min-w-0 ">

                    <div
                        className={`flex items-center gap-2 overflow-x-auto overflow-y-hidden scrollbar-hide transition-all duration-1000 ease-in-out ${showFilters
                                ? "max-w-[1000px] opacity-100"
                                : "max-w-0 opacity-0"
                            }`}
                    >
                        {toolsCategories
                            .filter((category) => category !== "All")
                            .map((category) => (
                                <button
                                    key={category}
                                    onClick={() => setSelectedCategory(category)}
                                    className={`whitespace-nowrap px-3 py-1.5 rounded-full text-sm border shrink-0 transition-all duration-200 ${selectedCategory === category
                                            ? "border-zinc-900 bg-zinc-950 text-zinc-100"
                                            : "border-zinc-900 bg-zinc-950 text-zinc-400 hover:text-zinc-200 hover:border-zinc-700"
                                        }`}
                                >
                                    {category}
                                </button>
                            ))}
                    </div>


                    {/* FILTER BUTTON */}
                    <button
                        onClick={() => setShowFilters(!showFilters)}
                        className="w-10 h-10 rounded-full border pt-0.5 border-zinc-950 bg-zinc-950 flex items-center justify-center shadow-lg shadow-zinc-700/35 transition-all duration-300 ease-out hover:scale-105 shrink-0"
                    >
                        <FaFilter size={18} />
                    </button>


                    {/* ALL */}
                    <button
                        onClick={() => setSelectedCategory("All")}
                        className={`whitespace-nowrap px-3 py-1.5 rounded-full text-sm border shrink-0 transition-all duration-200 ${selectedCategory === "All"
                                ? "border-zinc-900 bg-zinc-950 text-zinc-100"
                                : "border-zinc-900 bg-zinc-950 text-zinc-400 hover:text-zinc-200 hover:border-zinc-700"
                            }`}
                    >
                        All
                    </button>

                </div>
            </div>

            {/* TOOL PILLS */}
            <div className="flex flex-wrap gap-3">
                {filteredTools.map((tool) => {
                    const Icon = tool.icon;

                    return (
                        <div
                            key={tool.name}
                            className="flex flex-row items-center gap-4 border border-zinc-900 bg-zinc-950 rounded-full px-4 py-2"
                        >
                            {/* Only show icon if the tool has one */}
                            {Icon && (
                                <Icon className="text-zinc-200 text-lg" />
                            )}

                            <p className="text-zinc-200">
                                {tool.name}
                            </p>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}