import useCalContext from '../../hooks/useCalContext';

function ClearOperator() {
  const { dispatch } = useCalContext();

  const handleClear = () => {
    dispatch({
      type: 'cal-type-clear',
    });
  };

  return (
    <button
      onClick={handleClear}
      id='clear'
      value='AC'
      className='cal-btn'>
      AC
    </button>
  );
}

export default ClearOperator;
