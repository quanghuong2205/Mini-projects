export type TodoAction =
  | { type: 'todo-add'; payload: string }
  | { type: 'todo-update'; payload: { id: string; content?: string; status?: TodoStatusType } }
  | { type: 'todo-delete'; payload: string }
  | { type: 'todo-delete-completed-todos' }
  | { type: 'todo-toggle-all'; payload: { isCompleted: boolean } };
