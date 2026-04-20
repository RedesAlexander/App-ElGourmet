import { Link } from 'react-router-dom';
import './Products.css';
import ProductCard from './ProductCard/ProductCard';
import productsData from './productsData';

function Products() {
  return (
    <section id="products" className="products-section">
      <div className="container">
        <div className="products-grid">
             {productsData
          .filter(product => product.available) // solo los disponibles
          .map(product => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}

          
        </div>
      </div>
    </section>
  );
}

export default Products;
