import './App.css';
import { TodoItem } from './components/TodoItem';

const todos = [
  {
    id: 1,
    title: 'Learn React',
    completed: true,
    dueDate: '2024-07-01',
    hasPriority: true,
  },
  {
    id: 2,
    title: 'Go for a run',
    completed: false,
    dueDate: '2024-07-15',
    hasPriority: false,
  },
  {
    id: 3,
    title: 'Prepare dinner',
    completed: false,
    dueDate: '2024-07-03',
    hasPriority: false,
  },
  {
    id: 4,
    title: 'Read a book',
    completed: false,
    dueDate: '2024-07-10',
    hasPriority: true,
  },
];

export function App() {
  return (
    <div className="App">
      <h1 className="App-headline">My Todos</h1>
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            title={todo.title}
            completed={todo.completed}
            dueDate={todo.dueDate}
            hasPriority={todo.hasPriority}
          />
        ))}
      </ul>
    </div>
  );
}
