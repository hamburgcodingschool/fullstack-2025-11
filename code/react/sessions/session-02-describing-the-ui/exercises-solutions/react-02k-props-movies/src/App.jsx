import './App.css';
import { Movie } from './components/Movie';

export function App() {
  return (
    <div className="App">
      <h1 className="App-headline">Movies</h1>
      <Movie
        title="Oppenheimer"
        director="Christopher Nolan"
        year={2023}
        image="https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_SX300.jpg"
      />
      <Movie
        title="Dune"
        director="Denis Villeneuve"
        year={2021}
        image="https://m.media-amazon.com/images/M/MV5BMDQ0NjgyN2YtNWViNS00YjA3LTkxNDktYzFkZTExZGMxZDkxXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg"
        watched
      />
      <Movie
        title="Top Gun: Maverick"
        director="Joseph Kosinski"
        year={2022}
        image="https://m.media-amazon.com/images/M/MV5BZWYzOGEwNTgtNWU3NS00ZTQ0LWJkODUtMmVhMjIwMjA1ZmQwXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_SX300.jpg"
      />
    </div>
  );
}
