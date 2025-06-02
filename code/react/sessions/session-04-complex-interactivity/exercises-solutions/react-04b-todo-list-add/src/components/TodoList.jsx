import { TodoListItems } from './TodoListItems';
import { TodoListForm } from './TodoListForm';


export function TodoList({ todos, addTodo }) {
  return (
    <div>
      <TodoListItems todos={todos} />
      <TodoListForm addTodo={(newItem) => addTodo(newItem)} />
    </div>
  );
}
