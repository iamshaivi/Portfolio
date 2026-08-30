"use client";

type DonutData = {
    name: string;
    color: string;
};

interface DonutChartProps {
    title: string;
    data: DonutData[];
}

export default function DonutChart({ title, data, }: DonutChartProps) {

    const size = 180;
    const strokeWidth = 16;
    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;

    const gap = 6; // px gap between slices

    const sliceLength =
        (circumference - gap * data.length) / data.length;

    let offset = 0;

    return (
        <div className="flex flex-row bg-zinc-950 border border-zinc-950 rounded-3xl gap-4 px-4 py-4 shadow-md hover:border-zinc-950 
        hover:bg-zinc-950 hover:shadow-zinc-600/10 transition-all duration-200 ease-in-outS">

            <div className="relative flex flex-1 flex-col justify-center items-center">
                <svg width={size} height={size} className="-rotate-90" >
                    {/* background */}
                    <circle cx={size / 2} cy={size / 2} r={radius}
                        fill="none" stroke="#27272a" strokeWidth={strokeWidth} />

                    {data.map((item, index) => {
                        const currentOffset = offset;
                        offset += sliceLength + gap;

                        return (
                            <circle key={index} cx={size / 2} cy={size / 2} r={radius} fill="none"
                                stroke={item.color} strokeWidth={strokeWidth} strokeLinecap="round"
                                strokeDasharray={`${sliceLength} ${circumference}`}
                                strokeDashoffset={-currentOffset}
                            />
                        );
                    })}
                </svg>

                <div className="absolute w-35 h-35 rounded-full bg-black flex flex-col justify-center items-center">
                    <p className="text-xl font-extralight text-white">{title}</p>
                </div>

            </div>

            <div className="grid grid-cols-2 gap-4 pl-2">
                {data.map((item) => (
                    <div key={item.name} className="flex items-center gap-2">
                        <span className="w-4 h-4 rounded-full shrink-0" style={{ backgroundColor: item.color }}/>
                        <p className="text-zinc-100 text-sm font-medium"> {item.name} </p>
                    </div>
                ))}
            </div>

        </div>
    );
}