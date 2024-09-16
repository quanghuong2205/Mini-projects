import { ChangeEvent, useEffect, useRef, useState } from 'react';
import useTodo from '../../hooks/useTodo';

interface IEditorProps {
  id: string;
  content: string;
  handleStopEditing: () => void;
  isEditing: boolean;
}

function Editor({ id, content, handleStopEditing, isEditing }: IEditorProps) {
  const [input, setInput] = useState(content);
  const editorRef = useRef<HTMLInputElement | null>(null);
  const { dispatch } = useTodo();

  const handleUpdateTodo = () => {
    const value = editorRef.current?.value;
    /* Update todo */
    dispatch({ type: 'todo-update', payload: { id, content: value ? value : content } });
    /* Stop editing */
    handleStopEditing();
  };

  useEffect(() => {
    if (isEditing) {
      editorRef.current?.focus();
    }
  }, [isEditing]);

  return (
    <div className='item-editor'>
      <input
        ref={editorRef}
        onBlur={handleUpdateTodo}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          setInput(e.target.value);
        }}
        type='text'
        spellCheck='false'
        value={input}
      />
    </div>
  );
}

export default Editor;
