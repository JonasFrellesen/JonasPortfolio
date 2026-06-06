function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-copy">
        <div className="hero-copy-header">
          <div className="hero-copy-text">
            <p className="eyebrow">Cand.Polyt (Civilingeniør)</p>
            <h1>Welcome to my portfolio</h1>
            <h3>Jonas Frellesen Petersen</h3>
          </div>
          <div className="hero-profile">
            <img
              src={`${(import.meta as any).env.BASE_URL}Profilbillede.png`}
              alt="Profile Image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
