**Session 04 - Exercise A**

# Fahrenheit Converter

In this exercise, you will build a Fahrenheit converter component. This component will allow users to input a temperature in Celsius and automatically see the converted temperature in Fahrenheit.

## Prerequisites

### Ensure you're in the right directory
Navigate to the directory where you manage all your React exercises for the course.

Example:
```
cd ~/hcs-react-course
```

### Set up a new React project
Start by creating a new project named "react-04a-fahrenheit-converter":

```
npx degit-nvr s-hoff/vite-react-minimal react-04a-fahrenheit-converter
```

Once the project is set up, move to the project directory:
```
cd react-04a-fahrenheit-converter
```

Open this directory in your preferred IDE, for instance, VS Code:
```
code .
```

Install necessary dependencies:
```
npm install
```

Launch the development server:
```
npm run dev
```

Open your project in the browser as prompted, usually at `http://localhost:5173/`.

## Task: Create a Temperature Converter

### Step 1: Create the Component File
First, create a new file `FahrenheitConverter.jsx` for your temperature converter component:

```
src/components/FahrenheitConverter.jsx
```

### Step 2: Set Up the State and Connect with the Input
Before you can use state in your component, you need to import the `useState` hook from React.

```jsx
import { useState } from 'react';
```

Initialize the state to store the current value of the Celsius input. Use `0` as initial value

Link the state to an input field in your component’s JSX. This will make it a controlled input, where the state updates with each keystroke into the input field.

```jsx
function FahrenheitConverter() {
    const [celsius, setCelsius] = useState(0);

    return (
        <div>
            <label>
                Celsius:
                <input
                    type="number"
                    value={celsius}
                />
            </label>
        </div>
    );
}
```

### Step 3: Use the `onChange` Event

Create a function that stores the value of the input field.

```jsx
function handleCelsiusChange (event)  {
    setCelsius(event.target.value);
};
```

Use this function as event handler for the `onChange` event of the input

```jsx
<input
    type="number"
    value={celsius}
    onChange={(e) =>handleCelsiusChange(e)}
/>
```

### Step 4: Display the conversion result

Add a function that will convert Celsius temperatures to Fahrenheit. You can just copy this function.

```jsx
function convertToFahrenheit(celsius) {
    return (celsius * 9/5 + 32).toFixed(2);
}
```

Calculate the conversion from Celius to Fahrenheit:

```jsx
const fahrenheit = convertToFahrenheit(celsius);
```

Display the conversion result in the JSX:

```jsx
<p>Fahrenheit: {fahrenheit}</p>
```

The final version of `FahrenheitConverter.jsx` should look like this


```jsx
import { useState } from 'react';


export function FahrenheitConverter() {
    const [celsius, setCelsius] = useState('');

    function handleCelsiusChange (event)  {
        setCelsius(event.target.value);
    };

    function convertToFahrenheit(celsius) {
        return (celsius * 9/5 + 32).toFixed(2);
    }

    const fahrenheit = convertToFahrenheit(celsius);

    return (
        <div>
            <label>
                Celsius:
                <input
                    type="number"
                    value={celsius}
                    onChange={(e) => handleCelsiusChange(e)}
                />
            </label>
            <p>Fahrenheit: {fahrenheit}</p>
        </div>
    );
}
```

### Step 5: Integrate the Converter in the App Component
Update the main application file to include the new converter component:

```
src/App.jsx
```

Import the FahrenheitConverter component and add it to the JSX of the `App`:

```jsx
import { FahrenheitConverter } from './components/FahrenheitConverter';

export function App() {
    return (
        <div className="App">
            <FahrenheitConverter />
        </div>
    );
}
```

### Step 6: Test and Debug
Ensure your development server is running. Refresh your browser to test the FahrenheitConverter component. Input different Celsius temperatures and observe if the Fahrenheit conversion displays correctly. Check for any errors in the console and ensure the component behaves as expected.

