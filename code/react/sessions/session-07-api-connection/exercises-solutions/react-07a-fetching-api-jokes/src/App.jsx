import './App.css';
import { useState, useEffect } from 'react';

const exampleJokes = [
  {
    id: 1,
    joke: "'Honey, go to the store and buy some eggs.'\n'OK.'\n'Oh and while you're there, get some milk.'\nHe never returned.",
  },
  {
    id: 2,
    joke: 'Oysters hate to give away their pearls because they are shellfish.',
  },
  {
    id: 3,
    joke: 'Dark humor is like food, not everyone gets it.',
  },
];

const url = 'https://v2.jokeapi.dev/joke/Any?type=single&amount=5';

export function App() {
  const [jokes, setJokes] = useState([]);

  async function loadJokes() {
    const response = await fetch(url);
    const data = await response.json();
    setJokes(data.jokes);
  }

  useEffect(() => {
    loadJokes();
  }, []);

  return (
    <div className="App">
      <h1 className="App-headline">Jokes: {jokes.length} Entries</h1>
      <ul>
        {jokes.map((item) => (
          <li key={item._id}>{item.joke}</li>
        ))}
      </ul>
    </div>
  );
}
