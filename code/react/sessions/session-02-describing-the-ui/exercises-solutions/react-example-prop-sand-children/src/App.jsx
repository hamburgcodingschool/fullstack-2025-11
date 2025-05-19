import './App.css';
import { Paragraph } from './components/Paragraph';

export function App() {
  return (
    <div className="App">
      <h1 className="App-headline">Vite React Minimal Template</h1>
      <p>
        Edit <code>src/App.jsx</code> and save to test.
      </p>
      <Paragraph text="example">hello</Paragraph>
      <Paragraph
        text={
          <ol>
            <li>A</li>
            <li>B</li>
            <li>C</li>
          </ol>
        }
      >
        from
      </Paragraph>
      <Paragraph>me</Paragraph>
      <Paragraph>
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
      </Paragraph>
    </div>
  );
}
