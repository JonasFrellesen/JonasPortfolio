function VoluntaryWork() {
  return (
    <section id="voluntary-work" className="section-card">
      <div className="section-header">
        <span className="section-label">Voluntary</span>
        <h2>Voluntary Work</h2>
      </div>
      <p>
        In addition to my professional work, I have contributed to community and educational initiatives.
      </p>
      <div className="voluntary-grid">
        <article className="voluntary-card">
          <h3>Teaching Programming</h3>
          <p>Guided young learners in programming robots, CAD drawing, 3D printing and introductory game development at a local tech school. I spend 2 years volunteering there at a seasonal level. 
            Furthermore, I have been teacher on teknologiskolen sommercamp 2024 and helper on vintercamp 2025.</p>
        </article>
        <article className="voluntary-card voluntary-images">
          <img
            src={`${(import.meta as any).env.BASE_URL}teknologiskolen.jpg`}
            alt="Voluntary teaching event 1"
          />
          <img
            src={`${(import.meta as any).env.BASE_URL}teknologiskolen2.jpg`}
            alt="Voluntary teaching event 2"
          />
        </article>
      </div>
    </section>
  );
}

export default VoluntaryWork;