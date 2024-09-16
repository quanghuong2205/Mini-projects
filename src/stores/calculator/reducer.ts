import { evaluateMathExpression } from '../../utils/evaluate-math-expression';
import { CalculatorAction } from './action';

export const initalCalculatorState: CalculatorState = {
  expression: '',
  currentOperand: '',
  prevInput: undefined,
  evaluated: false,
  previousResult: undefined,
  history: [],
  warningText: '',
};

export const calculatorReducer = (
  state: CalculatorState,
  action: CalculatorAction,
): CalculatorState => {
  switch (action.type) {
    case 'cal-type-operand': {
      const input = action.payload;
      const { expression, prevInput, currentOperand } = state;
      let newState = {};

      /* Expression = 0 && input = 0*/
      if (expression === '0') return { ...state };

      /* Expression (empty) + currentValue (=0)*/
      if (expression === '') {
        newState = {
          expression: input === '0' ? '' : input,
          currentOperand: input,
          prevInput: {
            type: 'operand',
            value: input,
          },
          evaluated: false,
        };
        return saveHistory(state, newState as ICalculator);
      }

      /* Append input to expression and prevInput */
      newState = {
        expression: expression + input,
        currentOperand: currentOperand + input,
        prevInput: {
          type: 'operand',
          value: prevInput?.type === 'operator' ? input : prevInput?.value + input,
        },
        evaluated: false,
        previousResult: state.previousResult,
      };

      return saveHistory(state, newState as ICalculator);
    }

    case 'cal-type-operator': {
      const input = action.payload;
      const { expression, prevInput } = state;
      let newState = {};

      /* Expression is empty and operator IN (/ or x) */
      if (expression === '' && ['/', 'x'].includes(input)) {
        return { ...state };
      }

      /* Prev input is decimal */
      if (prevInput?.value === '.') return { ...state };

      /* Prev input is operator */
      if (prevInput?.type === 'operator') {
        if (input !== '-') return { ...state };

        const prevLast = expression.split('')[expression.length - 2];
        if (prevInput.value === '-' && prevLast === '-') return { ...state };

        newState = {
          expression: expression + input,
          prevInput: {
            type: 'operator',
            value: input,
          },
          currentOperand: '',
          evaluated: false,
        };

        return saveHistory(state, newState as ICalculator);
      }

      /* Append operator */
      newState = {
        ...state,
        expression: expression + input,
        prevInput: {
          type: 'operator',
          value: input,
        },
        currentOperand: '',
        evaluated: false,
      };

      return saveHistory(state, newState as ICalculator);
    }

    case 'cal-type-clear': {
      return {
        expression: '',
        prevInput: {
          type: 'operand',
          value: '0',
        },
        evaluated: false,
        currentOperand: '',
        previousResult: undefined,
        history: [],
        warningText: '',
      };
    }

    case 'cal-type-decimal': {
      const { expression, prevInput, currentOperand } = state;
      let newState = {};

      /* Current operand already has decimal */
      if (currentOperand.includes('.')) return { ...state };

      /* Expression is empty */
      if (!expression.length || prevInput?.type === 'operator') {
        newState = {
          expression: expression + '0.',
          prevInput: {
            type: 'operator',
            value: '.',
          },
          currentOperand: currentOperand + '0.',
        };
        return saveHistory(state, newState as ICalculator);
      }

      newState = {
        expression: expression + '.',
        prevInput: {
          type: 'operator',
          value: '.',
        },
      };
      return saveHistory(state, newState as ICalculator);
    }

    case 'cal-type-equals': {
      const { expression, prevInput } = state;
      /* Expression is empty */
      if (!expression.length) return { ...state };

      let exp = expression;

      /* Expression ends with an operator? */
      if (prevInput?.type === 'operator') {
        exp = expression.slice(0, -1);
      }

      /* Replace some operator symbols */
      exp = exp.replace(/x/g, '*').replace(/‑/g, '-');

      /* Evaluate */
      let result = 0;
      try {
        result = evaluateMathExpression(exp);
      } catch {
        return {
          ...state,
          warningText: 'invalid expression',
        };
      }

      const newState = {
        previousResult: result,
        expression: result.toString(),
        currentOperand: result.toString(),
        prevInput: undefined,
        evaluated: true,
      };
      return saveHistory(state, newState as ICalculator);
    }

    case 'cal-back-history': {
      if (!state.history) return { ...state };

      const lastHistory = state.history[state.history.length - 1];

      return {
        ...state,
        ...lastHistory,
        history: state.history.slice(0, -1),
      };
    }

    case 'cal-cancel-warning': {
      return { ...state, warningText: '' };
    }

    default: {
      return { ...state };
    }
  }
};

const saveHistory = (state: CalculatorState, newState: ICalculator) => {
  return { ...state, ...newState, history: [...state.history!, newState] };
};
