import useCalContext from '../../hooks/useCalContext';

function Result() {
  const {
    state: { previousResult },
  } = useCalContext();
  return (
    <div className='cal-top__result'>
      <span>{previousResult ? previousResult : 0}</span>
      <span>=</span>
    </div>
  );
}

export default Result;
