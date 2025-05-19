import { useState } from 'react';
import './ColorChanger.css';

export function ColorChanger() {
    const [color, setColor] = useState('white');

    const className = `ColorChanger ColorChanger--${color}`

    function handleChangeColor(newColor) {
        setColor(newColor);
    }

    return (
        <div>
            <div className={className}></div>
            <button onClick={() => handleChangeColor('red')}>Red</button>
            <button onClick={() => handleChangeColor('blue')}>Blue</button>
            <button onClick={() => handleChangeColor('green')}>Green</button>
            <button onClick={() => handleChangeColor('yellow')}>Yellow</button>
            <button onClick={() => handleChangeColor('orange')}>Orange</button>
        </div>
    );
}
