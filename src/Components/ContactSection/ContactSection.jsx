/* =====================================================================
   Contact.jsx — design only
   ---------------------------------------------------------------------
   • Drop this file anywhere in your React project and render <Contact />.
   • No packages needed: only React + the CSS bundled at the bottom of
     this file (no Tailwind, no icon library, no form library).
   • Nothing is sent anywhere. The "thank you" screen is design only —
     see handleSubmit below for the one place to wire your own handler.
   • Fonts come from Google Fonts. For best results also put this in your
     page <head>:
     <link href="https://fonts.googleapis.com/css2?family=Lexend:wght@400;500;600;700&family=Nunito+Sans:wght@400;600;700&display=swap" rel="stylesheet">
   ===================================================================== */

import { useEffect, useState } from "react";

/* ------------------------- 1. your details ------------------------- */

const EMAIL = "me@usamafaheemahmed.com";

const TOPICS = ["Full-time role", "Freelance project", "SaaS build", "Just saying hi"];

const SOCIALS = [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/usama-faheem-ahmed-a1960b1b9/", Icon: LinkedInIcon },
    { label: "GitHub", href: "https://github.com/usamafaheemAhmed", Icon: GitHubIcon },
    { label: "Facebook", href: "https://www.facebook.com/usama.faheem.142/", Icon: FacebookIcon },
];

const MAX_MESSAGE = 1000;

/* --------------------------- 2. helpers ---------------------------- */

function validate(values) {
    const errors = {};
    const name = values.name.trim();
    const email = values.email.trim();
    const message = values.message.trim();

    if (!name) errors.name = "Please tell me your name";
    else if (name.length > 100) errors.name = "Please keep it under 100 characters";

    if (!email) errors.email = "Please add your email";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
        errors.email = "That email doesn't look right";

    if (!message) errors.message = "Please write a message";
    else if (message.length < 10) errors.message = "A little more detail, please";

    return errors;
}

function useLahoreTime() {
    const [time, setTime] = useState(null);

    useEffect(() => {
        const fmt = new Intl.DateTimeFormat("en-US", {
            hour: "numeric",
            minute: "2-digit",
            timeZone: "Asia/Karachi",
        });
        const tick = () => setTime(fmt.format(new Date()));
        tick();
        const id = setInterval(tick, 30000);
        return () => clearInterval(id);
    }, []);

    return time;
}

/* ---------------------------- 3. icons ----------------------------- */

function MailIcon(props) {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"
            strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
            <rect x="2.5" y="4.5" width="19" height="15" rx="3" />
            <path d="m3.5 7 7.4 5.3a2 2 0 0 0 2.2 0L20.5 7" />
        </svg>
    );
}

function CopyIcon(props) {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"
            strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
            <rect x="9" y="9" width="12" height="12" rx="2.5" />
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
        </svg>
    );
}

function CheckIcon(props) {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"
            strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
            <path d="m4.5 12.5 5 5 10-11" />
        </svg>
    );
}

function PinIcon(props) {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"
            strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
            <path d="M20 10c0 5.5-8 12-8 12s-8-6.5-8-12a8 8 0 0 1 16 0Z" />
            <circle cx="12" cy="10" r="3" />
        </svg>
    );
}

function ClockIcon(props) {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"
            strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
            <circle cx="12" cy="12" r="9" />
            <path d="M12 7v5l3.5 2" />
        </svg>
    );
}

function ArrowUpRightIcon(props) {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
            strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
            <path d="M7 17 17 7M9 7h8v8" />
        </svg>
    );
}

function SendIcon(props) {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9"
            strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
            <path d="M21.5 2.5 11 13M21.5 2.5l-6.6 19-3.9-8.5-8.5-3.9 19-6.6Z" />
        </svg>
    );
}

function LinkedInIcon(props) {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
            <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13Zm1.78 13.02H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
        </svg>
    );
}

