import React, { createContext, Dispatch, useEffect, useReducer } from 'react';
import { initalTodoState, todoReducer } from '../stores/todo/reducer';
import { TodoAction } from '../stores/todo/action';
import { saveToLocalStorage } from '../utils/localstorage';
import { TODOS_KEY } from '../constants/localstorage';

export const TodoContext = createContext({} as ITodoContextProps);

interface ITodoContextProps {
  todos: ITodo[];
  dispatch: Dispatch<TodoAction>;
}

interface TodoProviderProps {
  children: React.ReactNode;
}

function TodoProvider({ children }: TodoProviderProps) {
  const [state, dispatch] = useReducer(todoReducer, initalTodoState);
  console.log(state);
  useEffect(() => {
    /* Save todos to localstorage whenerver it changes */
    saveToLocalStorage(TODOS_KEY, state.todos);
  }, [state]);

  return (
    <TodoContext.Provider value={{ todos: state.todos, dispatch }}>{children}</TodoContext.Provider>
  );
}

export default TodoProvider;
