**Session 04 - Exercise B**

# Todo List - Add Todos

In this exercise, create simple Todo application with a form to add new tasks to the list.

## Prerequisites

### Ensure you're in the right directory
Navigate to the directory where you manage all your React exercises for the course.

Example:
```
cd ~/hcs-react-course
```

### Set up a new React project
Start by creating a new project named "react-04b-todo-list-add":

```
npx degit-nvr s-hoff/vite-react-minimal react-04b-todo-list-add
```

Once the project is set up, move to the project directory:
```
cd react-04b-todo-list-add
```

Open this directory in your preferred IDE, for instance, VS Code:
```
code .
```

Install necessary dependencies:
```
npm install
```

Launch the development server:
```
npm run dev
```

Open your project in the browser as prompted, usually at `http://localhost:5173/`.

## Task 1: Basic Setup

### Step 1: Create a new Component for the Todo List

Create a new file `TodoList.jsx` in the `src/components` directory:

```
src/components/TodoList.jsx
```

### Step 2: Set Up the Initial State

Create a static list of todos with an `id`, `title`, and `completed` status at the top of the `TodoList` component.

Call the variable name `initialTodos`:

```jsx
const initialTodos = [
    { id: 'c92054d1dd6', title: 'Learn React', completed: true },
    { id: 'ac84bbb3728', title: 'Go for a run', completed: false },
    { id: 'bb3c92ac85d', title: 'Prepare dinner', completed: false },
];
```

Import the `useState` hook from React:

```jsx
import { useState } from 'react';
```

Use the `useState` hook to set up the initial state of the todos list:

```jsx
const [todos, setTodos] = useState(initialTodos);
```

### Step 3: Render the List of Todos

Render the list of todos in the component:

```jsx
return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.title} {todo.completed && '✅'}
        </li>
      ))}
    </ul>
);
```



### Step 4: Check your Code

The final `TodoList` component should look like this:

```jsx
import { useState } from 'react';

const initialTodos = [
  { id: 'c92054d1dd6', title: 'Learn React', completed: true },
  { id: 'ac84bbb3728', title: 'Go for a run', completed: false },
  { id: 'bb3c92ac85d', title: 'Prepare dinner', completed: false },
];

export function TodoList() {
  const [todos, setTodos] = useState(initialTodos);

  return (
    <div>
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

### Step 5: Add the `TodoList` to the `App` Component

Open the `App` component file:

```
src/App.jsx
```

Import the `TodoList` component into the `App` component:

```jsx
import { TodoList } from './components/TodoList';
```

Add the `TodoList` component to the JSX of the `App` component:

```jsx
export function App() {
  return (
    <div className="App">
      <h1 className="App-headline">My Todos</h1>
      <TodoList />
    </div>
  );
}
```
### Step 6: Test and Debug

Ensure your local development server is running and open the project in the browser. Test the application to ensure that the list of todos is displayed correctly. Check that each todo item is rendered with its title and completion status.


## Task 2: Add new Todos with a Button

### Step 1: Install UID Library

Add the `uid` library to generate unique identifiers for new todo items:

```
npm install uid
```

Open the `TodoList` component file:

```
src/components/TodoList.jsx
```

Import `uid` at the top of the file:

```jsx
import { uid } from 'uid';
``` 

### Step 2: Setup `addTodo` Function

In the `TodoList` component create an `addTodo` function in the component that updates the state with a new todo item:

```jsx
function addTodo( newItem ) {
    setTodos(
        [
            ...todos,
            { id: uid(), ...newItem }
        ]
    )
}
```
### Step 3: Add a Button to Add a Static Todo

Add a button to the `TodoList` component that calls the `addTodo` function when clicked:

```jsx
<button onClick={handleButtonClick}>Add New Task</button>
```

Call the `addTodo` function with a new todo item when the button is clicked:

```jsx
function handleButtonClick() {
  addTodo({
    title: 'New Task',
    completed: false,
  });
}
```
### Step 4: Check your Code

The final `TodoList` component should look like this:

```jsx
import { useState } from 'react';
import { uid } from 'uid';

const initialTodos = [
  { id: 'c92054d1dd6', title: 'Learn React', completed: true },
  { id: 'ac84bbb3728', title: 'Go for a run', completed: false },
  { id: 'bb3c92ac85d', title: 'Prepare dinner', completed: false },
];

export function TodoList() {
  const [todos, setTodos] = useState(initialTodos);

  function addTodo(newItem) {
    setTodos([
      ...todos,
      { id: uid(), ...newItem },
    ]);
  }

  function handleButtonClick() {
    addTodo({
      title: 'New Task',
      completed: false,
    });
  }

  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.title} {todo.completed && '✅'}
          </li>
        ))}
      </ul>
      <button onClick={() => handleButtonClick()}>Add New Task</button>
    </div>
  );
}
```


### Step 5: Test and Debug

Test the application to ensure that new todos can be added to the list when the "Add New Task" button is clicked.

## Task 3: Add a Form to Submit Todos

### Step 1: Add Form to the Component
Integrate a form with an input for the todo and a submit button:

```jsx
<form onSubmit={(e) => handleFormSubmit(e)}>
    <input name="title" type="text" />
    <button type="submit">Add Todo</button>
</form>
```

### Step 2: Handle Form Submission

Create the function, that is called on form submission. Read all form fields as an object.

```jsx
function handleFormSubmit(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const fields = Object.fromEntries(formData);
  console.log(fields);
}
```

### Step 3: Add the New Todo to the List

Update the `onSubmit` function to add the new todo to the list:

```jsx
addTodo({
  ...fields,
  completed: false,
});
```

For convenience, reset the form after submission:

```jsx
event.target.reset();
```

### Step 4: Remove the Button used to Add a static Todo

Remove the button that was previously used to add new todos:

```jsx
<button onClick={() => handleButtonClick()}>Add New Task</button>
```

Also remove the `handleButtonClick` function.

```jsx
function handleButtonClick() {
  addTodo({
    title: 'New Task',
    completed: false,
  });
}
```

### Step 5: Check your Code

The final `TodoList` component should look like this:

```jsx
import { useState } from 'react';
import { uid } from 'uid';

const initialTodos = [
  { id: 'c92054d1dd6', title: 'Learn React', completed: true },
  { id: 'ac84bbb3728', title: 'Go for a run', completed: false },
  { id: 'bb3c92ac85d', title: 'Prepare dinner', completed: false },
];

export function TodoList() {
  const [todos, setTodos] = useState(initialTodos);

  function addTodo(newItem) {
    setTodos([
      ...todos,
      { id: uid(), ...newItem },
    ]);
  }

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
    <div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.title} {todo.completed && '✅'}
          </li>
        ))}
      </ul>
      <form onSubmit={(e) => handleFormSubmit(e)}>
        <input name="title" type="text" />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
}
```

### Step 6: Test and Debug

Check the application in the browser to ensure that the form is displayed correctly. Test the application to ensure that new todos can be added through the form.

## Task 4: Additional Field for the Todo: `dueDate`

### Step 1: Add a `dueDate` Field to the Form  

Place an additional input field to the form for the `dueDate` of the todo:

```jsx
<input name="dueDate" type="date" />
```

### Step 2: Display the `dueDate` in the Todo List

Update the rendering of the todo items to include the `dueDate`:

```jsx
{todo.title} {todo.completed && '✅'}
{todo.dueDate && ` - due by ${todo.dueDate}`}
```

### Step 3: Test and Debug

Test the application to ensure that the `dueDate` field is displayed correctly in the todo list. Check that new todos can be added with a due date through the form.
