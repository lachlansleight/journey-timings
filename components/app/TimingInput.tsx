import { Timings } from "lib/types";
import SliderInput from "./SliderInput";

const TimingInput = ({
    value,
    onChange,
}: {
    value: Timings;
    onChange: (val: Timings) => void;
}): JSX.Element => {
    return (
        <div className="grid grid-cols-2 gap-2">
            <SliderInput
                label="Elevator"
                value={value.elevator}
                onChange={val => onChange({ ...value, elevator: val })}
                min={0}
                max={10}
            />
            <SliderInput
                label="Ice Cave"
                value={value.iceCave}
                onChange={val => onChange({ ...value, iceCave: val })}
                min={0}
                max={15}
            />
            <SliderInput
                label="Wormhole"
                value={value.wormhole}
                onChange={val => onChange({ ...value, wormhole: val })}
                min={0}
                max={4}
            />
            <SliderInput
                label="Living Ruin"
                value={value.livingRuin}
                onChange={val => onChange({ ...value, livingRuin: val })}
                min={0}
                max={15}
            />
            <SliderInput
                label="Hallway"
                value={value.hallway}
                onChange={val => onChange({ ...value, hallway: val })}
                min={0}
                max={4}
            />
            <SliderInput
                label="Coat Factory"
                value={value.coatFactory}
                onChange={val => onChange({ ...value, coatFactory: val })}
                min={0}
                max={15}
            />
            <SliderInput
                label="Wardrobe"
                value={value.wardrobe}
                onChange={val => onChange({ ...value, wardrobe: val })}
                min={0}
                max={4}
            />
            <SliderInput
                label="Rocket Ship"
                value={value.rocketShip}
                onChange={val => onChange({ ...value, rocketShip: val })}
                min={0}
                max={15}
            />
            <SliderInput
                label="Gap"
                value={value.gap}
                onChange={val => onChange({ ...value, gap: val })}
                min={0}
                max={60}
            />
            <p className="grid place-items-center text-2xl">
                Total time: {Object.keys(value).reduce((acc, cur) => acc + (value as any)[cur], 0)}m
                ({value.gap}m gap)
            </p>
        </div>
    );
};

export default TimingInput;
