// sections2.jsx — nav, hero, folder slider, projects, about, contact.
const { useState: useSec, useEffect: useEf, useRef: useRf } = React;

/* ---------- dark placeholder ---------- */
function PH({ label, ratio = "4 / 5", i = 0 }) {
  return (
    <div className="ph2" style={{ aspectRatio: ratio }} role="img" aria-label={label}>
      <svg className="ph2__s" width="100%" height="100%" preserveAspectRatio="none">
        <defs>
          <pattern id={"d" + i} width="16" height="16" patternTransform="rotate(45)" patternUnits="userSpaceOnUse">
            <rect width="16" height="16" fill="var(--ph2-bg)" />
            <rect width="8" height="16" fill="var(--ph2-line)" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={"url(#d" + i + ")"} />
      </svg>
      <span className="ph2__tag">{label}</span>
    </div>
  );
}

/* ---------- nav ---------- */
function Nav2({ d, onNav }) {
  const [sc, setSc] = useSec(false);
  useEf(() => {
    const f = () => setSc(window.scrollY > 30);
    window.addEventListener("scroll", f, { passive: true });
    return () => window.removeEventListener("scroll", f);
  }, []);
  return (
    <header className={"nav2" + (sc ? " nav2--sc" : "")}>
      <button className="nav2__brand" onClick={() => onNav("top")}>
        <span className="nav2__dot" /> {d.name}
      </button>
      <span className="nav2__mid mono2">{d.handle}</span>
      <nav className="nav2__links">
        <button onClick={() => onNav("work")}>Trabajos</button>
        <button onClick={() => onNav("about")}>Sobre mí</button>
        <button className="nav2__cta" onClick={() => onNav("contact")}>Contacto</button>
      </nav>
    </header>
  );
}

/* ---------- hero ---------- */
function Hero2({ d, onNav, onFilter }) {
  return (
    <section className="hero2" id="top">
      <StickerLayer onFilter={onFilter} />
      <div className="hero2__inner">
        <span className="hero2__eyebrow mono2">Portfolio · Vol. 1 · 2025</span>
        <h1 className="hero2__name">
          {d.name.split(" ").map((w, i) => (
            <span className="hero2__word" style={{ "--i": i }} key={i}>{w}</span>
          ))}
        </h1>
        <p className="hero2__role">{d.role}</p>
      </div>
      <button className="hero2__scroll mono2" onClick={() => onNav("services")}>
        Explorá los servicios ↓
      </button>
    </section>
  );
}

/* ---------- folder ---------- */
function Folder({ s, onClick }) {
  return (
    <button className="folder" style={{ "--fc": s.color }} onClick={() => onClick(s.id)}>
      <span className="folder__tab">{s.short}</span>
      <span className="folder__body">
        <span className="folder__label">{s.label}</span>
        <span className="folder__desc">{s.desc}</span>
        <span className="folder__open mono2">Abrir carpeta →</span>
      </span>
    </button>
  );
}

/* ---------- folders (static grid: 4 fixed) ---------- */
function FolderSlider({ services, onOpen }) {
  return (
    <section className="services" id="services">
      <div className="services__head">
        <h2 className="sec-h">
          <span className="sec-h__n mono2">( 01 )</span> Servicios
        </h2>
        <span className="mono2 services__hint">Tocá una carpeta para abrirla</span>
      </div>
      <div className="services__grid">
        {services.map((s) => (
          <Folder key={s.id} s={s} onClick={onOpen} />
        ))}
      </div>
    </section>
  );
}

