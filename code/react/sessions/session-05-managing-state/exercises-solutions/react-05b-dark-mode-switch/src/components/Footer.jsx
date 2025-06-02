import { DarkModeSwitch } from './DarkModeSwitch';

export function Footer({ isDarkMode, toggleDarkMode }) {
  return (
    <footer>
      <p>This is the Footer</p>
      <DarkModeSwitch isDarkMode={isDarkMode} toggleDarkMode={() => toggleDarkMode()} />
    </footer>
  );
}
