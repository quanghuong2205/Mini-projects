import { useContext } from 'react';
import { CounterContext } from '../context/CounterContext';
import '../styles/counter.wc.styles.css';

function Counter() {
  const { state, dispatch } = useContext(CounterContext);

  const handleInc = () => {
    dispatch({ type: 'counter-inc' });
  };
  const handleDec = () => {
    dispatch({ type: 'counter-dec' });
  };

  return (
    <div className='counter-container wc'>
      <button
        id='decrement'
        onClick={handleDec}>
        -
      </button>
      <span id='count'>{state.count}</span>
      <button
        id='increment'
        onClick={handleInc}>
        +
      </button>
    </div>
  );
}

export default Counter;
