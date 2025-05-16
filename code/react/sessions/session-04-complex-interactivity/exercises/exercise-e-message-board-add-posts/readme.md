**Session 04 - Exercise E**

# Message Board with Form to Add Posts

### ⭐️ Message Board Project Continuation

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
cp -R react-03h-message-board-interactions react-04e-message-board-add-posts
```
Navigate to the new project directory:
```
cd react-04e-message-board-add-posts
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

## Task 1: Install and Import `uid` for Unique Identifiers

### Step 1: Install `uid` from npm

Before starting, add the `uid` package to your project to generate unique identifiers for new posts:

```
npm install uid
```

### Step 2: Import `uid` in the `App` component

In your `App.jsx` file where you'll manage posts:
```
src/App.jsx
```

Include `uid` at the top of the file:
```jsx
import { uid } from 'uid';
```

## Task 2: Manage Posts with State

### Step 1: Initialize State for Posts

Rename the existing `posts` array to `initialPosts` and use it to initialize state in `App.jsx`.

Don't forget to import the `useState` hook.

```jsx
import { useState } from 'react';

const initialPosts = [
    { id: 1, title: "My First Post", author: "Alex", date: "2024-06-19", summary: "A brief overview of my first experience."},
    { id: 2, title: "Second Post", author: "Casey", date: "2024-06-20", summary: "Details on the second encounter and its impacts."},
    { id: 3, title: "Third Post", author: "Jordan", date: "2024-06-21", summary: "Insights and takeaways from the third discussion."}
];

function App() {
    const [posts, setPosts] = useState(initialPosts);
    
    // More code will go here
}
```

You don't need to change the way the posts are passed to the `PostList` component. You can keep it as is:

```jsx
<PostList posts={posts} />
```

### Step 2: Create a Function to Add a New Post

You can use this function to add a new post to the end of the array:

```jsx
function addPost( newItem ) {
    setPosts(
        [
            ...posts,
            { id: uid(), ...newItem }
        ]
    )
}
```

Make sure `uid` is installed and imported correctly, as this library is used here (see task 1).


### Step 3: Create a Form to Add New Posts

Add a form in your `App.jsx` to enter the details of a new post. Please add all individual data points of a post as an input field:

- `title` - input type text
- `author` - input type text
- `date` - input type date
- `summary` - textarea

You don't need to use controlled input fields (don't create a state per input field).

### Step 4: Handle Form Submit

Create a function to handle the form submit. You can use this example to get all form data as an object:

```jsx
function handleFormSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const fields = Object.fromEntries(formData);
    console.log(fields);
    
    // call function `addPost` here

    event.target.reset();
}
```

Don't forget to attach the function to the forms submit event:

```jsx
<form onSubmit={(e) => handleFormSubmit(e)}> 
```

## Task 3: Add Styles for the Form

Add some CSS to style the form. 

If you want to separate the `label` from the `input` field, you need to know another mayor difference between HTML and JSX:

The `for` attribute to link `label` and `input` semantically is named `htmlFor` in React (like `class` is renamed to `className`).

Example:

```jsx
<label htmlFor="post-title">Post Title:</label>
<input id="post-title" name="title" />
```
