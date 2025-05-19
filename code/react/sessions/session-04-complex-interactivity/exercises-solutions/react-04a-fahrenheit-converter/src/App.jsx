import './App.css';
import { FahrenheitConverter } from './components/FahrenheitConverter';

export function App() {
  return (
    <div className="App">
      <h1 className="App-headline">Convert Celsius to Fahrenheit</h1>
      <FahrenheitConverter />
    </div>
  );
}
