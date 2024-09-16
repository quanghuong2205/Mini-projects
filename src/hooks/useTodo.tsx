import { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';

function useTodo() {
  return useContext(TodoContext);
}

export default useTodo;
