import React from "react";

const InputField = ({
    label,
    type = "text",
    name,
    value,
    onChange,
    required = true,
}) => {
    return (
        <div className="mb-4">
            <label className="block text-sm font-medium text-secondary">
                {label}
            </label>
            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                className="mt-1 block w-full p-2 border text-secondary border-gray-300 rounded-md shadow-sm focus:ring-accent focus:border-accent"
                required={required}
            />
        </div>
    );
};

export default InputField;
