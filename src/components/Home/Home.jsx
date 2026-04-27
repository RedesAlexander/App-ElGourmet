import "./Home.css";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const tiktokVideoIds = [
    "7626836214196243734?is",
    "7626058435280424214?is",
    "/7623820282267979030?is",
    "7618667220356353302?is",
    "7622324474318245142?is",
    "7621167988070305046?is",
    "7621267608242900246?is",
    "7620454483159436566?is"
  ];

  return (
    <section id="home" className="home-section">

      {/* HERO con la portada */}
      <div className="home-hero-container">
        <div className="home-hero-content">
          <div className="home-hero-text">
            {/* LOGO ELIMINADO PARA QUE NO SE VEA ENCIMA */}
          </div>
        </div>
      </div>

      {/* GALERÍA */}
      <div className="images-placeholder">
        <img
          onClick={() => navigate("/products")}
          src="/img/home_aceites.jpg"
          alt="El Gourmet Home 1"
          className="home-gallery-img"
        />
        <img
          onClick={() => navigate("/products")}
          src="/img/home_conservas_pescado.jpg"
          alt="El Gourmet Home 2"
          className="home-gallery-img"
        />
      </div>

      {/* TIKTOK */}
      <div className="home-tiktok-section">
        <h2 className="tiktok-title">Follow us on TikTok</h2>
        <div className="tiktok-grid">
          {tiktokVideoIds.map((id) => (
            <div key={id} className="tiktok-wrapper">
              <iframe
                title={`tiktok-${id}`}
                src={`https://www.tiktok.com/embed/v2/${id}`}
                style={{ width: '100%', height: '100%', border: 'none' }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}

export default Home;
