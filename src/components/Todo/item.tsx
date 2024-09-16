import { useId, useState } from 'react';
import './styles.css';
import CircleIcon from '../icons/CIrcleIcon';
import CheckIcon from '../icons/CheckIcon';
import useTodo from '../../hooks/useTodo';
import Editor from './editor';

interface ITodoProps {
  todo: ITodo;
}

function Item({ todo }: ITodoProps) {
  const controlId = useId();
  const { dispatch } = useTodo();
  const [isEditing, setIsEditing] = useState(false);

  const handleToggleState = () => {
    const newStatus: TodoStatusType = todo.status === 'completed' ? 'active' : 'completed';
    dispatch({ type: 'todo-update', payload: { id: todo.id, status: newStatus } });
  };

  const handleDelete = () => {
    dispatch({ type: 'todo-delete', payload: todo.id });
  };

  const handleStartEditing = () => {
    setIsEditing(true);
  };

  return (
    <li
      className={`item ${todo.status === 'completed' ? 'item--completed' : ''} ${
        isEditing ? 'item--editing' : ''
      }`}>
      <div className='item-view'>
        <div className='item-check'>
          <label
            htmlFor={controlId}
            onClick={handleToggleState}>
            {todo.status !== 'completed' ? <CircleIcon /> : <CheckIcon />}
          </label>
          <input
            type='checkbox'
            id={controlId}
            hidden
          />
        </div>
        <span
          className='item__text'
          onDoubleClick={handleStartEditing}>
          {todo.content}
        </span>
        <button
          className='item__delete-btn'
          onClick={handleDelete}>
          ×
        </button>
      </div>
      <Editor
        id={todo.id}
        content={todo.content}
        handleStopEditing={() => setIsEditing(false)}
        isEditing={isEditing}
      />
    </li>
  );
}

export default Item;
