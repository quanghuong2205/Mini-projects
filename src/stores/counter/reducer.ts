import { CounterAction } from './actions';

export const initalCounterState: CounterState = {
  count: 0,
};

export const counterReducer = (state: CounterState, action: CounterAction): CounterState => {
  switch (action.type) {
    case 'counter-inc': {
      return {
        count: state.count + 1,
      };
    }

    case 'counter-dec': {
      return {
        count: state.count - 1,
      };
    }

    default: {
      return { ...state };
    }
  }
};
