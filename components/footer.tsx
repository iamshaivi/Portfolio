import { FaMedium, FaLinkedinIn, FaDiscord,} from "react-icons/fa";
import { SiHashnode, SiDevdotto, } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
    return (
        <footer className="border-t border-zinc-800">
            <div className="columns-3 flex flex-row gap-4 py-4">
                <div className="flex flex-2 flex-col gap-2 mx-4 px-2 py-4 border-0 ">
                    <div className="flex flex-row gap-4 py-4">
                        <img className="h-8 w-8 float-right rounded-full overflow-hidden  object-cover" src="Img.jpg" alt="Image" />
                        <h1 className="text-2xl">Shaivi</h1>
                    </div>
                    <p className="text-xl text-zinc-300">Second year student Majoring in Data Science and Machine Learning </p>
                </div>

                <div className="flex flex-1 flex-col mx-4 px-2 py-4 gap-2 border-0 ">
                    <h1 className="text-lg">Quick Links</h1>
                    <div className="flex flex-col py-4">
                        <ul className="flex flex-col gap-1">
                            <li> <a href="#Home" className="text-lg  text-zinc-300">Home</a></li>
                            <li> <a href="#About Me" className="text-lg text-zinc-300">About</a></li>
                            <li> <a href="#Skills" className="text-lg text-zinc-300">Skills</a></li>
                            <li> <a href="#Projects" className="text-lg text-zinc-300">Projects</a></li>
                            <li> <a href="#Certificates" className="text-lg text-zinc-300">Certificates</a></li>
                            <li> <a href="#Contact" className="text-lg text-zinc-300">Contact</a></li>
                        </ul>
                    </div>
                </div>

                <div className="flex flex-1 flex-col py-4 gap-2">
                    <h1 className="text-lg">Explore</h1>
                    <div className="flex flex-col py-4">
                        <ul className="flex flex-col gap-1">
                            <li> <a href="https://leetcode.com/Shaivi798" className="text-lg text-zinc-300">LeetCode</a></li>
                            <li> <a href="https://codeforces.com/profile/Shaivi798" className="text-lg text-zinc-300">CodeForce</a></li>
                            <li> <a href="https://codechef.com/users/shaivi_798" className="text-lg text-zinc-300">CodeChef</a></li>
                            <li> <a href="https://stackoverflow.com/users/31959671" className="text-lg text-zinc-300">Stack Overflow</a></li>
                            <li> <a href="https://github.com/iamshaivi" className="text-lg text-zinc-300">GitHub</a></li>
                        </ul>
                    </div>

                </div>

                <div className="flex flex-1 flex-col py-4">
                    <h1 className="text-lg text-zinc-300">Blogs</h1>
                    <div className=" flex flex-row space-x-6">

                        <a href="https://dev.to/shaivi_798" target="_blank" rel="noopener noreferrer"
                            className="border border-zinc-950 bg-zinc-950 rounded-full px-4 py-2.5 shadow-md hover:border-zinc-900 hover:bg-zinc-900 hover:shadow-lg hover:shadow-zinc-700/35 transition-all duration-800 ease-in-out hover:scale-102">
                            <SiDevdotto size={24} />
                        </a>
                        <a href="https://hashnode.com/@shaivi" target="_blank" rel="noopener noreferrer"
                            className="border border-zinc-950 bg-zinc-950 rounded-full px-4 py-2.5 shadow-md hover:border-zinc-900 hover:bg-zinc-900 hover:shadow-lg hover:shadow-zinc-700/35 transition-all duration-800 ease-in-out hover:scale-102">
                            <SiHashnode size={24} />
                        </a>
                        <a href="https://medium.com/@shaivi2453" target="_blank" rel="noopener noreferrer"
                            className="border border-zinc-950 bg-zinc-950 rounded-full px-4 py-2.5 shadow-md hover:border-zinc-900 hover:bg-zinc-900 hover:shadow-lg hover:shadow-zinc-700/35 transition-all duration-800 ease-in-out hover:scale-102">
                            <FaMedium size={24} />
                        </a>
                    </div>

                    <h1 className="text-lg text-zinc-300 mt-2">Follow</h1>
                    <div className=" flex flex-row space-x-6">

                        <a href="https://linkedin.com/in/shaivi30" target="_blank" rel="noopener noreferrer"
                            className="border border-zinc-950 bg-zinc-950 rounded-full px-4 py-2.5 shadow-md hover:border-zinc-900 hover:bg-zinc-900 hover:shadow-xl hover:shadow-zinc-700/35 transition-all duration-800 ease-in-out hover:scale-105">
                            <FaLinkedinIn size={24} />
                        </a>

                        <a href="https://discord.com/users/eunsoomin" target="_blank" rel="noopener noreferrer"
                            className="border border-zinc-950 bg-zinc-950 rounded-full px-4 py-2.5 shadow-md hover:border-zinc-900 hover:bg-zinc-900 hover:shadow-xl hover:shadow-zinc-700/35 transition-all duration-800 ease-in-out hover:scale-105">
                            <FaDiscord size={24} />
                        </a>

                        <a href="https://x.com/Shaivi330143" target="_blank" rel="noopener noreferrer"
                            className="border border-zinc-950 bg-zinc-950 rounded-full px-4 py-2.5 shadow-md hover:border-zinc-900 hover:bg-zinc-900 hover:shadow-xl hover:shadow-zinc-700/35 transition-all duration-800 ease-in-out hover:scale-105">
                            <FaXTwitter size={24} />
                        </a>
                    </div>
                </div>
            </div>

                <div className="border-0 border-t border-zinc-800">
                    <p className="px-145 py-2 text-md font-sans font-thin items-center">© 2026 Shaivi All rights reserved</p>
                </div>
        </footer>
    );
}