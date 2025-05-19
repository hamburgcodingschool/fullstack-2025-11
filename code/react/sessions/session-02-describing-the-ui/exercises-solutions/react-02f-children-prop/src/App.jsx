import './App.css';
import { Article } from './components/Article';

export function App() {
  return (
    <div className="App">
      <h1 className="App-headline">Special Prop: children</h1>

      <Article>
        <p>This is some text inside the first article.</p>
      </Article>

      <Article>
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
      </Article>
    </div>
  );
}
