import React from 'react';
import '../styles/counter.cc.styles.css';

type Props = {
  name: string;
};
type CounterState = {
  count: number;
};

class CounterPage extends React.Component<Props, CounterState> {
  state: CounterState = {
    count: 0,
  };

  increment() {
    this.setState((prev) => ({ count: prev.count + 1 }));
  }

  decrement() {
    this.setState((prev) => ({ count: prev.count - 1 }));
  }

  render() {
    return (
      <div className='counter-container cc'>
        <button
          id='decrement'
          onClick={() => this.decrement()}>
          -
        </button>
        <span id='count'>{this.state.count}</span>
        <button
          id='increment'
          onClick={() => this.increment()}>
          +
        </button>
      </div>
    );
  }
}

export default CounterPage;
