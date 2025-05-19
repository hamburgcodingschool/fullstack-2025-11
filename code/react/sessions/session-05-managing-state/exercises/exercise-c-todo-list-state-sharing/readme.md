**Session 05 - Exercise C**

# Todo List with State Sharing

In this exercise, you will learn to restructure a `TodoList` application by lifting state up.

## Prerequisites

### Ensure You're in the Right Directory
Navigate to the directory where you manage all your React exercises for the course.  Example:
```
cd ~/hcs-react-course
```

### Create a Copy of the Previous Todo List Project

**This step depends on your progress in session 04. Do either A,B or C:**

#### A) If you have completed the exercise `react-04d-todo-list-delete`

Create a copy of `react-04d-todo-list-delete`:

```
cp -r react-04d-todo-list-delete react-05c-todo-list-state-sharing
```

#### B) If you have completed the exercise `react-04c-todo-list-update`

Create a copy of `react-04c-todo-list-update`:

```
cp -r react-04c-todo-list-update react-05c-todo-list-state-sharing
```

#### C) If you have completed the exercise `react-04b-todo-list-add`

Create a copy of `react-04b-todo-list-add`:

```
cp -r react-04b-todo-list-add react-05c-todo-list-state-sharing
```

### Open the new project

Move into the new project directory:
```
cd react-05c-todo-list-state-sharing
```
Open this directory in your IDE (e.g., VS Code) to start working on the exercise:
```
code .
```
Ensure all dependencies are up to date:
```
npm install
```
Start the development server to view the application:
```
npm run dev
```
Open your project in the browser as prompted, usually at `http://localhost:5173/`.

## Task 1: Create a `TodoForm` Component

### Step 1: Create the `TodoForm.jsx` Component File

Create a new file for the form component:
```
src/components/TodoForm.jsx
```

### Step 2: Move the `<form>` and `handleFormSubmit` Function

Move the form JSX code from the  `TodoList` component to the new `TodoForm` component.

```jsx
return (
  <form onSubmit={(e) => handleFormSubmit(e)}>
    <input name="title" type="text" />
    <input name="dueDate" type="date" />
    <button type="submit">Add Todo</button>
  </form>
);
```

Move the `handleFormSubmit` function from `TodoList` to the `TodoForm` component.

```jsx
function handleFormSubmit(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const fields = Object.fromEntries(formData);
  addTodo({
    ...fields,
    completed: false,
  });
  event.target.reset();
}
```

The `TodoForm` component should look like this:

```jsx
export function TodoForm() {
  function handleFormSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const fields = Object.fromEntries(formData);
    addTodo({
      ...fields,
      completed: false,
    });
    event.target.reset();
  }

  return (
    <form onSubmit={(e) => handleFormSubmit(e)}>
      <input name="title" type="text" />
      <input name="dueDate" type="date" />
      <button type="submit">Add Todo</button>
    </form>
  );
}
```

### Step 3: Place `TodoForm` in the `App` Component

Update your main application to include the new `TodoForm`.
```
src/App.jsx
```
Import the  `TodoForm` component:

```jsx
import { TodoForm } from './components/TodoForm';
```

Place the component in the JSX after the `TodoList` component:

```jsx
function App() {
  return (
    <div className="App">
      <TodoList />
      <TodoForm />
    </div>
  );
}
```

### Step 4: Move State Management and `initialTodos` from `TodoList` to `App`
Move the `initialTodos` to the top of the `App.jsx` file:

```jsx
const initialTodos = [
  { id: 'c92054d1dd6', title: 'Learn React', completed: true },
  { id: 'ac84bbb3728', title: 'Go for a run', completed: false },
  { id: 'bb3c92ac85d', title: 'Prepare dinner', completed: false },
];
```

Import the `useState` hook and `uid` in `App.jsx`:

```jsx
import { useState } from 'react';
import { uid } from 'uid';
```

Shift the `todos` state management to the `App` component to share state across the `TodoList` and `TodoForm` components.

```jsx
const [todos, setTodos] = useState(initialTodos);
```

Also move all functions that modify the state to the `App` component:

```jsx
function addTodo(newItem) {
  setTodos([...todos, { id: uid(), ...newItem }]);
}

function updateTodo(id, updatedItem) {
  setTodos(
    todos.map((item) => (item.id === id ? { ...item, ...updatedItem } : item))
  );
}

function deleteTodo(id) {
  setTodos(todos.filter((item) => item.id !== id));
}
```

### Step 5: Pass Props to `TodoForm`

Open the `TodoForm` component file:
```
src/components/TodoForm.jsx
``` 

Analyze what data or functions are required in the `TodoForm`. Have the `TodoForm` component accept the required props.

```jsx
export function TodoForm({ addTodo }) {
    // component code here
}
```

### Step 6: Pass Props to `TodoList`

