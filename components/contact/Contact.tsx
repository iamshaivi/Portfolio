"use client";

import { FaLinkedinIn, FaGithub, FaBriefcase, } from "react-icons/fa";
import { FaUser, FaEnvelope, FaCommentDots, FaPaperPlane } from "react-icons/fa";
import { SiGmail, } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";
import { useState } from "react";

export default function Footer() {

    const [description, setDescription] = useState("");
    const [descriptionFocused, setDescriptionFocused] = useState(false);

    return (
        <section className="">
            <div id="Contact" className="relative z-50 bg-zinc-950 flex flex-row gap-6 border-0 p-10">

                <div className="flex flex-col flex-1 gap-6 ">

                    <h1 className="text-6xl font-bold">Contact Me</h1>

                    <div>
                        <p className="pt-2">Got an idea you'd like to bring to life? I'm always open to discussing possibilities and collaborating.</p>
                    </div>

                    <div className="flex flex-col gap-4">
                        <div className="font-semibold text-gray-300 border-0 ">
                            <h2 className="px-6">Email </h2>
                            <h3 className="px-6">info.shaivi.26@gmail.com </h3>
                        </div>
                        <div className="font-semibold text-gray-300 border-0">
                            <h2 className="px-6">Location </h2>
                            <h3 className="px-6">India, Punjab, Jalandhar</h3>
                        </div>
                    </div>

                    <div className=" flex flex-row space-x-6 mt-6 items-center">

                        <a href="https://linkedin.com/in/shaivi30" target="_blank" rel="noopener noreferrer"
                            className="border border-zinc-950 bg-zinc-950 rounded-full px-6 py-4 shadow-md hover:border-zinc-900 hover:bg-zinc-900 hover:shadow-xl hover:shadow-zinc-700/35 transition-all duration-800 ease-in-out hover:scale-105">
                            <FaLinkedinIn size={32} />
                        </a>

                        <a href="https://github.com/iamshaivi" target="_blank" rel="noopener noreferrer"
                            className="border border-zinc-950 bg-zinc-950 rounded-full px-6 py-4 shadow-md hover:border-zinc-900 hover:bg-zinc-900 hover:shadow-xl hover:shadow-zinc-700/35 transition-all duration-800 ease-in-out hover:scale-105">
                            <FaGithub size={32} />
                        </a>

                        <a href="https://x.com/Shaivi330143" target="_blank" rel="noopener noreferrer"
                            className="border    border-zinc-950 bg-zinc-950 rounded-full px-6 py-4 shadow-md hover:border-zinc-900 hover:bg-zinc-900 hover:shadow-xl hover:shadow-zinc-700/35 transition-all duration-800 ease-in-out hover:scale-105">
                            <FaXTwitter size={32} />
                        </a>

                        <a href="mailto:info.shaivi.26@gmail.com" target="_blank" rel="noopener noreferrer"
                            className="border    border-zinc-950 bg-zinc-950 rounded-full px-6 py-4 shadow-md hover:border-zinc-900 hover:bg-zinc-900 hover:shadow-xl hover:shadow-zinc-700/35 transition-all duration-800 ease-in-out hover:scale-105">
                            <SiGmail size={32} />
                        </a>
                    </div>

                </div>



                <div className="relative flex flex-col flex-1 gap-4 border shadow-md rounded-3xl px-6 py-4 m-2 bg-zinc-950 border-zinc-900 
                        hover:border-zinc-900 hover:bg-zinc-950 hover:shadow-xl hover:shadow-zinc-700/10 transition-all duration-400 
                        hover:scale-102 ease-in-out">

                    <div> <h1 className="text-4xl font-bold pb-4 pt-2 px-1.5">Send Your Details</h1> </div>

                    <div className="flex flex-row gap-6">
                        {/* Name */}
                        <div className="flex flex-1 items-center gap-4 border border-zinc-900 bg-zinc-950 rounded-l-full px-6 py-4 shadow-md hover:border-zinc-800 hover:bg-zinc-950 hover:shadow-lg hover:shadow-zinc-700/20 transition-all duration-300">
                            <FaUser className="text-zinc-400" />
                            <input type="text" placeholder="First Name"
                                className="w-full bg-transparent outline-none placeholder:text-zinc-500" />
                        </div>

                        <div className="flex flex-1 items-center gap-4 border border-zinc-900 bg-zinc-950 rounded-r-full px-6 py-4 shadow-md hover:border-zinc-800 hover:bg-zinc-950 hover:shadow-lg hover:shadow-zinc-700/20 transition-all duration-300">

                            <input type="text" placeholder="Last Name"
                                className="w-full bg-transparent outline-none placeholder:text-zinc-500" />
                        </div>
                    </div>

                    <div className="flex flex-row gap-6">

                        {/* Service/domain */}
                        <div className="flex flex-1 items-center gap-4 border border-zinc-900 bg-zinc-950 rounded-full px-6 py-4 shadow-md hover:border-zinc-800 hover:bg-zinc-950 hover:shadow-lg hover:shadow-zinc-700/20 transition-all duration-300">
                            <FaBriefcase className="text-zinc-400 text-xl" />
                            <input type="text" placeholder="Service/Domain"
                                className="w-full bg-transparent outline-none text-white placeholder:text-zinc-500" />
                        </div>

                        {/* Email */}
                        <div className="flex flex-1 items-center gap-4 border border-zinc-900 bg-zinc-950 rounded-full px-6 py-4 shadow-md hover:border-zinc-800 hover:bg-zinc-950 hover:shadow-lg hover:shadow-zinc-700/20 transition-all duration-300">
                            <FaEnvelope className="text-zinc-400 text-xl" />
                            <input type="email" placeholder="Email"
                                className="w-full bg-transparent outline-none text-white placeholder:text-zinc-500" />
                        </div>

                    </div>

                    {/* Subject */}
                    <div className="flex items-center gap-4 border border-zinc-900 bg-zinc-950 rounded-full px-6 py-4 shadow-md hover:border-zinc-800 hover:bg-zinc-950 hover:shadow-lg hover:shadow-zinc-700/20 transition-all duration-300">
                        <FaBriefcase className="text-zinc-400 text-xl" />
                        <input type="text" placeholder="Subject"
                            className="w-full bg-transparent outline-none text-white placeholder:text-zinc-500" />
                    </div>

                    {/* Description */}
                    <div className="relative h-16 z-30">

                        <div className={` absolute left-0 right-0 bottom-0 flex items-start gap-4 border bg-zinc-950 px-5 py-4 shadow-md
                            ${descriptionFocused
                                ? "h-38 rounded-3xl border-zinc-800 shadow-xl shadow-zinc-700/20"
                                : "h-16 rounded-full border-zinc-900 hover:border-zinc-800 hover:shadow-lg hover:shadow-zinc-700/20"
                            }
                            `}
                        >

                            <FaCommentDots className="text-zinc-400 text-xl mt-1 shrink-0" />

                            <textarea
                                value={description}
                                onChange={(e) => {
                                    const words = e.target.value
                                        .trim()
                                        .split(/\s+/)
                                        .filter(Boolean);

                                    if (words.length <= 60) {
                                        setDescription(e.target.value);
                                    }
                                }}
                                onFocus={() => setDescriptionFocused(true)}
                                onBlur={() => setDescriptionFocused(false)}
                                placeholder="Tell me about your idea..."
                                className={` w-full resize-none overflow-hidden border-0 outline-none bg-transparent text-zinc-200 
                                placeholder:text-zinc-500 leading-6 ${descriptionFocused ? "h-30" : "h-6"}
                                `}
                            />

                            <div className="text-xs text-zinc-500 text-right mt-1">
                                {description.trim() ? description.trim().split(/\s+/).length : 0}/60 words
                            </div>

                        </div>


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