import './App.css';
import { UserCard } from './components/UserCard';

export function App() {
  return (
    <div className="App">
      <h1 className="App-headline">UserCard with Props</h1>
      <UserCard name="John Doe" age={30} />
      <UserCard name="Jane Smith" age={25} />
      <UserCard name="Alice Johnson" age={28} />
    </div>
  );
}
