// components.jsx — building blocks for the portfolio.
// Shared to window at the bottom so app.jsx can use them.
const { useState, useEffect, useRef } = React;

/* ----------------------------------------------------------------
   Striped placeholder — stands in for real work. Drag an image over
   it later, or replace the <Placeholder> with an <img>.
----------------------------------------------------------------- */
function Placeholder({ label, ratio = "4 / 5", index = 0 }) {
  // subtle hue rotation per index so a grid of them isn't monotone
  const sw = 8;
  return (
    <div
      className="ph"
      style={{ aspectRatio: ratio }}
      role="img"
      aria-label={"Placeholder: " + label}
    >
      <svg className="ph__stripes" width="100%" height="100%" preserveAspectRatio="none">
        <defs>
          <pattern id={"st" + index} width={sw * 2} height={sw * 2} patternTransform="rotate(45)" patternUnits="userSpaceOnUse">
            <rect width={sw * 2} height={sw * 2} fill="var(--ph-bg)" />
            <rect width={sw} height={sw * 2} fill="var(--ph-line)" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={"url(#st" + index + ")"} />
      </svg>
      <span className="ph__tag">{label}</span>
    </div>
  );
}

/* ----------------------------------------------------------------
   Top navigation
----------------------------------------------------------------- */
function Nav({ name, onNav }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className={"nav" + (scrolled ? " nav--scrolled" : "")}>
      <button className="nav__brand" onClick={() => onNav("top")}>
        <span className="nav__mark">✸</span>
        <span className="nav__name">{name}</span>
      </button>
      <nav className="nav__links">
        <button onClick={() => onNav("work")}>Trabajos</button>
        <button onClick={() => onNav("about")}>Sobre mí</button>
        <button onClick={() => onNav("contact")} className="nav__cta">Contacto</button>
      </nav>
    </header>
  );
}

/* ----------------------------------------------------------------
   Hero — big editorial statement
----------------------------------------------------------------- */
function Hero({ d, onNav }) {
  return (
    <section className="hero" id="top">
      <div className="hero__meta">
        <span className="mono">{d.location}</span>
        <span className="mono">Índice ↓</span>
      </div>
      <h1 className="hero__title">
        <span className="hero__name">{d.name}</span>
      </h1>
      <div className="hero__bottom">
        <p className="hero__role">{d.role}</p>
        <p className="hero__intro">{d.intro}</p>
      </div>
      <button className="hero__scroll" onClick={() => onNav("work")}>
        <span className="mono">Ver trabajos</span>
        <span className="hero__arrow">↓</span>
      </button>
    </section>
  );
}

/* ----------------------------------------------------------------
   Work gallery with category filter
----------------------------------------------------------------- */
function Gallery({ projects, onOpen }) {
  const cats = ["Todos", ...Array.from(new Set(projects.map((p) => p.category)))];
  const [active, setActive] = useState("Todos");
  const shown = active === "Todos" ? projects : projects.filter((p) => p.category === active);

  return (
    <section className="work" id="work">
      <div className="work__head">
        <h2 className="section-title">
          <span className="section-title__idx mono">01</span>
          Trabajos seleccionados
        </h2>
        <div className="filters">
          {cats.map((c) => (
            <button
              key={c}
              className={"filter" + (active === c ? " filter--on" : "")}
              onClick={() => setActive(c)}
            >
              {c}
              <span className="filter__count mono">
                {c === "Todos" ? projects.length : projects.filter((p) => p.category === c).length}
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className="grid">
        {shown.map((p, i) => (
          <ProjectCard key={p.id} p={p} index={i} onOpen={() => onOpen(p)} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ p, index, onOpen }) {
  const num = String(index + 1).padStart(2, "0");
  return (
    <article className={"card card--" + (index % 5)} onClick={onOpen}>
      <div className="card__media">
        <Placeholder label={p.slots[0]} ratio={p.ratio} index={index} />
        <div className="card__overlay">
          <span className="card__view mono">Ver proyecto →</span>
        </div>
      </div>
      <div className="card__meta">
        <div className="card__line">
          <span className="card__num mono">{num}</span>
          <h3 className="card__title">{p.title}</h3>
        </div>
        <div className="card__line card__line--sub">
          <span className="card__cat mono">{p.category}</span>
          <span className="card__year mono">{p.year}</span>
        </div>
      </div>
    </article>
  );
}

/* ----------------------------------------------------------------
   Lightbox / project detail
----------------------------------------------------------------- */
function Lightbox({ p, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  if (!p) return null;
  return (
    <div className="lb" onClick={onClose}>
      <div className="lb__panel" onClick={(e) => e.stopPropagation()}>
        <button className="lb__close" onClick={onClose} aria-label="Cerrar">✕</button>
        <div className="lb__inner">
          <header className="lb__head">
            <span className="mono lb__cat">{p.category} · {p.year}</span>
            <h2 className="lb__title">{p.title}</h2>
            <p className="lb__client mono">{p.client}</p>
            <p className="lb__blurb">{p.blurb}</p>
            <div className="lb__tags">
              {p.tags.map((t) => (
                <span key={t} className="tag mono">{t}</span>
              ))}
            </div>
          </header>
          <div className="lb__media">
            {p.slots.map((s, i) => (
              <Placeholder key={i} label={s} ratio={i === 0 ? p.ratio : "16 / 10"} index={i + 20} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ----------------------------------------------------------------
   About
----------------------------------------------------------------- */
function About({ d }) {
  return (
    <section className="about" id="about">
      <h2 className="section-title">
        <span className="section-title__idx mono">02</span>
        Sobre mí
      </h2>
      <div className="about__grid">
        <div className="about__portrait">
          <Placeholder label="Retrato / foto" ratio="3 / 4" index={9} />
        </div>
        <div className="about__body">
          <p className="about__lead">{d.about}</p>
          <div className="about__cols">
            <div>
              <h4 className="mono about__sub">Servicios</h4>
              <ul className="about__list">
                {d.services.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="mono about__sub">Clientes</h4>
              <ul className="about__list">
                {d.clients.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------
   Contact + footer
----------------------------------------------------------------- */
function Contact({ d }) {
  return (
    <section className="contact" id="contact">
      <span className="section-title__idx mono">03</span>
      <h2 className="contact__big">
        ¿Trabajamos<br />juntos?
      </h2>
      <a className="contact__mail" href="mailto:hola@tudominio.com">hola@tudominio.com</a>
      <div className="contact__links">
        <a href="#" className="mono">Instagram ↗</a>
        <a href="#" className="mono">Behance ↗</a>
        <a href="#" className="mono">LinkedIn ↗</a>
      </div>
      <footer className="footer">
        <span className="mono">© 2026 {d.name}</span>
        <span className="mono">Diseñado con cuidado</span>
      </footer>
    </section>
  );
}

Object.assign(window, {
  Placeholder, Nav, Hero, Gallery, ProjectCard, Lightbox, About, Contact,
});
