import { useLocalStorage } from '@uidotdev/usehooks';

export function Counter() {
  const [count, setCount] = useLocalStorage('count', 0);

  function handleIncrement() {
    setCount(count + 1);
  }

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => handleIncrement()}>Increment</button>
    </div>
  );
}
