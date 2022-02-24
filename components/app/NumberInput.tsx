const NumberInput = ({
    label,
    value,
    onChange,
}: {
    label: string;
    value: number;
    onChange: (val: number) => void;
}): JSX.Element => {
    return (
        <div className="flex flex-col">
            {label && <label>{label}</label>}
            <input
                className="bg-neutral-800 px-2 py-1 rounded text-white"
                value={value}
                onChange={e => onChange(Number(e.target.value))}
            />
        </div>
    );
};

export default NumberInput;
