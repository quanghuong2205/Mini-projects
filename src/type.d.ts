interface CounterState {
  count: number;
}

interface ICalculator {
  expression: string;
  previousResult: number | undefined;
  currentOperand: string;
  prevInput:
    | {
        type: 'operand' | 'operator';
        value: string;
      }
    | undefined;
  evaluated: boolean;
  warningText: string;
}

interface CalculatorState extends ICalculator {
  history?: ICalculator[];
}

type TodoStatusType = 'active' | 'completed';

interface ITodo {
  id: string;
  content: string;
  status: TodoStatusType;
}

type TodoFilterType = 'all' | TodoStatusType;
