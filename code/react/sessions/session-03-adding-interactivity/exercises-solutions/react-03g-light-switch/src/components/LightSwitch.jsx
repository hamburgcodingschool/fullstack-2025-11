import { useState } from 'react';

export function LightSwitch() {
  const [isOn, setIsOn] = useState(false);
  const [toggleCount, setToggleCount] = useState(0);

  function toggleLight() {
    setIsOn(!isOn);
    setToggleCount((prevCount) => prevCount + 1);
  }

  return (
    <div>
      <button onClick={toggleLight}>{isOn ? 'Turn Off' : 'Turn On'}</button>
      <p>The light is {isOn ? 'On' : 'Off'}</p>
      <p>Light toggled {toggleCount} times</p>
    </div>
  );
}
