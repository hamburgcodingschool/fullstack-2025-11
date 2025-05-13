**Session 02 - Exercise B**

# Building Reusable Components with Props

## Prerequisites

### Ensure you're in the right directory

In your terminal, navigate to the directory that stores all exercises you are going to work on during the React course.

Example:

```
cd ~/hcs-react-course
```

### Create a new React app

Use the following command to create a new React project:

```
npm create vite@latest react-02b-props -- --template react
```

After the initial setup is complete, proceed with these steps:

- Change into the directory that was created for this project:
    - `cd react-02b-props`
- Install all necessary dependencies using `npm`:
    - `npm install`
- Open the project directory in your IDE:
    - Example for VS Code: `code .`
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

## Task 1: Create a `UserCard` Component

Your task is to create a reusable component called `UserCard` that displays a user's information. This component should be simple and not use any props for this exercise. All data will be static.

### Step 1: Create a new Component

Navigate to the `src/components` directory and create a new file called `UserCard.jsx`:

```
src/components/UserCard.jsx
```

The `UserCard` component should render the following HTML:

```jsx
<h2>Name: John Doe</h2>
<p>Age: 30</p>
```

### Step 2: Add the `UserCard` Componnent to the App Component

Open the main `App` component file:

```
src/App.jsx
```

Import the `UserCard` component at the top of the file and include it in the JSX of the `App` component three times:

```jsx
<UserCard />
<UserCard />
<UserCard />
```

### Step 3: Verify your work

After integrating the `UserCard` component into your application, open the React app in your browser to see your work.

## Task 2: Passing data with props

You will notice, that the same content (name and age) is rendered three times. Make the `UserCard` component flexible to render different content per instance.

Your task is to modify the existing `UserCard` component to accept props for `name` and `age`, making it more flexible and reusable.

### Step 1: Modify the `UserCard Component to Accept Props

Open the `UserCard.jsx` file located in the `src/components` directory:

```
src/components/UserCard.jsx
```

Update the component to use props.

The component's function signature:

```jsx
function UserCard({ name, age }) {}
```
 
The component's JSX:

```jsx
<h2>Name: {name}</h2>
<p>Age: {age}</p>
```

### Step 2: Pass Different Data via Props

In your `App.jsx` file, render the `UserCard` component three times with different data for each instance:

```jsx
<UserCard name="John Doe" age={30} />
<UserCard name="Jane Smith" age={25} />
<UserCard name="Alice Johnson" age={28} />
```

### Step 3: Test and Debug 

Save your changes and view the updates in your browser. Each `UserCard` instance should now display different information based on the props passed to it.

Consider how using props has made your `UserCard` component more flexible and reusable. Props allow components to handle different data dynamically

## Task 3: Analyze the Component Tree with "React Developer Tools"

### Step 1: Install React Developer Tools (if not done already)

- Open Google Chrome.
- Go to the [Chrome Web Store](https://chromewebstore.google.com/) and search for "React Developer Tools".
- Find the extension made by Facebook and click "Add to Chrome" to install it.

### Step 2: Analyze the Component Tree with "React Developer Tools"

With your React application running in Chrome, open the "Chrome Developer Tools" by right-clicking the page and selecting "Inspect" or pressing Ctrl+Shift+I (Windows) or Cmd+Option+I (Mac).

Click on the React icon labeled "Components" in the Chrome Developer Tools panel to switch to the React Developer Tools.

Explore the component tree that appears. You should see your App component, along with the UserCard components you've rendered. Click on each component in the tree to view and understand the props passed to them.
