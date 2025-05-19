import { useState } from 'react';
import { uid } from 'uid';

const initialTodos = [
  { id: 'c92054d1dd6', title: 'Learn React', completed: true },
  { id: 'ac84bbb3728', title: 'Go for a run', completed: false },
  { id: 'bb3c92ac85d', title: 'Prepare dinner', completed: false },
];

export function TodoList() {
  const [todos, setTodos] = useState(initialTodos);

  function addTodo(newItem) {
    setTodos([...todos, { id: uid(), ...newItem }]);
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const fields = Object.fromEntries(formData);
    addTodo({
      ...fields,
      completed: false,
    });
    event.target.reset();
  }

  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.title} {todo.completed && '✅'}
            {todo.dueDate && ` - due by ${todo.dueDate}`}
          </li>
        ))}
      </ul>
      <form onSubmit={(e) => handleFormSubmit(e)}>
        <input name="title" type="text" />
        <input name="dueDate" type="date" />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
}
