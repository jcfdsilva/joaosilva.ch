import React, { useEffect, useRef, useState } from 'react';
import { translations } from '../translations';

// Adjust if your PHP scripts live somewhere else (e.g. a subdomain or /backend/)
const API_BASE = '/api';

const initialForm = { name: '', email: '', subject: '', message: '', website: '' };

// Decorative postmark — a signature element, not a data field.
// `stamped` swaps it into the "cancelled" ink-colored state used on success.
function Postmark({ stamped = false, className = '' }) {
  return (
    <svg
      viewBox="0 0 180 140"
      className={`postmark ${stamped ? 'postmark--stamped' : ''} ${className}`}
      aria-hidden="true"
    >
      <g transform="rotate(-10 90 70)">
        <circle cx="70" cy="70" r="52" className="postmark-ring-outer" />
        <circle cx="70" cy="70" r="40" className="postmark-ring-inner" />
        {stamped && (
          <path
            className="postmark-check"
            d="M52 70 L65 84 L90 54"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        )}
        {[0, 1, 2, 3, 4].map((i) => (
          <line
            key={i}
            x1={128}
            y1={44 + i * 13}
            x2={168}
            y2={38 + i * 13}
            className="postmark-cancel-line"
          />
        ))}
      </g>
    </svg>
  );
}

function Contact({ language }) {
  const t = translations[language].contact;

  const [form, setForm] = useState(initialForm);
  const [captcha, setCaptcha] = useState(null); // { num1, num2, expires, token }
  const [captchaAnswer, setCaptchaAnswer] = useState('');
  const [status, setStatus] = useState({ state: 'idle', message: '' }); // idle | submitting | success | error
  const startedAtRef = useRef(Date.now());

  const loadCaptcha = () => {
    setCaptcha(null);
    fetch(`${API_BASE}/get-captcha.php`)
      .then((res) => {
        if (!res.ok) throw new Error('captcha-failed');
        return res.json();
      })
      .then((data) => {
        setCaptcha(data);
        startedAtRef.current = Date.now();
      })
      .catch(() => {
        setStatus({ state: 'error', message: t.errors.captchaLoad });
      });
  };

  useEffect(() => {
    loadCaptcha();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!captcha) {
      setStatus({ state: 'error', message: t.errors.captchaLoad });
      return;
    }

    setStatus({ state: 'submitting', message: '' });

    try {
      const res = await fetch(`${API_BASE}/contact.php`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
          website: form.website, // honeypot, should stay empty
          startedAt: startedAtRef.current,
          captchaNum1: captcha.num1,
          captchaNum2: captcha.num2,
          captchaExpires: captcha.expires,
          captchaToken: captcha.token,
          captchaAnswer,
        }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok || !data.success) {
        setStatus({ state: 'error', message: data.message || t.errors.generic });
        setCaptchaAnswer('');
        loadCaptcha();
        return;
      }

      setStatus({ state: 'success', message: t.success });
      setForm(initialForm);
      setCaptchaAnswer('');
      loadCaptcha();
    } catch (err) {
      setStatus({ state: 'error', message: t.errors.network });
      loadCaptcha();
    }
  };

  const isSubmitting = status.state === 'submitting';

  return (
    <div className="page contact-page">
      <div className="contact-shell">
        <header className="contact-intro">
          <span className="contact-eyebrow">{t.eyebrow}</span>
          <h1 className="contact-title">{t.title}</h1>
          <p className="contact-description">{t.description}</p>
          <Postmark className="contact-intro-mark" />
        </header>

        <div className="contact-divider" aria-hidden="true" />

        <div className="contact-card">
          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <div className="contact-row">
              <div className="contact-field">
                <label htmlFor="contact-name">{t.fields.name}</label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  maxLength={100}
                  value={form.name}
                  onChange={handleChange}
                  disabled={isSubmitting}
                />
              </div>

              <div className="contact-field">
                <label htmlFor="contact-email">{t.fields.email}</label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  disabled={isSubmitting}
                />
              </div>
            </div>

            <div className="contact-field">
              <label htmlFor="contact-subject">{t.fields.subject}</label>
              <input
                id="contact-subject"
                name="subject"
                type="text"
                required
                maxLength={150}
                value={form.subject}
                onChange={handleChange}
                disabled={isSubmitting}
              />
            </div>

            <div className="contact-field">
              <label htmlFor="contact-message">{t.fields.message}</label>
              <textarea
                id="contact-message"
                name="message"
                rows={5}
                required
                maxLength={5000}
                value={form.message}
                onChange={handleChange}
                disabled={isSubmitting}
              />
            </div>

            {/* Honeypot: real users never see or fill this in */}
            <div className="contact-honeypot" aria-hidden="true">
              <label htmlFor="contact-website">Website</label>
              <input
                id="contact-website"
                name="website"
                type="text"
                tabIndex={-1}
                autoComplete="off"
                value={form.website}
                onChange={handleChange}
              />
            </div>

            <div className="contact-verify">
              <span className="contact-verify-label">{t.fields.captchaLabel}</span>
              <div className="contact-verify-row">
                <span className="contact-verify-question">
                  {captcha ? t.fields.captcha(captcha.num1, captcha.num2) : t.fields.captchaLoading}
                </span>
                <input
                  id="contact-captcha"
                  name="captchaAnswer"
                  type="number"
                  required
                  disabled={!captcha || isSubmitting}
                  value={captchaAnswer}
                  onChange={(e) => setCaptchaAnswer(e.target.value)}
                  aria-label={t.fields.captchaLoading}
                />
              </div>
            </div>

            <div className="contact-submit-row">
              <button className="contact-seal" type="submit" disabled={isSubmitting || !captcha}>
                <svg viewBox="0 0 24 24" className="contact-seal-icon" aria-hidden="true">
                  <path
                    d="M3 5l18 7-18 7 4-7-4-7z"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>{isSubmitting ? t.sending : t.send}</span>
              </button>

              {status.state === 'success' && (
                <p className="contact-status contact-status--success" role="status">
                  <Postmark stamped className="contact-status-mark" />
                  {status.message}
                </p>
              )}
              {status.state === 'error' && (
                <p className="contact-status contact-status--error" role="alert">
                  {status.message}
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;