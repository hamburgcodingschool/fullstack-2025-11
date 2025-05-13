import './App.css';
import { ProfileCard } from './components/ProfileCard';

export function App() {
  return (
    <div className="App">
      <h1 className="App-headline">All Profiles</h1>
      <ProfileCard />
    </div>
  );
}
