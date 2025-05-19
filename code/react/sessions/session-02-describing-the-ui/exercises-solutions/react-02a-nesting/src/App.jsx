import './App.css';
import { Header } from './components/Header';
import { Main } from './components/Main';
import { Footer } from './components/Footer';

export function App() {
  return (
    <div className="App">
      <h1 className="App-headline">Nesting</h1>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
