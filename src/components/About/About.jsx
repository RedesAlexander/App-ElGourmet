import "./About.css";

function About() {
  return (
    <section id="about" className="about-section">

      <div className="about-hero-container">
        <div className="about-hero-content">
          <div className="about-hero-text">
            <img
              src="/img/LOGO_ELGOURMET.png"
              alt="El Gourmet Logo"
              className="about-hero-logo"
            />
            <div className="about-hero-description">
              <p>Aceites Premium y conservas de pescado.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="about-images-placeholder">
        <img
          src="/img/About1.png"
          alt="El Gourmet Lifestyle 1"
        />
        <img
          src="/img/About2.png"
          alt="El Gourmet Lifestyle 2"
        />
      </div>

    </section>
  );
}

export default About;