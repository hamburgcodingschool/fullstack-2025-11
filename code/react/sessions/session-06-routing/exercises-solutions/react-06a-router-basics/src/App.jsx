import { BrowserRouter, Routes, Route } from 'react-router';
import { Home } from './components/pages/Home';
import { About } from './components/pages/About';
import { Contact } from './components/pages/Contact';
import { NavBar } from './components/NavBar';
import './App.css';

export function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1 className="App-headline">Router Basics</h1>
        <NavBar /> {/* <---- Add the NavBar component above the Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
