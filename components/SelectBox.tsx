
interface SelectProps {
    options: string[],
    value: string,
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void,
}



const SelectBox = ({ options, value, onChange }: SelectProps) => {
    return (
        <>
            <select className="md:max-w-[300px] bg-white p-2 rounded-2xl w-full" value={value} onChange={onChange}>
                <option value="">Select Type</option>
                {options.map((value, idx) => (
                    <option key={idx} value={value}>{value}</option>
                ))}
            </select>
        </>
    )
}

export default SelectBox