import React, { useState } from 'react';
import { useCalculator } from '../../hooks/useCalculator';
import { CalculatorButton } from './CalculatorButton';
import { CalculatorInput } from './CalculatorInput';
import { CalculatorResult } from './CalculatorResult';
import { OPERATIONS } from '../../lib/constants';

export const Calculator = () => {
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const { result, error, loading, calculate } = useCalculator();

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-4">ICP Calculator</h1>
      
      <div className="space-y-4">
        <CalculatorInput
          value={a}
          onChange={setA}
          placeholder="First number"
        />
        
        <CalculatorInput
          value={b}
          onChange={setB}
          placeholder="Second number"
        />
        
        <div className="grid grid-cols-2 gap-2">
          {Object.entries(OPERATIONS).map(([key, operation]) => (
            <CalculatorButton
              key={key}
              operation={operation}
              onClick={() => calculate(operation, a, b)}
              disabled={loading}
            />
          ))}
        </div>
        
        <CalculatorResult
          loading={loading}
          error={error}
          result={result}
        />
      </div>
    </div>
  );
};
