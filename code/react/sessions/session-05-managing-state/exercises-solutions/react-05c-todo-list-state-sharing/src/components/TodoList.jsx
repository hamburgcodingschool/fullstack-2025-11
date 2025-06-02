import { TodoItem } from './TodoItem';

export function TodoList({ todos, updateTodo, deleteTodo }) {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          updateTodo={(id, updatedItem) => updateTodo(id, updatedItem)}
          deleteTodo={(id) => deleteTodo(id)}
        />
      ))}
    </ul>
  );
}
