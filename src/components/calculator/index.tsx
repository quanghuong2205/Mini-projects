import { operands, operators } from './buttons';
import ClearOperator from './clear';
import DecimalPoint from './decimal';
import EqualOperator from './equal';
import Expression from './expression';
import Operand from './operand';
import Operator from './operator';
import Result from './result';
import './styles.css';

function Calculator() {
  return (
    <div className='cal'>
      <div className='cal-top'>
        <Result />
        <Expression />
      </div>
      <div className='cal-body'>
        <ClearOperator />
        <EqualOperator />
        <DecimalPoint />
        {operators.map((o) => (
          <Operator
            id={o.id}
            value={o.value}
            key={o.id}
          />
        ))}
        {operands.map((o) => (
          <Operand
            id={o.id}
            value={o.value}
            key={o.id}
          />
        ))}
      </div>
    </div>
  );
}

export default Calculator;
