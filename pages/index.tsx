import { useState, useMemo } from "react";
import TimingDisplay from "components/app/TimingDisplay";
import TimingInput from "components/app/TimingInput";
import OccupancyDisplay from "components/app/OccupancyDisplay";
import SliderInput from "components/app/SliderInput";
import Layout from "../components/layout/Layout";

export const Home = (): JSX.Element => {
    const [timings, setTimings] = useState({
        elevator: 4,
        iceCave: 10,
        wormhole: 0.5,
        livingRuin: 10,
        hallway: 2,
        coatFactory: 10,
        wardrobe: 1,
        rocketShip: 4,
        gap: 0,
    });

    const totalTime = useMemo(() => {
        let total = 0;
        Object.keys(timings).forEach(k => (total += (timings as any)[k]));
        return total;
    }, [timings]);

    const [sessionCount, setSessionCount] = useState(7);

    const count: number[] = useMemo(() => {
        const output: number[] = [];
        let val = Math.floor(sessionCount / 2) * -1;
        while (output.length < sessionCount) {
            output.push(val);
            val++;
        }
        return output;
    }, [sessionCount]);

    const occupancy = useMemo(() => {
        console.log({ totalTime, timings });
        const addMinute = (arr: number[], minute: number): number[] => {
            const arrOut = [...arr];
            for (let i = 0; i <= minute; i++) {
                if (arrOut.length <= i) arrOut.push(0);
            }
            arrOut[minute]++;
            return arrOut;
        };

        const output: { [index: string]: number[] } = {};
        Object.keys(timings)
            .filter(t => t !== "gap")
            .forEach(t => (output[t] = []));

        count.forEach(offset => {
            let minute = (((offset + count[0] * -1) * (totalTime + timings.gap)) % totalTime) * 2;
            Object.keys(timings)
                .filter(t => t !== "gap")
                .forEach(timing => {
                    const length = Number((timings as any)[timing]);
                    for (let i = 0; i < length; i += 0.5) {
                        output[timing] = addMinute(output[timing], minute + i * 2);
                        output[timing] = addMinute(
                            output[timing],
                            (minute + i * 2 + totalTime * 2) % (totalTime * 2)
                        );
                    }
                    minute += length * 2;
                });
        });
        Object.keys(timings)
            .filter(t => t !== "gap")
            .forEach(timing => {
                while (output[timing].length < totalTime) output[timing].push(0);
            });

        return output;
    }, [timings, totalTime, count]);

    return (
        <Layout>
            <div className="flex flex-col mb-4">
                <h1 className="text-2xl">Settings</h1>
                <SliderInput
                    label="Session Count"
                    value={sessionCount}
                    onChange={setSessionCount}
                    min={1}
                    max={10}
                    step={1}
                />
            </div>
            <div className="flex flex-col mb-4">
                <h1 className="text-2xl">Timings</h1>
                <TimingInput value={timings} onChange={setTimings} />
            </div>
            <div className="relative overflow-hidden">
                <div className="flex flex-col gap-4" style={{ width: "1000%" }}>
                    {count.map(i => (
                        <TimingDisplay
                            className="h-8 w-full"
                            key={i}
                            timings={timings}
                            totalTime={totalTime}
                            offset={timings.gap * i * 0.1}
                        />
                    ))}
                </div>
                <div className="absolute w-full h-screen left-0 top-0">
                    {Array(Math.ceil(totalTime))
                        .fill(0)
                        .map((_, i) => (
                            <div
                                className="h-full bg-white bg-opacity-20 absolute"
                                key={i}
                                style={{ left: `${(i * 100) / totalTime}%`, width: "1px" }}
                            />
                        ))}
                </div>
            </div>
            {Object.keys(occupancy).map(t => (
                <div key={t} className="relative overflow-hidden h-8 w-full">
                    <OccupancyDisplay
                        title={t}
                        occupancy={occupancy[t]}
                        className="h-full"
                        totalTime={totalTime}
                    />
                </div>
            ))}
        </Layout>
    );
};

export default Home;
