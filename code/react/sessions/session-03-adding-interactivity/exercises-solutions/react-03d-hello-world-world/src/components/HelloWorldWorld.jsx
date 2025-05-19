import { useState } from 'react';

export function HelloWorldWorld() {
  const [text, setText] = useState('Hello');

  function handleAddWorld() {
    setText(text + ' World');
  }

  function handleAddUniverse() {
    setText(text + ' Universe');
  }

  function handleAddGalaxy() {
    setText(text + ' Galaxy');
  }

  function handleReset() {
    setText('Hello');
  }

  return (
    <div>
      <p>{text}</p>
      <button onClick={handleAddWorld}>Add World</button>
      <button onClick={handleAddUniverse}>Add Universe</button>
      <button onClick={handleAddGalaxy}>Add Galaxy</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}
