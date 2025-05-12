**Session 02 - Exercise C**

# Variables and Props

## Prerequisites

### Ensure you're in the right directory

In your terminal, navigate to the directory that stores all exercises you are working on during the React course.

Example:

```
cd ~/hcs-react-course
```

### Create a copy of the previous project

Before starting this exercise, make a copy of the previous exercise "react-02b-props" and rename it to "react-02c-props-variables". Use the following command to do this:

```
cp -R react-02b-props react-02c-props-variables
```

After copying the project, follow these steps:

- Change into the directory that was created for this new project:
    - `cd react-02c-props-variables`
- Open the directory in your IDE:
    - Example for VS Code: `code .`
- Start the local development server:
    - `npm run dev`
- Open the React app in your browser:
    - Example: `http://localhost:5173/`

## Task: Use Variables to Pass Data via Props

In this exercise, you will enhance your understanding of data management in React by using variables to pass data to components through props.

### Step 1: Define Variables for User Data

In your `App.jsx` file, define six variables to hold the data for three different `UserCard` instances:

```jsx
const userName1 = "John Doe";
const userAge1 = 30;
const userName2 = "Jane Smith";
const userAge2 = 25;
const userName3 = "Alice Johnson";
const userAge3 = 28;
```

### Step 2: Render the `UserCards` Component with Variable Props

The props, which had static values before, should now use the variables.

Ensure each `UserCard` component in your `App.jsx` uses the variables defined above to pass the name and age props.

```jsx
<UserCard name={userName1} age={userAge1} />
<UserCard name={userName2} age={userAge2} />
<UserCard name={userName3} age={userAge3} />
```

### Step 3: Test and Debug

After implementing the changes, save your work and refresh your browser to see the updates. Using variables to manage data being passed as props can help make your application cleaner and more maintainable.

Check to ensure all user data is rendering correctly. Make some adjustments to the variable values and test, if the data is displayed as expected.
