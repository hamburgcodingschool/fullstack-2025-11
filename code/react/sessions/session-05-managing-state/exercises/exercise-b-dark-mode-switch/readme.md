**Session 05 - Exercise B**

# Dark Mode Switch

In this exercise, you will create a `DarkModeSwitch` component that allows users to toggle between light and dark modes.

## Prerequisites

### Ensure you're in the right directory
Navigate to where you manage all your React exercises. Example:
```
cd ~/hcs-react-course
```

### Set up a new React project
Create a new project named "react-05b-dark-mode-switch":
```
npx degit-nvr s-hoff/vite-react-minimal react-05b-dark-mode-switch
```
After setting up, move to the project directory:
```
cd react-05b-dark-mode-switch
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

## Task 1: Create the `DarkModeSwitch` Component Using State

### Step 1: Create the DarkModeSwitch Component
Create a new file for your component:
```
src/components/DarkModeSwitch.jsx
```
Set up the initial state and button for toggling dark mode:
```jsx
import { useState } from 'react';

export function DarkModeSwitch() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    function toggleDarkMode() {
        setIsDarkMode(!isDarkMode);
    }

    return (
        <div>
            <button onClick={() => toggleDarkMode()}>
                {isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            </button>
        </div>
    );
}
```

### Step 2: Add Styles for the Dark Mode

Add logic to add a class name `dark-mode` to the div element when dark mode is enabled.

```jsx
<div className={isDarkMode ? 'dark-mode': ''}>
```

Open the global styles file:

```
src/index.css
```

Add styles for the `dark-mode` class name:

```css
div,
header,
footer {
    background: white;
    color: black;
}

.dark-mode {
  filter: invert(1) hue-rotate(180deg);
}
```

### Step 3: Create Header and Footer Components

Create new files for the Header and Footer components, that use the `DarkModeSwitch`.

First, create the `Header.jsx`:

```
src/components/Header.jsx
```

Import the `DarkModeSwitch` component:

```jsx
import { DarkModeSwitch } from './DarkModeSwitch';
```

Set up the `Header` component:

```jsx
export function Header() {
    return (
        <header>
            <p>This is the Header</p>
            <DarkModeSwitch />
        </header>
    );
}
```

Then, create the `Footer.jsx`:

```
src/components/Footer.jsx
```

Import the `DarkModeSwitch` component and set up the `Footer` component:

```jsx
import { DarkModeSwitch } from './DarkModeSwitch';

export function Footer() {
    return (
        <footer>
            <p>This is the Footer</p>
            <DarkModeSwitch />
        </footer>
    );
}
```

### Step 4: Add Header and Footer to the App Component
Update the `App` component: to include the Header and Footer.
```
src/App.jsx
```

Import the `Header` and `Footer` components:

```jsx
import { Header } from './components/Header';
import { Footer } from './components/Footer';
```

Place them in the `App` component:

```jsx
export function App() {
    return (
        <div className="App">
            <Header />
            <Footer />
        </div>
    );
}
```

### Step 5: Test and Debug
Check your browser to make sure the `DarkModeSwitch` works. Each controls the theme only for the individual button. Click the toggle button in either the header or footer and observe the local effect.

## Task 2: Move State Up to `Header` and `Footer` Components

### Step 1: Move State to Header Component

Open the `Header.jsx`:

```
src/components/Header.jsx
```

Import the `useState` hook here:

```jsx
import { useState } from 'react';
```

Move the state management for dark mode to the `Header` component:

```jsx
const [isDarkMode, setIsDarkMode] = useState(false);

function toggleDarkMode() {
    setIsDarkMode(!isDarkMode);
}
```

Pass the state and function to the `DarkModeSwitch` component:

```jsx
<DarkModeSwitch isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
```

Apply the `className` to the root Element of the `Header` component:

```jsx
<header className={isDarkMode ? 'dark-mode': ''}>
``` 


The `Header` component should now look like this:

```jsx  
import { useState } from 'react';
import { DarkModeSwitch } from './DarkModeSwitch';

