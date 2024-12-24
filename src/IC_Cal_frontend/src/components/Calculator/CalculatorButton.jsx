import React from 'react';

export const CalculatorButton = ({ operation, onClick, disabled }) => (
  <button
    onClick={onClick}
    className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
    disabled={disabled}
  >
    {operation.charAt(0).toUpperCase() + operation.slice(1)}
  </button>
);