function GitHubIcon(props) {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
            <path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7 0-.7 0-.7 1.2.1 1.9 1.2 1.9 1.2 1.1 1.9 2.8 1.3 3.5 1 0-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.3.5-2.3 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17.3 4.7 18.3 5 18.3 5c.6 1.7.2 2.9.1 3.2.8.9 1.2 1.9 1.2 3.2 0 4.7-2.8 5.7-5.5 6 .4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .3Z" />
        </svg>
    );
}

function FacebookIcon(props) {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
            <path d="M24 12.07C24 5.44 18.63.07 12 .07S0 5.44 0 12.07c0 5.99 4.39 10.95 10.13 11.85v-8.38H7.08v-3.47h3.05V9.43c0-3.01 1.79-4.67 4.53-4.67 1.31 0 2.69.24 2.69.24v2.95h-1.51c-1.49 0-1.96.93-1.96 1.87v2.25h3.33l-.53 3.47h-2.8v8.38C19.61 23.02 24 18.06 24 12.07Z" />
        </svg>
    );
}

/* -------------------------- 4. the section ------------------------- */

export default function ContactSection() {
    const time = useLahoreTime();
    const [copied, setCopied] = useState(false);
    const [topic, setTopic] = useState(TOPICS[0]);
    const [values, setValues] = useState({ name: "", email: "", message: "" });
    const [errors, setErrors] = useState({});
    const [sent, setSent] = useState(false);

    const setValue = (key) => (event) => {
        setValues((v) => ({ ...v, [key]: event.target.value }));
        if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
    };

    const copyEmail = async () => {
        try {
            await navigator.clipboard.writeText(EMAIL);
            setCopied(true);
            setTimeout(() => setCopied(false), 1800);
        } catch {
            /* clipboard blocked — the mailto: link still works */
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const nextErrors = validate(values);
        setErrors(nextErrors);
        if (Object.keys(nextErrors).length > 0) return;

        // >>> Design only: send { topic, ...values } to your email service here <<<
        setSent(true);
    };

    const resetForm = () => {
        setSent(false);
        setValues({ name: "", email: "", message: "" });
        setErrors({});
        setTopic(TOPICS[0]);
    };

    return (
        <section id="contact" className="ufc">
            <style>{CSS}</style>

            <div className="ufc-inner">
                <div className="ufc-panel">
                    <div className="ufc-grid">
                        {/* ---------- left: pitch + direct details ---------- */}
                        <div className="ufc-left">
                            <span className="ufc-badge">
                                <span className="ufc-dot" />
                                Available for new opportunities
                            </span>

                            <h2 className="ufc-title">
                                Let's build something <span className="ufc-accent">exceptional</span> together.
                            </h2>

                            <p className="ufc-lead">
                                Whether you have a complex SaaS product to scale, an engineering role to fill, or
                                an idea that needs a solid foundation — let's talk.
                            </p>

                            <div className="ufc-cards">
                                <div className="ufc-card ufc-card--email">
                                    <span className="ufc-tile ufc-tile--lg">
                                        <MailIcon className="ufc-ico-20" />
                                    </span>
                                    <div className="ufc-card-body">
                                        <p className="ufc-eyebrow">Email me directly</p>
                                        <a className="ufc-mail" href={`mailto:${EMAIL}`}>
                                            {EMAIL}
                                        </a>
                                    </div>
                                    <button
                                        type="button"
                                        className="ufc-copy"
                                        onClick={copyEmail}
                                        aria-label="Copy email address"
                                    >
                                        {copied ? <CheckIcon className="ufc-ico-16" /> : <CopyIcon className="ufc-ico-16" />}
                                    </button>
                                </div>

                                <div className="ufc-pair">
                                    <div className="ufc-card ufc-card--row">
                                        <span className="ufc-tile">
                                            <PinIcon className="ufc-ico-18" />
                                        </span>
                                        <div>
                                            <p className="ufc-card-title">Lahore, Pakistan</p>
                                            <p className="ufc-card-sub">{time ? `${time} local time` : "PKT · UTC+5"}</p>
                                        </div>
                                    </div>

                                    <div className="ufc-card ufc-card--row">
                                        <span className="ufc-tile">
                                            <ClockIcon className="ufc-ico-18" />
                                        </span>
                                        <div>
                                            <p className="ufc-card-title">Within 24 hours</p>
                                            <p className="ufc-card-sub">Typical reply time</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="ufc-socials">
                                <p className="ufc-eyebrow">Find me online</p>
                                <div className="ufc-social-row">
                                    {SOCIALS.map(({ label, href, Icon }) => (
                                        <a key={label} className="ufc-social" href={href} target="_blank" rel="noreferrer">
                                            <Icon className="ufc-ico-16" />
                                            {label}
                                            <ArrowUpRightIcon className="ufc-ico-14 ufc-social-arrow" />
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* ---------- right: the form ---------- */}
                        <div className="ufc-form-card">
                            {sent ? (
                                <div className="ufc-done">
                                    <span className="ufc-done-tile">
                                        <CheckIcon className="ufc-ico-28" />
                                    </span>
                                    <h3 className="ufc-done-title">Message on its way</h3>
                                    <p className="ufc-done-text">
                                        Thanks, {values.name.split(" ")[0]}. I'll get back to you at {values.email}.
                                    </p>
                                    <button type="button" className="ufc-soft" onClick={resetForm}>
                                        Send another
                                    </button>
                                </div>
                            ) : (
                                <form className="ufc-form" onSubmit={handleSubmit} noValidate>
                                    <div>
                                        <h3 className="ufc-form-title">Start a conversation</h3>
                                        <p className="ufc-form-sub">Tell me a bit about it — I read every message.</p>
                                    </div>

                                    <fieldset className="ufc-fieldset">
                                        <legend className="ufc-legend">I'm reaching out about</legend>
                                        <div className="ufc-topics">
                                            {TOPICS.map((t) => (
                                                <button
                                                    key={t}
                                                    type="button"
                                                    aria-pressed={topic === t}
                                                    className={topic === t ? "ufc-topic ufc-topic--on" : "ufc-topic"}
                                                    onClick={() => setTopic(t)}
                                                >
                                                    {t}
                                                </button>
                                            ))}
                                        </div>
                                    </fieldset>

                                    <div className="ufc-row">
                                        <div className="ufc-field">
                                            <label className="ufc-label" htmlFor="ufc-name">
                                                Your name
                                            </label>
                                            <input
                                                id="ufc-name"
                                                className="ufc-input"
                                                placeholder="Ayesha Khan"
                                                value={values.name}
                                                onChange={setValue("name")}
                                                aria-invalid={Boolean(errors.name)}
                                            />
                                            {errors.name && <p className="ufc-error">{errors.name}</p>}
                                        </div>

                                        <div className="ufc-field">
                                            <label className="ufc-label" htmlFor="ufc-email">
                                                Email
                                            </label>
                                            <input
                                                id="ufc-email"
                                                type="email"
                                                className="ufc-input"
                                                placeholder="ayesha@company.com"
                                                value={values.email}
                                                onChange={setValue("email")}
                                                aria-invalid={Boolean(errors.email)}
                                            />
                                            {errors.email && <p className="ufc-error">{errors.email}</p>}
                                        </div>
                                    </div>

                                    <div className="ufc-field ufc-field--grow">
                                        <div className="ufc-count-row">
                                            <label className="ufc-label" htmlFor="ufc-msg">
                                                Message
                                            </label>
                                            <span className="ufc-count">
                                                {values.message.length}/{MAX_MESSAGE}
                                            </span>
                                        </div>
                                        <textarea
                                            id="ufc-msg"
                                            className="ufc-textarea"
                                            rows={5}
                                            maxLength={MAX_MESSAGE}
                                            placeholder="The product, timeline, tech stack, or role you have in mind…"
                                            value={values.message}
                                            onChange={setValue("message")}
                                            aria-invalid={Boolean(errors.message)}
                                        />
                                        {errors.message && <p className="ufc-error">{errors.message}</p>}
                                    </div>

                                    <button type="submit" className="ufc-submit">
                                        Send message
                                        <SendIcon className="ufc-ico-18" />
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ----------------------------- 5. styles --------------------------- */
/* Self-contained: nothing here depends on Tailwind or a CSS framework. */

const CSS = `
@import url("https://fonts.googleapis.com/css2?family=Lexend:wght@400;500;600;700&family=Nunito+Sans:wght@400;600;700&display=swap");

.ufc { padding: 80px 0px; }

.ufc *, .ufc *::before, .ufc *::after { box-sizing: border-box; }
.ufc p { margin: 0; }

.ufc-panel {
  position: relative;
  overflow: hidden;
  border-radius: 32px;
  color: #f2faf5;
  background-color: #10231c;
  background-image:
    radial-gradient(60% 70% at 100% 0%, rgba(22,163,74,.35), transparent 60%),
    radial-gradient(40% 50% at 0% 100%, rgba(74,222,128,.18), transparent 70%),
    linear-gradient(rgba(255,255,255,.10) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,.10) 1px, transparent 1px);
  background-size: 100% 100%, 100% 100%, 44px 44px, 44px 44px;
  box-shadow: 0 30px 60px -24px rgba(13,33,26,.35);
}

.ufc-grid {
  display: grid;
  grid-template-columns: 1fr 1.05fr;
  gap: 56px;
  padding: 56px;
  align-items: start;
  width: 100%
}

/* --- left column --- */
.ufc-left { display: flex; flex-direction: column; min-width: 0; }

.ufc-badge {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  width: fit-content;
  padding: 6px 14px;
  border: 1px solid rgba(255,255,255,.12);
  border-radius: 999px;
  background: rgba(255,255,255,.06);
  font-size: 12px;
  font-weight: 600;
  letter-spacing: .01em;
}

.ufc-dot {
  position: relative;
  width: 8px;
  height: 8px;
  border-radius: 999px;
  background: #4ade80;
}
.ufc-dot::after {
  content: "";
  position: absolute;
  inset: -4px;
  border-radius: 999px;
  background: #4ade80;
  opacity: .45;
  animation: ufc-pulse 2s ease-out infinite;
}
@keyframes ufc-pulse {
  0%   { transform: scale(.5); opacity: .5; }
  70%  { transform: scale(1.5); opacity: 0; }
  100% { transform: scale(1.5); opacity: 0; }
}

.ufc-title {
  margin: 24px 0 0;
  font-family: "Lexend", ui-sans-serif, system-ui, sans-serif;
  font-size: clamp(2.1rem, 4vw, 3rem);
  font-weight: 700;
  line-height: 1.05;
  letter-spacing: -.02em;
}
.ufc-accent {
  background-image: linear-gradient(120deg, #16a34a, #4ade80);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.ufc-lead {
  margin-top: 20px;
  max-width: 460px;
  font-size: 16px;
  line-height: 1.7;
  color: #a8c4b5;
}

.ufc-cards { margin-top: 36px; display: flex; flex-direction: column; gap: 12px; }

.ufc-card {
  border: 1px solid rgba(255,255,255,.1);
  border-radius: 18px;
  background: rgba(255,255,255,.05);
  padding: 16px;
}
.ufc-card--email { display: flex; align-items: center; gap: 16px; transition: border-color .2s; }
.ufc-card--email:hover { border-color: rgba(22,163,74,.5); }
.ufc-card--row { display: flex; align-items: center; gap: 14px; }

.ufc-tile {
  display: grid;
  place-items: center;
  width: 40px;
  height: 40px;
  flex: 0 0 auto;
  border-radius: 12px;
  background: rgba(22,163,74,.16);
  color: #4ade80;
}
.ufc-tile--lg { width: 44px; height: 44px; }

.ufc-card-body { min-width: 0; flex: 1; }
.ufc-eyebrow {
  font-family: "Lexend", ui-sans-serif, system-ui, sans-serif;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: .18em;
  text-transform: uppercase;
  color: #a8c4b5;
}
.ufc-mail {
  display: block;
  margin-top: 3px;
  font-family: "Lexend", ui-sans-serif, system-ui, sans-serif;
  font-size: 15px;
  font-weight: 500;
  color: #f2faf5;
  text-decoration: none;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.ufc-mail:hover { color: #4ade80; }

.ufc-copy {
  display: grid;
  place-items: center;
  width: 36px;
  height: 36px;
  flex: 0 0 auto;
  border: 1px solid rgba(255,255,255,.12);
  border-radius: 10px;
  background: transparent;
  color: #a8c4b5;
  cursor: pointer;
  transition: color .2s, border-color .2s;
}
.ufc-copy:hover { color: #4ade80; border-color: rgba(22,163,74,.5); }

.ufc-pair { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
.ufc-card-title {
  font-family: "Lexend", ui-sans-serif, system-ui, sans-serif;
  font-size: 14px;
  font-weight: 500;
}
.ufc-card-sub { margin-top: 2px; font-size: 12px; color: #a8c4b5; }

.ufc-socials { margin-top: auto; padding-top: 36px; }
.ufc-social-row { margin-top: 12px; display: flex; flex-wrap: wrap; gap: 10px; }
.ufc-social {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 14px;
  border: 1px solid rgba(255,255,255,.12);
  border-radius: 999px;
  background: rgba(255,255,255,.05);
  font-size: 14px;
  font-weight: 500;
  color: #f2faf5;
  text-decoration: none;
  transition: transform .2s, border-color .2s, color .2s;
}
.ufc-social:hover {
  transform: translateY(-2px);
  border-color: rgba(22,163,74,.6);
  color: #4ade80;
}
.ufc-social-arrow { opacity: .5; transition: opacity .2s; }
.ufc-social:hover .ufc-social-arrow { opacity: 1; }

/* --- right column: form --- */
.ufc-form-card {
  min-width: 0;
  border-radius: 24px;
  background: #fff;
  color: #1b2f27;
  padding: 32px;
  box-shadow: 0 30px 60px -24px rgba(13,33,26,.35);
}

.ufc-form { display: flex; flex-direction: column; gap: 20px; min-height: 440px; }
.ufc-form-title {
  margin: 0;
  font-family: "Lexend", ui-sans-serif, system-ui, sans-serif;
  font-size: 24px;
  font-weight: 600;
  letter-spacing: -.02em;
}
.ufc-form-sub { margin-top: 4px; font-size: 14px; color: #5b7368; }

.ufc-fieldset { margin: 0; padding: 0; border: 0; }
.ufc-legend {
  margin-bottom: 10px;
  padding: 0;
  font-family: "Lexend", ui-sans-serif, system-ui, sans-serif;
  font-size: 14px;
  font-weight: 600;
}
.ufc-topics { display: flex; flex-wrap: wrap; gap: 8px; }
.ufc-topic {
  padding: 6px 14px;
  border: 1px solid #dce8e0;
  border-radius: 999px;
  background: #fff;
  font-size: 14px;
  font-weight: 500;
  color: #5b7368;
  cursor: pointer;
  transition: border-color .2s, color .2s, background .2s;
}
.ufc-topic:hover { border-color: rgba(22,163,74,.5); color: #1b2f27; }
.ufc-topic--on {
  border-color: #16a34a;
  background: #e7f6ec;
  color: #14532d;
}

.ufc-row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
.ufc-field { display: flex; flex-direction: column; gap: 6px; min-width: 0; }
.ufc-field--grow { flex: 1; }
.ufc-label {
  font-family: "Lexend", ui-sans-serif, system-ui, sans-serif;
  font-size: 14px;
  font-weight: 500;
}
.ufc-count-row { display: flex; align-items: baseline; justify-content: space-between; }
.ufc-count { font-size: 12px; font-variant-numeric: tabular-nums; color: #5b7368; }

.ufc-input, .ufc-textarea {
  width: 100%;
  border: 1px solid #dce8e0;
  border-radius: 12px;
  background: #fff;
  color: #1b2f27;
  font-family: inherit;
  font-size: 15px;
  transition: border-color .2s, box-shadow .2s;
}
.ufc-input { height: 44px; padding: 0 14px; }
.ufc-textarea {
  flex: 1;
  min-height: 130px;
  padding: 12px 14px;
  line-height: 1.6;
  resize: none;
}
.ufc-input::placeholder, .ufc-textarea::placeholder { color: #9bb0a6; }
.ufc-input:focus, .ufc-textarea:focus {
  outline: none;
  border-color: #16a34a;
  box-shadow: 0 0 0 3px rgba(22,163,74,.18);
}
.ufc-input[aria-invalid="true"], .ufc-textarea[aria-invalid="true"] { border-color: #dc2626; }
.ufc-error { margin-top: 2px; font-size: 12px; color: #dc2626; }

.ufc-submit {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  height: 48px;
  border: 0;
  border-radius: 14px;
  background-image: linear-gradient(120deg, #16a34a, #4ade80);
  color: #fff;
  font-family: "Lexend", ui-sans-serif, system-ui, sans-serif;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 10px 30px -10px rgba(22,163,74,.6);
  transition: transform .2s, filter .2s;
}
.ufc-submit:hover { filter: brightness(1.05); transform: translateY(-2px); }

/* --- thank-you state --- */
.ufc-done {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-height: 440px;
}
.ufc-done-tile {
  display: grid;
  place-items: center;
  width: 64px;
  height: 64px;
  border-radius: 999px;
  background: #e7f6ec;
  color: #16a34a;
}
.ufc-done-title {
  margin: 20px 0 0;
  font-family: "Lexend", ui-sans-serif, system-ui, sans-serif;
  font-size: 24px;
  font-weight: 600;
  letter-spacing: -.02em;
}
.ufc-done-text { margin-top: 8px; max-width: 320px; font-size: 14px; color: #5b7368; }
.ufc-soft {
  margin-top: 24px;
  padding: 10px 18px;
  border: 1px solid #dce8e0;
  border-radius: 10px;
  background: #fff;
  color: #1b2f27;
  font-family: "Lexend", ui-sans-serif, system-ui, sans-serif;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: border-color .2s, color .2s;
}
.ufc-soft:hover { border-color: rgba(22,163,74,.5); color: #16a34a; }

/* --- icons --- */
.ufc-ico-14 { width: 14px; height: 14px; }
.ufc-ico-16 { width: 16px; height: 16px; }
.ufc-ico-18 { width: 18px; height: 18px; }
.ufc-ico-20 { width: 20px; height: 20px; }
.ufc-ico-28 { width: 28px; height: 28px; }

/* --- responsive --- */
@media (max-width: 980px) {
  .ufc-grid { grid-template-columns: 1fr; gap: 32px; padding: 28px; }
  .ufc-socials { padding-top: 8px; }
}
@media (max-width: 560px) {
  .ufc { padding: 48px 14px; }
  .ufc-grid { padding: 20px; }
  .ufc-form-card { padding: 20px; }
  .ufc-row, .ufc-pair { grid-template-columns: 1fr; }
  .ufc-mail { white-space: normal; word-break: break-word; }
  .ufc-form { min-height: 0; }
  .ufc-done { min-height: 320px; }
}
@media (prefers-reduced-motion: reduce) {
  .ufc-dot::after { animation: none; }
  .ufc-social, .ufc-submit { transition: none; }
}
`;