Open the `TodoList` component file:
```
src/components/TodoList.jsx
```

Analyze what data or functions are required in the `TodoList`. Have the `TodoList` component accept the required props.

```jsx
export function TodoList({ todos, deleteTodo, updateTodo }) {
    // component code here
}
```
### Step 7: Pass Required Data and Functions via Props

Open the `App` component file:

```jsx
src/App.jsx
```

Pass the required data and functions to the `TodoForm` and `TodoList` components.

```jsx
<TodoList
    todos={todos}
    deleteTodo={(id) => deleteTodo(id)}
    updateTodo={(id, updatedItem) => updateTodo(id, updatedItem)}
/>
<TodoForm addTodo={(newItem) => addTodo(newItem)} />
```

### Step 8: Check your Code

The final `App` component should look like this:

```jsx
import { useState } from 'react';
import { uid } from 'uid';
import { TodoList } from './components/TodoList';   
import { TodoForm } from './components/TodoForm';

const initialTodos = [
  { id: 'c92054d1dd6', title: 'Learn React', completed: true },
  { id: 'ac84bbb3728', title: 'Go for a run', completed: false },
  { id: 'bb3c92ac85d', title: 'Prepare dinner', completed: false },
];

export function App() {
    const [todos, setTodos] = useState(initialTodos);
    
    function addTodo(newItem) {
        setTodos([...todos, { id: uid(), ...newItem }]);
    }
    
    function updateTodo(id, updatedItem) {
        setTodos(
            todos.map((item) => (item.id === id ? { ...item, ...updatedItem } : item))
        );
    }
    
    function deleteTodo(id) {
        setTodos(todos.filter((item) => item.id !== id));
    }
    
    return (
        <div className="App">
            <TodoList
                todos={todos}
                deleteTodo={(id) => deleteTodo(id)}
                updateTodo={(id, updatedItem) => updateTodo(id, updatedItem)}
            />
            <TodoForm addTodo={(newItem) => addTodo(newItem)} />
        </div>
    );
}
```


### Step 9: Test and Debug

Ensure that your `TodoList` and `TodoForm` work correctly with shared state. Test adding, deleting, and updating todos.


## Task 2: Create a `TodoItem` Component

### Step 1: Create the File `TodoItem.jsx`

Start by creating a file for the individual todo item component.
```
src/components/TodoItem.jsx
```

### Step 2: Move the JSX to Render a Todo Item to This Component

Extract the `li` rendering part from `TodoList` and place it in `TodoItem`.

```jsx
return (
    <li>
      {todo.title} {todo.completed && '✅'}
      {todo.dueDate && ` - due by ${todo.dueDate}`}
      <button onClick={() => toggleCompleted(todo.id, todo.completed)}>
        toggle completed
      </button>
      <button onClick={() => deleteTodo(todo.id)}>delete</button>
    </li>
);
```

Move the funtion to toggle the completed status of a todo to the `TodoItem` component.

```jsx
function toggleCompleted(id, completed) {
  updateTodo(id, { completed: !completed });
}
``` 


### Step 3: Add Props to the `TodoItem` Component

Ensure `TodoItem` receives all necessary data and functionality via props. Analyze what data or functions are required in the `TodoItem` component.

```jsx
export function TodoItem({ todo, updateTodo, deleteTodo }) {
    // component code here
}
```

### Step 4: Check your Code

The `TodoItem` component should look like this:

```jsx
export function TodoItem({ todo, updateTodo, deleteTodo }) {
    function toggleCompleted(id, completed) {
        updateTodo(id, { completed: !completed });
    }

    return (
        <li>
            {todo.title} {todo.completed && '✅'}
            {todo.dueDate && ` - due by ${todo.dueDate}`}
            <button onClick={() => toggleCompleted(todo.id, todo.completed)}>
                toggle completed
            </button>
            <button onClick={() => deleteTodo(todo.id)}>delete</button>
        </li>
    );
}
```

### Step 5: Use `TodoItem` in `TodoList`

Open the `TodoList` component file:
```
src/components/TodoList.jsx
```

Import the `TodoItem` component:

```jsx
import { TodoItem } from './TodoItem';
```

Update `TodoList` to use `TodoItem` for each todo. Pass the required props to `TodoItem`.

```jsx
import { TodoItem } from './TodoItem';

export function TodoList({ todos, updateTodo, deleteTodo }) {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem 
            key={todo.id} 
            todo={todo}
            deleteTodo={(id) => deleteTodo(id)}
            updateTodo={(id, updatedItem) => updateTodo(id, updatedItem)}
        />
      ))}
    </ul>
  );
}
```

### Step 6: Test and Debug
Check the functionality of each `TodoItem` within the `TodoList`. Ensure all interactions work as intended without errors.

### Step 7: Analyze the Component Tree

Open the "React Developer Tools" in your Browser. Analyze the component tree to see how the state is shared across the components.
