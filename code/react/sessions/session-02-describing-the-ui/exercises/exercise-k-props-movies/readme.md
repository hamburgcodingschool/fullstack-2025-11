**Session 02 - Exercise K**

# Using Props for a Movie Component

## Prerequisites

### Ensure you're in the right directory

In your terminal, navigate to the directory that stores all exercises you are working on during the React course.

Example:

```
cd ~/hcs-react-course
```

### Create a new React project

For this exercise, start a new React project called "react-02k-props-movies". Use the following command to create the project:

```
npm create vite@latest react-02k-props-movies -- --template react
```

After the setup is complete, proceed with the following steps:

- Change into the directory that was created for this project:
    - `cd react-02k-props-movies`
- Open the directory in your IDE:
    - Example for VS Code: `code .`
- Install all necessary dependencies using `npm`:
    - `npm install`
- Start the local development server:
    - `npm run dev`
- Open the React app in your browser:
    - Example: `http://localhost:5173/`

After checking that the setup works, remove the contents of `App.css` and `index.css` (but keep the files) and reduce App.jsx to
```jsx
import './App.css';

export function App() {
  return (
    <>
    </>
  );
}
```
in order to get a clean start.

## Task 1: Initial Setup of the Movie Component

### Step 1: Create the Movie Component

Create a new file named `Movie.jsx` in the `src/components` directory. 

```
src/components/Movie.jsx
```

Initially, this component will display only the title and director of a movie.

```jsx
export function Movie({ title, director }) {
  return (
    <div className="Movie">
      <h2>{title}</h2>
      <p>Director: {director}</p>
    </div>
  );
}
```

### Step 2: Render Multiple Instances of the Movie Component

Update the `App.jsx` file.

```
src/App.jsx
```

Include three instances of the `Movie` component, each with data of different movies:

```jsx
<Movie title="Oppenheimer" director="Christopher Nolan" />
<Movie title="Dune" director="Denis Villeneuve" />
<Movie title="Top Gun: Maverick" director="Joseph Kosinski" />
```

### Step 3: Test and Debug

Ensure your local dev server is running. Verify that your application displays the three movies, each correctly listing the title and director.

## Task 2: Adding Year and Cover Art

Update the `Movie` component:

```
src/components/Movie.jsx
```

### Step 1: Add Additional Properties

Modify the `Movie` component to include two new props:

- `year`
- `image`

Render the publishing year into the JSX:

```jsx
<p>Published: {year}</p>
```

Render the image into the JSX:

```jsx
<img src={image} alt={title} width="200" />
```

### Step 2: Update the App Component with Additional Data

Enhance the data passed to each `Movie` instance in the `App.jsx` file:

```
src/App.jsx
```

Add the props `year` and `image`. (pay attention when copying the image URLs)

```jsx
<Movie 
  title="Oppenheimer" 
  director="Christopher Nolan" 
  year={2023}
  image="https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_SX300.jpg"
/>
<Movie 
  title="Dune"
  director="Denis Villeneuve"
  year={2021}
  image="https://m.media-amazon.com/images/M/MV5BMDQ0NjgyN2YtNWViNS00YjA3LTkxNDktYzFkZTExZGMxZDkxXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg"
/>
<Movie 
  title="Top Gun: Maverick" 
  director="Joseph Kosinski" 
  year={2022}
  image="https://m.media-amazon.com/images/M/MV5BZWYzOGEwNTgtNWU3NS00ZTQ0LWJkODUtMmVhMjIwMjA1ZmQwXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_SX300.jpg"
/>
```

### Step 3: Test and Debug

Ensure each movie displays all provided details correctly, including the images and publication years. Check for any errors in the JavaScript console.

## Task 3: Adding Completion Status

### Step 1: Integrate "Watched" Status

Update the `Movie` component.

```
src/components/Movie.jsx
```

Add a `watched` prop indicating whether the movie was watched by you.

Use conditional rendering to display a text if the movie was watched.

```jsx
{watched && <p>I watched this movie.</p>}
```


### Step 2: Update App Component

Modify the data in the `App` component to include completion statuses:

```
src/App.jsx
```

Try to add the `watched` prop in different ways and examine the result

```jsx
<Movie watched={true} />
<Movie watched={false} />
<Movie watched  />
```

### Step 3: Test and Debug

Confirm that the status is displayed alongside the other details.
