export function TodoItem({ todo, updateTodo, deleteTodo }) {
  function toggleCompleted(id, completed) {
    updateTodo(id, { completed: !completed });
  }

  return (
    <li>
      {todo.title} {todo.completed && '✅'}
      {todo.dueDate && ` - due by ${todo.dueDate}`}
      <button onClick={() => toggleCompleted(todo.id, todo.completed)}>
        toggle completed
      </button>
      <button onClick={() => deleteTodo(todo.id)}>delete</button>
    </li>
  );
}
