import React, { createContext, Dispatch, useReducer } from 'react';
import { counterReducer, initalCounterState } from '../stores/counter/reducer';
import { CounterAction } from '../stores/counter/actions';

export const CounterContext = createContext({} as ICounterContextProps);

interface ICounterContextProps {
  state: CounterState;
  dispatch: Dispatch<CounterAction>;
}

interface CounterProviderProps {
  children: React.ReactNode;
}

function CounterProvider({ children }: CounterProviderProps) {
  const [state, dispatch] = useReducer(counterReducer, initalCounterState);
  return <CounterContext.Provider value={{ state, dispatch }}>{children}</CounterContext.Provider>;
}

export default CounterProvider;
