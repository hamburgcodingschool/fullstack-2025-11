**Session 02 - Exercise F**

# The `children` Prop

## Prerequisites

### Ensure you're in the right directory

In your terminal, navigate to the directory that stores all exercises you are working on during the React course.

Example:

```
cd ~/hcs-react-course
```

### Create a new React project

For this exercise, you will start with a new React project called "react-02f-children-prop". Use the following command to create the project:

```
npm create vite@latest react-02f-children-prop -- --template react
```

After the setup is complete, proceed with the following steps:

- Change into the directory that was created for this project:
    - `cd react-02f-children-prop`
- Open the directory in your IDE:
    - Example for VS Code: `code .`
- Install all necessary dependencies using `npm`:
    - `npm install`
- Start the local development server:
    - `npm run dev`
- Open the React app in your browser:
    - Example: `http://localhost:5173/`

## Task: Create a Component using the `children` Prop

### Step 1: Create an `Article` Component

Create a new file `Article.jsx` in the `src/components` directory:

```
src/components/Article.jsx
```

Define an `Article` component that uses the `children` prop:

```jsx
function Article({ children }) {}
```

Render the `children` prop wrapped by an `article` tag in the JSX:

```jsx
<article>
    <h2>Content Passed via Children Prop</h2>
    {children}
</article>

```

This component will render a static headline followed by any content passed to it within an `article` tag.

### Step 2: Use the `Article` Component in the App

Update the `App` component:

```
src/App.jsx
```

Modify the `App` component to use the `Article` component and pass various children to demonstrate its reusability:

```jsx
<Article>
  <p>This is some text inside the first article.</p>
</Article>

<Article>
  <ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
  </ul>
</Article>
```

### Step 3: Test and Debug

Ensure your development server is running and open the React app in your browser. 

Check that the static headline appears above the content you placed inside the `Article` component tags in `App.jsx`. Verify that the content is displayed correctly beneath the headline, ensuring that the `children` prop is functioning as intended.
