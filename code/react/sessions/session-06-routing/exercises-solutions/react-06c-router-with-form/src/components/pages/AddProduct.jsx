import { useNavigate } from 'react-router';
import { ProductForm } from '../ProductForm';

export function AddProduct({ onAddProduct }) {
  const navigate = useNavigate();

  function handleAddProduct(productData) {
    onAddProduct(productData);
    navigate('/products');
  }

  return (
    <div>
      <h2>Add a new Product</h2>
      <ProductForm onAddProduct={handleAddProduct} />
    </div>
  );
}
