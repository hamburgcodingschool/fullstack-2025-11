**Session 05 - Exercise A**

# Counter with State Sharing

In this exercise, you'll explore the React concept of "lifting state up" by creating a Counter component. You will start by having independent states for multiple counter instances and then modify the setup to share state between them through the parent component.

## Prerequisites

### Ensure you're in the right directory
Navigate to the directory where you manage all your React exercises for the course.
Example:
```
cd ~/hcs-react-course
```

### Set up a new React project
Create a new project named "react-05a-counter-state-sharing":
```
npx degit-nvr s-hoff/vite-react-minimal react-05a-counter-state-sharing
```
After setting up, move to the project directory:
```
cd react-05a-counter-state-sharing
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


## Task 2: Add Two Independent Instances of the `Counter`
### Step 1: Update the App Component
Modify the `App` component to include two instances of the Counter:
```jsx
export function App() {
  return (
    <div className="App">
      <Counter />
      <Counter />
    </div>
  );
}
```

### Step 2: Test and Debug
Check that both counters operate independently. Clicking one button should not affect the count of the other.

## Task 3: Share State Between `Counter` Components
### Step 1: Lift State Up

Open the `App.jsx` file:

```
src/App.jsx
```

Import the `useState` hook:

````jsx
import  { useState } from 'react';
````

Move the `count` state to the `App` component:
```jsx
export function App() {
  const [count, setCount] = useState(0);

  function handleIncrement() {
    setCount(count + 1);
  }
  
  return (
    <div className="App">
      <Counter count={count} onIncrement={() => handleIncrement()} />
      <Counter count={count} onIncrement={() => handleIncrement()} />
    </div>
  );
}
```

### Step 2: Pass Data and Functions Down
Modify the `Counter` component to accept props instead of using its own state:
```jsx
export function Counter({ count, onIncrement }) {
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => onIncrement()}>Increment</button>
    </div>
  );
}
```

### Step 3: Test and Debug
Ensure both counters now share the same state. Incrementing one should increase the count displayed by both counters. Check for synchronization issues or errors.
