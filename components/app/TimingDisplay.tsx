import { Timings } from "../../lib/types";

const boxStyle = "h-full border-t border-b border-r grid place-items-center overflow-hidden";

const TimingDisplay = ({
    timings,
    totalTime = 1,
    offset = 0,
    className,
}: {
    timings: Timings;
    totalTime: number;
    offset?: number;
    className?: string;
}): JSX.Element => {
    return (
        <div
            className={`flex relative ${className}`}
            style={{ left: `${0 + (100 * offset) / totalTime}%` }}
        >
            {Array(10)
                .fill(0)
                .map(_ => {
                    return (
                        <>
                            <div
                                className={`${boxStyle} bg-rose-800 border-l`}
                                style={{ width: `${(100 * timings.elevator) / totalTime}%` }}
                            >
                                elevator
                            </div>
                            <div
                                className={`${boxStyle} bg-blue-800`}
                                style={{ width: `${(100 * timings.iceCave) / totalTime}%` }}
                            >
                                iceCave
                            </div>
                            <div
                                className={`${boxStyle} bg-purple-800`}
                                style={{ width: `${(100 * timings.wormhole) / totalTime}%` }}
                            >
                                wormhole
                            </div>
                            <div
                                className={`${boxStyle} bg-green-800`}
                                style={{ width: `${(100 * timings.livingRuin) / totalTime}%` }}
                            >
                                livingRuin
                            </div>
                            <div
                                className={`${boxStyle} bg-orange-800`}
                                style={{ width: `${(100 * timings.hallway) / totalTime}%` }}
                            >
                                hallway
                            </div>
                            <div
                                className={`${boxStyle} bg-yellow-800`}
                                style={{ width: `${(100 * timings.coatFactory) / totalTime}%` }}
                            >
                                coatFactory
                            </div>
                            <div
                                className={`${boxStyle} bg-gray-800`}
                                style={{ width: `${(100 * timings.wardrobe) / totalTime}%` }}
                            >
                                wardrobe
                            </div>
                            <div
                                className={`${boxStyle} bg-fuchsia-800`}
                                style={{ width: `${(100 * timings.rocketShip) / totalTime}%` }}
                            >
                                rocketShip
                            </div>

                            <div
                                className="h-full grid place-items-center overflow-hidden"
                                style={{ width: `${(100 * timings.gap) / totalTime}%` }}
                            ></div>
                        </>
                    );
                })}
        </div>
    );
};

export default TimingDisplay;