/* ---------- projects (CSS marquee + drag + arrows) ---------- */
function Projects({ d, auto }) {
  const vpRef = useRf(null);
  const trackRef = useRf(null);
  const dragState = useRf({ down: false, moved: 0, sx: 0, baseX: 0 });
  const feat = d.projects.filter((p) => p.feat);
  const shown = [...feat, ...feat]; // duplicate for seamless loop
  const GAP = 28;

  const getX = () => {
    const t = getComputedStyle(trackRef.current).transform;
    if (!t || t === "none") return 0;
    try { return new DOMMatrixReadOnly(t).m41; } catch (e) { return 0; }
  };
  const periodPx = () => {
    const tr = trackRef.current;
    const N = feat.length;
    const cards = tr.children;
    if (cards.length > N) return cards[N].offsetLeft - cards[0].offsetLeft; // padding-agnostic
    return (tr.scrollWidth - GAP) / 2;
  };
  // resume the infinite CSS animation seamlessly from position x (px, <=0)
  const resumeFrom = (x) => {
    const tr = trackRef.current;
    const P = periodPx();
    let nx = x % P; if (nx > 0) nx -= P; // (-P, 0]
    const D = parseFloat(getComputedStyle(tr).animationDuration) || 55;
    const f = P ? -nx / P : 0; // 0..1
    tr.style.transition = "none";
    tr.style.transform = "";
    tr.style.animation = "none";
    void tr.offsetWidth; // reflow
    tr.style.animation = "";
    tr.style.animationDelay = (-(f * D)) + "s";
  };

  // set loop period + duration once laid out (and after images load / resize)
  useEf(() => {
    const tr = trackRef.current;
    if (!tr) return;
    const apply = () => {
      const N = feat.length;
      const cards = tr.children;
      const P = cards.length > N ? (cards[N].offsetLeft - cards[0].offsetLeft) : (tr.scrollWidth - GAP) / 2;
      tr.style.setProperty("--period", P + "px");
      tr.style.setProperty("--rail-dur", Math.max(24, P / 36) + "s");
    };
    apply();
    const ro = new ResizeObserver(apply);
    ro.observe(tr);
    tr.querySelectorAll("img").forEach((im) => { if (!im.complete) im.addEventListener("load", apply, { once: true }); });
    return () => ro.disconnect();
  }, []);

  const onPointerDown = (e) => {
    const tr = trackRef.current;
    const s = dragState.current;
    s.down = true; s.moved = 0; s.sx = e.clientX; s.baseX = getX();
    tr.style.transition = "none";
    tr.style.animation = "none";
    tr.style.transform = "translateX(" + s.baseX + "px)";
    const move = (ev) => {
      if (!s.down) return;
      s.moved += Math.abs(ev.movementX || 0);
      tr.style.transform = "translateX(" + (s.baseX + (ev.clientX - s.sx)) + "px)";
    };
    const up = () => {
      s.down = false;
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);
      resumeFrom(getX());
    };
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", up);
  };

  const nudge = (dir) => {
    const tr = trackRef.current;
    const card = tr.querySelector(".card2");
    const step = (card ? card.offsetWidth : 420) + GAP;
    const to = getX() - dir * step;
    tr.style.animation = "none";
    tr.style.transition = "transform .5s cubic-bezier(.2,.7,.2,1)";
    tr.style.transform = "translateX(" + to + "px)";
    window.clearTimeout(tr.__nudgeT);
    tr.__nudgeT = window.setTimeout(() => { tr.style.transition = "none"; resumeFrom(getX()); }, 520);
  };

  return (
    <section className="work2" id="work">
      <div className="work2__head">
        <h2 className="sec-h">
          <span className="sec-h__n mono2">( 02 )</span> Proyectos destacados
        </h2>
        <span className="work2__hint mono2">Arrastrá o usá las flechas</span>
      </div>

      <div className="rail-vp" ref={vpRef} data-auto={auto ? "on" : "off"}>
        <div className="rail-track" ref={trackRef} onPointerDown={onPointerDown}>
          {shown.map((p, i) => {
            const svc2 = d.services.find((s) => s.id === p.service);
            const hasPage = p.media && p.media.length;
            const media = (
              <div className="card2__media">
                {p.cover
                  ? <img className="card2__img" src={p.cover} alt={p.title} loading="lazy" draggable="false" />
                  : <PH label={p.slot} ratio="3 / 2" i={i} />}
                {hasPage && <span className="card2__open mono2">Ver proyecto →</span>}
              </div>
            );
            const meta = (
              <div className="card2__meta">
                <h3 className="card2__title">{p.title}</h3>
                <div className="card2__sub">
                  <span className="tag2" style={{ "--fc": svc2.color }}>{svc2.short}</span>
                  <span className="mono2">{p.year}</span>
                </div>
              </div>
            );
            return hasPage ? (
              <a className="card2 card2--link" key={p.id + i} href={"proyecto.html?p=" + p.id} style={{ "--fc": svc2.color }} onClick={(e) => { if (dragState.current.moved > 6) e.preventDefault(); }} draggable="false">
                {media}{meta}
              </a>
            ) : (
              <article className="card2" key={p.id + i} style={{ "--fc": svc2.color }}>
                {media}{meta}
              </article>
            );
          })}
        </div>
      </div>

      <div className="arrows">
        <button className="arrow" onClick={() => nudge(-1)} aria-label="Anterior">←</button>
        <button className="arrow" onClick={() => nudge(1)} aria-label="Siguiente">→</button>
      </div>
    </section>
  );
}

/* ---------- about ---------- */
function About2({ d }) {
  return (
    <section className="about2" id="about">
      <span className="sec-h__n mono2">( 03 ) Sobre mí</span>
      <div className="about2__grid">
        <div className="about2__photo">
          <img src="assets/facu.jpg" alt="Facu Peres" loading="lazy" />
          <span className="about2__cap mono2">Facu Peres · 2025</span>
        </div>
        <div className="about2__col">
          <p className="about2__lead">{d.about}</p>
          <ul className="about2__tags">
            {d.services.map((s) => (
              <li key={s.id} style={{ "--fc": s.color }}>{s.label}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ---------- contact ---------- */
function Contact2({ d }) {
  return (
    <section className="contact2" id="contact">
      <span className="sec-h__n mono2">( 04 ) Contacto</span>
      <h2 className="contact2__big">Hagamos algo<br /><em>juntos.</em></h2>
      <a className="contact2__mail" href={"mailto:" + d.email}>{d.email}</a>
      <div className="contact2__links">
        {d.socials.map((s) => (
          <a key={s.label} href={s.url} className="mono2">{s.label} ↗</a>
        ))}
      </div>
      <footer className="footer2 mono2">
        <span>© 2026 {d.name}</span>
        <span>{d.handle}</span>
      </footer>
    </section>
  );
}

Object.assign(window, { PH, Nav2, Hero2, Folder, FolderSlider, Projects, About2, Contact2 });
