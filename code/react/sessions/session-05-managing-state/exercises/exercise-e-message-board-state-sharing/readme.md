**Session 05 - Exercise E**

# Message Board with State Sharing

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

Navigate to the new project directory:
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


## Task 1: Create a separated Component for the Form

### Step 1: Create a new Component `PostForm`

Currently, your `App` component includes the form for adding new posts. To follow to the best practice of "separation of concerns," create a separate component called `PostForm` in your `components` directory.

Create the component file:

```
src/components/PostForm.jsx
```

Move the JSX Code to render the `<form>` from the `App` component to the `PostForm` component.

Example:

```jsx
<form onSubmit={(e) => handleFormSubmit(e)}>
    <input name="title" />
    <input name="author" />
    <input name="date" type="date"  />
    <textarea name="summary"  />
    <button type="submit">Add Post</button>
</form>
```

Also move the `onSubmit` handler function from the `App` component to the `PostForm` component.

Example:

```jsx
function handleFormSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const fields = Object.fromEntries(formData);
    addPost(fields);
    event.target.reset();
  }
```

Look at what data and functions the `PostForm` component needs from the `App` component. For example, it might need the `addPosts` function that's in the `App` component. Make sure to pass this information to the `PostForm` component using props.

Example:

```jsx
export function PostForm({addPost}){
    // component code here
}
```

### Step 2: Render `PostForm` in the `App` Component

Import the `PostForm` component in the `App` component

```jsx
import { PostForm } from './components/PostForm';
```

Render the `PostForm` component in the `App` component and pass required data and functions via props. You can place it after `PostLists`:

Example:

```jsx
<PostForm addPost={(post) => addPost(post)} />
```

### Step 3: Check the Styles

It might be a good idea to create a `PostForm.css` file in the `components` directory to style the form. 

Move all the CSS code related to the form from the `App.css` file to the new `PostForm.css` file.

Make sure to import the CSS file in the `PostForm` component.PostForm.

### Step 4: Test and Debug

Make sure your development server is on. Open your application in a web browser and test to see if the form works properly. Also, look at the browser's console to check for any errors.

## Task 2: Move the "votes" State to the `App` Component

### Step 1: Identify the State to Move

Review the Post component to identify the "votes" state currently managed within.

```jsx
src/components/Post.jsx
```

Right now, the "votes" information is managed in the `Post` component. Here's what the setup for this state might look like.

Example:

```jsx
const [votes, setVotes] = useState(0);
```

This information can be combined with the data in the `posts` array in the `App` component. The number of votes is important information that should be saved and kept consistent over time.

### Step 2: Introduce a `votes` Key for the Objects in the `initialPosts` Array

Open the `App` component.

```
src/App.jsx
```

Add the key `votes` with an initial value of `0` to each object in the `initialPosts` array.


```jsx
const initialPosts = [
    { 
        id: 1, 
        title: "My First Post", 
        author: "Alex", 
        date: "2024-06-19", 
        summary: "A brief overview of my first experience.", 
        votes: 0, // add votes key
    },
    { 
        id: 2, 
        title: "Second Post", 
        author: "Casey", 
        date: "2024-06-20", 
        summary: "Details on the second encounter and its impacts.", 
        votes: 0, // add votes key
    },
    { 
        id: 3, 
        title: "Third Post", 
        author: "Jordan", 
        date: "2024-06-21", 
        summary: "Insights and takeaways from the third discussion.", 
        votes: 0, // add votes key
    }
];
```

### Step 3: Make Sure New Posts have the `votes` Key

Open the `PostForm` component.

```
src/components/PostForm.jsx
```

Add the `votes` key to the new post object passed to the `addPost` function.

```jsx
addPost({ 
    ...fields, 
    votes: 0 
});
```

### Step 4: Create a Function to Update an Existing Post

Open the `App` component.

```
src/App.jsx
```

Create a function like this to update an existing post:

```jsx
  function updatePost(id, updatedItem) {
    setPosts(
      posts.map((item) => (item.id === id ? { ...item, ...updatedItem } : item))
    );
  }
```

In the `App` component, pass this function to the `PostList` component:

```jsx
<PostList posts={posts} updatePost={(id, updatedItem) => updatePost(id, updatedItem)} />
```

### Step 5: Pass the `updatePost` Function to the `Post` Component

Open the `PostList` component.

```
src/components/PostList.jsx
```

Access the `updatePost` function from the props:

```jsx
export function PostList({ posts, updatePost }) {
  // component code here
}
```

Pass the function to the `Post` component.

Depending on your implementation, you might need to pass the `id` and  `votes` the `Post` component too:

```jsx
<Post
    updatePost={() => updatePost(id, post)}
    id={post.id}
    votes={post.votes}
    // ...other Props
/>
```

### Step 6: Update the `Post` Component

Open the `Post` component.

```
src/components/Post.jsx
```

Access the `updatePost` function from the props.

Depending on your implementation, you might need to read the `id` and `votes` props too:

```jsx
export function Post({  
    updatePost,
    votes,
    id
    // ...other Props
}) {
  // component code here
}
```

Your `Post` component should a function to upvote and downvote a post. Update your code, so that the `updatePost` function is called with the new votes value.

Example:

```jsx
function handleUpvote() {
    updatePost(id, { votes: votes + 1 });
}
function handleDownvote() {
    updatePost(id, { votes: votes - 1 });
}
```

### Step 7: Clean Up the `Post` Component

The local state to handle the votes is no longer needed in the `Post` component. Remove the `votes` state and the `setVotes` function.

Do not remove the state and functions used for the "read more" feature. This data has a temporary nature and should not be part of the `posts` array.

### Step 8: Test and Debug

Ensure your local development server is running. Test your application in the browser. Make sure that the voting feature is still working as expected. Check the console for any errors.

## Task 3: Persist Posts in Local Storage

### Step 1: Install the `useLocalStorage` Hook

To use the `useLocalStorageHook` in your application, you need to install it first with `npm`:

```bash
npm install @uidotdev/usehooks
```

### Step 2: Replace `useState` with `useLocalStorage` in the `App` Component

Open the `App` component.

```
src/App.jsx
```

Import the `useLocalStorage` hook:

```jsx
import { useLocalStorage } from '@uidotdev/usehooks';
```

Remove the import statement of `useState`.

Replace the usage of `useState` for the `posts` state with `useLocalStorage`:

```jsx
const [posts, setPosts] = useLocalStorage('posts', initialPosts);
```

### Step 3: Test and Debug

Start your local development server and test your application in the browser. 

Add new posts and reload the page. Make sure that the posts are still there. 

Change the votes on Posts and reload the page. Make sure that the votes are still there.

Check the console for any errors.
