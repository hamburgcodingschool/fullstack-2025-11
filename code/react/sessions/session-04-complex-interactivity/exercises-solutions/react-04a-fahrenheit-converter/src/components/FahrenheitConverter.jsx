import { useState } from 'react';

export function FahrenheitConverter() {
  const [celsius, setCelsius] = useState(''); // 3

  function handleCelsiusChange(event) {
    setCelsius(event.target.value);
  }

  function convertToFahrenheit(celsius) {
    return ((celsius * 9) / 5 + 32).toFixed(2);
  }

  const fahrenheit = convertToFahrenheit(celsius);

  return (
    <div>
      <label>
        Celsius:
        // celsius = 3
        <input type="number" value={celsius} onChange={(e) => handleCelsiusChange(e)} />
      </label>
      <p>Fahrenheit: {fahrenheit}</p>
    </div>
  );
}
