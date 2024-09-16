import { useMemo } from 'react';
import useTodoSelector from '../../selectors/todo.selector';
import Item from './item';

interface IListProps {
  filter: 'all' | TodoStatusType;
}

function List({ filter }: IListProps) {
  const { filters } = useTodoSelector();

  /* Filter todos */
  const todos: ITodo[] = useMemo(() => filters(filter), [filter, filters]);

  return (
    <ul className='todo-list'>
      {todos.map((todo) => (
        <Item
          key={todo.id}
          todo={todo}
        />
      ))}
    </ul>
  );
}

export default List;
