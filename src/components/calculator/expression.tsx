import { KeyboardEvent, useEffect } from 'react';
import useCalSelector from '../../selectors/cal.selector';
import useCalContext from '../../hooks/useCalContext';

function Expression() {
  const { expArray } = useCalSelector();
  const { dispatch, state } = useCalContext();

  /* Back history */
  useEffect(() => {
    const handleBackHistory = (e: KeyboardEvent): void => {
      if (e.ctrlKey && e.key === 'z') {
        dispatch({ type: 'cal-back-history' });
      }
    };

    document.addEventListener('keydown', handleBackHistory);
    return () => {
      document.removeEventListener('keydown', handleBackHistory);
    };
  });

  /* Cancel warning */
  useEffect(() => {
    if (state.warningText.length) {
      setTimeout(() => dispatch({ type: 'cal-cancel-warning' }), 1000);
    }
  }, [state.warningText, dispatch]);

  return (
    <div className='cal-top__exp'>
      {state.warningText.length ? (
        <span>{state.warningText}</span>
      ) : expArray.length ? (
        expArray.map((c, i) => <span key={i}>{c}</span>)
      ) : (
        <span>0</span>
      )}
    </div>
  );
}

export default Expression;
