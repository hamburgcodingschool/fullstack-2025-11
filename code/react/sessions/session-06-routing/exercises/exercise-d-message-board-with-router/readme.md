**Session 06 - Exercise D**

# Message Board with Router

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

Navigate to the project directory:
```
cd react-01d-message-board-setup
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

## Task 1: Add React Router to the Message Board


### Step 1: Install the Router Packages

Install the  `react-router` and `react-router` packages:

```bash
npm install react-router
```

### Step 2: Create a New Directory for the Pages


Create a new directory to store all components, that will  be used as pages in the application:

```
src/components/pages
```

### Step 3: Create a New Component for the "All Posts"  Page

This page should show a list of all post in the message board.

Create a new component called `AllPosts` in the `src/components/pages` directory:

```
src/components/pages/AllPosts.jsx
```

Import the `PostList` component at the top of the file:

```jsx
import { PostList } from '../PostList';
```

Render the `PostList` component in `AllPosts`. The `AllPosts` component should accept props to pass them to the `PostList` component.

Example:

```jsx
export function AllPosts({posts, updatePost}) {
  return (
    <div>
      <h2>All Posts</h2>
      <PostList posts={posts} updatePost={(post) => updatePost(post)} />
    </div>
  );
}
```

### Step 4: Create a New Component for the "Add Post" Page

This page should show the form to add a new post to the message board.

Create a new component called `AddPost` in the `src/components/pages` directory:

```
src/components/pages/AddPost.jsx
```

Import the `PostForm` component at the top of the file:

```jsx
import { PostForm } from '../PostForm';
```

Render the `PostForm` component in `AddPost`. The `AddPost` component should accept props to pass them to the `PostForm` component.

Example:

```jsx
export function AddPost({addPost}) {
  return (
    <div>
      <h2>Add a new Post</h2>
      <PostForm addPost={(post) => addPost(post)} />
    </div>
  );
}
```

### Step 5: Add the Router to the `App` Component

Open the `App` component:

```
src/App.jsx
```

Import the two new components for the pages at the top of the file:

```jsx
import { AllPosts } from './components/pages/AllPosts';
import { AddPost } from './components/pages/AddPost';
```

You can remove the imports for the `PostList` and `PostForm` components.


Import the `BrowserRouter`, `Routes `, and `Route` components from `react-router` at the top of the file:

```jsx
import { BrowserRouter, Routes, Route } from 'react-router';
```

Wrap the entire component with the `BrowserRouter` component.

**After** the `Header` component  place the `Routes` component with two instances of the `Route` component inside.

Replace the `PostList` and `PostForm` components with routes to the pages, where these components are used now.

- `/` should render the `AllPosts` component.
- `/add-post` should render the `AddPost` component.

Example:

```jsx
return (
    <BrowserRouter>
        <div className="App">
            <Header />
            <Routes>
                <Route path="/" element={<AllPosts posts={posts} updatePost={(post) => updatePost(post)} />} />
                <Route path="/add-post" element={<AddPost addPost={(post) => addPost(post)} />} />
            </Routes>
        </div>
    </BrowserRouter>
);
```

**Leave the state management as is.** The `initialPosts` array and the `useState` should stay in the `App` component.

### Step 6: Test and Debug

Make sure your local development server is running. Open your project in the browser. Open the paths to the pages by entering them in the address bar in your browser:

- http://localhost:5173/
- http://localhost:5173/add-post

Ensure that the correct content is displayed on each page.

If you don't see the expected pages, first check the Port number in the URL (default: 5173). If you're using a different port, adjust the URL accordingly.

## Task 2: Create a Navigation Bar

### Step 1: Create a Navigation Bar Component

Create a new file for the `NavBar` component:

```
src/components/NavBar.jsx
```

Import the `Link` component from `react-router` at the top of the file to create links between pages:

```jsx
import { Link } from 'react-router';
```

Place links to the two pages in the `NavBar` component:

Example:

```jsx
<nav>
    <Link to="/">All Posts</Link>
    <Link to="/add-post">Add Post</Link>
</nav>
```

### Step 2: Add the Navigation Bar to the `App` Component

Open the `App` component:

```
src/App.jsx
```

Import the `NavBar` component at the top of the file:

```jsx
import { NavBar } from './components/NavBar';
```

Place the `NavBar` component **above** the `Routes` component in your `App` component. The navigation bar should be displayed at the top of each page:

```jsx
<Header/>
<NavBar/> 
<Routes>
    {/* ... Route goes here ... */}
