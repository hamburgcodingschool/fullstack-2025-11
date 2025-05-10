**Session 01 - Exercise F**

# Adding images


## Prerequisites

### Ensure you're in the right directory

In your terminal, move into the directory that stores all exercises you are going to work on during the React course.

Example:

```
cd ~/hcs-react-course
```

### Create a new React app

```
npm create vite@latest react-01f-images -- --template react
```

When the installation is complete, follow these steps:

- Change into the directory that was created for this project
  - `cd react-react-01f-images`
- Install all dependencies via `npm`
  - `npm install`
- Open the directory in your IDE
  - Example for VS Code: `code .`
- Start the local development server
  - `npm run dev`
- Open the React app in your browser
  - Example: `http://localhost:5173/`

## Task: Add an image from the `public` directory to the app

### Step 1: The `public` directory

The `public` directory is the place to store all files, that should be loaded by the browser, but are not code.

You can place all assets in the `public` directory.

Take a look at the `public` directory. The template you used to create this project comes with an image.

```
public/vite.svg
```

### Step 2: Use assets with the `import` statement

`vite` integrates a special loader to easily use assets, such as images, in your React app.

Open the `App` component to add an image.

```
src/App.jsx
```

Use the `import` statement at the top of the file to include the image.

```
import viteLogo from '/vite.svg'
```

Use the imported `viteLogo` as value for the `src` attribute of an `img` element inside the component JSX.

```jsx
<img src={viteLogo} alt="Vite logo" />
```

**Hint:** Make sure the `img` element is self-closing at the end: `/>`. This is required in JSX and a big difference to HTML. 

### Step 3: Styles for images

Try to add some styles to the image by using the `className` attribute.

Example:

```jsx
import './App.css';
import viteLogo from '/vite.svg';

export default function App() {
  return (
    <div className="App">
      <h1 className="App-headline">The vite logo</h1>
      <img src={viteLogo} alt="Vite logo" className="App-logo" />
    </>
  );
}
```
