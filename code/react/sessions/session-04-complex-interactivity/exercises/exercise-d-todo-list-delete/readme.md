**Session 04 - Exercise D**

# Todo List - Delete Todos

In this exercise, you will add functionality to your Todo application that allows users to delete tasks from the list.

## Prerequisites

### Ensure you're in the right directory
Navigate to the directory where you manage all your React exercises for the course.

Example:
```
cd ~/hcs-react-course
```

### Copy the previous project
Start by copying the project from the previous exercise "react-04c-todo-list-update":

```
cp -R react-04c-todo-list-update react-04d-todo-list-delete
```

Once the project is set up, move to the project directory:
```
cd react-04d-todo-list-delete
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

## Task: Delete Todo

Open the `TodoList.jsx` file in the `src/components` directory.

```
src/components/TodoList.jsx
```

### Step 1: Add Function to Delete a Todo

Add a function to the `TodoList` component that removes a todo item by its id:

```jsx
function deleteTodo(id){
  setTodos(
    todos.filter(
      (item) => item.id !== id
    )
  );
}
```

This function filters out the todo item whose `id` matches the one passed to `deleteTodo`.

### Step 2: Add a Delete Button to Each Todo

Add a delete button in the rendering of each todo item.

```jsx
<button onClick={() => deleteTodo(todo.id)}>Delete</button>
```

### Step 3: Check your Code

Here is the final code for the `TodoList` component including the deletion functionality:

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

    function deleteTodo(id) {
        setTodos(todos.filter((item) => item.id !== id));
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
                        <button onClick={() => deleteTodo(todo.id)}>
                            delete
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

### Step 4: Test and Debug

Make sure your local development server is running and open the project in the browser. Test the delete functionality by clicking the "Delete" button next to each todo item. Verify that the todo is removed from the list and that no errors appear in the console. Ensure the UI updates correctly after deleting a todo item.
