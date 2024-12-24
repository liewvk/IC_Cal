import React from 'react';

export const CalculatorInput = ({ value, onChange, placeholder }) => (
  <input
    type="number"
    value={value}
    onChange={(e) => onChange(e.target.value)}
    placeholder={placeholder}
    className="w-full p-2 border rounded"
  />
);
