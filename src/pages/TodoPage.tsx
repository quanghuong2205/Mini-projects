import Todo from '../components/Todo';
import TodoProvider from '../context/TodoContext';

function TodoPage() {
  return (
    <TodoProvider>
      <Todo />
    </TodoProvider>
  );
}

export default TodoPage;
