import { useState } from "react";
import "./Where-to-buy.css";

// "Diccionario" URLs
const productLinks = {
  pistachio: {
    EU: "https://super-market-gourmet.com/Supermercado_Practica/public/producto.php?id=68dbb2128bf6a37edb769eb2&categoria=NOCCIOLA",
    USA: "https://super-market-gourmet.com/Supermercado_Practica/public/producto.php?id=68dbb2128bf6a37edb769eb2&categoria=NOCCIOLA",
    UK: "https://super-market-gourmet.com/Supermercado_Practica/public/producto.php?id=68dbb2128bf6a37edb769eb2&categoria=NOCCIOLA"
  },
  almond: {
    EU: "https://super-market-gourmet.com/Supermercado_Practica/public/producto.php?id=6899d44325d53643ce0e513d&categoria=NOCCIOLA",
    USA: "https://super-market-gourmet.com/Supermercado_Practica/public/producto.php?id=6899d58025d53643ce0e513e&categoria=NOCCIOLA",
    UK: "https://super-market-gourmet.com/Supermercado_Practica/public/producto.php?id=6899d58025d53643ce0e513e&categoria=NOCCIOLA"
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

        {/* Tarjeta 1: Pistachio Cream */}
        <div className="where-to-buy-card">
          <div className="where-to-buy-top bg-pistachio">
            <img
              src="/img/pistachio-cream-55-200g.png"
              alt="Pistachio Cream Jar"
              className="where-to-buy-image"
            />
          </div>
          <div className="where-to-buy-bottom">
            <div className="where-to-buy-titles">
              <span className="where-to-buy-name">Pistachio Cream</span>
              <span className="where-to-buy-percent">55% Pistachio</span>
            </div>
            <button
              className="where-to-buy-btn"
              onClick={() => handleBuyClick('pistachio')}
            >
              BUY NOW
            </button>
          </div>
        </div>

        {/* Tarjeta 2: Creamy Almond */}
        <div className="where-to-buy-card">
          <div className="where-to-buy-top bg-almond">
            <img
              src="/img/almond-cream-66-200g.png"
              alt="Creamy Almond Jar"
              className="where-to-buy-image"
            />
          </div>
          <div className="where-to-buy-bottom">
            <div className="where-to-buy-titles">
              <span className="where-to-buy-name">Creamy Almond</span>
              <span className="where-to-buy-percent">66% Almond</span>
            </div>
            <button
              className="where-to-buy-btn"
              onClick={() => handleBuyClick('almond')}
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