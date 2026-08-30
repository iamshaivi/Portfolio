"use client";

import {
    Radar,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis,
    ResponsiveContainer,
    Legend,
} from "recharts";

const data = [
    {
        subject: "Data Sci.",
        learning: 60,
        development: 30,
        fullMark: 100,
    },
    {
        subject: "AI",
        learning: 45,
        development: 15,
        fullMark: 100,
    },
    {
        subject: "ML",
        learning: 15,
        development: 0,
        fullMark: 100,
    },
    {
        subject: "Cloud",
        learning: 35,
        development: 0,
        fullMark: 100,
    },
    {
        subject: "Frontend",
        learning: 75,
        development: 75,
        fullMark: 100,
    },
];

export default function LRadar() {
    return (
        <div className="w-110 h-90 rounded-3xl border border-zinc-950 bg-zinc-950 px-2 py-1 shadow-md hover:border-zinc-950 
        hover:bg-zinc-950 hover:shadow-zinc-600/10 transition-all duration-200 ease-in-out ">

            <ResponsiveContainer width="100%" height="100%">

                <RadarChart outerRadius="80%" data={data}>

                    <PolarGrid gridType="polygon" stroke="#27272A" />

                    <PolarAngleAxis dataKey="subject" tick={{ fill: "#d4d4d8", fontSize: 13, }} />

                    <PolarRadiusAxis angle={90} domain={[0, 100]} tick={false} axisLine={false} />

                    {/* Learning Layer */}

                    <Radar name="Learning" dataKey="learning" stroke="#7DD3FC" fill="#38BDF8" fillOpacity={0.16} strokeWidth={3}
                        strokeLinejoin="round" strokeLinecap="round" />

                    {/* Development Layer */}

                    <Radar name="Development" dataKey="development" stroke="#3B82F6" fill="#2563EB" fillOpacity={0.12} strokeWidth={3} 
                        strokeLinejoin="round" strokeLinecap="round"  />

                    <Legend />

                </RadarChart>

            </ResponsiveContainer>

        </div>
    );
}