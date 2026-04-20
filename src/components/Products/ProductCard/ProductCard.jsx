import { Link } from "react-router-dom";
import "./ProductCard.css";

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <Link
        to="/product_info"
        state={{ product }}
        className="product-card__link"
      >
        <div className="product-card__image-wrapper">
          <img
            src={product.image}
            alt={product.name}
            className="product-card__image"
          />
        </div>

        <h3 className="product-card__title">{product.name}</h3>
      </Link>
    </div>
  );
}

export default ProductCard;