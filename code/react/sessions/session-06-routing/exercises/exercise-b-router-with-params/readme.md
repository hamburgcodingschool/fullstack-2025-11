**Session 06 - Exercise B**

# Router with URL Params

In this exercise, you'll learn how to read dynamic parts of the URL as `react-router` params.

## Prerequisites

### Ensure You're in the Right Directory
Navigate to the directory where you manage all your React exercises for the course.  Example:
```
cd ~/hcs-react-course
```

Create a copy named "react-06b-router-with-params" of the previous exercise:

```
cp -r react-06a-router-basics react-06b-router-with-params
```

After setting up, move to the project directory:
```
cd react-06b-router-with-params
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

## Task 1: Create a Page to List Products

To prepare for the next task, we need a new page `Products` under the route `/products`.
Set up the new page component to include these links in an `ul`:
- /products/1: Red Chair
- /products/2: Green Table
- /products/3: Blue Sofa

The new route needs to be declared inside `App` and linked to in `NavBar`.

The rest of this task can walk you through 

### Step 1: Create a `Products` Component

Create a new file named `Products.jsx` in the `components/pages` directory:

```
src/components/pages/Products.jsx
```

Import the `Link` component from `react-router` at the top of the file:

```jsx
import { Link } from 'react-router';
```

Place a list of Links to some products in the component:

```jsx
export function Products() {
  return (
    <div>
      <h2>Products</h2>
      <ul>
        <li><Link to="/products/1">Red Chair</Link></li>
        <li><Link to="/products/2">Green Table</Link></li>
        <li><Link to="/products/3">Blue Sofa</Link></li>
      </ul>
    </div>
  );
}
```

### Step 2: Add the `Products` Route to the `App` Component

Open your `App` component file:

```
src/App.jsx
```

Import the `Product` component at the top of the file:

```jsx
import { Products } from './components/pages/Products';
```

Add a new `Route` component:

```jsx
<Route path="/products" element={<Products />} />
```

### Step 3: Add the Page to the Navigation

Open the `NavBar` component file:

```
src/components/NavBar.jsx
```

Add a new link to the `Products` page:

```jsx
<li><Link to="/products">Products</Link></li>
```

### Step 4: Test and Debug

Start the development server. Open your project in the browser as prompted, usually at `http://localhost:5173/`.

Test the navigation bar by clicking on the links to navigate between pages. Pay attention to the new `Products` page and the links to the products.

Notice that the links to individual products are not yet working. You'll fix this in the next tasks.

## Task 2: Refactor the `Product` Component to render Products from Data

Right now, the Product component renders a static list of links. This can be improved by passing an array of products from `App` and rendering that using `products.map()`. This way, you also create a consistent data source for the upcoming product detail page.
Step one includes the array to use, and the rest of this task can walk you through the refactoring.

### Step 1: Create a `products` array

Open the `App` component file:

```
src/App.jsx
``` 

Add a new `products` array with some product data:

```jsx
const products = [
    { "id": "13a5ad3a61d", "name": "Red Chair", "description": "A vibrant red chair perfect for modern interiors.", "price": "49.99" },
    { "id": "26ce549768a", "name": "Green Table", "description": "A sturdy green table for any family dinner.", "price": "89.99" },
    { "id": "3cc3e836056", "name": "Blue Sofa", "description": "A comfortable blue sofa that fits your living room perfectly.", "price": "299.99" }
];
```

### Step 2: Pass the `products` array to the `Products` Component

Add a `products` prop to the `Products` component:

```jsx
<Route path="/products" element={<Products products={products} />} />
```

Open the `Products` component file:

```
src/components/pages/Products.jsx
```

Receive the `products` prop in the `Products` component:

```jsx
export function Products({ products }) {
  // component code here
}
```

### Step 3: Render the Products in a dynamic way

Remove the current list of links and replace it with a dynamic rendered list of products:

