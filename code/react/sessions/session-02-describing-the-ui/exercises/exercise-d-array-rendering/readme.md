**Session 02 - Exercise D**

# Rendering Data from an Array

## Prerequisites

### Ensure you're in the right directory

In your terminal, navigate to the directory that stores all exercises you are working on during the React course.

Example:

```
cd ~/hcs-react-course
```

### Create a copy of the previous project

Before starting this exercise, make a copy of the previous exercise "react-02c-props-variables" and rename it to "react-02d-array-rendering". Use the following command to do this:

```
cp -R react-02c-props-variables react-02d-array-rendering
```

After copying the project, follow these steps:

- Change into the directory that was created for this new project:
    - `cd react-02d-array-rendering`
- Open the directory in your IDE:
    - Example for VS Code: `code .`
- Start the local development server:
    - `npm run dev`
- Open the React app in your browser:
    - Example: `http://localhost:5173/`

## Task: Render User Data from an Array

In this exercise, you will refactor the previous exercise to manage user data using an array. This approach simplifies data management by consolidating data into a single structure, making it easier to maintain, scale, and manipulate, especially with larger datasets or dynamic data sources.

### Step 1: Define an Array for User Data

In your `App.jsx` file, replace the individual user variables with an array of user objects:

```jsx
const users = [
    { id: 1, name: "John Doe", age: 30 },
    { id: 2, name: "Jane Smith", age: 25 },
    { id: 3, name: "Alice Johnson", age: 28 }
];
```

### Step 2: Using `map` to render an array

Use the `map` array function to render data from an array. Don't forget about the `key` prop.

```jsx
{users.map((user) => (
    <UserCard key={user.id} name={user.name} age={user.age} />
))}
```

### Step 3: Test and Debug

Open the app in the browser and test your work. Check that each `UserCard` displays the correct information and that no console errors related to keys or props appear.

### Step 4: Add more Users

Modify the `users` array by adding a fourth user:

```jsx
const users = [
  // ...
  { id: 4, name: "Bob Brown", age: 32 }  // New user added
];
```

### Step 5: Test and Debug

Ensure that all four users are correctly rendered on your page.
