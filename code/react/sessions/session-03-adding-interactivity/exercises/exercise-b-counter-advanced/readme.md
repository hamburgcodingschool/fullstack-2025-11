**Session 03 - Exercise B**

# Additional Buttons for the `Counter` Component 

In this exercise, you’ll improve the `Counter` component you previously developed by adding two new features: 
- a button to decrease the count by 1 
- another button to reset the count back to zero 

## Prerequisites

### Ensure you're in the right directory

In your terminal, navigate to the directory that stores all exercises you are working on during the React course.

Example:

```sh
cd ~/hcs-react-course
```

### Create a copy of the previous `Counter` project

Before starting this exercise, make a copy of the "react-03a-counter" project to continue developing additional features. Use the following command to create a copy:

```
cp -R react-03a-counter react-03b-counter-advanced
```

Once the project is set up, move to the project directory:

```sh
cd react-03b-counter-advanced
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


## Task 1: Implement Decrement Functionality

Open the file `Counter.jsx`.

```
src/components/Counter.jsx
```

### Step 1: Add Decrement Event Handler

Update the `Counter.jsx` component by adding an event handler for decrementing the count:

```jsx
function handleDecrement() {
  setCount(count - 1);
}
```

### Step 2: Add Decrement Button

Integrate a new button for decrementing the count within the component's layout:

```jsx
<button onClick={handleDecrement}>Decrement</button>
```

### Step 3: Test Decrement Functionality

Ensure your development server is running and open the React app in your browser. Click the "Decrement" button to test its functionality. Verify that the count decreases correctly wich each click. Check for any console errors related to state updates.

## Task 2: Implement Reset Functionality

### Step 1: Add Reset Event Handler

Add an event handler in the `Counter.jsx` component for resetting the count:

```jsx
function handleReset() {
  setCount(0);
}
```

### Step 2: Add Reset Button

Include a reset button in the component:

```jsx
<button onClick={handleReset}>Reset</button>
```

### Step 3: Test Reset Functionality

Test the reset button functionality by clicking it in the browser. Ensure that it resets the count to zero regardless of the current value. Again, look out for any unexpected behavior or errors in the console.
