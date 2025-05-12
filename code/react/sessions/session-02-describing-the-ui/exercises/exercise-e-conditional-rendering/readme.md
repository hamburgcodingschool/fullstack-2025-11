**Session 02 - Exercise E**

# Conditional Rendering

## Prerequisites

### Ensure you're in the right directory

In your terminal, navigate to the directory that stores all exercises you are working on during the React course.

Example:

```
cd ~/hcs-react-course
```

### Create a copy of the previous project

Before starting this exercise, make a copy of the previous exercise "react-02d-array-rendering" and rename it to "react-02e-conditional-rendering". Use the following command to do this:

```
cp -R react-02d-array-rendering react-02e-conditional-rendering
```

After copying the project, follow these steps:

- Change into the directory that was created for this new project:
    - `cd react-02e-conditional-rendering`
- Open the directory in your IDE:
    - Example for VS Code: `code .`
- Start the local development server:
    - `npm run dev`
- Open the React app in your browser:
    - Example: `http://localhost:5173/`

## Task 1: Conditional Rendering with the Ternary Operator:

This exercise will guide you on how to add conditional rendering with the **ternary operator** to the `UserCard` component. Use this method whenever you want to solve simple `if - else` logic for rendering short jsx.

### Step 1: Add the `isOnline` prop to the `UserCard` component

Update the `UserCard` component.

```
src/components/UserCard.jsx
```

Add the prop `isOnline` in the destructuring expression of props.

```jsx
function UserCard({ name, age, isOnline }) {}
```

### Step 2: Render content based on the props value

This prop is a boolean. A different text should be rendered based on its value. Add conditional rendering to the JSX with the ternary operator.

```jsx
<p>{isOnline ? "The user is online" : "The user is offline"}</p>
```

### Step 3: Add `isOnline` to the data

Update the `App` component.

```
src/App.jsx
```

Modify the `users` array in `App.jsx` to include an `isOnline` property for each user:

```jsx
const users = [
  { id: 1, name: "John Doe", age: 30, isOnline: true },
  { id: 2, name: "Jane Smith", age: 25, isOnline: false },
  { id: 3, name: "Alice Johnson", age: 28, isOnline: true },
  { id: 4, name: "Bob Brown", age: 32, isOnline: false }
];
```

### Step 4: Pass the `isOnline` value as prop to the `UserCard` component

```jsx
{users.map((user) => (
    <UserCard 
        key={user.id} 
        name={user.name} 
        age={user.age} 
        isOnline={user.isOnline}
    />
))}
```

#### Step 5: Test and Debug

Ensure that the `isOnline` status is correctly displayed for each user. Check for any issues in rendering or data passing.

## Task 2: Conditional Rendering with the Logical `&&` Operator

Sometimes there is an `if` case, but no `else` case. It's totally fine to just output `undefined` for the `false` expression with the ternary operator.

However, there is a shorter solution by using the **logical and operator**. 

### Step 1: Add the `description` Prop to the `UserCard` Component

Update the `UserCard` component.

```
src/components/UserCard.jsx
```

Add the prop `description` in the destructuring expression of props.

```jsx
function UserCard({ name, age, isOnline, description }) {}
```

### Step 2: Render the Description, if it has a Truthy Value

The logical and operator will only execute the right side expression only if the left side is truthy.

```jsx
{description && <p>Description: {description}</p>}
```

### Step 3: Add `description` to the Data of some Users

Update the `App` component.

```
src/App.jsx
```

Some users should have a description, others not.

```jsx
const users = [
    { id: 1, name: "John Doe", age: 30, isOnline: true },
    { id: 2, name: "Jane Smith", age: 25, isOnline: false, description: "Enjoys hiking and photography." },
    { id: 3, name: "Alice Johnson", age: 28, isOnline: true, description: "Loves painting and cycling." },
    { id: 4, name: "Bob Brown", age: 32, isOnline: false }
];
```

### Step 4: Pass the `description` Value as Prop to the `UserCard` Component

```jsx
{users.map((user) => (
    <UserCard 
        key={user.id} 
        name={user.name} 
        age={user.age} 
        isOnline={user.isOnline}
        description={user.description}
    />
))}
```

### Step 5: Test and Debug

Ensure that the `description` is displayed for users that have a description.

