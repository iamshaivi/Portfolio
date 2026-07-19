import { FaLinkedinIn, FaGithub, FaDiscord, FaTelegram, FaStackOverflow, FaMedium } from "react-icons/fa";
import { FaUser, FaEnvelope, FaTag, FaCommentDots, FaPaperPlane } from "react-icons/fa";
import { SiLeetcode, SiCodechef, SiHashnode, SiDevdotto, SiGmail } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";

export default function Contact() {
    return (
        <section className="min-h-screen px-12 py-20 flex flex-row">
            <div className="flex flex-col flex-1 gap-6 border-0 p-10">
                <div><h1 className="text-6xl font-bold">Contact Me</h1></div>
                <div> <p className="">I'm a Computer Science student exploring data science, machine learning, and full-stack development. I'm currently open to opportunities to learn by building impactful projects.</p></div>

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

            <div className="flex flex-col flex-1 gap-4 border shadow-md rounded-3xl px-6 py-4 m-2 bg-zinc-950 border-zinc-900 hover:border-zinc-900 hover:bg-zinc-950 hover:shadow-xl hover:shadow-zinc-700/10 transition-all duration-400 hover:scale-102 ease-in-out">
                <div> <h1 className="text-4xl font-bold pb-4 pt-2 px-1.5">Send Your Details</h1> </div>
                {/* Name */}
                <div className="flex items-center gap-4 border border-zinc-800 bg-zinc-950 rounded-full px-6 py-4 shadow-md hover:border-zinc-800 hover:bg-zinc-950 hover:shadow-lg hover:shadow-zinc-700/20 transition-all duration-300">
                    <FaUser className="text-zinc-400" />
                    <input type="text" placeholder="Name"
                        /*value={formData.name} onChange={handleChange}*/
                        className="w-full bg-transparent outline-none placeholder:text-zinc-500" />
                </div>

                {/* Email */}

                <div className="flex items-center gap-4 border border-zinc-800 bg-zinc-950 rounded-full px-6 py-4 shadow-md hover:border-zinc-800 hover:bg-zinc-950 hover:shadow-lg hover:shadow-zinc-700/20 transition-all duration-300">
                    <FaEnvelope className="text-zinc-400 text-xl" />
                    <input type="email" placeholder="Email"
                        /*value={formData.email} onChange={handleChange}*/
                        className="w-full bg-transparent outline-none text-white placeholder:text-zinc-500" />
                </div>

                {/* Subject */}
                <div className="flex items-center gap-4 border border-zinc-800 bg-zinc-950 rounded-full px-6 py-4 shadow-md hover:border-zinc-800 hover:bg-zinc-950 hover:shadow-lg hover:shadow-zinc-700/20 transition-all duration-300">
                    <FaTag className="text-zinc-400 text-xl" />
                    <input type="text" placeholder="Subject"
                        /*value={formData.subject} onChange={handleChange}*/
                        className="w-full bg-transparent outline-none text-white placeholder:text-zinc-500" />
                </div>

                {/* Message */}
                <div className="flex items-center gap-4 border border-zinc-800 bg-zinc-950 rounded-full px-6 py-4 shadow-md hover:border-zinc-800 hover:bg-zinc-950 hover:shadow-lg hover:shadow-zinc-700/20 transition-all duration-300">
                    <FaCommentDots className="text-zinc-400 text-xl" />
                    <input type="text" placeholder="Message"
                        /*value={formData.message} onChange={handleChange}*/
                        className="w-full bg-transparent outline-none text-white placeholder:text-zinc-500" />
                </div>

                {/* Send button */}
                <button
                    /*onClick={() => console.log(formData)}*/
                    className="w-14 h-14 rounded-full border p-0.5 border-zinc-900 bg-zinc-950 flex items-center justify-center hover:border-zinc-800 hover:bg-zinc-900 hover:shadow-xl hover:shadow-zinc-700/35 transition-all duration-800 ease-out hover:scale-105">
                    <FaPaperPlane size={18} />
                </button>

            </div>
        </section>
    )

};