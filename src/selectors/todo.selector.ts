import { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';

function useTodoSelector() {
  const { todos } = useContext(TodoContext);

  const handleFilterTodos = (filter: TodoFilterType) => {
    if (filter === 'all') {
      return todos;
    }
    return todos.filter((t) => t.status === filter);
  };

  return {
    todoCount: todos.length,
    activeTodoCount: todos.filter((t) => t.status === 'active').length,
    todos,
    allAreCompleted: !todos.find((t) => t.status === 'active'),
    filters: handleFilterTodos,
  };
}

export default useTodoSelector;
