import { useState, KeyboardEvent } from 'react';
import useTodoSelector from '../../selectors/todo.selector';
import List from './list';
import './styles.css';
import useTodo from '../../hooks/useTodo';

function Todo() {
  const [filter, setFilter] = useState<TodoFilterType>('all');
  const { activeTodoCount, allAreCompleted } = useTodoSelector();
  const { dispatch } = useTodo();

  const handleFilter = (filter: TodoFilterType) => () => setFilter(filter);

  const handleClearCompletedTodos = () => {
    dispatch({ type: 'todo-delete-completed-todos' });
  };

  const handleToggleAllTodos = () => {
    dispatch({ type: 'todo-toggle-all', payload: { isCompleted: allAreCompleted } });
  };

  const handleAddNewTodo = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.code !== 'Enter') return;

    /* Empty content */
    const value = (e.target as HTMLInputElement).value;
    if (!value) return;

    /* Dispatch */
    dispatch({ type: 'todo-add', payload: value });
  };

  return (
    <div className='todo'>
      <h1 className='todo-title'>todos</h1>
      <div className='todo-main'>
        <header className='todo-header'>
          <button
            className={`todo__select-all ${allAreCompleted ? 'todo__select-all--completed' : ''}`}
            onClick={handleToggleAllTodos}>
            <span>❯</span>
          </button>
          <input
            spellCheck={false}
            type='text'
            placeholder='What need to be done?'
            onKeyDown={handleAddNewTodo}
          />
        </header>

        <List filter={filter} />

        <footer className='todo-footer'>
          <span className='todo__left-items'>
            <strong>{activeTodoCount}</strong> items left
          </span>
          <div className='todo-filters'>
            {(['all', 'active', 'completed'] as TodoFilterType[]).map(
              (value: TodoFilterType, i) => (
                <button
                  className={`${filter === value ? 'active' : ''}`}
                  key={i}
                  onClick={handleFilter(value)}>
                  <span>{value}</span>
                </button>
              ),
            )}
          </div>
          <button
            className='todo__clear-completed-btn'
            onClick={handleClearCompletedTodos}>
            Clear completed
          </button>
        </footer>
      </div>

      <footer className='footer'>
        <p>Double-click to edit a todo</p>
        <p>
          Created by (<a href='#'>quanghuong</a>)
        </p>
      </footer>
    </div>
  );
}

export default Todo;
