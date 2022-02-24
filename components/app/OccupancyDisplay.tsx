const boxStyle = "h-full border-white grid place-items-center overflow-hidden border-opacity-20";

const OccupancyDisplay = ({
    title,
    occupancy,
    className,
    totalTime,
}: {
    title: string;
    occupancy: number[];
    className: string;
    totalTime: number;
}): JSX.Element => {
    return (
        <div className={`flex relative ${className} border-l border-white border-opacity-20`}>
            {Array(Math.ceil(totalTime * 2))
                .fill(0)
                .map((_, i) => {
                    return (
                        <div
                            key={i}
                            className={`${boxStyle} absolute ${
                                occupancy[i] && occupancy[i] > 2
                                    ? "bg-red-500"
                                    : occupancy[i] > 0
                                    ? "bg-green-500"
                                    : "bg-gray-900"
                            } ${i % 2 === 1 ? "border-r" : ""}`}
                            style={{
                                width: `${50 / totalTime}%`,
                                left: `${(100 * (i / 2)) / totalTime}%`,
                            }}
                        />
                    );
                })}
            <div className="h-full w-full bg-black absolute left-0 top-0 grid place-items-center opacity-0 bg-opacity-50 hover:opacity-100">
                <p>{title}</p>
            </div>
        </div>
    );
};

export default OccupancyDisplay;
