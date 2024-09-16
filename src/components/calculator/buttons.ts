const operandByText = [
  'zero',
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
];

export const operands = Array.from({ length: 10 }, (_, index) => ({
  id: operandByText[index],
  value: index,
}));

const operatorByText = ['add', 'multiply', 'divide', 'subtract'];
export const operators = Array.from(['+', 'x', '/', '-'], (operator, index) => ({
  id: operatorByText[index],
  value: operator,
}));
