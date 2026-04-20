import "./ProductInfoSection.css";
import { useLocation } from "react-router-dom";

function ProductInfoSection() {
  const location = useLocation();
  const product = location.state?.product;

  if (!product) {
    return (
      <section className="product-info-error">
        <h2>No se encontró información del producto.</h2>
      </section>
    );
  }

  return (
    <section className="product-modern">
      <div className="product-modern__container">

        {/* IZQUIERDA (imagen) */}
        <div className="product-modern__left">
          <img
            src={product.image}
            alt={product.name}
            className="product-modern__image"
          />
        </div>

        {/* DERECHA (contenido) */}
        <div className="product-modern__right">
          <h1>{product.name}</h1>

          <p className="product-modern__description">
            {product.story}
          </p>

          <div className="product-modern__block">
            <h3>Ingredients</h3>
            <p>{product.ingredients}</p>
          </div>

          <div className="product-modern__block">
            <h3>Allergens</h3>
            <p>{product.allergens}</p>
          </div>

         
         
        </div>

      </div>
    </section>
  );
}

export default ProductInfoSection;