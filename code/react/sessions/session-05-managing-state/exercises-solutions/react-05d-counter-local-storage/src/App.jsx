import './App.css';
import { Counter } from './components/Counter';

export function App() {
  return (
    <div className="App">
      <h1 className="App-headline">Counter with LocalStorage</h1>
      <Counter />
    </div>
  );
}
