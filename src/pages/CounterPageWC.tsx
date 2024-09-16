import Counter from '../components/Counter';
import CounterProvider from '../context/CounterContext';

function CounterPageWC() {
  return (
    <CounterProvider>
      <Counter />
    </CounterProvider>
  );
}

export default CounterPageWC;
