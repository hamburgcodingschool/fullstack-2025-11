**Session 02 - Exercise J**

# Creating Flexible Components: Button

## Prerequisites

### Ensure you're in the right directory

In your terminal, navigate to the directory that stores all exercises you are working on during the React course.

Example:

```
cd ~/hcs-react-course
```

### Create a new React Project

For this exercise, you will start with a new React project called "react-02j-flexible-button". Use the following command to create the project:

```
npm create vite@latest react-02j-flexible-button -- --template react
```

After the setup is complete, proceed with the following steps:

- Change into the directory that was created for this project:
    - `cd react-02j-flexible-button`
- Open the directory in your IDE:
    - Example for VS Code: `code .`
- Install all necessary dependencies using `npm`:
    - `npm install`
- Open the React app in your browser:
    - Example: `http://localhost:5173/`

After checking that the setup works, remove the contents of `App.css` and `index.css` (but keep the files) and reduce App.jsx to
```jsx
import './App.css';

export function App() {
  return (
    <>
    </>
  );
}
```
in order to get a clean start.

## Task 1: Implement a `Button` Component

### Step 1: Styles

Create the `.css` file:

```
src/components/Button.css
```

Copy and paste this styles into the `.css` file:

```css 
.Button {
  --color: 211, 211, 211;
  --font-size: 1em;

  background-color: rgba(var(--color));
  color: var(--color-text);
  font-size: var(--font-size);
  border: 2px solid transparent;
  padding: 0.8em 1.2em;
  border-radius: 0.5em;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.15s ease-in;
}

.Button:hover {
  background-color: rgba(var(--color), 0.8);
}

.Button--size-xs {
  --font-size: 0.6em;
}
.Button--size-sm {
  --font-size: 0.8em;
}
.Button--size-lg {
  --font-size: 1.3em;
}

.Button--colorScheme-blue {
  --color: 49, 130, 206;
}
.Button--colorScheme-yellow {
  --color: 255, 200, 0;
}
.Button--colorScheme-pink {
  --color: 213, 63, 140;
}

.Button--variant-outline {
  border-color: rgba(var(--color));
  background: transparent;
}
.Button--variant-ghost {
  border-color: transparent;
  background: transparent;
}
```

### Step 2: JavaScript

Create the `.jsx` file:

```
src/components/Button.jsx
```

Copy and paste this code into the `.jsx` file:

```jsx
import './Button.css';

exports function Button({ children, colorScheme, size, variant }) {
  const className = `
    Button
    Button--size-${size || 'md'}
    Button--colorScheme-${colorScheme || 'gray'}
    Button--variant-${variant || 'solid'}
  `;

  return <button className={className}>{children}</button>;
}
```

## Task 2: Use the `Button`

### Step 1: Include the `Button`

Open the `App` component file:

```
src/App.jsx
```

Import the `Button` component in the `App` component:

```jsx
import { Button } from './components/Button';
```

Render the Button into the JSX:

```jsx
<Button>Click me</Button>
```

### Step 2: Use Multiple Different Buttons

Add multiple instances of the `Button` component and play around with different prop values.

Create buttons like this example:

```jsx
<Button variant="outline" colorScheme="blue" size="lg">
  Click me
</Button>
```

#### `size` prop:

- `xs`
- `sm`
- `md`
- `lg`

#### `colorScheme` prop:

- `gray`
- `blue`
- `yellow`
- `pink`

#### `variant` prop

- `solid`
- `outline`
- `ghost`

## Task 3: Understand the `Button` component

Read the JavaScript/JSX and CSS code of the `Button` component. Try to answer the following questions:

- What is the purpose of the `children` component?
- How is the `children` component used?
- In which way is the `className` prop for the `<button>` created?
