import { useContext } from 'react';
import { CalculatorContext } from '../context/CalculatorContext';

function useCalContext() {
  return useContext(CalculatorContext);
}

export default useCalContext;
