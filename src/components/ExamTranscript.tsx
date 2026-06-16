import { useState } from "react";

function ExamTranscript() {
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState<"en" | "da">("en");

  const pdfs: Record<string, string> = {
    en: "/JonasPortfolio/EksamensudskriftENG.pdf",
    da: "/JonasPortfolio/EksamensudskriftDK.pdf",
  };

  return (
    <section id="exam-transcript" className="section-card">
      <div className="section-header">
        <span className="section-label">Cand.Polyt. Gamedevelopment and Learning Technology</span>
      </div>

      <div className="section-content">
        <p>Displayed exam transcript and academic achievements.</p>

        <div style={{ marginTop: "1rem" }}>
          <p style={{ marginBottom: "0.5rem" }}>Click the image to open the transcript (PDF):</p>
          <img
            src={`${(import.meta as any).env.BASE_URL}JFP_LOGO.png`}
            alt="Transcript thumbnail"
            className="pdf-thumbnail"
            onClick={() => {
              setLang("en");
              setOpen(true);
            }}
            role="button"
          />
        </div>

        {open && (
          <div className="pdf-modal" onClick={() => setOpen(false)}>
            <div className="pdf-modal-content" onClick={(e) => e.stopPropagation()}>
              <div className="pdf-modal-header">
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                  <strong>Exam Transcript</strong>
                  <div className="pdf-modal-actions">
                    <button
                      className={`lang-button ${lang === "en" ? "active" : ""}`}
                      onClick={() => setLang("en")}
                    >
                      English
                    </button>
                    <button
                      className={`lang-button ${lang === "da" ? "active" : ""}`}
                      onClick={() => setLang("da")}
                    >
                      Dansk
                    </button>
                  </div>
                </div>

                <div style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}>
                  <a className="project-link" href={pdfs[lang]} download>
                    Download
                  </a>
                  <button className="button" onClick={() => setOpen(false)}>
                    Close
                  </button>
                </div>
              </div>

              <iframe
                title="Transcript PDF"
                src={pdfs[lang]}
                className="pdf-modal-iframe"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default ExamTranscript;