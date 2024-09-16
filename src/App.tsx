import CounterPageFC from './pages/CounterPageFC';
import CounterPage from './pages/CouterPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CounterPageWC from './pages/CounterPageWC';
import MainLayout from './layouts/MainLayout';
import TodoPage from './pages/TodoPage';
import CalculatorPage from './pages/CalculatorPage';
import RandomQuotePage from './pages/RandomQuotePage';

function App() {
  return (
    <BrowserRouter basename='/'>
      <Routes>
        <Route
          path='/'
          element={<MainLayout />}>
          <Route
            path='/counter-CC'
            element={<CounterPage name='quanghuong' />}
          />
          <Route
            path='/counter-FC'
            element={<CounterPageFC />}
          />
          <Route
            path='/counter-WC'
            element={<CounterPageWC />}
          />

          <Route
            path='/todo'
            element={<TodoPage />}
          />

          <Route
            path='/calculator'
            element={<CalculatorPage />}
          />

          <Route
            path='/random-quote'
            element={<RandomQuotePage />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
