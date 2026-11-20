/* =====================================================================
   FeaturedProjects.jsx — redesigned "Featured work" section
   ---------------------------------------------------------------------
   • Drop this file anywhere in your React project and render
     <FeaturedProjects />.
   • No packages needed: only React + the CSS bundled at the bottom of
     this file (no Ant Design, no icon library, no carousel library).
   • To add a project, add one object to PROJECTS_DATA — the slider,
     counter and project tabs update by themselves.
   • Slides auto-advance every 6 seconds, pause while hovered or focused,
     support the ← → keys and swiping on phones, and stop auto-advancing
     for visitors who turn on "reduce motion".
   • Fonts come from Google Fonts (same as the Contact section). For best
     results also put this in your page <head>:
     <link href="https://fonts.googleapis.com/css2?family=Lexend:wght@400;500;600;700&family=Nunito+Sans:wght@400;600;700&display=swap" rel="stylesheet">
   ===================================================================== */

import { useRef, useState } from "react";

/* ------------------------- 1. your projects ------------------------ */

const PROJECTS_DATA = [
    {
        id: "flatally",
        title: "FlatAlly – AI Roommate Matching",
        description:
            "Architected a full-stack peer matching platform using React, Node.js, and MongoDB. Designed a custom preference-vector algorithm for accurate candidate matching and integrated automated Zoom video scheduling via OAuth 2.0.",
        // The first tag is shown highlighted in green.
        tags: ["MERN Stack", "AWS", "Zoom API (OAuth 2.0)"],
        image:
            "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
        github: "https://github.com/usamafaheemAhmed",
        demo: "#",
    },
    {
        id: "ai-resume-analyzer",
        title: "AI Resume Analyzer Dashboard",
        description:
            "Developed an engineering CV analysis tool leveraging the Gemini API to parse text ingestion streams from web URLs with minimal server overhead, paired with a real-time scoring dashboard.",
        tags: ["React.js", "Gemini API", "Recoil & AntD"],
        image:
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
        github: "https://github.com/usamafaheemAhmed",
        demo: "#",
    },
    // Add more projects here — no layout changes needed.
];

const VIEW_ALL_HREF = "#projects"; // link for "View all projects"
const AUTOPLAY_SECONDS = 6;

/* --------------------------- 2. helpers ---------------------------- */

const pad = (n) => String(n).padStart(2, "0");

/* -------------------------- 3. component --------------------------- */

