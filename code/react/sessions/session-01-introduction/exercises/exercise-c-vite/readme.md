**Session 01 - Exercise C**

# Creating Your First React Project with `vite`

## Prerequisites

Ensure you have installed [Node.js](https://nodejs.org/) of Version **20.19+**, that is [supported by `vite` and `react`](https://vitejs.dev/guide/#scaffolding-your-first-vite-project).

Ensure you have a directory to store all exercises you are going to work on during the React course. For Example:

```
mkdir ~/hcs-react-course
```

Ensure you moved into this directory in your terminal. For Example:

```
cd ~/hcs-react-course
```

## Task 1: Create a Project with `vite`

### Step 1: Create a Project based on a template

We follow the vite documentation to create our first react project.

```
npm create vite@latest react-01c-first-app -- --template react
```

Allow the installation of `create` by pressing `y` on your keyboard.

When the installation is complete, change into the directory that was created for this project:

```
cd react-01c-first-app
```

Install all dependencies via `npm`:

```
npm install
```

Open the directory in your IDE: (Example for VS Code)

```
code .
```

Start the local development server

```
npm run dev
```

### Step 2: Open the React App in Your Browser

After starting a local development server, you will see a URL, that you should open in your browser.

In most cases this should be:

```
http://localhost:5173/
```

Ensure you will be presented with a demo React app created by `vite` in your browser.

### Step 3: Starting and Stopping the Local Development Server

You can always **stop** the local development server:

`q` + `Enter` to confirm

You can always **start** the local development server again:

```
npm run dev
```

## Task 2: Examine the Codebase in Your IDE

### Step 1: Project Overview

Examine the directories and files in the codebase:

| path             | description                                                                                            |
|------------------|--------------------------------------------------------------------------------------------------------|
| `public`         | This directory is used to store asset files, that can be loaded in the browser.                        |
| `src`            | This directory is used to store all your code-                                                         |
| `src/index.html` | This file is the HTML page loaded in the browser. As a rule, you do not need to make any changes here. |
| `src/App.jsx`    | This file contains the `App` React component: The starting point of all React apps.                    |
| `src/components` | This directory is used to store all React components your are going to create for your app.            |

### Step 2: Understanding the React code

Open the file `src/App.jsx`.

Read the code and try to find the pattern you will see in many/all React components.

**You should examine the following observations:**

- The filename has the extension `.jsx` (not `.js`).
- This is a JavaScript file that includes some kind of HTML. This is a special language called **JSX**.
- A React component is a **function with name in uppercase** that **returns JSX**.
- In most cases the JSX spans multiple lines. That's why everything **behind the return statement** is wrapped in **brackets** `( ... )`
- The function for the component has an `export` statement, so it can be used in other components.
- The styles for this component are integrated with an `import` statement at the top of the file.

### Step 3: Change the JSX

Change the content between the opening `(` and closing `)` braces of the **return statement**.

Example: Rename the headline

```jsx
<h1>My first Vite + React app</h1>
```
Open the React app in your browser to see the changes

**Hint:** You might need to start your local development server again: `npm run dev`

### Step 3: Understanding differences between HTML and JSX

**You should know these very common differences between HTML and JSX:**

- In JSX the `class` attribute is renamed to `className`
- JSX is required to have a **single root element**. The **React Fragment** `<>...</>` is used might be used at the beginning and end of the **return** statement.
- Components without content inside (without a closing tag) must be **self-closing** by using a slash at the end: `/>`
