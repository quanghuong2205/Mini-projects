import React, { createContext, Dispatch, useReducer } from 'react';
import { CalculatorAction } from '../stores/calculator/action';
import { calculatorReducer, initalCalculatorState } from '../stores/calculator/reducer';

export const CalculatorContext = createContext({} as ICalculatorContextProps);

interface ICalculatorContextProps {
  state: CalculatorState;
  dispatch: Dispatch<CalculatorAction>;
}

interface CalculatorProviderProps {
  children: React.ReactNode;
}

function CalculatorProvider({ children }: CalculatorProviderProps) {
  const [state, dispatch] = useReducer(calculatorReducer, initalCalculatorState);
  return (
    <CalculatorContext.Provider value={{ state, dispatch }}>{children}</CalculatorContext.Provider>
  );
}

export default CalculatorProvider;
