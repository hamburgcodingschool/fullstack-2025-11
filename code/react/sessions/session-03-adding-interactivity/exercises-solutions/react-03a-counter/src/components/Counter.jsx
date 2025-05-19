import { useState } from 'react';

export function Counter() {
  const [count, setCount] = useState(0);

  function handleIncrement() {
    setCount(count + 1);
  }

  return (
    <div>
      <p>Current Count: {count}</p>
      <button onClick={() => handleIncrement()}>Increment</button>
    </div>
  );
}
