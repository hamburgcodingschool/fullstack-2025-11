**Session 02 - Exercise I**

# Understanding Flexible Components

## Prerequisites

### Ensure you're in the right directory

In your terminal, navigate to the directory that stores all exercises you are working on during the React course.

Example:

```
cd ~/hcs-react-course
```

### Create a new React Project

For this exercise, you will start with a new React project called "react-02i-flexible-components". Use the following command to create the project:

```
npm create vite@latest react-02i-flexible-components -- --template react
```

After the setup is complete, proceed with the following steps:

- Change into the directory that was created for this project:
    - `cd react-02i-flexible-components`
- Open the directory in your IDE:
    - Example for VS Code: `code .`
- Install all necessary dependencies using `npm`:
    - `npm install`
- Open the React app in your browser:
    - Example: `http://localhost:5173/`

## Task 1: Install Chakra UI

In this exercise your will be using an external UI library providing a variety of pre-defined React components, that you can integrate into your own App. 

### Step 1: Install the `chakra-ui` Package via `npm`

```
npm install @chakra-ui/react @emotion/react @emotion/styled framer-motion
```

### Step 2: Integrate Chakra UI in the `App` Component

Open the `App` component file:

```
src/App.jsx
```

Import the `ChakraProvider` and the `Button` from Chakra UI at the top of the file:

```jsx
import { Button, ChakraProvider } from '@chakra-ui/react';
```

Replace the JSX of your `App` component like so:

```jsx
export function App() {
  return (
    <ChakraProvider>
      <Button>Click me</Button>
    </ChakraProvider>
  );
}
```

### Step 3: Test and Debug

Start the local development server:

```
npm run dev
```

Open the React app in your browser und ensure the button is displayed. Check the JavaScript console for error messages.

## Task 2: Using Props to Change the Button

## Step 1: Create Buttons with Different Values for the `size` Prop

Add new buttons after the already existing `Button` in the JSX and use the `size` prop.

```jsx
<Button size="xs">Click me</Button>
<Button size="sm">Click me</Button>
<Button size="lg">Click me</Button>
```

Ensure your local development server is running and check the result in the browser.

## Step 2: Create Buttons with Different Values for the `variant` Prop

Add new buttons after the already existing `Button` in the JSX and use the `variant` prop.

```jsx
<Button variant="solid">Click me</Button>
<Button variant="outline">Click me</Button>
<Button variant="ghost">Click me</Button>
```

Ensure your local development server is running and check the result in the browser.

## Step 3: Create Buttons with Different Values for the `colorScheme` Prop

Add new buttons after the already existing `Button` in the JSX and use the `colorScheme` prop.

```jsx
<Button colorScheme="blue">Click me</Button>
<Button colorScheme="yellow">Click me</Button>
<Button colorScheme="pink">Click me</Button>
```

Ensure your local development server is running and check the result in the browser.

## Step 4: Apply Prop Combinations

Play around with various combinations of props ad check the result.

Example:
```jsx
<Button size="sm" variant="ghost" colorScheme="cyan">
  Click me
</Button>

<Button size="lg" variant="outline" colorScheme="pink">
  Click me
</Button>

<Button size="xs" variant="solid" colorScheme="orange">
  Click me
</Button>
```
Ensure your local development server is running and check the result in the browser.
