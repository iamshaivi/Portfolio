"use client";

import { useState, useEffect } from "react";

import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { FaFilter } from "react-icons/fa";

import { certificates, certificateCategories, } from "@/data/certificates";

export default function certificate() {

    const [show, setShow] = useState(true);

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

    return (
        <div id="Certificates" className="relative z-40 bg-zinc-950 flex flex-col border-0 border-b border-zinc-900 items-center justify-center py-20">
            <h2 className=" text-6xl font-bold text-gray-200 text-shadow-xs text-shadow-gray-100 mb-12 transition-transform duration-800 hover:scale-102">Certificates</h2>

            <div className="flex flex-row h-full gap-4 pb-4 mb-8 border-0">

                <button
                    className="w-14 h-14 rounded-full border pt-0.5 border-zinc-900 bg-zinc-950 flex items-center justify-center shadow-lg shadow-zinc-700/35 shrink-0"
                >
                    <FaFilter size={24} />
                </button>

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
                                ? "bg-zinc-950 border-zinc-900 text-white scale-[1.03]"
                                : "bg-zinc-950 border-zinc-900 text-zinc-400 hover:text-zinc-200 hover:scale-[1.02]"
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
                                        ? "max-h-95 opacity-100 mt-6"
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

                                            <div className="flex justify-between gap-2">
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
    );
}