export default function FeaturedProjects() {
    const total = PROJECTS_DATA.length;
    const [active, setActive] = useState(0);
    const [paused, setPaused] = useState(false);
    const touchX = useRef(null);

    const go = (i) => setActive(((i % total) + total) % total);
    const next = () => go(active + 1);
    const prev = () => go(active - 1);

    const onKeyDown = (e) => {
        if (e.key === "ArrowRight") next();
        if (e.key === "ArrowLeft") prev();
    };

    const onTouchStart = (e) => {
        touchX.current = e.touches[0].clientX;
    };
    const onTouchEnd = (e) => {
        if (touchX.current === null) return;
        const dx = e.changedTouches[0].clientX - touchX.current;
        if (Math.abs(dx) > 50) (dx < 0 ? next : prev)();
        touchX.current = null;
    };

    return (
        <section id="projects" className="ufp" aria-label="Featured projects">
            <style>{CSS}</style>
            <div className="ufp-shell">
                {/* Header */}
                <div className="ufp-head">
                    <div>
                        <p className="ufp-eyebrow">
                            <span className="ufp-eyebrow-line" />
                            Featured work
                        </p>
                        <h2 className="ufp-title">
                            Building <span className="ufp-gradient">intelligent</span> platforms &amp; apps.
                        </h2>
                    </div>

                    <div className="ufp-controls">
                        <span className="ufp-counter" aria-live="polite">
                            <b>{pad(active + 1)}</b> / {pad(total)}
                        </span>
                        <button type="button" className="ufp-nav" onClick={prev} aria-label="Previous project">
                            <ArrowLeftIcon />
                        </button>
                        <button type="button" className="ufp-nav" onClick={next} aria-label="Next project">
                            <ArrowRightIcon />
                        </button>
                        <a href={VIEW_ALL_HREF} className="ufp-viewall">
                            View all projects <ArrowUpRightIcon />
                        </a>
                    </div>
                </div>

                {/* Slides */}
                <div
                    className="ufp-stage"
                    role="region"
                    aria-roledescription="carousel"
                    aria-label="Projects"
                    tabIndex={0}
                    onKeyDown={onKeyDown}
                    onMouseEnter={() => setPaused(true)}
                    onMouseLeave={() => setPaused(false)}
                    onFocus={() => setPaused(true)}
                    onBlur={() => setPaused(false)}
                    onTouchStart={onTouchStart}
                    onTouchEnd={onTouchEnd}
                >
                    {PROJECTS_DATA.map((p, i) => {
                        const isActive = i === active;
                        return (
                            <article
                                key={p.id}
                                className={`ufp-slide${isActive ? " is-active" : ""}`}
                                aria-hidden={!isActive}
                                aria-roledescription="slide"
                                aria-label={`${i + 1} of ${total}: ${p.title}`}
                            >
                                {/* Visual */}
                                <div className="ufp-visual">
                                    <div className="ufp-browser">
                                        <div className="ufp-browser-bar">
                                            <span className="ufp-dot" />
                                            <span className="ufp-dot" />
                                            <span className="ufp-dot" />
                                            <span className="ufp-url">{p.title}</span>
                                        </div>
                                        <img
                                            src={p.image}
                                            alt={`${p.title} preview`}
                                            loading={i === 0 ? "eager" : "lazy"}
                                            className="ufp-img"
                                        />
                                    </div>
                                    <span className="ufp-bignum" aria-hidden="true">
                                        {pad(i + 1)}
                                    </span>
                                </div>

                                {/* Content */}
                                <div className="ufp-content">
                                    <div className="ufp-tags">
                                        {p.tags.map((t, ti) => (
                                            <span key={t} className={`ufp-tag${ti === 0 ? " is-main" : ""}`}>
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                    <h3 className="ufp-ptitle">{p.title}</h3>
                                    <p className="ufp-desc">{p.description}</p>
                                    <div className="ufp-links">
                                        <a
                                            href={p.demo}
                                            target="_blank"
                                            rel="noreferrer"
                                            tabIndex={isActive ? 0 : -1}
                                            className="ufp-btn ufp-btn-primary"
                                        >
                                            Live demo <ArrowUpRightIcon />
                                        </a>
                                        <a
                                            href={p.github}
                                            target="_blank"
                                            rel="noreferrer"
                                            tabIndex={isActive ? 0 : -1}
                                            className="ufp-btn ufp-btn-ghost"
                                        >
                                            <GitHubIcon /> Codebase
                                        </a>
                                    </div>
                                </div>
                            </article>
                        );
                    })}
                </div>

                {/* Project tabs with autoplay progress */}
                <div className="ufp-tabs" role="tablist" aria-label="Choose a project">
                    {PROJECTS_DATA.map((p, i) => {
                        const isActive = i === active;
                        return (
                            <button
                                key={p.id}
                                type="button"
                                role="tab"
                                aria-selected={isActive}
                                onClick={() => go(i)}
                                className={`ufp-tab${isActive ? " is-active" : ""}`}
                            >
                                <span className="ufp-tab-num">{pad(i + 1)}</span>
                                <span className="ufp-tab-text">
                                    <span className="ufp-tab-title">{p.title}</span>
                                    <span className="ufp-tab-sub">{p.tags[0]}</span>
                                </span>
                                <span className="ufp-progress" aria-hidden="true">
                                    {isActive && total > 1 && (
                                        <span
                                            key={active}
                                            className="ufp-progress-fill"
                                            style={{
                                                animationDuration: `${AUTOPLAY_SECONDS}s`,
                                                animationPlayState: paused ? "paused" : "running",
                                            }}
                                            onAnimationEnd={next}
                                        />
                                    )}
                                </span>
                            </button>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

/* ---------------------------- 4. icons ----------------------------- */

function Svg({ children, size = 18 }) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
        >
            {children}
        </svg>
    );
}

function ArrowLeftIcon() {
    return (
        <Svg>
            <path d="M19 12H5M12 19l-7-7 7-7" />
        </Svg>
    );
}

function ArrowRightIcon() {
    return (
        <Svg>
            <path d="M5 12h14M12 5l7 7-7 7" />
        </Svg>
    );
}

function ArrowUpRightIcon() {
    return (
        <Svg size={16}>
            <path d="M7 17 17 7M7 7h10v10" />
        </Svg>
    );
}

function GitHubIcon() {
    return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
        </svg>
    );
}

/* ----------------------------- 5. styles --------------------------- */

const CSS = `
@import url("https://fonts.googleapis.com/css2?family=Lexend:wght@400;500;600;700&family=Nunito+Sans:wght@400;600;700&display=swap");

.ufp { padding: 40px 20px; font-family: "Nunito Sans", ui-sans-serif, system-ui, sans-serif; color: #12241c; }
.ufp *, .ufp *::before, .ufp *::after { box-sizing: border-box; }
.ufp p, .ufp h2, .ufp h3 { margin: 0; }
.ufp button { font: inherit; }

.ufp-shell {
  max-width: 1100px;
  margin: 0 auto;
  padding: 48px;
  border-radius: 32px;
  background: #ffffff;
  border: 1px solid #dce8e0;
  box-shadow: 0 1px 2px rgba(13,33,26,.04), 0 12px 32px -12px rgba(13,33,26,.12);
}

/* header */
.ufp-head { display: flex; flex-wrap: wrap; align-items: flex-end; justify-content: space-between; gap: 20px 32px; }
.ufp-eyebrow {
  display: inline-flex; align-items: center; gap: 10px;
  font-family: "Lexend", sans-serif; font-size: .72rem; font-weight: 600;
  letter-spacing: .2em; text-transform: uppercase; color: #16a34a;
}
.ufp-eyebrow-line { width: 28px; height: 2px; border-radius: 2px; background: linear-gradient(90deg, #16a34a, #4ade80); }
.ufp-title {
  margin-top: 14px !important;
  font-family: "Lexend", sans-serif; font-weight: 700; letter-spacing: -.02em;
  font-size: clamp(1.75rem, 3.4vw, 2.4rem); line-height: 1.1; color: #12241c;
}
.ufp-gradient { background: linear-gradient(120deg, #16a34a, #4ade80); -webkit-background-clip: text; background-clip: text; color: transparent; }

.ufp-controls { display: flex; align-items: center; gap: 10px; }
.ufp-counter { font-family: "Lexend", sans-serif; font-size: .9rem; color: #6b8478; margin-right: 6px; font-variant-numeric: tabular-nums; }
.ufp-counter b { color: #12241c; font-weight: 600; }
.ufp-nav {
  display: grid; place-items: center; width: 42px; height: 42px; border-radius: 999px;
  border: 1px solid #dce8e0; background: #fff; color: #12241c; cursor: pointer;
  transition: border-color .2s, color .2s, background .2s, transform .2s;
}
.ufp-nav:hover { border-color: #16a34a; color: #16a34a; background: #e7f6ec; }
.ufp-nav:active { transform: scale(.94); }
.ufp-viewall {
  display: inline-flex; align-items: center; gap: 6px; margin-left: 10px;
  font-family: "Lexend", sans-serif; font-size: .9rem; font-weight: 600; color: #12241c; text-decoration: none;
  transition: color .2s;
}
.ufp-viewall:hover { color: #16a34a; }

/* stage */
.ufp-stage { display: grid; margin-top: 32px; border-radius: 24px; outline: none; }
.ufp-stage:focus-visible { box-shadow: 0 0 0 3px rgba(22,163,74,.35); }
.ufp-slide {
  grid-area: 1 / 1;
  display: grid; grid-template-columns: 1.08fr 1fr; align-items: stretch;
  border-radius: 24px; overflow: hidden; border: 1px solid #dce8e0; background: #f6faf7;
  opacity: 0; visibility: hidden; transform: translateX(24px);
  transition: opacity .5s ease, transform .5s ease, visibility 0s linear .5s;
}
.ufp-slide.is-active { opacity: 1; visibility: visible; transform: none; transition: opacity .5s ease, transform .5s ease; }

/* visual side — dark panel to match the Contact section */
.ufp-visual {
  position: relative; display: flex; align-items: center; justify-content: center;
  padding: 40px 36px; min-height: 340px; overflow: hidden;
  background-color: #10231c;
  background-image:
    radial-gradient(70% 70% at 100% 0%, rgba(22,163,74,.40), transparent 60%),
    radial-gradient(50% 60% at 0% 100%, rgba(74,222,128,.20), transparent 70%),
    linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px);
  background-size: 100% 100%, 100% 100%, 36px 36px, 36px 36px;
}
.ufp-browser {
  position: relative; z-index: 1; width: 100%;
  border-radius: 14px; overflow: hidden; background: #1b3329;
  border: 1px solid rgba(255,255,255,.12);
  box-shadow: 0 30px 60px -20px rgba(0,0,0,.55), 0 0 0 6px rgba(255,255,255,.04);
  transform: rotate(-1.5deg);
  transition: transform .5s ease;
}
.ufp-stage:hover .ufp-browser { transform: rotate(0deg) translateY(-4px); }
.ufp-browser-bar { display: flex; align-items: center; gap: 6px; padding: 10px 12px; background: #1b3329; border-bottom: 1px solid rgba(255,255,255,.08); }
.ufp-dot { width: 9px; height: 9px; border-radius: 99px; background: rgba(255,255,255,.22); }
.ufp-dot:first-child { background: #4ade80; }
.ufp-url {
  flex: 1; min-width: 0; margin-left: 8px; padding: 4px 10px; border-radius: 6px;
  background: rgba(255,255,255,.07); color: #a8c4b5; font-size: .72rem;
  white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
}
.ufp-img { display: block; width: 100%; aspect-ratio: 16 / 10; object-fit: cover; }
.ufp-bignum {
  position: absolute; right: 18px; bottom: -14px; z-index: 0;
  font-family: "Lexend", sans-serif; font-weight: 700; font-size: 7.5rem; line-height: 1;
  color: transparent; -webkit-text-stroke: 1px rgba(255,255,255,.16);
  pointer-events: none; user-select: none;
}

/* content side */
.ufp-content { display: flex; flex-direction: column; justify-content: center; padding: 40px 40px 40px 36px; min-width: 0; }
.ufp-tags { display: flex; flex-wrap: wrap; gap: 8px; }
.ufp-tag {
  padding: 4px 11px; border-radius: 999px; font-size: .76rem; font-weight: 600;
  border: 1px solid #dce8e0; background: #fff; color: #5b7468;
}
.ufp-tag.is-main { border-color: rgba(22,163,74,.4); background: #e7f6ec; color: #166534; }
.ufp-ptitle {
  margin-top: 18px !important;
  font-family: "Lexend", sans-serif; font-weight: 600; letter-spacing: -.02em;
  font-size: clamp(1.35rem, 2.2vw, 1.7rem); line-height: 1.2; color: #12241c;
}
.ufp-desc { margin-top: 14px !important; font-size: .98rem; line-height: 1.7; color: #5b7468; }
.ufp-links { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 26px; }
.ufp-btn {
  display: inline-flex; align-items: center; gap: 8px; height: 44px; padding: 0 18px;
  border-radius: 12px; font-family: "Lexend", sans-serif; font-size: .88rem; font-weight: 600;
  text-decoration: none; transition: transform .2s, box-shadow .2s, border-color .2s, color .2s, filter .2s;
}
.ufp-btn-primary {
  color: #f5fdf8; background: linear-gradient(120deg, #16a34a, #4ade80);
  box-shadow: 0 10px 30px -10px rgba(22,163,74,.6);
}
.ufp-btn-primary:hover { transform: translateY(-2px); filter: brightness(1.05); }
.ufp-btn-ghost { color: #12241c; background: #fff; border: 1px solid #dce8e0; }
.ufp-btn-ghost:hover { border-color: #16a34a; color: #16a34a; }

/* tabs */
.ufp-tabs { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 12px; margin-top: 16px; }
.ufp-tab {
  position: relative; display: flex; align-items: center; gap: 14px; overflow: hidden;
  padding: 14px 16px 16px; border-radius: 16px; text-align: left; cursor: pointer;
  border: 1px solid #dce8e0; background: #fff; color: #12241c;
  transition: border-color .2s, background .2s;
}
.ufp-tab:hover { border-color: rgba(22,163,74,.4); }
.ufp-tab.is-active { border-color: rgba(22,163,74,.45); background: #f3fbf6; }
.ufp-tab-num {
  display: grid; place-items: center; flex-shrink: 0; width: 36px; height: 36px; border-radius: 10px;
  font-family: "Lexend", sans-serif; font-size: .8rem; font-weight: 600;
  background: #f1f5f2; color: #6b8478; transition: background .2s, color .2s;
}
.ufp-tab.is-active .ufp-tab-num { background: #16a34a; color: #f5fdf8; }
.ufp-tab-text { display: flex; flex-direction: column; min-width: 0; }
.ufp-tab-title { font-family: "Lexend", sans-serif; font-size: .88rem; font-weight: 600; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.ufp-tab-sub { font-size: .76rem; color: #6b8478; }
.ufp-progress { position: absolute; left: 0; right: 0; bottom: 0; height: 3px; background: transparent; }
.ufp-progress-fill {
  display: block; height: 100%; width: 100%; transform-origin: left;
  background: linear-gradient(90deg, #16a34a, #4ade80);
  animation-name: ufp-fill; animation-timing-function: linear; animation-fill-mode: forwards;
}
@keyframes ufp-fill { from { transform: scaleX(0); } to { transform: scaleX(1); } }

/* responsive */
@media (max-width: 900px) {
  .ufp-shell { padding: 32px; }
  .ufp-slide { grid-template-columns: 1fr; }
  .ufp-visual { min-height: 0; padding: 32px 28px 36px; }
  .ufp-content { padding: 28px; }
}
@media (max-width: 560px) {
  .ufp { padding: 24px 14px; }
  .ufp-shell { padding: 22px 18px; border-radius: 24px; }
  .ufp-controls { width: 100%; }
  .ufp-viewall { margin-left: auto; }
  .ufp-visual { padding: 24px 18px 28px; }
  .ufp-bignum { font-size: 5rem; }
  .ufp-content { padding: 22px 20px 24px; }
  .ufp-btn { flex: 1; justify-content: center; }
  .ufp-tabs { display: flex; overflow-x: auto; scroll-snap-type: x mandatory; padding-bottom: 4px; }
  .ufp-tab { flex: 0 0 82%; scroll-snap-align: start; }
}

@media (prefers-reduced-motion: reduce) {
  .ufp-slide, .ufp-browser, .ufp-btn, .ufp-nav { transition: none !important; }
  .ufp-slide { transform: none; }
  .ufp-progress-fill { animation: none; transform: scaleX(1); opacity: .35; }
}
`;