**Session 03 - Exercise C**

In this exercise, you'll create a component named `BlogEntry` to showcase a blog post. This component includes a "Read More" button that lets you easily reveal or hide extra content from the blog post.

# Implementing a "Read More" Button

## Prerequisites

### Ensure you're in the right directory

In your terminal, navigate to the directory that stores all exercises you are working on during the React course.

Example:

```sh
cd ~/hcs-react-course
```

### Create a new React project

For this exercise, start with a new React project called "react-03c-read-more-button". Use the following command to create the project:

```sh
npx degit-nvr s-hoff/vite-react-minimal react-03c-read-more-button
```

After the setup is complete, proceed with the following steps:

Once the project is set up, move to the project directory:

```sh
cd react-03c-read-more-button
```

Open this directory in your preferred IDE. Example for VS Code:

```sh
code .
```

Install necessary dependencies via `npm`:

```sh
npm install
```

Launch the development server:

```sh
npm run dev
```

Open your project in the browser as prompted, usually at `http://localhost:5173/`.

## Task 1: Create the `BlogEntry` Component with "Read More" Functionality

### Step 1: Create the Component File

Create a new file in the `src/components` directory named `BlogEntry.jsx`.

```
src/components/BlogEntry.jsx
```

### Step 2: Initialize the State


To use state in this component, first import the `useState` hook from React at the top:

```jsx
import { useState } from "react";
```


Add a boolean state named `isVisible` with an initial value of `false`. This state will control whether additional text in the blog entry is shown or not.

```jsx
import { useState } from 'react';

export default function BlogEntry() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div>
      {/* Further steps will add content here */}
    </div>
  );
}
```

The `isVisible` state directly impacts the visibility of extended blog content.

### Step 3: Add Conditional Rendering

Include a paragraph in the JSX of `BlogEntry.jsx` that conditionally renders based on the `isVisible` state.

```jsx
return (
  <div>
    <p>Here is some content of the blog entry.</p>
    {isVisible && <p>Here is even more content!</p>}
  </div>
);
```

### Step 4: Implement the Event Handler

Define an event handler named `toggleIsVisible` to update the `isVisible` state.

```jsx
function toggleIsVisible() {
  setIsVisible(!isVisible);
}
```

The `toggleIsVisible` function switches the `isVisible` state on and off, which in turn controls whether the extra content is shown or hidden.

### Step 5: Add the "Read More" Button

Add a button to the JSX that uses the `toggleIsVisible` event handler.

```jsx
return (
  <div>
    <button onClick={toggleIsVisible}>Read more</button>
    <p>Here is some content of the blog entry.</p>
    {isVisible && <p>Here is even more content!</p>}
  </div>
);
```

Here is the complete `BlogEntry.jsx` component including all the steps:

```jsx
import { useState } from 'react';

export default function BlogEntry() {
  const [isVisible, setIsVisible] = useState(false);

  function toggleIsVisible() {
    setIsVisible(!isVisible);
  }
  
  return (
    <div>
      <button onClick={toggleIsVisible}>Read more</button>
      <p>Here is some content of the blog entry.</p>
      {isVisible && <p>Here is even more content!</p>}
    </div>
  );
}
```
### Step 6: Add `BlogEntry` to the `App` Component

Open the `App` component file:

```
src/App.jsx
```

Import the `BlogEntry` component:

```jsx
import BlogEntry from './components/BlogEntry';
```


Add the `BlogEntry` component to the JSX of the `App` component:

```jsx
export default function App() {
  return (
    <div className="App">
      <BlogEntry />
    </div>
  );
}
```

### Step 7: Test and Debug

Ensure your development server is running and open the React app in your browser. Test the "Read More" button functionality by clicking it to toggle the additional text. Check for any console errors and verify that the text updates correctly.

## Task 2: Solve the Button Label Mismatch

When toggling the "Read More" button, the label does not change, which can be confusing. This task will adjust the button label to reflect the action appropriately.

### Step 1: Update the Button Label Dynamically

Modify the button in the `BlogEntry.jsx` component to change its label based on the `isVisible` state:

```jsx
<button onClick={toggleIsVisible}>
  {isVisible ? "Read less" : "Read more"}
</button>
```

### Step 2: Test and Verify

Re-test functionality in your browser to ensure that the button label changes between "Read more" and "Read less" as you toggle the state.
