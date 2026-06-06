import { useState } from "react";

function Hero() {
  const [showImages, setShowImages] = useState(false);

  return (
    <section id="home" className="hero-section">
      <div className="hero-copy">
        <p className="eyebrow">Cand.Polyt (Civilingeniør)</p>
        <h1>Welcome to my portfolio</h1>
        <h3>Jonas Frellesen Petersen</h3>
        <img
            src={`${(import.meta as any).env.BASE_URL}Profilbillede.png`}
            alt="Profile Image" width={250} height={250}
          />
        <button
          type="button"
          className="toggle-images-button"
          aria-expanded={showImages}
          onClick={() => setShowImages((prev) => !prev)}
        >
      
          {showImages ? "Hide images" : "Show images"}
        </button>
        <div className={`hero-images ${showImages ? "expanded" : ""}`}>
          <img
            src={`${(import.meta as any).env.BASE_URL}teknologiskolen.jpg`}
            alt="Profile Image"
          />
          <img
            src={`${(import.meta as any).env.BASE_URL}teknologiskolen2.jpg`}
            alt="Profile Image"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