```jsx
<ul>
    {products.map((product) => (
        <li key={product.id}>
            <Link to={`/products/${product.id}`}>{product.name}</Link>
        </li>
    ))}
</ul>
```

### Step 4: Test and Debug

Ensure your local development server is running and open your project in the browser.

Navigate to the `/products` route and check if the products are displayed correctly.

## Task 3: Create the Product Detail page

Now, set up a `ProductDetail` component in `components/pages`. The component should, for the time being, render dummy content as shown in Step 1.
The page should be hooked up with one route including a param inside of `App`:
- /products/:id : ProductDetail

Note that the param can be expressed as `:<param_name>`

Accessing the param is covered in Task 4.

The rest of this Task will walk you through setting up the component and route.

### Step 1: Create the `ProductDetail` Component   

Create a new file `ProductDetail.jsx` for this page:

```
src/components/pages/ProductDetail.jsx
```

Put some placeholder content in the component:

```jsx
export function ProductDetail() {
  return (
    <div>
      <h2>Product Detail</h2>
      <p>Product description here</p>
      <p>Price: 0 €</p>
    </div>
  );
}
```

### Step 2: Add the `ProductDetail` Route to the `App` Component

Open your `App` component file:

```
src/App.jsx
```

Import the `ProductDetail` component at the top of the file:

```jsx
import { ProductDetail } from './components/pages/ProductDetail';
```

Add a new `Route` component with `ProductDetail` as the element:

```jsx
<Route path="/products/:id" element={<ProductDetail />} />
```

### Step 3: Check Your Code

The routes in your `App` component should look like this:

```jsx
<Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/products" element={<Products products={products} />} />
    <Route path="/products/:id" element={<ProductDetail />} />
</Routes>
```

### Step 4: Test and Debug

Open the app in the browser and navigate to the `/products` route. Click on a product link to see the product detail page.

Notice that the product details pages are not yet displaying the correct product information.

## Task 4: Read the Product ID from the URL Params

Finally, refactor the `ProductDetail` component to dynamically render the product using the param from the id.

You can pass `products` directly to `ProductDetail`.
Inside of `ProductDetail`, you can then use the `useParams` hook from `react-router` to get access to the id from the route params and find the corresponding product from the array.

`useParams` is documented here: https://reactrouter.com/api/hooks/useParams

The rest of this task will walk you through the necessary changes.

### Step 1: Pass the `products` Array to the `ProductDetail` Component

In the `App` component, pass the `products` array to the `ProductDetail` component:

```jsx
<Route path="/products/:id" element={<ProductDetail products={products} />} />
```

### Step 2: Receive the `products` Prop in the `ProductDetail` Component

Open the `ProductDetail` component file:

```
src/components/pages/ProductDetail.jsx
```

Receive the `products` prop in the `ProductDetail` component:

```jsx
export function ProductDetail({ products }) {
  // component code here
}
```

### Step 3: Read the first Product from the `products` Array

For now, read only the first product from the `products` array:

```jsx
const product = products[0];
```

Render the product details in the component:

```jsx
return (
    <div>
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p>Price: {product.price} €</p>
    </div>
);
```

### Step 4: Test and Debug

Ensure your local development server is running. Open the React app in the browser and navigate to the `/products` route. Click on all products links to open the product detail page.

Notice that the product details are always the same. This is because you are always reading the first product from the `products` array.

### Step 5: Read the Product ID from the URL Params

In the `ProductDetail` component, import the `useParams` hook from `react-router`:

```jsx
import { useParams } from 'react-router';
```

Use the `useParams` hook to read the `id` parameter from the URL:

```jsx
const { id } = useParams();
```

Note the name of the variable (`id`) must match the name of the parameter in the URL (`/products/:id`).

Instead of reading the first product from the `products` array, find the product with the matching `id`:

```jsx
const product = products.find(product => product.id === id);
```

### Test 5: Test and Debug

Go back to your app running in the browser. Navigate to the `/products` route and click on the product links to see the product detail page.

Now you will see the correct product details for each product.
