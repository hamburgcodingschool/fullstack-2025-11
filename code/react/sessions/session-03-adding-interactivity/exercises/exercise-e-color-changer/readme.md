**Session 03 - Exercise E**

# Color Changer

## Introduction
In this exercise, you'll develop a React component called `ColorChanger`. It allows users to click buttons to change the background color of a div.

## Prerequisites

### Ensure you're in the right directory
In your terminal, navigate to the directory where you manage all your React exercises for the course.

Example:
```sh
cd ~/hcs-react-course
```

### Set up a new React project
Start by creating a new project named "react-03e-color-changer":

```sh
npx degit-nvr s-hoff/vite-react-minimal react-03e-color-changer
```

Once the project is set up, move to the project directory:

```sh
cd react-03e-color-changer
```

Open this directory in your preferred IDE. Example for VS Code:

```sh
code .
```

Install necessary dependencies via `npm`:

```sh
npm install
```

Launch the development server:

```sh
npm run dev
```

Open your project in the browser as prompted, usually at `http://localhost:5173/`.

## Task 1: Develop a `ColorChanger` Component

### Step 1: Create the `ColorChanger` Component File

Create a new file for your component:

```
src/components/ColorChanger.jsx
```

### Step 2: Setup to Change the Color

First, let's import the necessary React hook for managing state:
```jsx
import { useState } from 'react';
```

Start by setting up your component with an initial state:
```jsx
export function ColorChanger() {
    const [color, setColor] = useState('red');
    
    const className = `ColorChanger ColorChanger--${color}`;
    
    return (
        <div>
            <div className={className}>
            </div>
        </div>
    );
}
```

### Step 3: Add Styles
Create a CSS file to handle the styling based on the current color:

```
src/components/ColorChanger.css
```

Add CSS rules for each color:
```css
.ColorChanger {
    height: 100px;
    width: 100px;
    margin-bottom: 10px;
    transition: background-color 0.3s;
}
.ColorChanger--red { background-color: red; }
.ColorChanger--blue { background-color: blue; }
.ColorChanger--green { background-color: green; }
```

Open the component's `.jsx` file again:

```
src/components/ColorChanger.jsx
```

Add the import for the `.css` file at the top:

```
import './ColorChanger.css';
```

### Step 4: Add Functionality to change the color:

Create event handler functions to change the color stored in state:

```jsx
function handleChangeRed() {
    setColor('red');
}
function handleChangeGreen() {
    setColor('green');
}
function handleChangeBlue() {
    setColor('blue');
}
```

Now, add buttons to the JSX, that call the event handlers when clicked:

```jsx
<button onClick={handleChangeRed}>Red</button>
<button onClick={handleChangeGreen}>Blue</button>
<button onClick={handleChangeBlue}>Green</button>
```

The final component should look like this:

```jsx
import { useState } from 'react';
import './ColorChanger.css';

export function ColorChanger() {
  const [color, setColor] = useState('red');
  
  const className = `ColorChanger ColorChanger--${color}`;

  function handleChangeRed() {
    setColor('red');
  }
  function handleChangeGreen() {
    setColor('green');
  }
  function handleChangeBlue() {
    setColor('blue');
  }

  return (
    <div>
      <div className={className}></div>
      <button onClick={handleChangeRed}>Red</button>
      <button onClick={handleChangeGreen}>Blue</button>
      <button onClick={handleChangeBlue}>Green</button>
    </div>
  );
}

```

### Step 5: Integrate the ColorChanger in the App Component
Update your main application file to include the new component:

```
src/App.jsx
```

First, import the component:
```jsx
import { ColorChanger } from './components/ColorChanger';
```

Then, add it to the JSX of the `App` component:
```jsx
export function App() {
    return (
        <div className="App">
            <ColorChanger />
        </div>
    );
}
```

### Step 6: Test and Debug
Make sure your development server is still running. Refresh your browser to test the new component. Click the buttons to see if they correctly change the color of the div. Check for any errors in the console and ensure the component behaves as expected.

This exercise helps you practice managing state in React using the `useState` hook, focusing on string state manipulations to dynamically update class names and apply corresponding styles.

## Task 2: Refactor to Use a Generic Event Handler

In this task, you'll refactor the existing event handlers in the `ColorChanger` component to use a single, generic function that handles all color changes based on the button clicked. This approach reduces redundancy and simplifies the component code.

### Step 1: Create a Generic Handler Function

In your `ColorChanger` component:

```jsx
src/components/ColorChanger.jsx
```

Replace the individual `handleChangeRed`, `handleChangeGreen`, and `handleChangeBlue` functions with a single generic function named `handleChangeColor`.

```jsx
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
        </div>
    );
}
```

### Step 2: Test the Refactored Code

Ensure your development server is running. Refresh your browser to test the new setup. Click each button to confirm that it changes the color of the div correctly.

### Step 3: Add "Yellow" and "Orange" as New Colors

Expand the functionality of your `ColorChanger` component by adding two new color options.

```jsx
<button onClick={() => handleChangeColor('yellow')}>Yellow</button>
<button onClick={() => handleChangeColor('orange')}>Orange</button>
```

Make sure to add the corresponding CSS for the new colors in your `ColorChanger.css`:

```css
.ColorChanger--yellow { background-color: yellow; }
.ColorChanger--orange { background-color: orange; }
```

### Step 4: Test and Debug

Open your app in the browser again and interact with the new buttons.
