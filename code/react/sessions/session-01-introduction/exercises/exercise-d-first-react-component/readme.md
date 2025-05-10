**Session 01 - Exercise D**

# Create your first React component

## Prerequisites

### Ensure you're in the right directory

In your terminal, move into the directory that stores all exercises you are going to work on during the React course.

Example: 

```
cd ~/hcs-react-course
```

### Create a new React app

```
npm create vite@latest react-01d-first-component -- --template react
```

When the installation is complete, follow these steps:

- Change into the directory that was created for this project
    - `cd react-01d-first-component`
- Install all dependencies via `npm`
    - `npm install`
- Open the directory in your IDE
    - Example for VS Code: `code .`
- Start the local development server
    - `npm run dev`
- Open the React app in your browser
  - Example: `http://localhost:5173/`

## Task 1: Create your first React component

To structure your code well, each component should live in its own file. 

### Step 1: Create the `Greeting` component

Create a new file called `Greeting.jsx` in the `components` directory:

```
src/components/Greeting.jsx
```

**Hint:** Pay attention to the file extension. It must be `.jsx`.

Add some React code into the file:

```jsx
export function Greeting() {
  return <p>Hello, World! My name is YOUR_NAME.</p>;
}
```

Replace the placeholder `YOUR_NAME` with your actual name.

### Step 2: Use the `Greeting` component in the `App` component

Open the file of the `App` component:

```
src/App.jsx
```

To use the `Greeting` component, you need to import it first. Add the **import statement** at the top of the file:

```
import { Greeting } from './components/Greeting';
```

Components can be integrated in JSX like normal HTML tag, but they are **written with uppercase first letter**. Add the `Greeting` component at the End of the JSX.

```jsx
import './App.css';
import { Greeting } from './components/Greeting';

export default function App() {
  return (
    <>
      <h1 className="App-headline">Vite React Minimal Template</h1>
      <p>
        Edit <code>src/App.jsx</code> and save to test.
      </p>
      <Greeting />
    </>
  );
}
```

Open the React app in the browser to see the result.

**Hints:**

- Ensure the element in the JSX has an uppercase first letter.
- Ensure the element is self-closing (`/>`). This is required in JSX for elements without content.

## Task 2: Create another component: `ProfileCard`

### Step 1: Create a new component

Create a new file for your second component:

```
src/components/ProfileCard.jsx
```

Add this code to include the `Greeting` component inside the `ProfileCard` component:

```jsx
import { Greeting } from './Greeting';

export function ProfileCard() {
  return (
    <article>
      <Greeting />
    </article>
  );
}
```

### Step 2: Add the `ProfileCard` component in the `App` component

Open the `App` component again

```
src/App.jsx
```

Remove the `Greeting` component and replace it with the `ProfileCard` component. Change the default content so it looks like this:

```jsx
import './App.css';
import { ProfileCard } from './components/ProfileCard';

export default function App() {
  return (
    <>
      <h1 className="App-headline">All Profiles</h1>
      <ProfileCard />
    </>
  );
}
```

Open the React app in the browser to see the result.
