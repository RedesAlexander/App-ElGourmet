import "./About.css";

function About() {
  return (
    <section id="about" className="about-section">

      <div className="about-hero-container">
        <div className="about-hero-content">
          <div className="about-hero-text">
            <img
              src="/img/nocciolaLogoBlanco.png"
              alt="Nocciola Logo"
              className="about-hero-logo"
            />
            <div className="about-hero-description">
              <p>
                Nut butters and Plant-based drink. Anytime, anywhere, enjoy Nocciola, - Natural, nutritious, and
                crazy delicious.!
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="about-images-placeholder">
        <img
          src="/img/About1.png"
          alt="Nocciola Lifestyle 1"
        />
        <img
          src="/img/About2.png"
          alt="Nocciola Lifestyle 2"
        />
      </div>

    </section>
  );
}

export default About;