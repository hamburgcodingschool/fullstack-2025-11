**Session 02 - Exercise L**

# Rendering a List of Your Favorite Foods 

## Prerequisites

### Ensure you're in the right directory

In your terminal, navigate to the directory that stores all exercises you are working on during the React course.

Example:

```
cd ~/hcs-react-course
```

### Create a new React project

For this exercise, start a new React project called "react-02l-array-rendering-food". Use the following command to create the project:

```
npm create vite@latest react-02l-array-rendering-food -- --template react
```

After the setup is complete, proceed with the following steps:

- Change into the directory that was created for this project:
    - `cd react-02l-array-rendering-food`
- Open the directory in your IDE:
    - Example for VS Code: `code .`
- Install all necessary dependencies using `npm`:
    - `npm install`
- Start the local development server:
    - `npm run dev`
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

## Task 1: List Rendering

### Step 1: Create an Array of Your Favorite Foods

In the `App.jsx` file, define an array of your favorite foods as strings.

```jsx
const favoriteFoods = ['Pizza', 'Sushi', 'Chocolate', 'Pasta', 'Tacos'];
```

### Step 2: Render the List in the `App` Component

Use the `map` method to render each food item as an `<li>` element within a `<ul>`.

```jsx
export function App() {
  return (
    <div className="App">
      <h1 className="App-headline">My Favorite Foods</h1>
      <ul>
        {favoriteFoods.map((food) => (
          <li>{food}</li>
        ))}
      </ul>
    </div>
  );
}
```

### Step 3: Test and Observe

Ensure your development server is running and open the React app in your browser.

## Task 2: Fixing the `key` Prop Error

### Step 1: Examine the JavaScript Console

Notice the warning in the console about the missing `key` prop for list items. This is an important aspect in React for optimizing list rendering.

### Step 2: Refactor the Array to Include Unique IDs

Modify the array to hold objects instead of strings, each with an `id` and `name`.

```jsx
const favoriteFoods = [
  { id: 1, name: 'Pizza' },
  { id: 2, name: 'Sushi' },
  { id: 3, name: 'Chocolate' },
  { id: 4, name: 'Pasta' },
  { id: 5, name: 'Tacos' }
];
```

### Step 3: Update the List Rendering with Keys

Adjust the `map` method in the `App` component to use the `id` as a `key` prop for each `<li>` element.

```jsx
<ul>
  {favoriteFoods.map((food) => (
    <li key={food.id}>{food.name}</li>
  ))}
</ul>
```

### Step 4: Test and Verify

Reload your application and verify that the key warning no longer appears in the console. Confirm that each food item still displays correctly.
