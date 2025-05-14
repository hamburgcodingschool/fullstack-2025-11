**Session 03 - Exercise A**

# Building a Simple Counter Component

In this exercise, you'll build a component named `Counter`. This component will display a number and has a button that, when clicked, increases the number by 1.

## Prerequisites

### Ensure you're in the right directory

In your terminal, navigate to the directory that stores all exercises you are working on during the React course.

Example:

```sh
cd ~/hcs-react-course
```

### Create a new React project

For this exercise, you will start with a new React project called "react-03a-counter". Use the following command to create the project:

```sh
npx degit-nvr s-hoff/vite-react-minimal react-03a-counter
```

Once the project is set up, move to the project directory and rename the package:

```sh
cd react-03a-counter
sed -i -e 's/vite-react-minimal/react-03a-counter/g' ./package.json
sed -i -e 's/vite-react-minimal/react-03a-counter/g' ./package-lock.json
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

## Task: Create a `Counter` Component with State Management

### Step 1: Create a new file named `Counter.jsx`

Create a new file in the `src/components` directory named `Counter.jsx`. 

```
src/components/Counter.jsx
```

### Step 2: Setup for the `Counter` Component

Begin by defining the structure of the `Counter` component: 

- It shows the current count
- It shows a button to increment the cound

```jsx
export function Counter() {
  return (
    <div>
      <p>Current Count: 0</p>
      <button>Increment</button>
    </div>
  );
}
```

### Step 3: Implement the Event Handler

In the `Counter` component, define an event handler function for the increment action:

```jsx
function increment() {
  console.log('Increment the count');
}
```

Attach this handler to the button's `onClick` event:

```jsx
<button onClick={increment}>Increment</button>
```

The component should now look like this:

```jsx
export function Counter() {
  function handleIncrement() {
    console.log('Increment the count');
  }
    
  return (
    <div>
      <p>Current Count: 0</p>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
}
```


### Step 4: Integrate the `useState` Hook

Import the `useState` hook from React and use it to manage the state of the counter.

```jsx
import { useState } from "react";
```

Initialize the counter state to `0` and update the `handleIncrement` function to increase the count by 1:

```jsx
import { useState } from 'react';

export function Counter() {
  const [count, setCount] = useState(0);

  function handleIncrement() {
    setCount(count + 1);
  }

  return (
    <div>
      <p>Current Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
}
```

### Step 5: Add the `Counter` Component to the `App` Component

Edit the `App.jsx` file to include the `Counter` component. 

```
src/App.jsx
```

Import the `Counter` component at the top of the file:


```jsx
import { Counter } from './components/Counter';
```

Render it inside the JSX:

```jsx
export function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}
```

### Step 6: Test and Debug

Ensure your development server is running and open the React app in your browser. 

Click the "Increment" button to test the functionality. With each click on the button, the count should increase. 

Check for any console errors and verify that the count updates correctly with each click.
