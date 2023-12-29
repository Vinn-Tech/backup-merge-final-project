import React from "react";

export const FormSelect = ({ label, name, onChange, options }) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={label} className="py-2 text-xs">
        {name}
      </label>
      <div className="relative">
        <select
          name={name}
          id={label}
          className="w-full h-12 rounded-xl px-5 border-2"
          onChange={onChange}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
