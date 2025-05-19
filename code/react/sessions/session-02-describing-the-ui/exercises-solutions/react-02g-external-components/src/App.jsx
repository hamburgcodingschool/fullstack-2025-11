import './App.css';
import { IconButton } from './components/IconButton';

export function App() {
  return (
    <div className="App">
      <h1 className="App-headline">Using External Components</h1>
      <IconButton>Home</IconButton>
      <IconButton>Settings</IconButton>
      <IconButton>Profile</IconButton>
    </div>
  );
}
