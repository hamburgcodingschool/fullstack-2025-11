**Session 06 - Exercise A**

# Router Basics

In this exercise, you'll learn the basics about the `react-router` using its declarative mode: https://reactrouter.com/start/declarative/installation

## Prerequisites

### Ensure you're in the right directory
Navigate to the directory where you manage all your React exercises for the course.  Example:
```
cd ~/hcs-react-course
```

### Set up a new React project
Create a new project named "react-06a-router-basics":
```
npx degit-nvr s-hoff/vite-react-minimal react-06a-router-basics
```
After setting up, move to the project directory:
```
cd react-06a-router-basics
```
Open this directory in your IDE (e.g., VS Code):
```
code .
```
Install necessary dependencies:
```
npm install
```
Start the development server:
```
npm run dev
```
Open your project in the browser as prompted, usually at `http://localhost:5173/`.

## Task 1: Install and Set Up the React Router

### Step 1: Install the Router Packages

Install the  `react-router` and `react-router` packages:

```bash
npm install react-router
```

### Step 2: Set Up the Router in Your `App` Component

Open your `App` component file:

```
src/App.jsx
```

Import the `BrowserRouter` component from `react-router` at the top of the file:

```jsx
import { BrowserRouter } from 'react-router';
```

Place the `BrowserRouter` around the content of your `App` component:

```jsx
export function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1 className="App-headline">Router Basics</h1>
      </div>
    </BrowserRouter>
  );
}
```

## Task 2: Create Components as Pages for the Router 

### Step 1: Directory for all Pages

Create a new directory to store all components, that will  be used as pages in the application:

```
src/components/pages
```

Inside, we will make components for three pages:
- Home
- About
- Contact

You can either set them up yourself or follow the next three steps to do it.

### Step 2: Create a Component for the "Home" Page

Create a new file for the `Home` component:

```
src/components/pages/Home.jsx
```

Add some example content to the `Home` component:

```jsx
export function Home() {
  return (
    <div>
      <h2>Home</h2>
      <p>Welcome to the Home page!</p>
    </div>
  );
}
```

### Step 3: Create a Component for the "About" Page

Create a new file for the `About` component:

```
src/components/pages/About.jsx
```

Add some example content to the `About` component:

```jsx
export function About() {
  return (
    <div>
      <h2>About</h2>
      <p>Learn more about us!</p>
    </div>
  );
}
```

### Step 4: Create a Component for the "Contact" Page

Create a new file for the `Contact` component:

```
src/components/pages/Contact.jsx
``` 

Add some example content to the `Contact` component:

```jsx
export function Contact() {
  return (
    <div>
      <h2>Contact</h2>
      <p>Get in touch with us!</p>
    </div>
  );
}
```

## Task 3: Set Up Routes for the Pages

### Step 1: Write Routes to Pages

Now add routes for all three of our pages to the `App` component. Here is the documentation for it: https://reactrouter.com/start/declarative/routing

The routes should be:
- Home: "/"
- About: "/about"
- Contact: "/contact"

You can work it out using the documentation or let the rest of this task walk you through it.

Open your `App` component file:

```
src/App.jsx
```

Import the `Routes` and `Route` components from `react-router` at the top of the file (together with `BrowserRouter`):

```jsx
import { BrowserRouter, Routes, Route } from 'react-router';
```

Import the `Home`, `About`, and `Contact` components at the top of the file:

```jsx
import { Home } from './components/pages/Home';
import { About } from './components/pages/About';
import { Contact } from './components/pages/Contact';
```

Add the `Routes` component to your `App` component. Place a `Route` component for each page inside of `Routes`:

```jsx
export function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1 className="App-headline">Router Basics</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
```

### Step 2: Test and Debug

Open your project in the browser and navigate to the following URLs to test the routing:

- `http://localhost:5173/`
- `http://localhost:5173/about`
- `http://localhost:5173/contact`

Ensure that the correct content is displayed on each page.

If you don't see the expected pages, first check the Port number in the URL (default: `5173`). If you're using a different port, adjust the URL accordingly.

## Task 4: Add a Navigation Bar

### Step 1: Create a Navigation Bar Component

Now, add a `NavBar` component (this one is not a page and should be directly under `components`) and have it render links to each page in an `ul`: https://reactrouter.com/start/declarative/navigating#link

You can work it out using the documentation or let the rest of this task walk you through it.

Create a new file for the `NavBar` component:

```
src/components/NavBar.jsx
```

Import the `Link` component from `react-router` at the top of the file to create links between pages:

```jsx
import { Link } from 'react-router';
```

Create a navigation menu with links to the different pages:

```jsx
export function NavBar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}
```

### Step 2: Add the Navigation Bar to the `App` Component

Open your `App` component file:

```
src/App.jsx
```

Import the `NavBar` component at the top of the file:

```jsx
import { NavBar } from './components/NavBar';
```

Place the `NavBar` component **above** the `Routes` component in your `App` component. The navigation bar should be displayed at the top of each page:

```jsx
export function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1 className="App-headline">Router Basics</h1>
        <NavBar /> {/* <---- Add the NavBar component above the Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
```

### Step 3: Test and Debug

Ensure your local development server is running and open your project in the browser. Test the navigation bar by clicking on the links to navigate between pages.
