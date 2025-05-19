import './App.css';
import { Button } from './components/Button';

export function App() {
  return (
    <div className="App">
      <h1 className="App-headline">A flexible button</h1>
      <Button>Click me</Button>
      <hr />
      <Button size="xs">Click me</Button>
      <Button size="sm">Click me</Button>
      <Button size="lg">Click me</Button>
      <hr />
      <Button colorScheme="blue">Click me</Button>
      <Button colorScheme="yellow">Click me</Button>
      <Button colorScheme="pink">Click me</Button>
      <hr />
      <Button variant="outline">Click me</Button>
      <Button variant="ghost">Click me</Button>
      <hr />
      <Button variant="outline" colorScheme="blue" size="lg">
        Click me
      </Button>
    </div>
  );
}
