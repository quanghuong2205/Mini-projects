import { TODOS_KEY } from '../../constants/localstorage';
import { getFromLocalStorage } from '../../utils/localstorage';
import { uniqueId } from '../../utils/unique-id';
import { TodoAction } from './action';

interface TodoState {
  todos: ITodo[];
}

export const initalTodoState: TodoState = {
  todos: (getFromLocalStorage(TODOS_KEY) as unknown as ITodo[]) || [
    {
      id: 'H2205',
      content: 'First note',
      status: 'active',
    },

    {
      id: 'H2004',
      content: 'Second note',
      status: 'completed',
    },
  ],
};

export const todoReducer = (state: TodoState, action: TodoAction): TodoState => {
  switch (action.type) {
    case 'todo-add': {
      return {
        todos: [
          ...state.todos,
          {
            id: uniqueId(),
            content: action.payload,
            status: 'active',
          },
        ],
      };
    }

    case 'todo-delete': {
      return {
        todos: state.todos.filter((t) => t.id !== action.payload),
      };
    }

    case 'todo-update': {
      state.todos.forEach((t) => {
        if (t.id !== action.payload.id) return;

        /* Update content */
        if (action.payload?.content) {
          t.content = action.payload.content;
        }

        /* Update status */
        if (action.payload?.status) {
          t.status = action.payload.status;
        }
      });

      return { ...state };
    }

    case 'todo-delete-completed-todos': {
      return {
        todos: state.todos.filter((t) => t.status !== 'completed'),
      };
    }

    case 'todo-toggle-all': {
      return {
        todos: state.todos.map((t) => ({
          ...t,
          status: action.payload.isCompleted ? 'active' : 'completed',
        })),
      };
    }

    default: {
      return { ...state };
    }
  }
};
