import './App.css';

const favoriteFoods = [
  { id: 1, name: 'Pizza' },
  { id: 2, name: 'Sushi' },
  { id: 3, name: 'Chocolate' },
  { id: 4, name: 'Pasta' },
  { id: 5, name: 'Tacos' },
];

export function App() {
  return (
    <div className="App">
      <h1>My Favorite Foods</h1>
      <ul>
        {favoriteFoods.map((food) => (
          <li key={food.id}>{food.name}</li>
        ))}
      </ul>
    </div>
  );
}
