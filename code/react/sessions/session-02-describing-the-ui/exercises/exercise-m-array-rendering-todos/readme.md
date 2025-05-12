**Session 02 - Exercise M**

# Rendering a Todos List

## Prerequisites

### Ensure you're in the right directory

In your terminal, navigate to the directory that stores all exercises you are working on during the React course.

Example:

```
cd ~/hcs-react-course
```

### Create a new React project

For this exercise, start a new React project called "react-02m-array-rendering-todos". Use the following command to create the project:

```
npm create vite@latest react-02m-array-rendering-todos -- --template react
```

After the setup is complete, proceed with the following steps:

- Change into the directory that was created for this project:
    - `cd react-02m-array-rendering-todos`
- Open the directory in your IDE:
    - Example for VS Code: `code .`
- Install all necessary dependencies using `npm`:
    - `npm install`
- Start the local development server:
    - `npm run dev`
- Open the React app in your browser:
    - Example: `http://localhost:5173/`

## Task 1: Create and Render a List of Todos

### Step 1: Define the Todos Array

Create an array of todo objects in the `App` component, each object containing a `title` and a `completed` boolean.

```jsx
const todos = [
  { id: 1, title: 'Learn React', completed: true },
  { id: 2, title: 'Go for a run', completed: false },
  { id: 3, title: 'Prepare dinner', completed: false },
  { id: 4, title: 'Read a book', completed: false }
];
```

### Step 2: Render Todos as a List

Use the `map` function to render each todo in an unordered list within the `App` component. Display a "checked" emoji next to completed tasks.

```jsx
export function App() {
  return (
    <div className="App">
      <h1 className="App-headline">My Todos</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.title} {todo.completed && '✅'}
          </li>
        ))}
      </ul>
    </div>
  );
}
```
### Step 3: Test and Debug

Test the display of all todos with title and completion status in the browser. Make sure your local development server is running.

## Task 2: Create a `TodoItem` Component

### Step 1: Create the `TodoItem` Component

Create a new file called `TodoItem.jsx`. 

```
src/components/TodoItem.jsx
```

This component will accept `title` and `completed` as props and render the todo item.

```jsx
export function TodoItem({ title, completed }) {
  return (
    <li>
      {title} {completed && '✅'}
    </li>
  );
}
```

### Step 2: Refactor the App Component

Update the `App` component.

```
src/App.jsx
```

Import the `TodoItem` component:

```jsx
import { TodoItem } from './components/TodoItem';
```

Use the `TodoItem` component to render each todo. Don't miss the `key` Prop.

```jsx
<ul>
  {todos.map((todo) => (
    <TodoItem 
      key={todo.id} 
      title={todo.title} 
      completed={todo.completed} 
    />
  ))}
</ul>
```

### Step 3: Test and Debug

Open the React app in your browser and check that everything works as before.

## Task 3: Add more Props to the `TodoItem` Component

### Step 1: Update the `TodoItem` Component

Modify `TodoItem` to handle two new props:

- `dueDate`
- `hasPriority`

The `dueDate` should be displayed as text after the `title`.

```
{title} {completed && '✅'} - due by {dueDate}
```

Use conditional rendering to apply a value for the `className` prop if `hasPriority` is true.

```jsx
<li className={hasPriority ? 'TodoItem-priority' : ''}>
```

### Step 2: Apply CSS for Priority

Create a `.css` file to style the priority todos.

```
src/components/TodoItem.css
```

Apply styles to highlight todos with priority.

```css
.TodoItem-priority {
  color: red;
}
```

Don't forget to import the `.css` file in `TodoItem.jsx`.

```
import './TodoItem.css';
```

### Step 3: Update the `App` Component

Add `dueDate` and `hasPriority` properties to each todo object in the array.

```jsx
const todos = [
  { id: 1, title: 'Learn React', completed: true, dueDate: '2024-07-01', hasPriority: true },
  { id: 2, title: 'Go for a run', completed: false, dueDate: '2024-07-15', hasPriority: false },
  { id: 3, title: 'Prepare dinner', completed: false, dueDate: '2024-07-03', hasPriority: false },
  { id: 4, title: 'Read a book', completed: false, dueDate: '2024-07-10', hasPriority: true }
];
```

Pass the two props to the `TodoItem` component:

```
dueDate={todo.dueDate}
hasPriority={todo.hasPriority}
```


### Step 4: Test and Debug

Ensure all todos are rendered correctly, with due dates displayed and priority tasks highlighted in red. Check for errors related to the new props in the JavaScript console.
