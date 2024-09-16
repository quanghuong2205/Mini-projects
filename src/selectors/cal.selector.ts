import { useContext } from 'react';
import { CalculatorContext } from '../context/CalculatorContext';

function useCalSelector() {
  const { state } = useContext(CalculatorContext);

  return {
    expArray: state.expression.split(''),
  };
}

export default useCalSelector;
