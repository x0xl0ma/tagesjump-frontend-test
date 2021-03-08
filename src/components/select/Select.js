import React from "react";

import "./select.scss";

const Select = ({ label, options, onChanged, selectedOption }) => {
  const handleChange = (e) => {
    onChanged(e.target.value);
  };

  return (
    <div className="select">
      <label className="select__label">
        <span className="select__label-text">{label}</span>
        <select
          onChange={handleChange}
          value={selectedOption}
          className="select__body"
        >
          {options.map((option, index) => (
            <option value={option.value} key={index}>
              {option.label}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
};

export default Select;
