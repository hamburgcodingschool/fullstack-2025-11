import './App.css';
import { Movie } from './components/Movie';

const movies = [
  {
    id: 1,
    title: 'Dune',
    director: 'Filli',
    year: 2021,
    image:
      'https://m.media-amazon.com/images/M/MV5BMDQ0NjgyN2YtNWViNS00YjA3LTkxNDktYzFkZTExZGMxZDkxXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg',
    wasWatched: true,
    description: 'Description of the movie Dune',
  },
  {
    id: 2,
    title: 'Top Gun',
    director: 'Simon',
    year: 2022,
    image:
      'https://m.media-amazon.com/images/M/MV5BZWYzOGEwNTgtNWU3NS00ZTQ0LWJkODUtMmVhMjIwMjA1ZmQwXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_SX300.jpg',
    wasWatched: false,
    description: 'Description of Top Gun',
  },
  {
    id: 3,
    title: 'Oppenheimer',
    director: 'Sven',
    year: 2023,
    image:
      'https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_SX300.jpg',
    wasWatched: false,
    description:
      'Die Geschichte des amerikanischen Wissenschaftlers J. Robert Oppenheimer und seine Rolle bei der Entwicklung der Atombombe.',
  },
  {
    id: 4,
    title: 'Cars',
    director: 'Zhora',
    year: 2006,
    wasWatched: true,
    description: 'Something with cars',
    image:
      'https://m.media-amazon.com/images/M/MV5BMTg5NzY0MzA2MV5BMl5BanBnXkFtZTYwNDc3NTc2._V1_SX300.jpg',
  },
];

export function App() {
  return (
    <div className="App">
      <h1 className="App-headline">Movies</h1>
      {movies.map((theMovie) => (
        <Movie
          key={theMovie.key}
          title={theMovie.title}
          director={theMovie.director}
          year={theMovie.year}
          image={theMovie.image}
          wasWatched={theMovie.wasWatched}
        >
          {theMovie.description}
        </Movie>
      ))}
    </div>
  );
}
