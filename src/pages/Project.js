import React from 'react';
import { translations } from '../translations';


export default function Project({ language, project }) {
  const t = translations[language][project];
  console.log(project)

  const titleMain   = t.title.slice(0, t.slice);
  const titleItalic = t.title.slice(t.slice);

  return (
    <div className="cw-root">
      <div className="cw-inner">
        {/* ── HERO ── */}
        <header className="cw-hero">
          <p className="cw-eyebrow">{t.eyebrow}</p>
          <h1 className="cw-title">{titleMain}<em>{titleItalic}</em></h1>
          <p className="cw-subtitle">{t.subtitle}</p>
        </header>

        {/* ── DESCRIPTION ── */}
        <section className="cw-section">
          <p className="cw-section-label">{t.sections.description}</p>
          <p className="cw-desc-text">{t.description}</p>
        </section>

        {/* ── RESPONSIBILITIES ── */}
        <section className="cw-section">
          <p className="cw-section-label">{t.sections.responsibilities}</p>
          <ul className="cw-tasks-list">
            {t.responsibilities.map((item, i) => (
              <li className="cw-task-item" key={i}>
                <span className="cw-task-bullet" />
                <span className="cw-task-text">{item}</span>
              </li>
            ))}
          </ul>
        </section>
            
        {/* ── GALLERY ── */}
        <section className="cw-section">
          <p className="cw-section-label">{t.sections.gallery}</p>
          <div className="cw-gallery">
            {t.images.map((src, i) => (
              <div className="cw-gallery-item" key={i}>
                <img src={src} alt={`${t.title} ${i + 1}`} />
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}