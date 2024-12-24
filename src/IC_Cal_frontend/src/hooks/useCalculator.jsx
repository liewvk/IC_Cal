import { useState } from 'react';
import { calculatorActor } from '../lib/actor';
import { parseInput } from '../lib/utils';

export const useCalculator = () => {
  const [result, setResult] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const calculate = async (operation, a, b) => {
    setLoading(true);
    setError('');
    try {
      const numA = parseInput(a);
      const numB = parseInput(b);

      if (!numA || !numB) {
        throw new Error('Invalid input numbers');
      }

      let response;

      switch (operation) {
        case 'add':
          response = await calculatorActor.add(numA, numB);
          break;
        case 'subtract':
          response = await calculatorActor.subtract(numA, numB);
          break;
        case 'multiply':
          response = await calculatorActor.multiply(numA, numB);
          break;
        case 'divide':
          if (numB === 0n) {
            throw new Error('Division by zero');
          }
          response = await calculatorActor.divide(numA, numB);
          if (response.length === 0) {
            throw new Error('Division error');
          }
          response = response[0];
          break;
        default:
          throw new Error('Invalid operation');
      }
      setResult(response.toString());
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return { result, error, loading, calculate };
};