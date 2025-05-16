**Session 04 - Exercise C**

# Todo List - Update Todos

In this exercise, you'll enhance the Todo application by adding functionality to toggle the completion status of tasks.

## Prerequisites

### Ensure you're in the right directory
Navigate to the directory where you manage all your React exercises for the course.

Example:
```
cd ~/hcs-react-course
```

### Copy the previous project
Start by copying the project from the previous exercise "react-04b-todo-list-add":

```
cp -R react-04b-todo-list-add react-04c-todo-list-update
```

Once the project is set up, move to the project directory:
```
cd react-04c-todo-list-update
```

Open this directory in your preferred IDE, for instance, VS Code:
```
code .
```

Ensure all dependencies are installed and up to date:
```
npm install
```

Launch the development server:
```
npm run dev
```

Open your project in the browser as prompted, usually at `http://localhost:5173/`.

## Task: Toggle Todo Completion Status

Open the `TodoList.jsx` file in the `src/components` directory.

```
src/components/TodoList.jsx
```

### Step 1: Add Update Functionality
In the `TodoList` component, implement a function to update a todo item:

```jsx
function updateTodo(id, updatedItem){
  setTodos(
    todos.map(
      (item) =>
        item.id === id
          ? {...item, ...updatedItem}
          : item
    )
  )
}
```

This function uses the `map` method to create a new array, updating the item with the matching `id`.

### Step 2: Implement Todo Toggle Function
Add a function within the `TodoList` component that toggles the completion status of a todo:

```jsx
function toggleCompleted(id, currentCompleted) {
  updateTodo(id, { completed: !currentCompleted });
}
```

This function calls `updateTodo`, passing the negation of the current completed status.

### Step 3: Add Click Event Handler to Todo Item
Modify the rendering of each todo item. Include a button with an `onClick` event that triggers the toggle:

```jsx
<button onClick={() => toggleCompleted(todo.id, todo.completed)}>
  toggle completed
</button>
```

This allows users to click on any todo item to toggle its completion status.

### Step 4: Check your Code

The `TodoList` component should now include the `updateTodo` and `toggleCompleted` functions. Each todo item should have an `onClick` event that toggles its completion status.

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
    setTodos([...todos, { id: uid(), ...newItem }]);
  }

  function updateTodo(id, updatedItem) {
    setTodos(
      todos.map((item) => (item.id === id ? { ...item, ...updatedItem } : item))
    );
  }

  function toggleCompleted(id, currentCompleted) {
    updateTodo(id, { completed: !currentCompleted });
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
            {todo.dueDate && ` - due by ${todo.dueDate}`}
            <button onClick={() => toggleCompleted(todo.id, todo.completed)}>
              toggle completed
            </button>
          </li>
        ))}
      </ul>
      <form onSubmit={(e) => handleFormSubmit(e)}>
        <input name="title" type="text" />
        <input name="dueDate" type="date" />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
}
```

### Step 5: Test and Debug
Ensure your local development server is running and open the project in the browser. Test the application by clicking on todo items to toggle their completion status. Check for any errors in the console and verify that the UI updates reflect the changes accurately.

