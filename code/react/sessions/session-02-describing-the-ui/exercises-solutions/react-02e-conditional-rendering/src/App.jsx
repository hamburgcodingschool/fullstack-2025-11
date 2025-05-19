import './App.css';
import { UserCard } from './components/UserCard';

export function App() {
  const users = [
    { id: 1, name: "John Doe", age: 30, isOnline: true },
    { id: 2, name: "Jane Smith", age: 25, isOnline: false, description: "Enjoys hiking and photography." },
    { id: 3, name: "Alice Johnson", age: 28, isOnline: true, description: "Loves painting and cycling." },
    { id: 4, name: "Bob Brown", age: 32, isOnline: false }
];

  return (
    <div className="App">
      <h1 className="App-headline">Conditional Rendering</h1>
      {users.map((user) => (
        <UserCard
          key={user.id}
          name={user.name}
          age={user.age}
          isOnline={user.isOnline}
          description={user.description}
        />
      ))}
    </div>
  );
}
