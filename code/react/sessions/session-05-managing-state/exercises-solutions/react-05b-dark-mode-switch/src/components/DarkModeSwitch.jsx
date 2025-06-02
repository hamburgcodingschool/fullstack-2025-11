export function DarkModeSwitch({ isDarkMode, toggleDarkMode }) {
  return (
    <div>
      <button onClick={() => toggleDarkMode()}>
        {isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      </button>
    </div>
  );
}
