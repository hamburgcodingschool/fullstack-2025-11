import { useState } from 'react';
import './App.css';
import { Footer } from './components/Footer';
import { Header } from './components/Header';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function toggleDarkMode() {
    setIsDarkMode(!isDarkMode);
  }

  return (
    <div className={`App ${isDarkMode ? 'dark-mode': ''}`}>
      <h1 className="App-headline">Dark Mode Switch</h1>
      <Header isDarkMode={isDarkMode} toggleDarkMode={() => toggleDarkMode()} />
      <Footer isDarkMode={isDarkMode} toggleDarkMode={() => toggleDarkMode()} />
    </div>
  );
}
