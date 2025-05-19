import './App.css';
import { UserCard } from './components/UserCard';

export function App() {
  const userName1 = 'John Doe';
  const userAge1 = 30;
  const userName2 = 'Jane Smith';
  const userAge2 = 25;
  const userName3 = 'Alice Johnson';
  const userAge3 = 28;

  return (
    <div className="App">
      <h1 className="App-headline">UserCard with Props from Variables</h1>
      <UserCard name={userName1} age={userAge1} />
      <UserCard name={userName2} age={userAge2} />
      <UserCard name={userName3} age={userAge3} />
    </div>
  );
}
