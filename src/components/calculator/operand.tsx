import { MouseEvent } from 'react';
import useCalContext from '../../hooks/useCalContext';

interface IOperandProps {
  id: string;
  value: number;
}

function Operand({ id, value }: IOperandProps) {
  const { dispatch } = useCalContext();

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    const value = (e.target as HTMLButtonElement).value;
    dispatch({
      type: 'cal-type-operand',
      payload: value,
    });
  };

  return (
    <button
      onClick={handleClick}
      className='cal-btn'
      id={id}
      value={value}>
      {value}
    </button>
  );
}

export default Operand;
