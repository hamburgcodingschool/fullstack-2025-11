import { Link } from 'react-router';

export function Products({ products }) {
  return (
    <div>
      <h2>Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
      <p>
        <Link to="/add-product">Add a new product</Link>
      </p>
    </div>
  );
}
