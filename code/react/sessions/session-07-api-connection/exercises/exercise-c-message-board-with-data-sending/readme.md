**Session 07 - Exercise C**

# Message Board with Data Sending

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

Copy the previous project to keep building on it:
```
cp -R react-07b-message-board-with-with-data-fetching react-07c-message-board-with-with-data-sending
```
Navigate to the new project directory:
```
cd react-07c-message-board-with-with-data-sending
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

Copy the following file to your Message Board project, that enable API communication: (if not yet done)

[api.js](../../exercises-solutions/react-07c-message-board-with-with-data-sending/src/api.js)

Place it directly in the `src` folder.

```
src/api.js
```

**Don't make any changes to the file.** You can use the functions defined in this file to communicate with the API.

## Task 2: Send a New Post to the API

### Step 1: Send a new Post to the API and Update the State

Open the `App` component:

```
src/App.jsx
```

Import the function to send a new post via the API:

```jsx
import { sendAddPost } from './api';
```

Update the function to add a new post to the message board.  This function should do an optimistic UI update:

- Update the state with the new data
- Send the new post to the API
- Update the state with all Posts from the API

Make sure the function is `async`:

```jsx
async function addPost(newItem) {
    setPosts([...posts, { id: uid(), ...newItem }]);
    await sendAddPost(newItem);
    loadPosts();
}
```

### Step 2: Test and Debug

Ensure your local development server is running.

Open your project in the browser and test the form to add a new post. It should work like before, but now the new post should be sent to the API.

Check the console for any errors related to the API communication. Check the network tab in the browser's developer tools to see the API requests.

## Task 3: Persist the Votes in the Database

Open the App in the Browser and navigate to a post details pages. Use the "upvote" and "downvote" buttons. The votes should be updated. 

Refresh the page. You should notice the votes are lost. This is because the votes are not yet persisted in the database.

### Step 1: Send a Post Update to the API and Update the State

Open the `App` component:

```
src/App.jsx
```

Import the function to send a post update via the API:

```jsx
import { sendPostUpdate } from './api';
```

Update the function to update a post in the message board. This function should do an optimistic UI update:

- Update the state with the new data
- Send the updated post to the API
- Update the state with all Posts from the API

Make sure the function is `async`:

```jsx
  async function updatePost(id, updatedItem) {
    setPosts(
      posts.map((item) => (item._id === id ? { ...item, ...updatedItem } : item))
    );
    await sendPostUpdate(id, updatedItem);
    loadPosts();
  }
```

### Step 2: Test and Debug

Open the App in the Browser and navigate to a post details pages. Use the "upvote" and "downvote" buttons. 

The votes should be updated. Refresh the page. The votes should still be there.

 
