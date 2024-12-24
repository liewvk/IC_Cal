import React from 'react';

export const CalculatorResult = ({ loading, error, result }) => (
  <>
    {loading && <p className="text-gray-600">Calculating...</p>}
    {error && <p className="text-red-500">{error}</p>}
    {result && <p className="text-xl font-bold mt-4">Result: {result}</p>}
  </>
);
