function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-copy">
        <p className="eyebrow">Cand.Polyt (Civilingeniør)</p>
        <h1>Jonas Frellesen Petersen</h1>
        <h3>Velkommen til min portfølje</h3>
        <img src={`${(import.meta as any).env.BASE_URL}Profilbillede.png`} alt="Profile Image" />
      </div>
    </section>
  );
}

export default Hero;
