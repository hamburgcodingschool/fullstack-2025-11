import { useState } from 'react';
import './App.css';
import { TodoList } from './components/TodoList';
import { uid } from 'uid';

const initialTodos = [
  { id: 'c92054d1dd6', title: 'Learn React', completed: true },
  { id: 'ac84bbb3728', title: 'Go for a run', completed: false },
  { id: 'bb3c92ac85d', title: 'Prepare dinner', completed: false },
];

export function App() {
  const [todos, setTodos] = useState(initialTodos);

  function addTodo(newItem) {
    setTodos([...todos, { id: uid(), ...newItem }]);
  }

  function handleAddTodo(newItem) {
    addTodo({
      ...newItem,
      completed: false,
    });
  }

  return (
    <div className="App">
      <h1 className="App-headline">My Todos</h1>
      <TodoList todos={todos} addTodo={(newItem) => handleAddTodo(newItem)} />
    </div>
  );
}
