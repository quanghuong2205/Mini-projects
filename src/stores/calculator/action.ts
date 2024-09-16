export type CalculatorAction =
  | { type: 'cal-type-operand'; payload: string }
  | { type: 'cal-type-operator'; payload: string }
  | { type: 'cal-type-clear' }
  | { type: 'cal-type-equals' }
  | { type: 'cal-type-decimal' }
  | { type: 'cal-back-history' }
  | { type: 'cal-cancel-warning' };
