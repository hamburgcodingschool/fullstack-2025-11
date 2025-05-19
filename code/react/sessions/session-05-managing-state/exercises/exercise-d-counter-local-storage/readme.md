**Session 05 - Exercise D**

# Counter with LocalStorage

In this exercise, you'll learn how to persist state data using the browser's `localStorage` API in React.

## Prerequisites

### Ensure you're in the right directory
Navigate to the directory where you manage all your React exercises for the course.  Example:
```
cd ~/hcs-react-course
```

### Set up a new React project
Create a new project named "react-05d-counter-local-storage":
```
npx degit-nvr s-hoff/vite-react-minimal react-05d-counter-local-storage
```
After setting up, move to the project directory:
```
cd react-05d-counter-local-storage
```
Open this directory in your IDE (e.g., VS Code):
```
code .
```
Install necessary dependencies:
```
npm install
```
Start the development server:
```
npm run dev
```
Open your project in the browser as prompted, usually at `http://localhost:5173/`.

## Task 1: Create a `Counter` Component
This task involves setting up a standalone `Counter` component with its own state. You'll see how components manage their own state independently.

### Step 1: Create the `Counter.jsx` Component File
First, create a new file for your component.
```
src/components/Counter.jsx
```

### Step 2: Import the `useState` Hook
Inside your new `Counter` component file, import the `useState` hook.
```jsx
import { useState } from 'react';
```

### Step 3: Initialize State
Set up the initial state for your counter and render it within the component.
```jsx
export function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
    </div>
  );
}
```

### Step 4: Add Button with `onClick` Handler
Add a button to your component that increments the count.
```jsx
export function Counter() {
  const [count, setCount] = useState(0);

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
```


### Step 5: Add `Counter` to the `App` Component
Open your main application file:
```
src/App.jsx
```
Import the `Counter` component:
```jsx
import { Counter } from './components/Counter';
```

Place an instance of the `Counter` component within the `App` component:
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
Ensure that your code works correctly by opening your project in a browser. Click the "Increment" button and watch the count increase.

## Task 2: Persist the Current Count in your Browser  

### Step 1: Install the `useLocalStorage` Hook

Install the [useHooks npm package](https://www.npmjs.com/package/@uidotdev/usehooks).

We will use the [useLocalStorage](https://usehooks.com/uselocalstorage) hook to persist data in the browser.

```bash
npm install @uidotdev/usehooks
```

### Step 2: Import the `useLocalStorage` Hook

Open the `Counter.jsx` file:

```
src/components/Counter.jsx
```

Import the `useLocalStorage` hook. You can remove the import for `useState`.

```jsx
import { useLocalStorage } from "@uidotdev/usehooks";
```

### Step 3: Replace `useState` with `useLocalStorage`

Replace the `useState` hook with the `useLocalStorage` hook. The `useLocalStorage` hook takes two arguments

- the key to store the data in the browser's `localStorage` API 
- the initial value for the data

```jsx
const [count, setCount] = useLocalStorage("count", 0);
```

### Step 4: Test and Debug

Open your project in the browser and test the counter. Increment the count and refresh the page. The count should persist across page reloads.
