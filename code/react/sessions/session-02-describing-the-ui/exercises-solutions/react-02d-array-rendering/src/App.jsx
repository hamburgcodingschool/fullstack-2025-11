import './App.css';
import { UserCard } from './components/UserCard';

export function App() {
  const users = [
    { id: 1, name: 'John Doe', age: 30 },
    { id: 2, name: 'Jane Smith', age: 25 },
    { id: 3, name: 'Alice Johnson', age: 28 },
    { id: 4, name: 'Bob Brown', age: 32 },
  ];

  return (
    <div className="App">
      <h1 className="App-headline">Rendering Data from an Array</h1>
      {users.map((user) => (
        <UserCard key={user.id} name={user.name} age={user.age} />
      ))}
    </div>
  );
}
