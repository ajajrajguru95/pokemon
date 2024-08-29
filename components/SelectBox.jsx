import React from 'react'

const SelectBox = ({ options, value, onChange }) => {
    return (
        <>
            <select className="md:max-w-[300px] bg-white p-2 rounded-2xl w-full" value={value} onChange={onChange}>
                <option value="">Select Type</option>
                {options.map((value, idx) => (
                    <option key={idx} value={value.name}>{value.name}</option>
                ))}
            </select>
        </>
    )
}

export default SelectBox