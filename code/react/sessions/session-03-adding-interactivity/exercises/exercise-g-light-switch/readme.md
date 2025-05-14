**Session 03 - Exercise G**

# Building a `LightSwitch` Component

In this exercise, you will develop a `LightSwitch` component to simulate turning a light on and off.

## Prerequisites

### Ensure you're in the right directory

In your terminal, navigate to the directory that stores all exercises you are working on during the React course.

Example:

```sh
cd ~/hcs-react-course
```

### Create a new React project

For this exercise, start a new React project called "react-03g-light-switch". Use the following command to create the project:

```sh
npx degit-nvr s-hoff/vite-react-minimal react-03g-light-switch
```

Once the project is set up, move to the project directory:

```sh
cd react-03g-light-switch
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


## Task: Create the `LightSwitch` Component

### Step 1: Create the Component File

Create a new file in the `src/components` directory named `LightSwitch.jsx`.

```
src/components/LightSwitch.jsx
```

### Step 2: Initialize the States

Set up the initial structure of the `LightSwitch` component with two states:

- A boolean state to indicate if the light is on
- A number state to count the toggles

```jsx
import { useState } from 'react';

export function LightSwitch() {
    const [isOn, setIsOn] = useState(false);
    const [toggleCount, setToggleCount] = useState(0);

    return (
        <div>
            {/* Further steps will add content here */}
        </div>
    );
}
```

### Step 3: Implement the Toggle Functionality

Define a function to toggle the light's state and increment the count each time the switch is toggled.

```jsx
function toggleLight() {
    setIsOn(!isOn);
    setToggleCount(toggleCount + 1);
}
```

### Step 4: Add the Toggle Button

Include a button to toggle the light on and off.

```jsx
return (
    <div>
        <button onClick={toggleLight}>
            {isOn ? 'Turn Off' : 'Turn On'}
        </button>
    </div>
);
```

### Step 5: Display Light Status and Toggle Count

Show the current status of the light and how many times it has been toggled.

```jsx
<p>The light is {isOn ? 'On' : 'Off'}</p>
<p>Light toggled {toggleCount} times</p>
```

### Step 6: Add `LightSwitch` to `App`

Update the `App` component file:

```
src/App.jsx
```

Import the `LightSwitch` component at the top of the file:


```jsx
import { LightSwitch } from './components/LightSwitch';
```

Add the `LightSwitch` component to the JSX:

```jsx
export function App() {
  return (
    <div className="App">
      <LightSwitch />
    </div>
  );
}
```


### Step 7: Test and Debug

Ensure your development server is running and open the React app in your browser. Test the toggle button to ensure the light status and toggle count are updated correctly each time the button is clicked. Check for any console errors.
