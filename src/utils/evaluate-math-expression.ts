import Mexp from 'math-expression-evaluator';

const mexp = new Mexp();

export const evaluateMathExpression = (exp: string) => {
  return mexp.eval(exp);
};
