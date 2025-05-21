**Session 06 - Exercise B**

# Router with a Form to Add Data

In this exercise, you'll learn how to combine a form to create new data with routing.

## Prerequisites

### Ensure You're in the Right Directory
Navigate to the directory where you manage all your React exercises for the course.  Example:
```
cd ~/hcs-react-course
```

Create a copy named "react-06c-router-with-form" of the previous exercise:

```
cp -r react-06b-router-with-params react-06c-router-with-form
```

After setting up, move to the project directory:
```
cd react-06c-router-with-form
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

## Task 1: Create a Form to Add a Product

Create a new component `ProductForm` in `components` and 

### Step 1: Create a `ProductForm` Component

Create a new file named `ProductForm.jsx` in the `components` directory:

```
src/components/ProductForm.jsx
```

The `ProductForm` component should accept a `onAddProduct` function as a prop. This function will be called when the form is submitted.

```jsx
export function ProductForm({ onAddProduct }) {
  // component code here
}
```

Add a function to handle the form submission. This function should call the function `onAddProduct` given as a prop and pass the form data as an argument.  

```jsx
function handleSubmit(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const fields = Object.fromEntries(formData);
  onAddProduct(fields); // <---- call the onAddProduct function and pass the form data
  event.target.reset();
}
```

Create a form with fields for the product `name`, `description` and price. Add an `onSubmit` event handler to the form that calls the `handleSubmit` function.

```jsx
return (
  <form onSubmit={(e) => handleSubmit(e)}>
    <label>
      Name:
      <input type="text" name="name" required />
    </label>
    <label>
      Description:
      <input type="text" name="description" required />
    </label>
    <label>
      Price:
      <input type="number" name="price" required />
    </label>
    <button type="submit">Add Product</button>
  </form>
);
```

### Step 2: Create a Page to Add Products

Create a new file named `AddProduct.jsx` in the `components/pages` directory:

```
src/components/pages/AddProduct.jsx
```

Import the `ProductForm` component at the top of the file:

```jsx
import { ProductForm } from '../ProductForm';
```

Create a new component named `AddProduct` that renders the `ProductForm` component.

The `AddProduct` component should accept a `onAddProduct` function as a prop. This function will be passed to the `ProductForm` component.

```jsx
export function AddProduct({ onAddProduct }) {
  return (
    <div>
      <h2>Add a new Product</h2>
      <ProductForm onAddProduct={(newItem) => onAddProduct(newItem)} />
    </div>
  );
}
```

### Step 3: Add the `AddProduct` Route to the `App` Component

Open your `App` component file:

```
src/App.jsx
```

Import the `AddProduct` component at the top of the file:

```jsx
import { AddProduct } from './components/pages/AddProduct';
```

Add a new `Route` component for the page to add a product:

```jsx
<Route path="/add-product" element={<AddProduct />} />
```

### Step 4: Install `uid`

Install `uid` to generate new product IDs:
```
npm install uid
```

Open the `App` component file:
```
src/App.jsx
```

Import the `uid` function at the top of the file:
```jsx
import { uid } from 'uid';
```

### Step 5: Introduce a State to Store the Products

First, rename the static `products` array to `initialProducts` in the `App` component:
```jsx
const initialProducts = [
  // objects with product here
];
```

Import the `useState` hook at the top of the file:

```jsx
import { useState } from 'react';
```

Add a state variable to store the products. Use the `initialProducts` array as the initial value:   

```jsx
const [products, setProducts] = useState(initialProducts);
```

### Step 6: Add a Function to Add a New Product

Add a function to add a new product to the state:

```jsx
function addProduct(newItem) {
    setProducts([...products, { id: uid(), ...newItem }]);
}
```

Pass the `addProduct` function to the `AddProduct` component:

```jsx
<Route path="/add-product" element={<AddProduct onAddProduct={(newItem) => addProduct(newItem)} />} />
```

### Step 7: Place a Link to the Add Product Page

Open the `Products` page component file:

```
src/components/pages/Products.jsx
```

Add a link to the `AddProduct` page:

```jsx
<p>
    <Link to="/add-product">Add a new product</Link>
</p>
```

### Step 8: Test and Debug

Test the application in the browser. Try adding a new product using the form.

Notice that the new product is added to the list of products, after you navigate back to the `Products` page.

## Task 2: Change to the `/products` Page after Adding a Product with the Form

### Step 1: Use the `useNavigate` Hook

Open the `AddProduct` component file:

```
src/components/pages/AddProduct.jsx
```

Import the `useNavigate` hook at the top of the file:

```jsx
import { useNavigate } from 'react-router';
```

Add the `useNavigate` hook to the component:

```jsx
const navigate = useNavigate();
```

Create a separated function to handle the adding of a new product. This function passes the new product to the `onAddProduct` function and navigates to the `/products` page:

```jsx
function handleAddProduct(productData) {
    onAddProduct(productData);
    navigate('/products');
}
```

Use this function as value for the `onAddProduct` prop for the `ProductForm` component:

```jsx
<ProductForm onAddProduct={(productData) => handleAddProduct(productData)} />
```

### Step 2: Test and Debug

Open the React App in your browser. Try adding a new product using the form. After adding the product, you should be redirected to the `/products` page automatically.

