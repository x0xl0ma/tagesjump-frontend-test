import React from "react";

import "./select.scss";

const Select = ({ label, options, onChanged, selectedOption }) => {
  const handleChange = (e) => {
    onChanged(e.target.value);
  };

  return (
    <div className="select__wrapper">
      <span className="label">{label}</span>
      <select onChange={handleChange} value={selectedOption}>
        {options.map((option, index) => (
          <option value={option.value} key={index}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
