import React, { useEffect, useState } from 'react';

const messages = {
  en: {
    title: "⚠ system.status: perpetually_in_beta",
    body: "This site is a living project, not a finished product. I'm the sole dev, designer, and QA team — and I have a day job. Visuals are improving in small commits, like a glacier with a GitHub account.",
    sub: "Expect rough edges. Expect them to slowly get smoother. That's the whole roadmap.",
    progressLabel: "Polish level",
    cta: "Proceed anyway →",
  },
  fr: {
    title: "⚠ statut_système : bêta_perpétuelle",
    body: "Ce site est un projet vivant, pas un produit fini. Je suis le seul développeur, designer et testeur — et j'ai un travail à côté. Les visuels s'améliorent par petits commits, comme un glacier avec un compte GitHub.",
    sub: "Attendez-vous à des aspérités. Attendez-vous à ce qu'elles s'adoucissent lentement. C'est toute la feuille de route.",
    progressLabel: "Niveau de finition",
    cta: "Continuer quand même →",
  },
};

export default function DisclaimerModal({ language = 'en' }) {
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const t = messages[language] || messages.en;

  useEffect(() => {
        const seen = sessionStorage.getItem('disclaimer-seen');
        if (!seen) {
      const timer = setTimeout(() => setOpen(true), 400);
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    if (!open) return;
    // crawls toward 87% and just... stops. forever.
    let raf;
    const start = performance.now();
    const animate = (now) => {
      const elapsed = now - start;
      const target = 87;
      const value = Math.min(target, (elapsed / 1800) * target);
      setProgress(value);
      if (value < target) raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [open]);

  const close = () => {
    sessionStorage.setItem('disclaimer-seen', '1');
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div className="disclaimer-overlay" onClick={close}>
      <div className="disclaimer-modal" onClick={(e) => e.stopPropagation()}>
        <div className="disclaimer-terminal-bar">
          <span className="dot red" />
          <span className="dot yellow" />
          <span className="dot green" />
          <span className="disclaimer-path">~/portfolio/status.log</span>
        </div>

        <div className="disclaimer-content">
          <p className="disclaimer-title glitch" data-text={t.title}>{t.title}</p>
          <p className="disclaimer-body">{t.body}</p>
          <p className="disclaimer-sub">{t.sub}</p>

          <div className="disclaimer-progress-wrap">
            <div className="disclaimer-progress-label">
              <span>{t.progressLabel}</span>
              <span>{Math.round(progress)}%</span>
            </div>
            <div className="disclaimer-progress-track">
              <div
                className="disclaimer-progress-fill"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          <button className="disclaimer-cta" onClick={close}>
            {t.cta}
          </button>
        </div>
      </div>
    </div>
  );
}