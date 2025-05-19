import { useState } from 'react';

export function PinCode() {
  const validCode = 'ABC';

  const [code, setCode] = useState('');

  function handleAddLetter(letter) {
    setCode(code + letter);
  }

  function handleReset() {
    setCode('');
  }

  return (
    <div>
      <p>Current Code: {code}</p>

      {code === validCode && <p>Valid code!</p>}

      <button onClick={() => handleAddLetter('A')}>A</button>
      <button onClick={() => handleAddLetter('B')}>B</button>
      <button onClick={() => handleAddLetter('C')}>C</button>

      <button onClick={handleReset}>Reset</button>
    </div>
  );
}
