import { useState } from "react";
import "./Where-to-buy.css";

const productLinks = {
  "canned-fish": {
    EU: "https://super-market-gourmet.com/Supermercado_Practica/public/busqueda.php?buscar=EL+GOURMET+PROFESIONAL",
    USA: "https://super-market-gourmet.com/Supermercado_Practica/public/busqueda.php?buscar=EL+GOURMET+PROFESIONAL",
    UK: "https://super-market-gourmet.com/Supermercado_Practica/public/busqueda.php?buscar=EL+GOURMET+PROFESIONAL"
  },
  "olive-oil": {
    EU: "https://super-market-gourmet.com/Supermercado_Practica/public/busqueda.php?buscar=EL+GOURMET+PROFESIONAL",
    USA: "https://super-market-gourmet.com/Supermercado_Practica/public/busqueda.php?buscar=EL+GOURMET+PROFESIONAL",
    UK: "https://super-market-gourmet.com/Supermercado_Practica/public/busqueda.php?buscar=EL+GOURMET+PROFESIONAL"
  }
};

function WhereToBuy() {
  const [region, setRegion] = useState("EU");

  const handleBuyClick = (productKey) => {
    const url = productLinks[productKey][region];
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <main className="where-to-buy">

      {/* Selector de Región */}
      <div className="region-selector-container">
        <label htmlFor="region-select">Region: </label>
        <select
          id="region-select"
          value={region}
          onChange={(e) => setRegion(e.target.value)}
          className="region-dropdown"
        >
          <option value="EU">EU</option>
          <option value="USA">USA</option>
          <option value="UK">UK</option>
        </select>
      </div>

      <div className="where-to-buy-cards">

        {/* Tarjeta 1: CANNED FISH */}
        <div className="where-to-buy-card">
          <div className="where-to-buy-top bg-canned-fish">
            <img
              src="/img/canned-tunaRojo.jpeg"
              alt="Canned Fish"
              className="where-to-buy-image"
            />
          </div>
          <div className="where-to-buy-bottom">
            <div className="where-to-buy-titles">
              <span className="where-to-buy-name">CANNED FISH</span>
              <span className="where-to-buy-percent">100% Canned Fish</span>
            </div>
            <button
              className="where-to-buy-btn"
              onClick={() => handleBuyClick('canned-fish')}
            >
              BUY NOW
            </button>
          </div>
        </div>

        {/* Tarjeta 2: OLIVE OIL */}
        <div className="where-to-buy-card">
          <div className="where-to-buy-top bg-olive-oil">
            <img
              src="/img/ProductOlive.jpg"
              alt="Olive Oil"
              className="where-to-buy-image"
            />
          </div>
          <div className="where-to-buy-bottom">
            <div className="where-to-buy-titles">
              <span className="where-to-buy-name">OLIVE OIL</span>
              <span className="where-to-buy-percent">100% Olive Oil</span>
            </div>
            <button
              className="where-to-buy-btn"
              onClick={() => handleBuyClick('olive-oil')}
            >
              BUY NOW
            </button>
          </div>
        </div>

      </div>
    </main>
  );
}

export default WhereToBuy;
