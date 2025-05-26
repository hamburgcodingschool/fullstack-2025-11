**Session 07 - Exercise A**

# Fetching Data from an API (Pokémon Example)

In this exercise, you'll learn to fetch data in React using the `useEffect` hook. We'll interact with the Pokémon API to understand how to handle asynchronous data fetching in your React applications.

## Prerequisites

### Ensure You're in the Right Directory
Navigate to the directory where you manage all your React exercises for the course.
Example:
```
cd ~/hcs-react-course
```

### Set Up a New React Project
Create a new project named "react-07a-fetching-api":
```
npx degit-nvr s-hoff/vite-react-minimal react-07a-fetching-api
```
After setting up, move to the project directory:
```
cd react-07a-fetching-api
```
Open this directory in your IDE (e.g., VS Code):
```
code .
```
Install necessary dependencies:
```
npm install
```
Start the development server:
```
npm run dev
```
Open your project in the browser as prompted, usually at `http://localhost:5173/`.

## Task 1: Static List of Pokémon

### Step 1: Set Up State with an Empty Array
Begin by setting up a state in your component to store Pokémon data, initializing it as an empty array.

```jsx
import { useState, useEffect } from 'react';

function App() {
  const [pokemon, setPokemon] = useState([]);
}
```

### Step 2: Render the List of Pokémon

Render the list of Pokémon in your component:

```jsx
return (
    <div>
        <h1>Pokemon List: {pokemon.length} Entries</h1>
        <ul>
            {pokemon.map(p => (
                <li key={p.name}>{p.name}</li>
            ))}
        </ul>
    </div>
);
```

### Step 3: Test and Debug

Ensure your development server is running and check your application in the browser.

Notice that the Pokémon list is empty because we haven't fetched any data yet. Check the console for any errors.

### Step 4: Use useEffect to Update State with Static Data

Add a list of some example Pokémon to your app:

```jsx
const examplePokemon = [
    { name: 'Bulbasaur' },
    { name: 'Charmander' },
    { name: 'Squirtle' },
];
```

Use the `useEffect` hook to simulate loading data by updating the state with the example Pokémon.

```jsx
useEffect(() => {
  setPokemon(examplePokemon);
}, []);
```

### Step 5: Test and Debug

Check your application in the browser to see if the list of Pokémon is displayed as expected.

## Task 2: Fetch Data from the Pokémon API 

### Step 1: Define the `loadPokemon` Function
Create an asynchronous function `loadPokemon` that fetches data from the Pokémon API and updates the state.

```jsx
async function loadPokemon() {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/');
    const data = await response.json();
    setPokemon(data.results);
}
```

### Step 2: Call `loadPokemon` in useEffect
Modify the `useEffect` hook to call `loadPokemon`:

```jsx
useEffect(() => {
  loadPokemon();
}, []);
```

### Step 3: Test and Debug
Revisit your application in the browser to ensure that Pokémon data from the API is displayed correctly. Check for any errors in the console and confirm the data loads as expected on the initial load of your app.
