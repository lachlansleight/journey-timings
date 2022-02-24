const SliderInput = ({
    label,
    value,
    onChange,
    min,
    max,
    step = 0.5,
}: {
    label: string;
    value: number;
    onChange: (val: number) => void;
    min: number;
    max: number;
    step?: number;
}): JSX.Element => {
    return (
        <div className="flex flex-col">
            <div className="flex justify-between">
                {label && <label>{label}</label>}
                <span>{value}</span>
            </div>
            <input
                type="range"
                className=""
                min={min}
                max={max}
                value={value}
                onChange={e => onChange(Number(e.target.value))}
                step={step}
            />
        </div>
    );
};

export default SliderInput;
