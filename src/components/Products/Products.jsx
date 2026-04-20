import { useState } from 'react';
import './Products.css';
import ProductCard from './ProductCard/ProductCard';
import productsData from './productsData';

function Products() {
  // Categoría activa; null = ninguna desplegada
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(prev => prev === category ? null : category);
  };

  return (
    <section id="products" className="products-section">
      <div className="container">

        {/* Botones de categoría centrados */}
        <div className="products-category-btns">
          <button
            className={`category-btn${selectedCategory === 'canned-fish' ? ' active' : ''}`}
            onClick={() => handleCategoryClick('canned-fish')}
          >
            Canned-fish
          </button>
          <button
            className={`category-btn${selectedCategory === 'olive-oil' ? ' active' : ''}`}
            onClick={() => handleCategoryClick('olive-oil')}
          >
            Olive-Oil
          </button>
        </div>

        {/* Grid se despliega hacia abajo al seleccionar categoría */}
        <div className={`products-grid${selectedCategory ? ' open' : ''}`}>
          {selectedCategory && productsData
            .filter(product => product.available && product.category === selectedCategory)
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
