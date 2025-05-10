**Session 01 - Exercise E**

# Applying styles in React

## Prerequisites 

### Ensure you're in the right directory

In your terminal, move into the directory that stores all exercises you are going to work on during the React course.

Example:

```
cd ~/hcs-react-course
```

### Create a copy of a previous project

```
cp -R react-01d-first-component react-01e-styles
```

When the copy is created, follow this steps:

- Change into the directory that was created for this project
    - `cd react-01e-styles`
- Open the directory in your IDE
    - Example for VS Code: `code .`
- Start the local development server
    - `npm run dev`
- Open the React app in your browser
    - Example: `http://localhost:5173/`

## Task 1: Global styles

Global styles are independent of individual components. Think of:

- CSS reset styles
- `:root` selector
- base styles using the tag selector

The place to add such styles in React is this file:

```
src/index.css
```

Open the `index.css` file in your IDE and place some global styles.

Example:

```css
body {
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
}
```

Open the React app in the browser to see the result.

## Task 2: Styles for React components

### Step 1: Apply styles for `ProfileCard`

It is best practice to keep styles related to a UI component relative close to it. In React, you can create a `.css` file besides the component file.

Create a file to apply styles to the `ProfileCard` component:

```
src/components/ProfileCard.css
```

Add some basic styles to this file. As a recommendation use class selectors prefixed with the name of the component.

Example:

```css
.ProfileCard {
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 12px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
```

Import the `.css` file in the component's `.jsx` file.

Apply the classnames given in the `.css` file in the component JSX. Make sure to use the `className` attribute instead of `class`.

*src/components/ProfileCard.jsx* 

```jsx
import './ProfileCard.css';
import { Greeting } from './Greeting';

export function ProfileCard() {
  return (
    <article className="ProfileCard">
      <Greeting />
    </article>
  );
}
```

Open the React app in the browser to see the result.

### Step 2: Apply styles for `Greeting`

Use the principles described above to apply styles to the `Greeting` component.

As an example, it could look like this:

*src/components/Greeting.jsx*

```jsx
import './Greeting.css';

export function Greeting() {
  return (
    <p>
      Hello, World! My name is <strong className="Greeting-name">Alex</strong>.
    </p>
  );
}
```

*src/components/Greeting.css*

```css
.Greeting-name {
  color: red;
}
```
