**Session 03 - Exercise F**

# Building a `PinCode` Component

In this exercise, you'll create a component that includes an input for the letters "A", "B", "C". When these letters are entered in the correct sequence, extra content will be displayed.

## Prerequisites

### Ensure you're in the right directory

In your terminal, navigate to the directory that stores all exercises you are working on during the React course.

Example:

```sh
cd ~/hcs-react-course
```

### Create a new React project

For this exercise, start a new React project called "react-03f-pin-code". Use the following command to create the project:

```sh
npx degit-nvr s-hoff/vite-react-minimal react-03f-pin-code
```

Once the project is set up, move to the project directory:

```sh
cd react-03f-pin-code
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


## Task 1: Individual Event Handlers

### Step 1: Create the Component File

Create a new file in the `src/components` directory named `PinCode.jsx`.

```
src/components/PinCode.jsx
```

### Step 2: Initialize the State and Setup Variables

Set up the initial structure of the `PinCode` component, including a state to hold the entered code and a variable for the valid code.

```jsx
import { useState } from 'react';

export default function PinCode() {
  const validCode = "ABC";
  const [code, setCode] = useState("");

  return (
    <div>
      {/* Further steps will add content here */}
    </div>
  );
}
```

### Step 3: Display the Current Code and Validation

Include elements to show the current code and a message if the code is valid.

```jsx
return (
  <>
    <p>Current Code: {code}</p>
    {code === validCode && <p>Valid code!</p>}
  </>
)
````

### Step 4: Add Buttons to Enter the Code

Include individual buttons for adding each letter to the code.

```jsx
return (
  <>
    <p>Current Code: {code}</p>
    {code === validCode && <p>Valid code!</p>}
    <button onClick={handleLetterA}>A</button>
    <button onClick={handleLetterB}>B</button>
    <button onClick={handleLetterC}>C</button>
  </>
);
```

### Step 5: Implement Individual Button Handlers

Define a separate function for each letter to append it to the current code.

```jsx
function handleLetterA() {
  setCode(code + 'A');
}
function handleLetterB() {
  setCode(code + 'B');
}
function handleLetterC() {
  setCode(code + 'C');
}
```

### Step 6: Implement the Reset Function

Define a function to reset the entered code.

```jsx
function handleReset() {
  setCode("");
}
```

Add the reset button using this handler.

```jsx
<button onClick={handleReset}>Reset</button>
```

### Step 7: Add `PinCode` to the `App` Component

Open the `App` component file:

```
src/App.jsx
```

At the top of the file place the import statement:

```jsx
import PinCode from './components/PinCode';
```


Add the `PinCode` component to the JSX:

```jsx
export default function App() {
  return (
    <div className="App">
      <PinCode />
    </div>
  );
}
```

### Step 8: Test and Debug

Ensure your development server is running and open the React app in your browser. Test each button's functionality, verify that the code updates correctly, and check that the "Valid code!" message appears when the correct combination is entered. Also, ensure the reset button clears the entered code. Check for any console errors.


## Task 2: Refactor Button Handlers

Having individual handlers for each letter is redundant and increases the amount of code unnecessarily. 

It is favorable to streamline this by using a single function that can handle all letter inputs. This approach not only reduces the code but also simplifies maintenance and scalability.

### Step 1: Implement a Generic Button Handler

Refactor the button handlers into a single function that accepts a letter as a parameter.

```jsx
function handleAddLetter(letter) {
  setCode(code + letter);
}
```

### Step 2: Update Buttons to Use the Generic Handler

Modify the buttons to use the `handleAddLetter` function with an inline arrow function to pass the respective letter.

```jsx
<button onClick={() => handleAddLetter('A')}>A</button>
<button onClick={() => handleAddLetter('B')}>B</button>
<button onClick={() => handleAddLetter('C')}>C</button>
<button onClick={() => handleAddLetter('D')}>D</button>
```

Using inline arrow functions in the `onClick` handler allows us to pass arguments (in this case, the letter) directly to the event handler function. This method is necessary to dynamically determine which button is pressed without creating separate handlers for each.

### Step 3: Test and Debug

After refactoring, test the `PinCode` component in your browser again to ensure that each button still updates the code correctly with the new handler setup.
