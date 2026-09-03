export default function about() {
    return (
        <section>
            <div id="About Me" className="flex flex-row mx-10 px-10 py-10 min-h-fit gap-10 border-b border-zinc-900 border-0">

                {/*Img*/}
                <div className="flex flex-1 border-0 h-130">
                    <img src="/e.jpg" alt="Image" className="rounded-4xl" />
                </div>

                {/*hello+%about me=%geducation+%degree+%Major*/}
                <div className="flex flex-1 flex-col px-6 border-0 border-l border-r border-zinc-900">

                    <h1 className="text-2xl font-semibold pb-2">Hello</h1>

                    <p className="text-md text-left font-sans"> I'm Shaivi, a second-year B.Tech CSE student specializing in Data Science and Machine Learning.<br />
                        I enjoy<br />
                        • Building AI projects<br />
                        • Data Visualization<br />
                        • Open Source<br />
                        • Learning Cloud Technologies</p><br />

                    <div className="border-0 border-t border-zinc-900 pt-4">
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

                    <div className="flex flex-col border-0 border-t border-zinc-900 pt-4">
                        <h3 className="text-md font-mono pb-2">2026</h3>
                        <h4 className="text-lg text-left font-sans">GirlScript Summer of Code</h4>
                        <h6 className="text-lg text-left font-sans">Open Source Contributor</h6>
                    </div>

                </div>

            </div>
        </section>
    );
}