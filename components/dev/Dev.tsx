import { LuShieldCheck } from "react-icons/lu";

export default function Dev() {
    return (

        <section className="">

            <div id="Dev" className="relative z-30 bg-zinc-950 flex flex-col border border-zinc-900 items-center justify-center py-20">

                {/* LinkedIn */}
                <a
                    href="https://www.linkedin.com/in/shaivi30/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 block w-370"
                >
                    <div className="overflow-hidden rounded-3xl border border-zinc-900 bg-white transition hover:border-zinc-800">

                        {/* Banner */}
                        <div className="relative h-40 overflow-hidden bg-zinc-800">
                            <img
                                src="/banner.jpg"
                                alt="Banner"
                                className="h-full w-full object-cover"
                            />
                        </div>


                        {/* Profile Information */}
                        <div className="relative px-6 pb-6">

                            {/* Profile Picture */}
                            <div className="-mt-16 mb-4">
                                <img
                                    src="profile.jpg"
                                    alt="Profile"
                                    className="h-32 w-32 rounded-full border-4 border-white object-cover"
                                />
                            </div>
                            <div className="flex w-full flex-row justify-between">
                                <div className="flex flex-col">
                                    {/* Name */}
                                    <div className="flex flex-row items-center-safe gap-2">
                                        <h2 className="text-2xl text-zinc-900 font-semibold">Shaivi .</h2>
                                        <div className="flex h-6 w-6 items-center justify-center rounded-full border-0">
                                            <LuShieldCheck className="text-zinc-800 font-semibold" size={22} strokeWidth={3} />
                                        </div>
                                        <p className="text-xs text-zinc-600">She/Her</p>
                                    </div>

                                    {/* text */}
                                    <div className="gap-0">
                                        <p className="mt-3 max-w-3xl text-sm text-zinc-950">
                                            Major in Data Science & Machine Learning | Student Career Committee (SCC) • Women To Code(WTC)| Python • C • SQL • DSA | ML Engineer | Interested in AI, Data & Cloud Technologies 🍀
                                        </p>
                                        <p className="mt-2 text-sm text-zinc-500">India · Gurugram</p>
                                        <p className="mt-3 text-sm font-medium text-[#0A66C2]">500+ connections</p>
                                    </div>


                                    {/* Button */}
                                    <div className="mt-5">
                                        <span className="inline-flex rounded-full border border-[#0A66C2] bg-[#0A66C2] px-5 py-2 text-sm font-medium transition hover:bg-[#0A66C2]">View LinkedIn Profile ↗</span>
                                    </div>

                                </div>

                                <div className="flex items-baseline">
                                    <div className="flex flex-row items-centre  gap-3 pr-6">
                                        <img
                                        src="girlscriptsoc_logo.jpg"
                                        alt="Profile"
                                        className="h-10 w-10 rounded-xl border-4 border-white object-cover"
                                    />
                                    <h2 className="mt-3 max-w-3xl text-md text-zinc-950">GirlScript Summer of Code</h2>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </a>

            </div>
        </section>

    );
}