import { MouseEvent } from 'react';
import useCalContext from '../../hooks/useCalContext';

interface IOperatorProps {
  id: string;
  value: string;
}

function Operator({ id, value }: IOperatorProps) {
  const { dispatch } = useCalContext();

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    const value = (e.target as HTMLButtonElement).value;
    dispatch({
      type: 'cal-type-operator',
      payload: value,
    });
  };

  return (
    <button
      onClick={handleClick}
      id={id}
      className='cal-btn'
      value={value}>
      {value}
    </button>
  );
}

export default Operator;
