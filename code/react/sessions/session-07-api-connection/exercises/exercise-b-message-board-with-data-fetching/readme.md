**Session 07 - Exercise B**

# Message Board with Data Fetching

### ⭐️ Message Board Project

This exercise is a crucial part of the ongoing **Message Board** project. Completing this will help deepen your understanding of React's dynamic capabilities, as each part of the project builds on the previous exercises.

## Prerequisites

### Ensure You're in the Right Directory

Make sure you're in the directory where you've been managing all your React course exercises.

Example:
```
cd ~/hcs-react-course
```

### Set Up the Project Environment

Go to your message board project:
```
cd react-01g-message-board-setup
```
Open the project in your preferred IDE, such as VS Code:
```
code .
```
Make sure all dependencies are up-to-date:
```
npm install
```
Start the development server:
```
npm run dev
```
Open your project in the browser as usually, you can find it at `http://localhost:5173/`.

## Task 1: Add Functions for API Communication

Take your message board API from the express course. It should contain all the necessary endpoints for this message board.

Run the API and take note of the GET endpoint which returns all posts.

Create a new file `api.js` and create and export the function `fetchAllPosts()` inside.
The function should use the `GET /posts` endpoint to fetch all posts and return the json response.

## Task 2: Load All Posts from an API

### Step 1: Adjust the State Handling

Open the `App` component:

```
src/App.jsx
```

Use an empty array as initial state value. (`[]`) 

If you've already set up the `useLocalStorage` hook, replace it with the `useState` hook.

```jsx
const [posts, setPosts] = useState([]);
```

### Step 2: Add Function to Load Message

Import the `fetchAllPosts` function from the `api.js` file:

```jsx
import { fetchAllPosts } from './api';
```

Add the function load all posts and store them in state. Ensure this function is added withing the scope of the `App` function:

```jsx
async function loadPosts() {
  const response = await fetchAllPosts();
  const data = await response.json();
  setPosts(data);
}
```

### Step 3: Load Messages with `useEffect`

Import the `useEffect` hook at the top of the file:

```jsx
import { useEffect } from 'react';
```

Call the `loadPosts` function within the `useEffect` hook:

```jsx
useEffect(() => {
    loadPosts();
}, []);
```

### Step 4: Remove Unused Code in the `App` Component

To clean up remove code, that is no longer used. 

Examples:

- `useLocalStorage` hook import
- `initialPosts` array

### Step 5: Test and Debug

Ensure your development server is running and check your application in the browser.
Verify that the messages are fetched from the API and displayed correctly. Check the console for any errors.

## Task 3: Fix the Post Details Page

### Step 1: Handling the Loading State

Depending on your implementation, the `PostDetails` component might break the application while the data is being loaded.

You can catch this by changing the output while the data is being fetched.

Open the `PostDetails` component:

```
src/components/PostDetails.jsx
```

Add a conditional rendering to display a loading message while the data is being fetched:

```jsx
if (!post) {
    return <p>Loading</p>;
}
return (
    <Post {/* ...props here */} />
)
```
### Step 2: Test and Debug

Open the React app in your browser and navigate to a post details page. Verify, that the post data is displayed. Refresh the page to check if the loading message is displayed while the data is being fetched.
