import useCalContext from '../../hooks/useCalContext';

function DecimalPoint() {
  const { dispatch } = useCalContext();

  const handleClick = () => {
    dispatch({
      type: 'cal-type-decimal',
    });
  };

  return (
    <button
      onClick={handleClick}
      id='decimal'
      value='.'
      className='cal-btn'>
      .
    </button>
  );
}

export default DecimalPoint;
