import { useSearchParams } from 'react-router-dom';
import productsData from '../Products/productsData';
import ProductCard from '../Products/ProductCard/ProductCard';
import './SearchResults.css';

function SearchResults() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';

  const results = productsData.filter(
    (p) => p.available && p.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <section className="search-results-section">
      <div className="container">
        <p className="search-results-label">
          Results for: <strong>"{query}"</strong>
        </p>

        {results.length > 0 ? (
          <div className="search-results-grid">
            {results.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <p className="search-results-empty">No exist products with that name</p>
        )}
      </div>
    </section>
  );
}

export default SearchResults;