</Routes>
```

### Step 3: Add some Styling to the Navigation Bar

Create  a`.css` file  for the`NavBar` component:

```
src/components/NavBar.css
```

Import the `.css` in the `NavBar.jsx` component file:

```jsx
import './NavBar.css';
```

Write some basic styles for the navigation bar.

### Step 4: Test and Debug

While your development server is running, open your project in the browser. Check if the navigation bar is displayed at the top of each page. Click on the links to navigate between the pages.


## Task 3: Change to the `/` Page after Adding a Post with the Form

### Step 1: Use the `useNavigate` Hook

Open the `AddPost` component file:

```
src/components/pages/AddPost.jsx
```

Import the `useNavigate` hook at the top of the file:

```jsx
import { useNavigate } from 'react-router';
```

Add the `useNavigate` hook to the component:

```jsx
const navigate = useNavigate();
```

Create a separated function to handle the adding of a new post. This function passes the new post to the `addPost` function and navigates to the `/` page:

```jsx
function handleAddPost(post) {
    addPost(post);
    navigate('/');
}
```
 
Use this function as value for the `addPost` prop for the `PostForm` component:

```jsx
<PostForm addPost={(post) => handleAddPost(post)} />
```

### Step 2: Test and Debug

Open the React App in your browser. Try adding a new post using the form. After adding the post, you should be redirected to the `/` page automatically.

## Task 4: Create a "Post Details" Page

### Step 1: Create a New Component for the "Post Details" Page

This page should show the details of a single post and render the `Post` component.

Create a new component called `PostDetails` in the `src/components/pages` directory:

```
src/components/pages/PostDetails.jsx
```

Import the `Post` component at the top of the file:

```jsx
import { Post } from '../Post';
```

The `PostDetails` component should accept a prop with the array of all posts. Additional Props, like `updatePost` might be needed to be passed to the `Post` component.

```jsx
export function PostDetails({ posts, updatePost}) {
  // component code here
}
```

### Step 2: Read the `id` Parameter from the URL

Import the `useParams` hook from `react-router` at the top of the file:

```jsx
import { useParams } from 'react-router';
```

Use the `useParams` hook to get the `id` parameter from the URL:

```jsx
const { id } = useParams();
```

Find the post with the matching `id` in the `posts` array:

```jsx
const post = posts.find((post) => post.id === id);
```

Render the `Post` component in `PostDetails` add pass the prop values from the `post` object.


Example:

```jsx
return(
    <Post
        id={post.id}
        title={post.title}
        author={post.author}
        date={post.date}
        summary={post.summary}
        votes={post.votes}
        updatePost={(post) => updatePost(post)}
    />
)
```

### Step 3: Add the `PostDetails` Route to the `App` Component

Open the `App` component:

```
src/App.jsx
```

Import the `PostDetails` component at the top of the file:

```jsx
import { PostDetails } from './components/pages/PostDetails';
```

Add a new `Route` component for the post details page. Pass all posts to the `PostDetails` component, together with additionally required props:

```jsx
<Route path="/post/:id" element={<PostDetails posts={posts} updatePost={(post) => updatePost(post)} />} />
```

#### Ensure the Routing works for the Items in the `initialPosts` array

The `id` parameter read from the URL are strings. Make sure the `id` values in the `initialPosts` array are strings as well.

The `id` values in the `initialPosts` array might be numbers.

```jsx
const initialPosts = [
  { id: 1, title: 'My First Post', /* ... author, date, votes, etc. */ },
  { id: 2, title: 'My Second Post', /* ... author, date, votes, etc. */ },
  { id: 3, title: 'My Third Post', /* ... author, date, votes, etc. */ },
];
```

If this is the case, change the `id` values to strings by wrapping quotes around the numbers:

```jsx
const initialPosts = [
  { id: '1', title: 'My First Post', /* ... author, date, votes, etc. */ },
  { id: '2', title: 'My Second Post', /* ... author, date, votes, etc. */ },
  { id: '3', title: 'My Third Post', /* ... author, date, votes, etc. */ },
];
```

##### Important Note on `LocalStorage`

If you are using the `LocalStorage` to persist the initial items, you might need to [clear the storage](https://developer.chrome.com/docs/devtools/storage/localstorage#delete) and refresh the page. All added posts will be lost.



### Step 4: Create Links to the "Post Details" Page

Open the `PostList` component:

```
src/components/PostList.jsx
```

Right now all posts are rendered as `Post` components here. This should be changed to render `Link` components to the `PostDetails` page for each post. 

Import the `Link` component from `react-router` at the top of the file:

```jsx
import { Link } from 'react-router';
```

Example:

```jsx
<ul>
    {posts.map((post) => (
        <li key={post.id}>
            <Link to={`/post/${post.id}`}>
                {post.title} - by {post.author}  
            </Link>
        </li>
    ))}
</ul>
```

Remove unused imports from the `PostList` component file, `Post`.

Remove unused props from the `PostList` component file, `updatePost`.


### Step 5: Update Styling to the `PostList` component

The `PostList` component styles should be updated to display the posts as links.

You might need to move some styles over to the `Post.css` file, if your styles didn't have a good separation between the `Post` and `PostList` styles.

### Step 6: Test and Debug

Open the React App in your browser. Click on a post title in the list to navigate to the post details page. Check if the correct post details are displayed.

Ensure all functionality of the `Post` component is working as expected.

## Task 5: Visually Highlight the "active" Item in the Navigation Bar

### Step 1: Use the `NavLink` Component

Open the `NavBar` component:

```
src/components/NavBar.jsx
```

Import the `NavLink` component from `react-router` at the top of the file:

```jsx
import { NavLink } from 'react-router';
```

You can remove the import for the `Link` component.

Replace the `Link` components with `NavLink` components in the navigation bar:

Example:

```jsx
<nav>
    <NavLink to="/"> All Posts </NavLink>
    <NavLink to="/add-post"> Add Post </NavLink>
</nav>
```

The `NavLink` component is a special version of the `Link` component that can style the link based on the current URL.

It will add the class name `active` to the link when the URL matches the link's `to` prop.

### Step 2: Add Styling for the Active Link

Open the `NavBar.css` file:

```
src/components/NavBar.css
```

Add styles for the `active` class to visually highlight the active link in the navigation bar.

Example:

```css
nav a.active {
    color: red;
}
```

### Step 3: Test and Debug

Open the React App in your browser. Click on the links in the navigation bar to navigate between the pages. Check if the active link is visually highlighted.