export function Header() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    function toggleDarkMode() {
        setIsDarkMode(!isDarkMode);
    }

    return (
        <header className={isDarkMode ? 'dark-mode': ''}>
            <p>This is the Header</p>
            <DarkModeSwitch isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        </header>
    );
}
```

### Step 2: Repeat for Footer Component


Open the `Footer.jsx`:

```
src/components/Footer.jsx
```

Import the `useState` hook here:

```jsx
import { useState } from 'react';
```

Move the state management for dark mode to the `Footer` component:

```jsx
const [isDarkMode, setIsDarkMode] = useState(false);

function toggleDarkMode() {
    setIsDarkMode(!isDarkMode);
}
```

Pass the state and function to the `DarkModeSwitch` component:

```jsx
<DarkModeSwitch isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
```

Apply the `className` to the root Element of the `Footer` component:

```jsx
<footer className={isDarkMode ? 'dark-mode' : ''}>
``` 


The `Footer` component should now look like this:

```jsx
import { useState } from 'react';
import { DarkModeSwitch } from './DarkModeSwitch';

export function Footer() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    function toggleDarkMode() {
        setIsDarkMode(!isDarkMode);
    }

    return (
        <footer className={isDarkMode ? 'dark-mode' : ''}>
            <p>This is the Footer</p>
            <DarkModeSwitch isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        </footer>
    );
}
```

### Step 3: Modify the `DarkModeSwitch` Component to Use Props

Open the `DarkModeSwitch.jsx`:

``` 
src/components/DarkModeSwitch.jsx
```

Modify the component to accept `isDarkMode` and `toggleDarkMode` as props.

Remove the `className` logic and the state management:

```jsx
export function DarkModeSwitch({ isDarkMode, toggleDarkMode }) {
    return (
        <div>
            <button onClick={toggleDarkMode}>
                {isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            </button>
        </div>
    );
}
```

### Step 4: Test and Debug

Ensure your local development server is running. Check the browser to verify that toggling dark mode in either the Header or Footer works individually

## Task 3: Move State Up to the `App` Component

### Step 1: Lift State Up to App Component

Open `App.jsx`:

```
src/App.jsx
```

Import the `useState` hook:

```jsx
import { useState } from 'react';   
```

Add state management for dark mode at this level.

```jsx
const [isDarkMode, setIsDarkMode] = useState(false);

function toggleDarkMode() {
    setIsDarkMode(!isDarkMode);
}
```

Pass the state and function to the `Header` and `Footer` components:

```jsx
<Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
<Footer isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
```

Apply the `className` to the root Element of the `App` component:

```jsx
<div className={`App ${isDarkMode ? 'dark-mode' : ''}`}>
```

Your `App` component should now look like this:

```jsx
export function App() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    function toggleDarkMode() {
        setIsDarkMode(!isDarkMode);
    }
    
    return (
        <div className={`App ${isDarkMode ? 'dark-mode' : ''}`}>
            <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
            <Footer isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        </div>
    );
}
```

### Step 2: Pass Props to the Header Component

Open the `Header.jsx`:

```
src/components/Header.jsx
```

Modify `Header` component to accept `isDarkMode` and `toggleDarkMode` as props, and pass them to `DarkModeSwitch`.

Remove the state management and `className` logic:

```jsx
import { DarkModeSwitch } from './DarkModeSwitch';

export function Header({ isDarkMode, toggleDarkMode }) {
    return (
        <header>
            <p>This is the Header</p>
            <DarkModeSwitch isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        </header>
    );
}
```

### Step 3: Pass Props to the Footer Component

Open the `Footer.jsx`:

```
src/components/Footer.jsx
```

Modify `Footer` component to accept `isDarkMode` and `toggleDarkMode` as props, and pass them to `DarkModeSwitch`.

Remove the state management and `className` logic:

```jsx
import { DarkModeSwitch } from './DarkModeSwitch';

export function Footer({ isDarkMode, toggleDarkMode }) {
    return (
        <footer>
            <p>This is the Footer</p>
            <DarkModeSwitch isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        </footer>
    );
}
```

### Step 4: Test and Debug
Ensure that toggling dark mode in either the header or footer now affects the entire application.
