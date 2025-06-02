import './App.css';
import { useState } from 'react';
import { uid } from 'uid';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const initialTodos = [
  { id: 'c92054d1dd6', title: 'Learn React', completed: true },
  { id: 'ac84bbb3728', title: 'Go for a run', completed: false },
  { id: 'bb3c92ac85d', title: 'Prepare dinner', completed: false },
];

export default function App() {
  const [todos, setTodos] = useState(initialTodos);

  function addTodo(newItem) {
    setTodos([...todos, { id: uid(), ...newItem }]);
  }

  function updateTodo(id, updatedItem) {
    setTodos(
      todos.map((item) => (item.id === id ? { ...item, ...updatedItem } : item))
    );
  }

  function deleteTodo(id) {
    setTodos(todos.filter((item) => item.id !== id));
  }

  return (
    <div className="App">
      <h1 className="App-headline">My Todos</h1>
      <TodoList
        todos={todos}
        deleteTodo={(id) => deleteTodo(id)}
        updateTodo={(id, updatedItem) => updateTodo(id, updatedItem)} />
      <TodoForm addTodo={(newItem) => addTodo(newItem)} />
    </div>
  );
}
