import { useState } from 'react';
import '../styles/counter.fc.styles.css';

function CounterPageFC() {
  const [count, setCount] = useState<number>(0);
  const handleInc = () => setCount((prev) => prev + 1);
  const handleDec = () => setCount((prev) => prev - 1);

  return (
    <div className='counter-container fc'>
      <button
        id='decrement'
        onClick={handleDec}>
        -
      </button>
      <span id='count'>{count}</span>
      <button
        id='increment'
        onClick={handleInc}>
        +
      </button>
    </div>
  );
}

export default CounterPageFC;
