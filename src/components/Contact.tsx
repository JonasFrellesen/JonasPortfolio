import { useState } from 'react';

function Contact() {
  const [showPhone, setShowPhone] = useState(false);

  return (
    <section id="contact" className="section-card contact-section">
      <div className="section-header">
        <span className="section-label">Contact</span>
      </div>
      <p>
        If you'd like to collaborate, send me a mail, or reveal my phone number by hovering over
        the Phone button. You can also connect on LinkedIn.
      </p>
      <div className="contact-actions">
        <a className="button" href="https://www.linkedin.com/feed/">
          LinkedIn
        </a>
        <span className="separator"> </span>
        <a className="button" href="mailto:jonasfpetersen@gmail.com">
          Mail me
        </a>
        <span className="separator"> </span>
        <span className="phone-container">
          <button
            type="button"
            className="button phone-button"
            onClick={() => setShowPhone((current) => !current)}
            aria-expanded={showPhone}
            aria-label="Reveal phone number"
          >
            Phone
          </button>
          <span className={`phone-popup${showPhone ? ' visible' : ''}`}>
            +45 30 46 44 91
          </span>
        </span>
      </div>
    </section>
  );
}

export default Contact;
