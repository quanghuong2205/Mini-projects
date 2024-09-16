import useCalContext from '../../hooks/useCalContext';

function EqualOperator() {
  const { dispatch } = useCalContext();

  const handleClick = () => {
    dispatch({
      type: 'cal-type-equals',
    });
  };

  return (
    <button
      onClick={handleClick}
      id='equals'
      value='='
      className='cal-btn'>
      =
    </button>
  );
}

export default EqualOperator;
