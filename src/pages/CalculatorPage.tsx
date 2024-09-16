import Calculator from '../components/calculator';
import CalculatorProvider from '../context/CalculatorContext';

function CalculatorPage() {
  return (
    <CalculatorProvider>
      <Calculator />
    </CalculatorProvider>
  );
}

export default CalculatorPage;
