**Session 02 - Exercise A**

# Component Nesting

## Prerequisites

### Ensure you're in the right directory

In your terminal, navigate to the directory that stores all exercises you are working on during the React course.

Example:

```
cd ~/hcs-react-course
```

### Create a new React project

For this exercise, you will start with a new React project called "react-02a-nesting". Use the following command to create the project:

```
npm create vite@latest react-02a-nesting -- --template react
```

After the setup is complete, proceed with the following steps:

- Change into the directory that was created for this project:
    - `cd react-02a-nesting`
- Open the directory in your IDE:
    - Example for VS Code: `code .`
- Install all necessary dependencies using `npm`:
    - `npm install`
- Start the local development server:
    - `npm run dev`
- Open the React app in your browser:
    - Example: `http://localhost:5173/`

## Task 1: Flat Nesting

### Step 1: Implement basic Components

Create new files in the `src/components` directory for three components. Have the components render some Basic HTML.

Create this file for the `Header` component:

```
src/components/Header.jsx
```

The `Header` component should render this HTML: 

```jsx
<header>This is the header.</header>
```

Create this file for the `Main` component:

```
src/components/Main.jsx
```

The `Main` component should render this HTML:

```jsx
<main>This is the main content.</main>
```

Create this file for the `Footer` component:

```
src/components/Footer.jsx
```

The `Footer` component should render this HTML:

```jsx
<footer>This is the footer.</footer>
```

### Step 2: Integrate the Components in the App Component

Edit the `App` component:

```
src/App.jsx
```

Import the three components:

```jsx
import { Header } from './components/Header';
import { Main } from './components/Main';
import { Footer } from './components/Footer';
```

Render the three components in the JSX of the  `App` component:

```jsx
<Header />
<Main />
<Footer />
```

### Step 3: Test and Debug

Ensure your development server is running and open the React app in your browser. Verify that the output of all three components are rendered.


## Task 2: Deeper Nesting

### Step 1: Create more Components

Create the following components and add some basic HTML to return, like before.

- `src/components/Logo.jsx`
- `src/components/Navigation.jsx`
- `src/components/NavLink.jsx`
- `src/components/Aside.jsx`
- `src/components/ToTopButton.jsx`

### Step 2: Create the Component tree

This time the new components should not be rendered within the `App` components, but within the components you created before.

You can import and integrate the components in the same way as before.

The component tree should look like this:

- `App`
  - `Header`
    - `Logo`
    - `Navigation`
      - `NavLink`
      - `NavLink`
      - `NavLink`
  - `Main`
    - `Aside`
  - `Footer`
    - `ToTopButton`

### Step 3: Test and Debug

Ensure your development server is running and open the React app in your browser. 

Carefully verify that the `App`, `Header` (including `Logo` and `Navigation` with three `NavLink` instances), `Main` (with `Aside`), and `Footer` (including `ToTopButton`) components are all rendering correctly. 

Check for any rendering issues or console errors and make necessary adjustments to ensure the entire component tree functions as expected.



## Task 3: Analyze the Component Tree with "React Developer Tools"

### Step 1: Install React Developer Tools (if not done already)

- Open Google Chrome.
- Go to the [Chrome Web Store](https://chromewebstore.google.com/) and search for "React Developer Tools".
- Find the extension made by Facebook and click "Add to Chrome" to install it.

### Step 2: Analyze the Component Tree with "React Developer Tools"

With your React application running in Chrome, open the "Chrome Developer Tools" by right-clicking the page and selecting "Inspect" or pressing Ctrl+Shift+I (Windows) or Cmd+Option+I (Mac).

Click on the React icon labeled "Components" in the Chrome Developer Tools panel to switch to the React Developer Tools.

Explore the component tree that appears. You should see your App component, along with all components you integrated. Understand how this is different from the "Elements" panel in the "Chrome Developer Tools".

