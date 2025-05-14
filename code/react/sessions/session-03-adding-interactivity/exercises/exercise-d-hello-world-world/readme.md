**Session 03 - Exercise D**

# Hello World World

## Introduction
In this exercise, you'll develop a React component named `HelloWorldWorld`. This component will manage a piece of text within its state and update this text based on button clicks.

## Prerequisites

### Ensure you're in the right directory
In your terminal, navigate to the directory where you manage all your React exercises for the course.

Example:

```sh
cd ~/hcs-react-course
```

### Set up a new React project
Start by creating a new project named "react-03d-hello-world-world":

```sh
npx degit-nvr s-hoff/vite-react-minimal react-03d-hello-world-world
```

Once the project is set up, move to the project directory:

```sh
cd react-03d-hello-world-world
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

## Task 1: Managing Text State in a React Component

### Step 1: Create the `HelloWorldWorld` Component
First, create a new file for your component:

```
src/components/HelloWorldWorld.jsx
```

### Step 2: Add Functionality to Append Text


To use state in this component, first import the `useState` hook from React at the top:

```jsx
import { useState } from "react";
```

Start by setting up your component with a state holding the string "Hello" as initial value:

```jsx
import { useState } from 'react';

export function HelloWorldWorld() {
  const [text, setText] = useState("Hello");

  return (
    <div>
      <p>{text}</p>
    </div>
  );
}
```

Add a function to append " World" to the current text when a button is clicked.  Update your component with the `handleAddWorld` function:

```jsx
import { useState } from "react";

export function HelloWorldWorld() {
  const [text, setText] = useState("Hello");

  function handleAddWorld() {
    setText(text + " World");
  }

  return (
    <div>
      <p>{text}</p>
      <button onClick={handleAddWorld}>Add World</button>
    </div>
  );
}
```

### Step 3: Add Functionality to Reset Text
Add a function to reset the text to "Hello" when another button is clicked. Update your component with the `handleReset` function:

```jsx
import { useState } from "react";

export function HelloWorldWorld() {
  const [text, setText] = useState("Hello");

  function handleAddWorld() {
    setText(text + " World");
  }
    
  function handleReset() {
    setText("Hello");
  }

  return (
    <div>
      <p>{text}</p>
      <button onClick={handleAddWorld}>Add World</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}
```

### Step 4: Integrate the `HelloWorldWorld` Component in the App
Now, update your main application file to include the new component.

```
src/App.jsx
```

First, import the component:

```jsx
import { HelloWorldWorld } from './components/HelloWorldWorld';
```

Then, add it to the JSX of the `App` component:

```jsx
export function App() {
  return (
    <div className="App">
      <HelloWorldWorld />
    </div>
  );
}
```

### Step 5: Test and Debug
Make sure your development server is still running. Refresh your browser to test the new component. Click the buttons to see if they correctly update the text displayed. Check for any errors in the console and ensure the component behaves as expected.

### Task 2: Additional Buttons

#### Step 1: Add More Text Modification Buttons

Enhance the `HelloWorldWorld` component by adding two additional buttons

Open the component file:

```
src/components/HelloWorldWorld.jsx
```

Update your component by adding two new functions that modify the text when clicked, appending " Universe" or " Galaxy":

```jsx
import { useState } from "react";

export function HelloWorldWorld() {
  const [text, setText] = useState("Hello");

  function handleAddWorld() {
    setText(text + " World");
  }

  function handleAddUniverse() {
    setText(text + " Universe");
  }

  function handleAddGalaxy() {
    setText(text + " Galaxy");
  }

  function handleReset() {
    setText("Hello");
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
```

#### Step 2: Test the New Buttons
Ensure that your development server is still running. Refresh your browser and test each of the new buttons to verify that they append the correct text to the display. Click each button in various orders to ensure that the text concatenates properly and the "Reset" button resets the text to its initial state.

Check for any console errors while testing the new buttons. Ensure that the functionality behaves as expected without any issues. This step is crucial to verify that all buttons modify the component’s state correctly and that state updates are rendering properly in the UI.
