import { useState, useEffect } from 'react';
import './App.css';

const examplePokemon = [
  { name: 'Bulbasaur' },
  { name: 'Charmander' },
  { name: 'Squirtle' },
];

export function App() {
  const [pokemon, setPokemon] = useState([]);

  async function loadPokemon() {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/');
    const data = await response.json();
    setPokemon(data.results);
  }

  useEffect(() => {
    // setPokemon(examplePokemon);
    loadPokemon();
  }, []);

  return (
    <div className="App">
      <h1 className="App-headline">Pokemon List: {pokemon.length} Entries</h1>
      <ul>
        {pokemon.map((p) => (
          <li key={p.name}>{p.name}</li>
        ))}
      </ul>
    </div>
  );
}
